import React from 'react';

interface DigitalTimeInputProps {
  hour: number;
  minute: number;
  onChange: (hour: number, minute: number) => void;
}

const DigitalTimeInput: React.FC<DigitalTimeInputProps> = ({ hour, minute, onChange }) => {
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHour = Math.min(Math.max(parseInt(e.target.value), 0), 23);
    onChange(newHour, minute);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinute = Math.min(Math.max(parseInt(e.target.value), 0), 59);
    onChange(hour, newMinute);
  };

  return (
    <div className="flex space-x-2">
      <input
        type="number"
        value={hour}
        onChange={handleHourChange}
        className="w-12 p-2 border rounded"
        min={0}
        max={23}
      />
      <span>:</span>
      <input
        type="number"
        value={minute}
        onChange={handleMinuteChange}
        className="w-12 p-2 border rounded"
        min={0}
        max={59}
      />
    </div>
  );
};

export default DigitalTimeInput;