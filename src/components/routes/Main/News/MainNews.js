import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import ddma from "../../../../img/news/ddmaa.jpg";
import SecondaryNews from "./SecondaryNews";

function MainNews() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://evening-dawn-39552.herokuapp.com/api/mainnews");
      setItems(result.data.mainNews);
    };
    fetchData();
  }, []);

  return (
    <li>
      {items.map((item) => (
        <ul className="Main-news">
          <li id={item._id} key={item._id}>
            <Link to="/main/topnews">
              <img src={item.imageUrl} alt="" />
              <div className="Main-news-text">
                <p>{item.title.substring(0, 34)}...</p>
                <p>{item.description.substring(0, 400)}...</p>
              </div>
            </Link>
          </li>
        </ul>
      ))}
      <SecondaryNews />
    </li>
  );
}

export default MainNews;
