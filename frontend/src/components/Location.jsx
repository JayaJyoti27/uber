import React from "react";
const Location = ({
  suggestions = [],
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }
    // Close panel after selecting a location
  };

  return (
    <div className="p-4 mt-10 bg-white shadow-lg rounded-xl overflow-y-auto max-h-[60vh]">
      <h2 className="text-lg font-semibold mb-3">Select a Location</h2>
      {suggestions.length === 0 ? (
        <p className="text-gray-500 text-center">No suggestions found</p>
      ) : (
        suggestions.map((suggestion, idx) => (
          <div
            key={suggestion.place_id || idx}
            onClick={() => handleSuggestionClick(suggestion)}
            className="flex gap-4 border p-3 rounded-xl items-center my-2 cursor-pointer transition hover:bg-gray-100"
          >
            <h2 className="bg-gray-200 text-gray-700 h-10 w-10 flex items-center justify-center rounded-full">
              📍
            </h2>
            <div>
              <h4 className="font-medium text-black">
                {suggestion.structured_formatting.main_text}
              </h4>
              <p className="text-sm text-gray-500">
                {suggestion.structured_formatting.secondary_text}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Location;
