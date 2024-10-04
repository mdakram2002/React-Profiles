import React from 'react';
import './App.css';
// import Product from './components/Product';
// import ProductDate from './ProductDate';

const App = () => {
  const Product = [
    {
      id: 'P1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 12)
    },
    {
      id: 'P2',
      title: 'SurfExcel',
      amount: 100,
      date: new Date(1995, 9, 12)
    },
    {
      id: 'P3',
      title: 'Biryani',
      amount: 150,
      date: new Date(1987, 8, 15)
    },
    {
      id: 'P4',
      title: 'Pasta',
      amount: 100,
      date: new Date(1998, 8, 12)
    },
  ]

  // function printProductData(data) {
  //   console.log(data);
  // }



  return (
    <div>
      {/* <ProductForm prany={printProductData} /> */}
      <Product Items={Product} />
    </div>
  );

};
export default App;