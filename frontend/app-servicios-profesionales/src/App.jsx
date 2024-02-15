import Footer from "./components/Footer/Footer"
import LandingPage from "./components/LandingPage/LandingPage"
import NavBar from "./components/NavBar/NavBar"
import AppRouter from "./routers/AppRouter"

function App() {
 

  return (
    <section>
    <NavBar/>
    <AppRouter>

    <LandingPage/>

    </AppRouter>
    <Footer/>    
    </section>
  )
}

export default App
