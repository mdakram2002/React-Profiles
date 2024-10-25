import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [text, setText] = useState('');
  // const[name, setName] = useState('Akram');

  // variation one -> for every rander
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  //varation two -> for first rander
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // },[]);

  // third variation -> whenever dependecy change
  // useEffect(() => {
  //   console.log("change observed");
  // },[name]);

  // fourth variation -> to handle unmounting/(Rendring in UI) of a component;
  useEffect(() => {
    //add event listener
    console.log("listener added");

    return () => {
      console.log("listener removed");
    }

  }, [text]);

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onClick={changeHandler} />
    </div>
  );
}

export default App;
