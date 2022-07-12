import './index.css'
import Header from "./assets/components/Header"
import SalesCard from "./assets/components/SalesCard"
function App() {
  return (
    <>
      <Header />
      <main>
        <section className="vendas">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
