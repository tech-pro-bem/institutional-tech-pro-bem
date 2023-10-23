import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <OurValues />
      </main>
    </>
  )
}
