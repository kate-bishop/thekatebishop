import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const portfolioDirectory = path.join(process.cwd(), 'portfolio')

export function getSortedPortfolioData() {
  const fileNames = fs.readdirSync(portfolioDirectory)
  const allPortfolioData = fileNames.map(fileName => {
    const id = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(portfolioDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allPortfolioData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPortfolioIds() {
  const fileNames = fs.readdirSync(portfolioDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export async function getPortfolioData(id) {
  const fullPath = path.join(portfolioDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // gray-matter parses metadata
  const matterResult = matter(fileContents)

  // remark converts markdown > HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
