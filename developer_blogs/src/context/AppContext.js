import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();


    // for data filling for fetching.
    async function fetchBlogPosts(page = 1, tag = null, category) {
        setLoading(true);


        let url = `${baseUrl}?page=${page}`

        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (!data.posts || data.posts.length === 0) {
                throw new Error("Something went wrong");
            }
            console.log("API Response", data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        // when data is not responsed by the server.
        catch (err) {
            console.log("Error fetching");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        // when data is fetched, that's why we need to set setLoading is false.
        setLoading(false);
    };

    // useEffect(() => {
    //     fetchBlogPosts();
    // }, []);

    // for changing the page, that means increment and decrement of the pages.
    // for exapmle: goging to next page and then return previous page.
    const handlePageChange = (page) => {
        navigate({ search: `?page=${page}` })
        setPage(page)
    }

    // sending the all data for accessing the data in other files.
    // when we need to use the data,then we're using  a hook useContext() method.
    const values = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    }
    // these all above data are called Snapshots of data, that is passed as a children of
    // <AppContextProvider /> looking for snapshots in index.js for batter understanding
    return <AppContext.Provider values={values}>
        {children}
    </AppContext.Provider>
}