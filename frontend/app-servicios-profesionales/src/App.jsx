import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <section className="flex flex-col min-h-screen">
      <NavBar />
      <AppRouter>
        <LandingPage />
      </AppRouter>
      <Footer />
    </section>
  );
}

export default App;
