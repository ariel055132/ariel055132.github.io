import type { AboutCopy } from './about';

export interface Project {
	slug: string;
	title: AboutCopy;
	summary: AboutCopy;
	category: AboutCopy;
	status: AboutCopy;
	role: AboutCopy;
	year: string;
	technologies: string[];
	website: string;
	repository?: string;
	cover?: string;
	sections: {
		id: string;
		title: AboutCopy;
		paragraphs: AboutCopy[];
		points?: AboutCopy[];
	}[];
}

// The first case records the website as it stands. Expand both languages as it grows.
export const personalWebsite: Project = {
	slug: 'personal-website',
	title: { zh: '在網路上，蓋一個自己的地方。', en: 'Making a little home on the web.' },
	summary: { zh: '就是你正在逛的這個網站。用 Astro 把自我介紹、作品與筆記串起來，從版型到內容，慢慢長成自己的樣子。', en: 'The site you’re exploring right now. Built with Astro to bring an introduction, projects, and notes together, growing a little with every iteration.' },
	category: { zh: '個人網站', en: 'Personal website' },
	status: { zh: '持續更新中', en: 'In progress' },
	role: { zh: '規劃、設計與開發', en: 'Planning, design & development' },
	year: '2026',
	technologies: ['Astro', 'GitHub Pages'],
	website: '/',
	repository: 'https://github.com/ariel055132/ariel055132.github.io',
	sections: [
		{
			id: 'background',
			title: { zh: '從什麼問題開始', en: 'Where it started' },
			paragraphs: [
				{ zh: '想要有一個自己的地方，把自我介紹、side projects 和開發筆記整理在一起。作品可以呈現結果，筆記則留下過程中的嘗試與取捨。', en: 'A place of my own to bring an introduction, side projects, and development notes together. Projects show what was made; notes keep the attempts and decisions behind it.' },
				{ zh: '先從一個小而完整的網站開始，讓內容能隨著每次實作持續增加。這個網站本身，就是第一個案例。', en: 'Start with a small, connected site that can grow with each new experiment. The website itself is the first case study.' },
			],
		},
		{
			id: 'approach',
			title: { zh: '第一版怎麼做', en: 'Building the first version' },
			paragraphs: [{ zh: '以 Astro 為基礎，讓首頁、關於我、作品與筆記共用導覽和版型。視覺上延續暖色背景與綠色點綴，把重點留給內容。', en: 'Built with Astro, with shared navigation and layouts across Home, About, Projects, and Notes. A warm background and green accents keep the focus on the content.' }],
			points: [
				{ zh: '用共用元件維持各頁的樣式，並支援手機閱讀。', en: 'Shared components keep the pages consistent and readable on mobile.' },
				{ zh: '介面提供中英切換與深淺色模式，保留閱讀偏好。', en: 'Chinese and English interface copy, with saved language and theme preferences.' },
				{ zh: '筆記使用 Markdown / MDX，靜態網站透過 GitHub Pages 發布。', en: 'Notes use Markdown / MDX, with the static site published through GitHub Pages.' },
			],
		},
		{
			id: 'progress',
			title: { zh: '目前做到哪裡', en: 'Where it is now' },
			paragraphs: [{ zh: '首頁、自我介紹、作品列表與案例頁已串起來，筆記區則先保留示範文章。這份案例先記下第一版的方向，後續再補上實作細節與畫面。', en: 'Home, About, the project index, and this case study are connected. Notes currently contains sample articles. This case records the direction of the first version, with implementation details and screenshots to follow.' }],
		},
		{
			id: 'next',
			title: { zh: '接下來的小步驟', en: 'Small steps from here' },
			paragraphs: [{ zh: '先把架構搭好，再讓真實的作品與紀錄慢慢填進來。', en: 'With the structure in place, the next step is to fill it with projects and notes from the process.' }],
			points: [
				{ zh: '補上網站截圖與版型調整的前後紀錄。', en: 'Add website screenshots and document how the layout evolves.' },
				{ zh: '整理技術選擇、遇到的問題與解法。', en: 'Write up technical choices, problems encountered, and their solutions.' },
				{ zh: '加入下一個 side project，以及相關的開發筆記。', en: 'Add the next side project and its development notes.' },
			],
		},
	],
};

// Array order is the display order on /projects/. Use a unique, URL-safe slug.
export const projects: Project[] = [personalWebsite];
