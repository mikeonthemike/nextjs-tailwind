import React, { useState } from 'react';

interface ClockProps {
  hour: number;
  minute: number;
  onChange?: (hour: number, minute: number) => void;
}

const Clock: React.FC<ClockProps> = ({ hour, minute, onChange }) => {
  const [hourHand, setHourHand] = useState(hour);
  const [minuteHand, setMinuteHand] = useState(minute);

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHour = Math.min(Math.max(parseInt(e.target.value), 0), 23);
    setHourHand(newHour);
    onChange?.(newHour, minuteHand);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinute = Math.min(Math.max(parseInt(e.target.value), 0), 59);
    setMinuteHand(newMinute);
    onChange?.(hourHand, newMinute);
  };

  return (
    <div className="clock-container">
      {/* Clock design, with SVG or CSS for clock face */}
      <input
        type="range"
        min="0"
        max="23"
        value={hourHand}
        onChange={handleHourChange}
        className="hour-slider"
      />
      <input
        type="range"
        min="0"
        max="59"
        value={minuteHand}
        onChange={handleMinuteChange}
        className="minute-slider"
      />
      {/* Placeholder for actual clock visualization */}
    </div>
  );
};

export default Clock;