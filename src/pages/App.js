import { useTheme } from "../hooks/ThemeContext";
import Cards from "../sections/Cards";
import Header from "../sections/Header";
import HomeBanner from "../sections/HomeBanner";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import Motion from "../sections/Motion";
import "./App.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" brand={theme.brand} theme="tema-1" mode={theme.mode}>
      <Header />
      <HomeBanner />
      <Cards />
      <Motion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
