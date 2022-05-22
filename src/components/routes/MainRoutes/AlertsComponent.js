import React, { useEffect, useState } from "react";
import axios from "axios";

function AlertsComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://evening-dawn-39552.herokuapp.com/api/alertsnews");
      setItems(result.data.allAlertsNews);
    };
    fetchData();
  }, []);

  var str = window.location.href;
  var from = str.search("/alertsnews/");
  var to = str.length;
  const newsid = str.substring(from, to).split("/alertsnews/").join("");

  const object = items.find((element) => element._id === newsid);

  if (object !== undefined) {
    return (
      <main>
        <ul>
          <li className="News-list">
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

export default AlertsComponent;
