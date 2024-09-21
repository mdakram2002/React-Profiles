// import logo from './ logo.svg';
import './App.css';
import Items from './compnents/Items';
import ItemsDate from './compnents/ItemsDate';

function App() {

  const response = [
    {
      ItemsName: "Nirma",
      ItemsDate: 16,
      ItemsMonths: "Dec",
      ItemsYear: 1999
    },
    {
      ItemsName: "SurfExcel",
      ItemsDate: 16,
      ItemsMonths: "Dec",
      ItemsYear: 2000
    },
    {
      ItemsName: "baby Surf",
      ItemsDate: 17,
      ItemsMonths: "Dec",
      ItemsYear: 1998
    }
  ];
  return (
    <div >

      <Items name={response[0].ItemsName} ></Items>
      <ItemsDate day={response[0].ItemsDate} months={response[0].ItemsMonths} year={response[0].ItemsYear}></ItemsDate>

      <Items name={response[1].ItemsName}></Items>
      <ItemsDate day={response[1].ItemsDate} months={response[1].ItemsMonths} year={response[1].ItemsYear}></ItemsDate>


      <Items name={response[2].ItemsName}></Items>
      <ItemsDate day={response[2].ItemsDate} months={response[2].ItemsMonths} year={response[2].ItemsYear}></ItemsDate>

      <div className="App">
        Hello! Akram.
      </div>
    </div >
  );
}
export default App;
