export type AboutCopy = { zh: string; en: string };

// Update both languages here with your name, introduction, and experience.
// Initial copy describes this website; no education or employment is assumed.
export const profile = {
	name: 'ariel055132',
	monogram: 'a.',
	github: 'https://github.com/ariel055132',
	title: { zh: '關於我', en: 'About me' },
	description: { zh: '我的個人網站：side projects、開發筆記，以及把想法做出來的過程。', en: 'A personal space for side projects, development notes, and the process of bringing ideas to life.' },
	greeting: { zh: '嗨，歡迎來到我在網路上的小角落。', en: 'Hello, welcome to my little corner of the internet.' },
	tagline: { zh: '保持好奇，把想法慢慢做出來。', en: 'Stay curious. Bring ideas to life, one step at a time.' },
	introduction: [
		{ zh: '這裡是我整理想法、實作與學習的地方。我用 side projects 探索感興趣的題目，也把開發過程中的嘗試、取捨和心得寫成筆記。', en: 'This is a home for my ideas, experiments, and learning. I explore through side projects and write about the attempts, decisions, and discoveries along the way.' },
		{ zh: '從一個小問題開始，動手做出一些東西，再一點一點改進。這個網站也一樣，會隨著新的作品和筆記，慢慢長成自己的樣子。', en: 'Start with a small question, make something, and keep refining it. This website follows the same spirit, growing a little with every project and note.' },
	],
	journey: [
		{ label: '2026', title: { zh: '建立自己的網站', en: 'Making a home on the web' }, text: { zh: '使用 Astro，串起自我介紹、作品與開發筆記。', en: 'Bringing an introduction, projects, and development notes together with Astro.' } },
		{ label: { zh: '接下來', en: 'NEXT' }, title: { zh: '把過程也留下來', en: 'Sharing the process, too' }, text: { zh: '慢慢補上 side projects，以及每次實作學到的事。', en: 'Adding side projects and the lessons learned while building them.' } },
	],
	interests: [
		{ zh: 'Side projects', en: 'Side projects' },
		{ zh: '網頁開發', en: 'Web development' },
		{ zh: '從實作中學習', en: 'Learning by doing' },
		{ zh: '把想法寫下來', en: 'Writing things down' },
	],
};

export const labels = {
	about: { zh: '關於我', en: 'About' },
	notes: { zh: '筆記', en: 'Notes' },
	skip: { zh: '跳至主要內容', en: 'Skip to content' },
	intro: { zh: '關於我', en: 'A little about me' },
	projects: { zh: '看看我的 GitHub', en: 'Explore my GitHub' },
	journey: { zh: '沿途的小記', en: 'Along the way' },
	interests: { zh: '好奇心所在', en: 'Things I’m drawn to' },
	explore: { zh: '繼續逛逛', en: 'A little more to explore' },
	projectTitle: { zh: '作品與實驗', en: 'Projects & experiments' },
	projectText: { zh: '從想法到實作，一點一點累積。', en: 'Small ideas, made real. A work in progress.' },
	noteTitle: { zh: '開發筆記', en: 'Notes from the process' },
	noteText: { zh: '記錄做了什麼，也記錄為什麼。', en: 'What I’m building, learning, and figuring out.' },
	connect: { zh: '在網路上找到我', en: 'Elsewhere on the web' },
	footer: { zh: '持續學習，慢慢完成。', en: 'Always learning. Always a work in progress.' },
} satisfies Record<string, AboutCopy>;
