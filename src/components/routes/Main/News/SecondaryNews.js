import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SecondaryNews() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://evening-dawn-39552.herokuapp.com/api/news");
      setItems(result.data.allNews);
    };
    fetchData();
  }, []);

  if (items !== undefined) {
    return (
      <ul className="Second-news">
        {items.map((item) => (
          <li key={item._id}>
            <Link to={`/news/${item._id}`}>
              <img src={item.imageUrl} alt="" />
              <div className="Second-news-text">
                <p>{item.title.substring(0, 15)}...</p>
                <p>{item.description.substring(0, 135)}...</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default SecondaryNews;
