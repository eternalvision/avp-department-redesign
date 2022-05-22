import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://evening-dawn-39552.herokuapp.com/api/news");
      setItems(result.data.allNews);
    };
    fetchData();
  }, []);

  var str = window.location.href;
  var from = str.search("/news/");
  var to = str.length;
  const newsid = str.substring(from, to).split("/news/").join("");

  const object = items.find((element) => element._id === newsid);

  if (object !== undefined) {
    return (
      <main>
        <ul>
          <li key={object._id} className="News-list">
            <div>
              <img src={object.imageUrl} alt="" />
            </div>
            <div>
              <p>{object.title}</p>
              <pre>{object.description}</pre>
              <p>
                Опубліковано: {object.createdAt.substring(0, 10)}, {object.createdAt.substring(11, 16)}
              </p>
            </div>
          </li>
        </ul>
      </main>
    );
  }
}

export default NewsComponent;
