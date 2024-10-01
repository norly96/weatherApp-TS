import { useWeatherContext } from "../../context/WeatherContext";

const Modal = () => {
  const { closeModal, errorMessage } = useWeatherContext();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
      <div className="bg-light-white border-yellow-orange border-2 dark:bg-dark-right-background rounded-lg p-5 w-autoshadow-lg">
        <h2 className="font-bold mb-2 text-center text-4xl text-green-card">
          Error
        </h2>
        <h3 className="text-2xl font-bold dark:text-light-white">
          {errorMessage}
        </h3>
        <button
          onClick={closeModal}
          className="mt-4 bg-green-card text-light-white font-medium rounded px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
