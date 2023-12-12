import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'
import Depoiments from './components/SessionDepoiments'

export default async function Home() {
  const promises = [
    getContentfulData('header'),
    getContentfulData('begin'),
    getContentfulData('aboutUs'),
    getContentfulData('ourValues'),
    getContentfulData('testimonialsContent'),
    getContentfulData('testimonials'),
  ]

  const [
    headerValues,
    beginValues,
    aboutValues,
    ourValues,
    testimonialsContent,
    testimonialsValues,
  ] = await Promise.all(promises)

  return (
    <>
      <Header values={headerValues.entries} />
      <main>
        <SessionBegin values={beginValues.entries} />
        <SessionAboutUs values={aboutValues.entries} />
        <OurValues values={ourValues.entries} tableName={ourValues.tableName} />
        <Depoiments
          content={testimonialsContent.entries}
          values={testimonialsValues.entries}
        />
      </main>
    </>
  )
}
