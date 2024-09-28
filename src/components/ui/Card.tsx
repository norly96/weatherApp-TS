const Card = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Rotate Card */}
      <div className="absolute inset-0 transform rotate-6 bg-yellow-orange rounded-xl shadow-lg h-full w-full"></div>

      {/* Principal Card */}
      <div className="relative bg-green-card rounded-xl shadow-xl p-6 h-full w-full flex items-center justify-center">
        <h2 className="text-xl font-bold text-gray-800">Main Card</h2>
      </div>
    </div>
  );
};

export default Card;
