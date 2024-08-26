import React, { useState } from "react";

interface IDropdown {
  onChange?: (data: string) => void;
  options: string[];
}
function Dropdown({ onChange, options }: IDropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-[#2D0083] border border-[#2D0083] rounded-lg hover:bg-gray-100"
        onClick={handleToggleDropdown}
      >
        {selectedOption ? selectedOption : "Attending"}{" "}
        <span className="ml-2 font-semibold">?</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option, i) => (
            <div
              className="px-4 py-2 text-sm text-[#2D0083] hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
          {/* <div
            className="px-4 py-2 text-sm text-[#2D0083] hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("Maybe")}
          >
            Maybe
          </div>
          <div
            className="px-4 py-2 text-sm text-[#2D0083] hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("Decline")}
          >
            Decline
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
