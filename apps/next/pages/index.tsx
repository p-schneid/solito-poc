import { HomeScreen } from 'app/features/home/screen'
import { GetServerSideProps } from 'next'

export default HomeScreen

type Repo = {
    name: string
    stargazers_count: number
}

export const getServerSideProps: GetServerSideProps<{
    repo: Repo
  }> = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
  }
