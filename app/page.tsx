import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'
import { OurImpact } from './components/OurImpactSection'

export default async function Home() {
  const promises = [
    getContentfulData('header'),
    getContentfulData('begin'),
    getContentfulData('aboutUs'),
    getContentfulData('ourValuesContent'),
    getContentfulData('ourImpactContent'),
  ]

  const [headerValues, beginValues, aboutValues, ourValues, ourImpact] =
    await Promise.all(promises)

  return (
    <>
      <Header values={headerValues.entries} />
      <main>
        <SessionBegin values={beginValues.entries} />
        <SessionAboutUs values={aboutValues.entries} />
        <OurValues values={ourValues.entries} />
        <OurImpact values={ourImpact.entries} />
      </main>
    </>
  )
}
