import { useEffect, useRef, useState } from 'react'
export const asset = (p) => (p.startsWith('http') ? p : import.meta.env.BASE_URL + p)

export function useInView(th = 0.3) {
  const ref = useRef(null); const [seen, setSeen] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), o.disconnect()), { threshold: th })
    ref.current && o.observe(ref.current); return () => o.disconnect()
  }, [th]); return [ref, seen]
}
export const Section = ({ id, cls = '', title, children }) => (
  <section id={id} className={`sec ${cls}`}><div className="wrap">{title && <h2 className="h2">{title}</h2>}{children}</div></section>
)
export const Sticker = ({ children, color = '#FFD84D', rot = -6, style }) => (
  <span className="sticker" style={{ background: color, transform: `rotate(${rot}deg)`, ...style }}>{children}</span>
)
export const Marquee = ({ items }) => (
  <div className="marquee"><div className="track">{[...items, ...items, ...items, ...items].map((t, i) => <span key={i}>{t}<i>✺</i></span>)}</div></div>
)
export function Ring({ current, total, color }) {
  const [ref, seen] = useInView(); const r = 52, c = 2 * Math.PI * r
  const pct = Math.round((current / total) * 100)
  return (
    <svg ref={ref} viewBox="0 0 130 130" className="ring" role="img" aria-label={`${pct}% complete`}>
      <circle cx="65" cy="65" r={r} fill="none" stroke="#1B174022" strokeWidth="14" />
      <circle cx="65" cy="65" r={r} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={seen ? c * (1 - current / total) : c} transform="rotate(-90 65 65)" style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(.2,.8,.2,1)' }} />
      <text x="65" y="72" textAnchor="middle" className="ringtxt">{pct}%</text>
    </svg>
  )
}
export function Lightbox({ items, index, onClose, onNav }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' ? onClose() : e.key === 'ArrowRight' ? onNav(1) : e.key === 'ArrowLeft' && onNav(-1)
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose, onNav])
  if (index === null) return null
  const it = items[index]; let x0 = 0
  return (
    <div className="lb" role="dialog" aria-modal="true" onClick={onClose} onTouchStart={(e) => (x0 = e.touches[0].clientX)} onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - x0; Math.abs(d) > 50 && onNav(d < 0 ? 1 : -1) }}>
      <button className="lbb close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lbb prev" onClick={(e) => { e.stopPropagation(); onNav(-1) }} aria-label="Previous">‹</button>
      <img src={asset(it.src)} alt={it.caption} onClick={(e) => e.stopPropagation()} />
      <button className="lbb next" onClick={(e) => { e.stopPropagation(); onNav(1) }} aria-label="Next">›</button>
      <p>{it.caption} · {index + 1}/{items.length}</p>
    </div>
  )
}
