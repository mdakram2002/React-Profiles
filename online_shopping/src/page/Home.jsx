/** @format */

import Spinner from "../components/Spinner";
import Products from "../components/Products";
import React, { useEffect, useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
      // console.log(data);

    } catch (err) {
      console.log("fetching product data failed");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen w-full"><Spinner/></div>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-4xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Products key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>Sorry.. No Data Found</p>
        </div>
      )}
    </div>
  );
};
export default Home;
