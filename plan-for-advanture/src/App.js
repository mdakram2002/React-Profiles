import { useState } from 'react';
import Tours from './components/Tours'
import data from './data'



const App = () => {

  const [tours, setTours] = useState(data)

  // when not interesed is clicked and this removeTours function is called and passed in the function
  // the filter function is used to remove the data from the passed id.
  function removeTours(id) {
    const newTours = tours.filter(tours => tours.id !== id);
    setTours(newTours);
  }
  // If we remove the tour from the tour list the UI shows the Refreshing tour button.
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>Sorry! No More Tours Left.</h2>
        <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
      </div>

    );
  }

  return (
    <div className="App">
      {/* removeTours and data are passed as a props in tours components */}
      <Tours tours={tours} removeTours={removeTours}></Tours>

    </div>
  );
}

export default App;
