import { getAllPortfolioIds, getPortfolioData } from '../../utils/functions'
import Head from 'next/head'
import Typography from '@mui/material/Typography'

export default function Portfolio({ portfolioData }) {
  return (
    <>
      <Head>
        <title>{portfolioData.title}</title>
      </Head>
      <article>
        <Typography variant="h1">{portfolioData.title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }} />
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPortfolioIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const portfolioData = await getPortfolioData(params.id)
  return {
    props: {
      portfolioData
    }
  }
}
