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
      console.log(API_URL);
      const data = response.json();

      setPosts(data);
      console.log(data);

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
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Products key={posts.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>Sorry.. No Data Found</p>
        </div>
      )}
    </div>
  );
};
export default Home;
