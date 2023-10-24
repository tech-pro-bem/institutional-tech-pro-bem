import { SessionBegin } from './components/SessionBegin'

export default function Home() {
  return (
    <main data-test="body">
      <div data-test="filho">
        <SessionBegin />
      </div>
    </main>
  )
}
