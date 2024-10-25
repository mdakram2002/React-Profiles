import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';

const Tag = () => {

    const [tag, setTag] = useState(" ");
    const { gif, loading, fetchData } = useGif(tag);

    return (
        <div className='flex flex-col items-center h-[350px] bg-indigo-400 rounded-lg border border-black hover:border-white'>
            <h1 className='text-2xl font-bold underline'>Generate Random {tag} Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width={450} alt='imag' className='flex flex-col items-center' />)
            }
            <input
                className='w-10/12 text-lg rounded-lg mb-[10px] text-center'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />
            <button
                onClick={() => { fetchData() }}
                className='w-10/12  mx-auto bg-yellow-500 font-semibold text-medium pt-[3px] pb-[3px] rounded-lg hover:border border-yellow-100'>Generate
            </button>
        </div>
    )
}

export default Tag;
