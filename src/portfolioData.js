// ✏️ EDIT EVERYTHING HERE. Images live in /public/images (use paths like "images/profile.svg").
// Anything marked PLACEHOLDER should be replaced with your real content.
export const profile = {
  name: 'Sahasra Reddy Dondapati',
  regNo: '23MIC0037',
  institution: 'VIT Vellore',
  course: 'Natural Language Processing and Computational Linguistics',
  tagline: 'Teaching machines to read between the lines.',
  photo: 'images/profile.jpg',
}

export const starsEarned = [
  { title: 'Morphotactics in Telugu', stars: 3 },
  { title: 'Team Project', stars: 1 },
  { title: 'What Does Language Mean to You?', stars: 1 },
  { title: 'Recall Five Key Terms', stars: 1 },
  { title: 'Telugu-to-English Translation', stars: 3 },
  { title: 'Minimum Edit Distance', stars: 1 },
]
export const philosophy = {
  question: 'What does language mean to you?',
  answer: "To me, language is the bridge between what we think and what we express. We may think in one language but choose another to communicate those thoughts. It is fascinating how the same thought can exist in one language and find its expression in another. Language, therefore, is not merely a tool for communication but a way of giving words to our thoughts.",
  keyTermsQuestion: 'Recall five key terms discussed during the lecture on language identification and writing systems.',
  keyTerms: ['Writing system patterns', 'Unique characters', 'Common characters', 'Text tokenization', 'Word separation (segmentation)'],
}
export const achievements = [
  { name: 'Wildfire', level: 'Level 10', desc: 'Reach a 365 day streak', current: 262, total: 365, color: '#FF4F9A', image: 'images/ach-wildfire.png' },
  { name: 'Sage', level: 'Level 9', desc: 'Earn 20000 XP', current: 12639, total: 20000, color: '#2B3BFF', image: 'images/ach-sage.png' },
  { name: 'Champion', level: 'Level 6', desc: 'Advance to the Emerald League', current: 5, total: 6, color: '#FFB800', image: 'images/ach-champion.png' },
  { name: 'Sharpshooter', level: 'Level 5', desc: 'Complete 100 lessons with no mistakes', current: 53, total: 100, color: '#00A67E', image: 'images/ach-sharpshooter.png' },
  { name: 'Spanish Side Quest', level: 'New journey', desc: 'Started learning Spanish as a side quest', current: 1, total: 1, color: '#FF4F9A', image: 'images/ach-spanish.svg' },
]
// Your handwritten notes, in order. Add/remove lines freely; the gallery adapts.
export const notes = [
  { src: 'images/notes/note-01.jpg', caption: 'CrisisBridge idea, in my handwriting' },
  { src: 'images/notes/note-02.jpg', caption: 'Morphotactics in Swahili' },
  { src: 'images/notes/note-03.jpg', caption: 'Minimum edit distance' },
  { src: 'images/notes/note-04.jpg', caption: 'Introduction to NLP' },
  { src: 'images/notes/note-05.jpg', caption: 'Knowledge in language and history of NLP' },
  { src: 'images/notes/note-06.jpg', caption: 'Components of NLP' },
  { src: 'images/notes/note-07.jpg', caption: 'Levels of NLP: lexical and morphological' },
  { src: 'images/notes/note-08.jpg', caption: 'Syntactic and semantic analysis' },
  { src: 'images/notes/note-09.jpg', caption: 'Pragmatic analysis and stages of NLP' },
  { src: 'images/notes/note-10.jpg', caption: 'Why NLP is hard' },
  { src: 'images/notes/note-11.jpg', caption: 'Ambiguity in NLP' },
  { src: 'images/notes/note-12.jpg', caption: 'Ambiguity, continued' },
  { src: 'images/notes/note-13.jpg', caption: 'Uncertainty' },
  { src: 'images/notes/note-14.jpg', caption: 'Text preprocessing' },
  { src: 'images/notes/note-15.jpg', caption: 'Stemming, lemmatization and tokenization' },
  { src: 'images/notes/note-16.jpg', caption: 'Empirical laws: Zipf’s law' },
  { src: 'images/notes/note-17.jpg', caption: 'Heaps’ law and more empirical laws' },
  { src: 'images/notes/note-18.jpg', caption: 'The Turing Test' },
  { src: 'images/notes/note-19.jpg', caption: 'Turing Test participants' },
  { src: 'images/notes/note-20.jpg', caption: 'Turing Test variations' },
  { src: 'images/notes/note-21.jpg', caption: 'NLTK practical' },
  { src: 'images/notes/note-22.jpg', caption: 'NLTK: stopwords, stemming, POS tags' },
]
// Built from your notes. "note" = which notes page opens when the card is clicked (1 = first page).
export const journey = [
  { title: 'Foundations of NLP', text: 'What NLP is, knowledge in language, and a short history of the field.', emoji: '🌱', note: 5 },
  { title: 'Components and Levels', text: 'NLU vs NLG, then lexical, morphological, syntactic, semantic, pragmatic and discourse analysis.', emoji: '🧩', note: 7 },
  { title: 'Why Language Is Hard', text: 'Ambiguity and uncertainty: one sentence, many possible meanings.', emoji: '🌀', note: 11 },
  { title: 'Words and Their Shapes', text: 'Morphotactics in Swahili, stemming vs lemmatization, and minimum edit distance.', emoji: '🔤', note: 3 },
  { title: 'Text Preprocessing', text: 'Tokenization, normalization and cleaning text for machines.', emoji: '✂️', note: 14 },
  { title: 'Laws of Language', text: 'Zipf’s law, Heaps’ law and other empirical patterns in text.', emoji: '📈', note: 16 },
  { title: 'The Turing Test', text: 'Can a machine’s conversation fool a human judge? Participants and how to run the test.', emoji: '🤖', note: 18 },
  { title: 'NLTK in Practice', text: 'Stopwords, stemming, lemmatization, POS tags and word frequency in code.', emoji: '💻', note: 21 },
]
export const project = {
  idea: { src: 'images/notes/note-01.jpg', caption: 'Where CrisisBridge began' },
  name: 'CrisisBridge AI',
  summary: 'A RAG-augmented disaster response prioritization system that transforms disaster-related messages into structured, translated and prioritized information for emergency response coordinators.',
  architecture: ['Data Ingestion', 'NLP Processing', 'Indexing', 'RAG Retrieval & Generation', 'User Interface'],
  features: ['Multilingual disaster alert translation', 'Message classification and named-entity/location extraction', 'Urgency scoring from 0–100', 'Semantic embeddings and FAISS retrieval', 'Evidence-backed answers with citations'],
  technologies: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'sentence-transformers', 'FAISS', 'FastAPI', 'Streamlit', 'HTML', 'CSS', 'JavaScript'],
  team: [{ name: 'Sahasra Reddy Dondapati', reg: '23MIC0037' }, { name: 'Dara Karthikeya', reg: '23MIC0008' }, { name: 'Harshita Raj', reg: '23MID0294' }], // names only, no invented roles
}
export const resources = [
  { label: 'GitHub', desc: 'Source code', url: 'https://github.com/Karthikeya0008/Crisis-Bridge-AI', color: '#1B1740' },
  { label: 'PPT', desc: 'Presentation', url: 'https://docs.google.com/presentation/d/17nVrA4Xd4SNnsEaI9VSXvimn5dPihOXS/edit?usp=sharing&ouid=103372021108503884335&rtpof=true&sd=true', color: '#FF4F9A' },
  { label: 'Documentation', desc: 'Project report', url: 'https://drive.google.com/file/d/1hY-Ip8ap7p99zkvFBzPoP1ht7_-OynT7/view?usp=sharing', color: '#FFB800' },
  { label: 'Demonstration Video', desc: 'Watch it run', url: 'https://drive.google.com/file/d/1wkBnQAmBsvbJ2BTmA5BEwgRqwc7DhHMN/view?usp=sharing', color: '#2B3BFF' },
]
export const reflection = 'Learning NLP has changed the way I look at language. What once seemed like ordinary words and sentences now reveals layers of structure, meaning, context and computation. Every concept has helped me understand how human communication can be translated into something machines can interpret.'
