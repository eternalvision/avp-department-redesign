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

  if (items !== undefined) {
    return (
      <li>
        <ul className="Main-news">
          {items.map((item) => (
            <li id={item._id} key={item._id}>
              <Link to={`/topnews/${item._id}`}>
                <img src={item.imageUrl} alt="" />
                <div className="Main-news-text">
                  <p>{item.title.substring(0, 34)}...</p>
                  <p>{item.description.substring(0, 400)}...</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <SecondaryNews />
      </li>
    );
  }
}

export default MainNews;
