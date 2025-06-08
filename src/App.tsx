import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;