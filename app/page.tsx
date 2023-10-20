import { SessionAboutUs } from './components/SessionAboutUs'
import { SessionBegin } from './components/SessionBegin'

export default function Home() {
  return (
    <main>
      <SessionBegin />
      <SessionAboutUs />
    </main>
  )
}
