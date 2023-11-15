import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'

export default async function Home() {
  const promises = [
    // getContentfulData('header'),
    getContentfulData('begin'),
    getContentfulData('aboutUs'),
    getContentfulData('ourValues'),
  ]

  const [beginValues, aboutValues, ourValues] = await Promise.all(promises)

  return (
    <>
      <Header />
      <main>
        <SessionBegin values={beginValues} />
        <SessionAboutUs values={aboutValues} />
        <OurValues values={ourValues} />
      </main>
    </>
  )
}
