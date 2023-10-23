import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SessionBegin />
        <SessionAboutUs />
      </main>
    </>
  )
}