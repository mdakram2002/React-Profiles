import './App.css';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
// import { wait } from '@testing-library/user-event/dist/utils';


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output =>
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="main">
      <div>
        <Navbar />
      </div>


      <div className="second-div">
        <div>
          <Filters filterData={filterData} category={category} setCategory={setCategory} />
        </div>


        <div className="spinner-cards">
          {
          loading ? (<Spinner />) :
          (<Cards courses={courses}
          category={category} />)
          };
        </div>
      </div>

    </div>
  );
}
export default App;