import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AlertsNews() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://evening-dawn-39552.herokuapp.com/api/alertsnews");
      setItems(result.data.allAlertsNews);
    };
    fetchData();
  }, []);

  return (
    <ul className="Second-news">
      {items.map((item) => (
        <Link to={`/alertsnews/${item._id}`} key={item._id}>
          <li>
            <img src={item.imageUrl} alt="" />
            <div className="Second-news-text">
              <p>{item.title.substring(0, 15)}...</p>
              <p>{item.description.substring(0, 130)}...</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default AlertsNews;
