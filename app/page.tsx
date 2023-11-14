import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { OurValues } from './components/OurValuesSection'
import { Footer } from './components/Footer'

import { getContentfulData } from './utils/getContentfulData'

export default async function Home() {
  const promises = [
    // getContentfulData('header'),
    // getContentfulData('begin'),
    // getContentfulData('about'),
    getContentfulData('ourValues'),
    getContentfulData('footer'),
  ]

  const [ourValues, footer] = await Promise.all(promises)

  return (
    <>
      <Header />
      <main>
        <SessionBegin />
        <SessionAboutUs />
        <OurValues values={ourValues} />
        <Footer values={footer} />
      </main>
    </>
  )
}
