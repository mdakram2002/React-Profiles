import './App.css';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/Category';
import TagPage from './pages/TagPage';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';

export default function App() {

  const { fetchBlogPosts = {} } = useContext(AppContext);
  // const fetchBlogPosts = context?.fetchBlogPosts;
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {

    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // thar means show the tags page
      const tag = location.pathname.split("/").at(-1).replace("_", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else {
      if (location.pathname.includes("category")) {
        const category = location.pathname.split("/").at(-1).replaceAll("_", " ");
        fetchBlogPosts(Number(page), null, category);
      }
      else {
        fetchBlogPosts(Number(page));
      }
    }
  }, [location.pathname, location.search, fetchBlogPosts, searchParams]);

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs:blogId' element={<BlogPage />} />
      <Route path='/tag/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />
    </Routes>
  );
}
