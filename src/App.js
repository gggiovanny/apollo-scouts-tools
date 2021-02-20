import { IdentificationCard } from './components/IdentificationCard'

function App() {
  return (
    <>
      <div className="container ">
        <section className="section">
          <IdentificationCard
            apollitos={15}
            nombre={'Giovanny González Baltazar'}
            rango={'tropero'}
          />
        </section>
      </div>
    </>
  )
}

export default App
