import SectionLeft from "./components/SectionLeft";
import SectionRight from "./components/SectionRight";

function App() {
  return (
    <main className="min-h-screen flex px-8 py-16 bg-light-cyan-background dark:bg-black">
      <div className=" flex bg-light-white dark:bg-dark-green shadow-xl w-full">
        <section className="w-6/12">
          <SectionLeft />
        </section>
        <section className="bg-light-right-background dark:bg-dark-right-background my-12 mr-16 w-6/12">
          <SectionRight />
        </section>{" "}
      </div>
    </main>
  );
}

export default App;
