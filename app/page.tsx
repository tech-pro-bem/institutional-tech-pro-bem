import { SessionBegin } from './components/SessionBegin'
import { Header } from './components/Header'
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SessionBegin />
      </main>
    </>
  )
}
