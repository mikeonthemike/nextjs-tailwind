import { useState } from 'react';
import Clock from '../components/Clock';
import DigitalTimeInput from '../components/DigitalTimeInput';

export default function Exercise1() {
  const [time, setTime] = useState({ hour: 12, minute: 0 });

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl">Set the clock to the given time:</h1>
      <DigitalTimeInput hour={time.hour} minute={time.minute} onChange={setTime} />
      <Clock hour={time.hour} minute={time.minute} />
    </div>
  );
}