import React from "react";

type TimeSlotSelectorProps = {
  times: string[];
  onSelectTime: (time: string) => void;
};

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({ times, onSelectTime }) => {
  return (
    <div>
      <h3>Tillgängliga tider:</h3>
      <ul>
        {times.map((time, index) => (
          <li key={index}>
            <button onClick={() => onSelectTime(time)}>{time}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlotSelector;