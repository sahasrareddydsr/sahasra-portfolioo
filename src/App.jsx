import { useEffect, useState, useCallback } from 'react'
import { profile, philosophy, achievements, notes, journey, project, resources, reflection, starsEarned } from './portfolioData.js'
import { asset, Section, Sticker, Marquee, Ring, Lightbox, useInView } from './components.jsx'

const NAV = [['stars', 'Stars Earned'], ['philosophy', 'Language'], ['achievements', 'Wins'], ['notebook', 'Notebook'], ['verse', 'The Verse'], ['lab', 'NLP Lab'], ['journey', 'Journey'], ['project', 'CrisisBridge'], ['final-review', 'Final Review'], ['resources', 'Resources'], ['reflection', 'Reflection']]
const totalStars = starsEarned.reduce((sum, item) => sum + item.stars, 0)
const StarMarks = ({ count }) => <span className="star-marks" aria-label={`${count} stars earned`}>{'★'.repeat(count)}</span>


function NlpLabs() {
  const [sentence, setSentence] = useState('I love Natural Language Processing.')
  const [wordA, setWordA] = useState('kitten')
  const [wordB, setWordB] = useState('sitting')
  const tokens = sentence.trim().split(/\\s+/).filter(Boolean)
  const distance = (() => { const d=Array.from({length:wordA.length+1},()=>Array(wordB.length+1).fill(0)); for(let i=0;i<=wordA.length;i++)d[i][0]=i; for(let j=0;j<=wordB.length;j++)d[0][j]=j; for(let i=1;i<=wordA.length;i++)for(let j=1;j<=wordB.length;j++)d[i][j]=wordA[i-1]===wordB[j-1]?d[i-1][j-1]:1+Math.min(d[i-1][j],d[i][j-1],d[i-1][j-1]); return {d,value:d[wordA.length][wordB.length]} })()
  const examples=[['Apple announced a new product in London.','Apple: ORGANIZATION · London: LOCATION'],['Maya works at Google in Bengaluru.','Maya: PERSON · Google: ORGANIZATION · Bengaluru: LOCATION']]
  const [ner,setNer]=useState(0)
  const [sense,setSense]=useState('river')
  return <div className="lab-grid">
    <article className="lab-card"><small>01 / TOKENIZATION</small><h3>Split text into tokens</h3><input value={sentence} onChange={e=>setSentence(e.target.value)} aria-label="Text to tokenize"/><div className="token-row">{tokens.map((t,i)=><span key={i}>{t}</span>)}</div><b>{tokens.length} tokens</b></article>
    <article className="lab-card"><small>02 / POS TAGGING</small><h3>Parts of speech</h3><p>Example sentence: <b>John eats an apple.</b></p><div className="pos-row">{[['John','PROPER NOUN'],['eats','VERB'],['an','DETERMINER'],['apple','NOUN']].map(([w,t])=><span key={w}><b>{w}</b><small>{t}</small></span>)}</div><p className="lab-foot">Illustrative tags for the example sentence.</p></article>
    <article className="lab-card"><small>03 / MINIMUM EDIT DISTANCE <StarMarks count={1} /></small><h3>Compare two words</h3><div className="word-inputs"><input value={wordA} onChange={e=>setWordA(e.target.value)} aria-label="First word"/><input value={wordB} onChange={e=>setWordB(e.target.value)} aria-label="Second word"/></div><div className="matrix-wrap"><table className="matrix"><tbody>{distance.d.map((row,i)=><tr key={i}>{row.map((v,j)=><td key={j}>{v}</td>)}</tr>)}</tbody></table></div><b>Minimum edit distance: {distance.value}</b><p className="lab-foot">Insertion, deletion and substitution each cost 1.</p></article>
    <article className="lab-card"><small>04 / NAMED ENTITY RECOGNITION</small><h3>Identify entities</h3><select value={ner} onChange={e=>setNer(Number(e.target.value))}><option value="0">Example 1</option><option value="1">Example 2</option></select><p className="ner-example">{examples[ner][0]}</p><b>{examples[ner][1]}</b><p className="lab-foot">Rule-based illustrative example, not model inference.</p></article>
    <article className="lab-card"><small>05 / WORD SENSE DISAMBIGUATION</small><h3>Meaning depends on context</h3><select value={sense} onChange={e=>setSense(e.target.value)}><option value="river">The bank was beside the river.</option><option value="money">She deposited money in the bank.</option></select><div className="sense-result"><b>bank</b><span>{sense==='river'?'RIVER BANK — land beside a river':'FINANCIAL BANK — an institution that holds money'}</span></div><p className="lab-foot">The surrounding words help determine the intended meaning.</p></article>
  </div>
}

export default function App() {
  const [lb, setLb] = useState(null); const [active, setActive] = useState(''); const [prog, setProg] = useState(0); const [reviewSlide, setReviewSlide] = useState(0)
  const nav = useCallback((d) => setLb((i) => (i + d + notes.length) % notes.length), [])
  const close = useCallback(() => setLb(null), [])
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const s = () => { const h = document.documentElement; setProg(window.scrollY / (h.scrollHeight - h.clientHeight)) }
    window.addEventListener('scroll', s, { passive: true })
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('section[id]').forEach((n) => o.observe(n))
    return () => { window.removeEventListener('scroll', s); o.disconnect() }
  }, [])
  const [jref, jseen] = useInView(0.2)
  return (
    <>
      <div className="bar" style={{ transform: `scaleX(${prog})` }} />
      <header className="nav"><a href="#top" className="logo">SRD✺</a>
        <nav>{NAV.map(([id, l]) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{l}</a>)}</nav></header>

      <section id="top" className="hero" onMouseMove={(e) => setMouse({ x: e.clientX / innerWidth - 0.5, y: e.clientY / innerHeight - 0.5 })}>
        <div className="wrap herogrid">
          <div>
            <p className="hello">hi, i’m</p>
            <h1 className="name"><span>Sahasra</span><span>Reddy</span><span>Dondapati</span></h1>
            <p className="tag">{profile.tagline}</p>
            <div className="chips"><Sticker color="#FFD84D" rot={-3}>{profile.regNo}</Sticker><Sticker color="#fff" rot={2}>{profile.institution}</Sticker><Sticker color="#B8F2E6" rot={-1}>{profile.course}</Sticker><Sticker color="#FFD84D" rot={2}>★ {totalStars} stars earned</Sticker></div>
          </div>
          <div className="photo" style={{ transform: `translate(${mouse.x * -18}px,${mouse.y * -18}px) rotate(${3 + mouse.x * 4}deg)` }}>
            <img src={asset(profile.photo)} alt={`${profile.name} profile`} />
            <Sticker color="#FF4F9A" rot={12} style={{ position: 'absolute', top: -18, right: -14 }}>NLP ♥</Sticker>
            <Sticker color="#2B3BFF" rot={-8} style={{ position: 'absolute', bottom: -14, left: -16, color: '#fff' }}>VIT ’23</Sticker>
          </div>
        </div>
        <Marquee items={['Tokenize', 'Parse', 'Embed', 'Generate', 'Understand', 'Translate']} />
      </section>

      <Section id="stars" cls="stars-section" title="Stars Earned">
        <p className="lead">A little record of the work, ideas and learning milestones completed.</p>
        <div className="stars-total"><strong>{totalStars}</strong><span>STARS EARNED</span><div aria-hidden="true">{'★'.repeat(totalStars)}</div></div>
        <div className="stars-list">{starsEarned.map((item) => <article className="star-row" key={item.title}><span>{item.title}</span><StarMarks count={item.stars} /></article>)}</div>
      </Section>

      <Section id="philosophy" cls="phil" title={<>What does language mean to you? <StarMarks count={1} /></>}>
        <blockquote className="quote"><span className="qm">“</span>{philosophy.answer}</blockquote>
        <div className="terms"><h3>{philosophy.keyTermsQuestion} <StarMarks count={1} /></h3><div className="chips">{philosophy.keyTerms.map((t, i) => <Sticker key={t} color={['#fff', '#FF4F9A', '#B8F2E6', '#fff', '#FFB800'][i % 5]} rot={[-2, 2, -1, 1.5, -2.5][i % 5]}>{t}</Sticker>)}</div></div>
      </Section>

      <Section id="achievements" cls="ach" title="Achievements">
        <div className="achgrid">{achievements.map((a, i) => (
          <article className="card ach-card" key={a.name} style={{ '--c': a.color, transform: `rotate(${[-1.5, 1, -.5, 1.5][i % 4]}deg)` }}>
            <img className="badge" src={asset(a.image)} alt={`${a.name} ${a.level} badge`} /><Ring current={a.current} total={a.total} color={a.color} />
            <h3>{a.name}</h3><p className="lvl">{a.level} · {a.desc}</p>
            <p className="big">{a.current.toLocaleString()}<small> / {a.total.toLocaleString()}</small></p>
          </article>))}</div>
      </Section>

      <Section id="notebook" cls="nb" title="NLP Notebook">
        <p className="lead">My original handwritten notes. Tap any page to enlarge.</p>
        <div className="masonry">{notes.map((n, i) => (
          <button key={n.src} className="note" onClick={() => setLb(i)} style={{ '--r': `${[-1.2, .8, -.4, 1.1][i % 4]}deg` }} aria-label={`Open ${n.caption}`}>
            <img src={asset(n.src)} alt={n.caption} loading="lazy" /><span>{n.caption}{n.src.includes("note-02") && <StarMarks count={3} />}</span></button>))}</div>
      </Section>

      <Section id="verse" cls="verse" title="The Verse — Beyond Words">
        <p className="lead">A study of how translation carries meaning, culture, devotion and philosophy across languages.</p>
        <div className="verse-meta">
          <span><b>Song</b> Entha Mathramuna Evvaru Talachina</span>
          <span><b>Poet & lyricist</b> Sri Tallapaka Annamacharya (1408–1503)</span>
          <span><b>Ragam</b> Bouli</span>
        </div>
        <div className="full-verse">
          <div className="verse-original">
            <p className="eyebrow">ORIGINAL TELUGU LYRICS</p>
            <h3>ఎంత మాత్రమున ఎవ్వరు తలచిన</h3>
            <p>ఎంత మాత్రమున ఎవ్వరు తలచిన, అంతమాత్రమే నీవు<br />అంతరాంతరములెంచి చూడ, పిండంతే నిప్పటి అన్నట్లు ॥</p>
            <p>కొలుతురు మిము వైష్ణవులు, కూరిమితో విష్ణుడని<br />పలుకుదురు మిము వేదాంతులు, పరబ్రహ్మంబనుచు ।<br />తలతురు మిము శైవులు, తగిన భక్తులునూ శివుడనుచు<br />అలరి పొగడుదురు కాపాలికులు, ఆది భైరవుడనుచు ।</p>
            <p>సరి మిమ్ముదురు సాక్తేయులు, శక్తి రూపు నీవనుచు<br />దరిశనములు మిము నానా విధులను, తలుపుల కొలదుల భజింతురు ।<br />సిరుల మిమునే అల్పబుద్ది, తలచినవారికి అల్పంబగుదవు<br />దరిమల మిమునే ఘనమని తలచిన, ఘనబుద్ధులకు ఘనుడవు ॥</p>
            <p>నీవలన కొరతే లేదు మరి నీరు కొలది తామరవు<br />ఆవల భాగీరధి దరి వాగుల ఆ జలమే ఊరినయట్లు ।<br />శ్రీ వేంకటపతి నీవైతే మము చేకొని వున్న దైవ(ము)మని<br />ఈవలనే నీ శరణని ఎదను, ఇదియే పరతత్వము నాకు ॥</p>
          </div>
          <div className="verse-english">
            <p className="eyebrow">ENGLISH TRANSLATION</p>
            <h3>Meaning carried across languages</h3>
            <p>Vaishnavas worship You with devotion, calling You Vishnu. Vedantins describe You as the Supreme Brahman. Shaivites consider You Shiva and worship You with devotion. Kapalik devotees joyfully praise You as Adi Bhairava.</p>
            <p>Followers of Shakti worship You, saying that You are the embodiment of divine energy. People worship You in various ways, according to their different beliefs and traditions. To those who think of You with a limited understanding, You appear limited. To those who recognise Your greatness with a broad understanding, You are truly magnificent.</p>
            <p>There is nothing lacking in You. Yet, just as a lotus grows according to the amount of water available to it, so too does one's experience of You depend on their capacity. Just as the streams and rivers receive their water from the sacred Ganga, all derive from the same source.</p>
            <p>O Lord Venkateswara, You are the God who has embraced and stayed with us. I surrender my heart to You, seeking refuge in You. This, to me, is the ultimate truth.</p>
          </div>
        </div>
        <div className="verse-intro"><p className="eyebrow">HUMAN INTERPRETATION</p><h3>One divine reality, many ways of understanding.</h3>
          <p>The followers of Shakti worship You as the divine energy itself. People approach You through different paths and forms of worship. To those with limited understanding, You may seem limited, but to those who recognise Your true greatness, You are infinite and beyond measure.</p></div>
        <div className="verse-grid">
          <article><small>01 / INDIVIDUAL CAPACITY</small><p>You lack nothing, O Lord. Just as a lotus grows according to the water available to it, each person experiences You according to their own capacity.</p></article>
          <article><small>02 / SHARED SOURCE</small><p>Just as streams and rivers draw their water from the sacred Ganga, all forms of divinity ultimately originate from the same source.</p></article>
          <article><small>03 / SURRENDER</small><p>O Lord Venkateswara, You are the divine presence who has embraced us and remained with us. I place my heart in Your hands and seek refuge in You. This is the ultimate truth I have come to understand.</p></article>
        </div>
        <div className="translation-compare">
          <div><p className="eyebrow">MACHINE TRANSLATION</p><h3>Where literal meaning can fall short</h3><ul><li>Some poetic and cultural expressions may lose their deeper meaning.</li><li>The emotional and devotional tone may be less prominent.</li></ul></div>
          <div className="human-translation"><p className="eyebrow">TELUGU → ENGLISH TRANSLATION <StarMarks count={3} /></p><strong className="score">93%</strong><h3>Meaning with context</h3><ul><li>Preserves the intended meaning and context.</li><li>Understands cultural and devotional references better.</li><li>Expresses emotions and philosophy more naturally.</li><li>May slightly deviate from exact original wording to convey meaning.</li></ul></div>
        </div>
        <p className="verse-note">The 93% figure is presented as the supplied reported score; an evaluation method was not provided.</p>
        <blockquote className="verse-close">Translation is not simply replacing words. It is carrying meaning, emotion, culture and philosophy across linguistic boundaries.</blockquote>
      </Section>

      <Section id="lab" cls="lab" title="NLP Training Ground">
        <p className="lead">Small, local demonstrations of the concepts in my notes. These are educational visualizers, not external NLP model predictions.</p>
        <NlpLabs />
      </Section>

      <Section id="journey" cls="jr" title="Learning Journey">
        <ol className="path" ref={jref}>{journey.map((j, i) => (
          <li key={j.title} className={jseen ? 'in' : ''} style={{ '--d': `${i * 0.15}s`, '--s': i % 2 ? 1 : -1 }}>
            <span className="emo">{j.emoji}</span><div><h3>{j.title}</h3><p>{j.text}</p><button className="see" onClick={() => setLb(j.note - 1)}>See my notes</button></div></li>))}</ol>
      </Section>

      <Section id="project" cls="pj" title={<>{project.name} <StarMarks count={1} /></>}>
        <p className="lead">{project.summary}</p>
        <button className="idea" onClick={() => setLb(0)}><img src={asset(project.idea.src)} alt={project.idea.caption} /><span>{project.idea.caption}</span></button>
        <div className="flow">{project.architecture.map((s, i) => <div key={s} className="node"><b>{s}</b>{i < project.architecture.length - 1 && <i>⟶</i>}</div>)}</div>
        <div className="cols">
          <div><h3>Features</h3><ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
          <div><h3>Technologies</h3><div className="chips">{project.technologies.map((t, i) => <Sticker key={t} color={['#FFD84D', '#FF4F9A', '#B8F2E6', '#fff'][i % 4]} rot={i % 2 ? 2 : -2}>{t}</Sticker>)}</div></div>
          <div><h3>Team</h3><ul>{project.team.map((m) => <li key={m.name}>{m.name}{m.reg && <small> · {m.reg}</small>}</li>)}</ul></div>
        </div>
      </Section>


      <Section id="final-review" cls="final-review" title="Final Review — Presentation Day">
        <p className="lead">A few moments from our final project review: the team, the presentation and the work behind CrisisBridge AI.</p>
        <div className="review-stage">
          <button className="review-arrow" onClick={() => setReviewSlide((reviewSlide + 2) % 3)} aria-label="Previous review photo">‹</button>
          <figure className="review-frame">
            <img src={asset([
              'images/final-review/final-review-team.jpg',
              'images/final-review/final-review-presentation-1.jpg',
              'images/final-review/final-review-presentation-2.jpg'
            ][reviewSlide])} alt={[
              'The CrisisBridge AI team after the final review',
              'Presenting the Signal Lost in the Noise slide',
              'Presenting the From Raw Report to Actionable Priority slide'
            ][reviewSlide]} />
            <figcaption>{[
              '01 / The team — final review',
              '02 / Signal Lost in the Noise',
              '03 / From Raw Report to Actionable Priority'
            ][reviewSlide]}</figcaption>
          </figure>
          <button className="review-arrow" onClick={() => setReviewSlide((reviewSlide + 1) % 3)} aria-label="Next review photo">›</button>
        </div>
        <div className="review-dots" aria-label="Choose review photo">
          {[0,1,2].map((n) => <button key={n} className={reviewSlide === n ? "selected" : ""} onClick={() => setReviewSlide(n)} aria-label={"Show review photo " + (n+1)}>{String(n+1).padStart(2,"0")}</button>)}
        </div>
      </Section>

      <Section id="resources" cls="rs" title="Project Resources">
        <div className="resgrid">{resources.map((r) => (
          <a key={r.label} className="res" href={r.url} target="_blank" rel="noopener noreferrer" style={{ '--c': r.color }}>
            <small>{r.desc}</small><strong>{r.label}</strong><em>↗</em></a>))}</div>
      </Section>

      <Section id="reflection" cls="rf" title="Reflection"><p className="reflect">{reflection}</p></Section>
      <footer className="foot"><Marquee items={[profile.name, profile.regNo, profile.institution]} />
        <p>Built with React + Vite · {profile.name} · {new Date().getFullYear()}</p></footer>
      {lb !== null && <Lightbox items={notes} index={lb} onClose={close} onNav={nav} />}
    </>
  )
}
