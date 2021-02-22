import { IdentificationCard } from './components/IdentificationCard'

const troperos = [
  {
    nombre: 'LEONARDO GABRIEL OSORIO CASTILLO',
    apollitos: 5,
    rango: 'tropero',
  },
  {
    nombre: 'WALTER JOAQUIN	CONTRERAS	BOJORQUEZ',
    apollitos: 5,
    rango: 'tropero',
  },
  {
    nombre: 'ABIEL NATANAEL	CHAN	VERDIN',
    apollitos: 0,
    rango: 'tropero',
  },
  {
    nombre: 'DANIEL JESUS	BOJORQUEZ	ACOSTA',
    apollitos: 0,
    rango: 'tropero',
  },
  {
    nombre: 'DANIEL JESUS	BOJORQUEZ	ACOSTA',
    apollitos: 0,
    rango: 'tropero',
  },
  {
    nombre: 'Giovanny González Baltazar',
    apollitos: 0,
    rango: 'jefe de tropa',
  },
]

function App() {
  return (
    <>
      <div className="container ">
        <section className="section">
          {troperos.map((tropero) => (
            <>
              <IdentificationCard
                apollitos={tropero.apollitos}
                nombre={tropero.nombre}
                rango={tropero.rango}
              />
              <div className="mb-6"></div>
            </>
          ))}
        </section>
      </div>
    </>
  )
}

export default App
