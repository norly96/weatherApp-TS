import "./App.css";
import SectionLeft from "./components/SectionLeft";
import SectionRight from "./components/SectionRight";

function App() {
  return (
    <main className="min-h-screen flex p-8">
      <section className="bg-gray-600 w-full">
        <SectionLeft />
      </section>
      <section className="bg-green-950 w-full">
        <SectionRight />
      </section>
    </main>
  );
}

export default App;
