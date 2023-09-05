import React, { useState } from 'react';
import WorldClock from './WorldClock';

const App = () => {
  const [clocks, setClocks] = useState([]);
  const [newClockName, setNewClockName] = useState('');
  const [newClockOffset, setNewClockOffset] = useState('');

  const addClock = () => {
    if (newClockName && newClockOffset !== '') {
      setClocks([...clocks, { name: newClockName, timezoneOffset: newClockOffset }]);
      setNewClockName('');
      setNewClockOffset('');
    }
  };

  const deleteClock = (name) => {
    setClocks(clocks.filter((clock) => clock.name !== name));
  };

  return (
    <div className="App">
      <h1>World Clocks</h1>
      <div className="add-clock">
        <input
          type="text"
          placeholder="Name"
          value={newClockName}
          onChange={(e) => setNewClockName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Timezone Offset (hours)"
          value={newClockOffset}
          onChange={(e) => setNewClockOffset(e.target.value)}
        />
        <button onClick={addClock}>Add</button>
      </div>
      <div className="clock-list">
        {clocks.map((clock) => (
          <WorldClock
            key={clock.name}
            name={clock.name}
            timezoneOffset={clock.timezoneOffset}
            onDelete={deleteClock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
