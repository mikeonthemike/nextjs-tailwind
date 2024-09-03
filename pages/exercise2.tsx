import { useState } from 'react';
import Clock from '../components/Clock';
import DigitalTimeInput from '../components/DigitalTimeInput';

export default function Exercise2() {
  const [time, setTime] = useState({ hour: 12, minute: 0 });

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl">Enter the digital time based on the clock:</h1>
      <Clock hour={time.hour} minute={time.minute} onChange={setTime} />
      <DigitalTimeInput hour={time.hour} minute={time.minute} onChange={setTime} />
    </div>
  );
}