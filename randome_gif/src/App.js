import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (

    <div>
      <div className='w-full space-y-9 flex flex-col background '>
        <h1 className='bg-gray-300 text-black font-bold text-3xl text-center mt-7 pt-2 pb-2 mx-auto w-11/12 rounded-md'
        >RANDOM GIFS
        </h1>
        <div className='w-full flex flex-col mx-auto mt-10 md:w-1/3 lg:w-1/2 space-y-10'>
          <Random />
          <Tag />
        </div>
      </div>
    </div>
  )
}
