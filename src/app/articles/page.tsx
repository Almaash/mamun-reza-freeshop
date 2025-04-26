'use client'

import { useState, useEffect } from "react";
import { Table } from "../components/table";
import axios from "axios";

const AboutPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetching data from the API when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/api/articles"); // Replace with your API endpoint
        setArticles(response.data); // Assuming the response is an array of articles
        setLoading(false);
      } catch (error) {
        setError("Failed to load articles");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Background Orange Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="w-full h-120"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fb923c"
            d="M0,128L40,133.3C80,139,160,149,240,138.7C320,128,400,96,480,85.3C560,75,640,85,720,112C800,139,880,181,960,202.7C1040,224,1120,224,1200,218.7C1280,213,1360,203,1400,197.3L1440,192V0H0Z"
          />
        </svg>
      </div>

      {/* Content on top */}
      <div className="relative z-10 ">
        <h1 className="text-2xl font-bold px-6 pt-5">Articles</h1>

        <Table articles={articles} />
      </div>
    </div>
  );
};

export default AboutPage;
