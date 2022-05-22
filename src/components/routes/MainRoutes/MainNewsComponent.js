import React, { useEffect, useState } from "react";
import axios from "axios";

function MainNewsComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://evening-dawn-39552.herokuapp.com/api/mainnews");
      console.log(result.data.mainNews[0]);
      setItems(result.data.mainNews);
    };
    fetchData();
  }, []);

  return (
    <main>
      {items.map((item) => (
        <li className="Main-news-list">
          <div>
            <img src={item.imageUrl} alt="" />
            <p>
              Опубліковано: {item.createdAt.substring(0, 10)}, {item.createdAt.substring(11, 16)}
            </p>
          </div>
          <div>
            <p>{item.title}</p>
            <pre>{item.description}</pre>
          </div>
        </li>
      ))}
    </main>
  );
}

export default MainNewsComponent;
