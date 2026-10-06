# Personal website

## Projects 與案例

- `/projects/`：作品列表。
- `/projects/personal-website/`：第一個案例，以這個網站為起點。
- 修改 `src/data/projects.ts` 的中英文內容，可同步更新列表與案例頁；首頁使用其中的 `personalWebsite`。
- 新增作品：依照 `Project` 型別新增資料，加入 `projects` 陣列。使用唯一的 `slug`，建置時會自動產生 `/projects/<slug>/`。
- `sections` 可補入背景、做法、成果與下一步；每個 `id` 必須在同一案例內唯一，供目錄連結使用。
- `cover` 是選填的圖片路徑，可將圖片放入 `public/` 再填入 `/檔名.png`。沒有圖片時使用插畫或簡單圖案；`repository` 也是選填。
- 頁面版型位於 `src/pages/projects/`，共用樣式在 `src/styles/projects.css`。
- 驗證：執行 `npm run build`，並檢查兩個頁面的桌機／手機版、中英切換與深淺色模式。

## Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
