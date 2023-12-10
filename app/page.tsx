import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'
import { DepoimentsManual } from './components/DepoimentsManual'
import { DepoimentsV1 } from './components/DepoimentsV1'
import { DepoimentsV2 } from './components/DepoimentsV2'
import DepoimentsSwiper from './components/DepoimentsSwiper'

export default async function Home() {
  const promises = [
    getContentfulData('header'),
    getContentfulData('begin'),
    getContentfulData('aboutUs'),
    getContentfulData('ourValues'),
  ]

  const [headerValues, beginValues, aboutValues, ourValues] =
    await Promise.all(promises)

  return (
    <>
      <Header values={headerValues.entries} />
      <main>
        <SessionBegin values={beginValues.entries} />
        <SessionAboutUs values={aboutValues.entries} />
        <OurValues values={ourValues.entries} tableName={ourValues.tableName} />
        <DepoimentsV1 />
        <DepoimentsV2 />
        <DepoimentsManual />
        <DepoimentsSwiper />
      </main>
    </>
  )
}
