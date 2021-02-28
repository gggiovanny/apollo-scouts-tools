import { IdentificationCard } from './components/IdentificationCard'

const troperos = [
  {
    nombre: 'LEONARDO GABRIEL OSORIO CASTILLO',
    apollitos: 10,
    rango: 'tropero',
  },
  {
    nombre: 'WALTER JOAQUIN	CONTRERAS	BOJORQUEZ',
    apollitos: 10,
    rango: 'tropero',
  },
  {
    nombre: 'ANTONIO GABRIEL	MAY	SOSA',
    apollitos: 3,
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
                nombre={tropero.nombre.toUpperCase()}
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
