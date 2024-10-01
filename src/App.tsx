import SectionLeft from "./components/SectionLeft";
import SectionRight from "./components/SectionRight";

function App() {
  return (
    <main className="min-h-screen flex px-8 py-16 bg-light-cyan-background dark:bg-black">
      <div className=" flex bg-light-white dark:bg-dark-green shadow-xl w-full">
        <section className="w-6/12">
          <SectionLeft />
          <p className="text-gray-500 px-32 text-start">
            Developed by Norluis Galvez{" "}
            <a
              href="https://norly96.com"
              target="_blank"
              className="underline hover:text-black dark:hover:text-light-white"
            >
              (Norly96)
            </a>
          </p>
        </section>
        <section className="bg-light-right-background dark:bg-dark-right-background my-12 mr-16 w-6/12">
          <SectionRight />
        </section>{" "}
      </div>
    </main>
  );
}

export default App;
