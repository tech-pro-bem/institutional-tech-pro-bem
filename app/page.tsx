import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'
import { DoubtsSection } from './components/DoubtsSection'

export default async function Home() {
  const promises = [
    getContentfulData('header'),
    getContentfulData('begin'),
    getContentfulData('aboutUs'),
    getContentfulData('ourValues'),
    getContentfulData('doubts'),
    getContentfulData('doubtsContent'),
  ]

  const [
    headerValues,
    beginValues,
    aboutValues,
    ourValues,
    doubtsValues,
    doubtsContentValues,
  ] = await Promise.all(promises)

  return (
    <>
      <Header values={headerValues.entries} />
      <main>
        <SessionBegin values={beginValues.entries} />
        <SessionAboutUs values={aboutValues.entries} />
        <OurValues values={ourValues.entries} tableName={ourValues.tableName} />
        <DoubtsSection
          values={doubtsValues.entries}
          content={doubtsContentValues.entries}
        />
      </main>
    </>
  )
}
