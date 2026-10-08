import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, 'src')
const outDir = path.resolve(__dirname, 'docs')

// общие скрипты и стили для всех страниц
const allChunks = ['/javascripts/index.js', '/javascripts/allStyles.js']

const pages = {
  main: { file: 'index.html', chunks: allChunks },

  // разделы
  universities: { file: 'pages/universities.html', chunks: allChunks },
  university: { file: 'pages/university.html', chunks: allChunks },
  articles: { file: 'pages/articles.html', chunks: allChunks },
  article: { file: 'pages/article.html', chunks: allChunks },
  glossary: { file: 'pages/glossary.html', chunks: allChunks },
  tests: { file: 'pages/tests.html', chunks: allChunks },
  compare: { file: 'pages/compare.html', chunks: allChunks },
  saved: { file: 'pages/saved.html', chunks: allChunks },
  about: { file: 'pages/about.html', chunks: allChunks },

  // статья-пример
  freeEurope: { file: 'pages/articles/free-europe.html', chunks: allChunks },

  // тесты
  match: { file: 'pages/tests/match.html', chunks: allChunks },
  quiz: { file: 'pages/tests/quiz.html', chunks: allChunks }
}

const chunksByFile = Object.fromEntries(
  Object.values(pages).map(({ file, chunks }) => [file, chunks])
)

function pageChunksPlugin() {
  return {
    name: 'page-chunks',
    // 'pre', иначе vite не собирает эти скрипты
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const relFile = path
          .relative(root, ctx.filename)
          .split(path.sep)
          .join('/')
        const chunks = chunksByFile[relFile]
        if (!chunks) return html

        return {
          html,
          tags: chunks.map((src) => ({
            tag: 'script',
            attrs: { type: 'module', src },
            injectTo: 'body'
          }))
        }
      }
    }
  }
}

export default defineConfig(({ command }) => ({
  root,
  // относительные пути для github pages
  base: command === 'build' ? './' : '/',
  plugins: [pageChunksPlugin()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([name, { file }]) => [
          name,
          path.resolve(root, file)
        ])
      )
    }
  },
  server: {
    open: true
  }
}))
