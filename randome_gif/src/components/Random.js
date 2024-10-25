import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

    const { gif, loading, fetchData } = useGif();

    return (
        <div className='flex flex-col items-center h-[350px] bg-green-600 rounded-lg border border-black hover:border-white'>
            <h1 className='text-2xl font-bold underline'>A Random Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width={450} alt='imag' className='flex flex-col items-center' />)
            }
            <button
                onClick={() => { fetchData() }}
                className='w-10/12  mx-auto bg-yellow-500 font-semibold text-medium pt-[3px] pb-[3px] rounded-lg hover:border border-yellow-100'
            >Generate</button>
        </div>
    )
}

export default Random;
