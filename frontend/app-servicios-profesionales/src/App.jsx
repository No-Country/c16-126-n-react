import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./routers/AppRouter";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <section className="flex flex-col min-h-screen">
        <NavBar />
        <AppRouter>
          <LandingPage />
        </AppRouter>
        <Footer />
      </section>
    </AuthProvider>
  );
}

export default App;
