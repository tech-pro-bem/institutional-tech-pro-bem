import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'
import { OurImpact } from './components/OurImpactSection'

export default async function Home() {
  const promises = [
    // getContentfulData('header'),
    // getContentfulData('begin'),
    // getContentfulData('about'),
    getContentfulData('ourValues'),
    getContentfulData('ourImpact'),
  ]

  const [ourValues, ourImpact] = await Promise.all(promises)
  return (
    <>
      <Header />
      <main>
        <SessionBegin />
        <SessionAboutUs />
        <OurValues values={ourValues} />
        <OurImpact values={ourImpact} />
      </main>
    </>
  )
}
