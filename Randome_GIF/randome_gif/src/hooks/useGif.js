import { useEffect, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import axios from 'axios';


const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY)
const url = `https://api.giphy.com/v2/emoji?api_key=${giphy}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    const [error, setError] = useState([]);

    const  fetchData = async () => {

        try {
            setLoading(true);
            const { data } = await axios.get(tag ? `${url}&tag=$(tag)` : url);
            const imageSource = (data.downsized.large.url);
            setGif(imageSource);
            setLoading(false);
        } catch (error) {
            setError(error.msg);
        }

    }
    useEffect(() => {
        fetchData('car');
    }, []);

    return { gif, loading, fetchData };
}

export default useGif;
