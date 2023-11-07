import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'

export default async function Home() {
  const promises = [
    // getContentfulData('header'),
    // getContentfulData('begin'),
    // getContentfulData('about'),
    getContentfulData('ourValues'),
  ]

  const [ourValues] = await Promise.all(promises)
  return (
    <>
      <Header />
      <main>
        <SessionBegin />
        <SessionAboutUs />
        <OurValues values={ourValues} />
      </main>
    </>
  )
}
