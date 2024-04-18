import React from "react";
import fire from "../Images/fire.png";
import drop from "../Images/drop.webp";

const Box = ({ selectedTab, sampleData }) => {
 
  const getBackgroundColor = (item) => {
    if (item.issue === "Leak" && item.property === "Property Name") {
      return "#FFCC99"; 
    }
    return "pink";
  };

  const getImageSource = (issue) => {
    if (issue === "Leak") {
      return drop;
    } else {
      return fire;
    }
  };

  const getButtonText = () => {
    switch (selectedTab) {
      case "Today":
        return "Today"; 
      case "All":
        return "All";
      case "New":
        return "New";
      case "Flagged":
        return "Flagged";
      case "InProgress":
        return "InProgress";
      case "Last":
        return "Last";
      default:
        return "Default";
    }
  };

  return (
    <div
      id="container"
      className="grid grid-cols-2 gap-4 rounded-b-lg"
      style={{
        fontFamily: 'Manrope, sans-serif',
        backgroundColor: 'rgb(240, 240, 240)',
        height: '215px',
        padding: '1rem',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {sampleData.map((item, index) => (
        <div
          key={index}
          className="w-[100%] h-[5.4rem] border-[1px] border-[red] rounded-lg p-2"
          style={{
            backgroundColor: getBackgroundColor(item),
            transition: 'all 0.3s ease-in-out' 
          }}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center text-red-600 gap-1 order-1">
              <img
                src={getImageSource(item.issue)}
                alt={item.issue}
                className="w-6 h-6 m-2"
              />
              <div>{item.issue}</div>
              <div>{item.property}</div>
            </div>
            <div id="alertButtons" className="order-2 gap-1 flex m-1">
             
              <button className="font-thin bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded w-[65px] h-[30px] justify-center items-center flex">
                {getButtonText()}
              </button>

              {/* Task 3 button */}
              <button className="font-thin bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded h-[30px] flex justify-center items-center">
                {item.noOfTasks}
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row order-1">
              <div id="building" className="text-red-700 ml-2">
                {item.building}
              </div>
              <div className="border-dotted border-2 border-red-400 bg-neutral-100 w-[5rem] border-red-500 ml-2 rounded items-center justify-center flex text-red-600">
                {item.status}
              </div>
            </div>
            <div className="order-2 flex flex-row mr-2 items-center gap-2 text-sm text-black-100">
              <div id="date">{item.date},</div>
              <div id="time" className="font-hairline text-xs text-gray-700">
                9:00 pm
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
