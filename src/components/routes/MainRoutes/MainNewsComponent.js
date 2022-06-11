import React, { useEffect, useState } from "react";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";

function MainNewsComponent() {
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
      <main>
        {items.map((item) => (
          <li key={item._id} className="Main-news-list">
            <div>
              <SRLWrapper>
                <img src={item.imageUrl} alt="" />
              </SRLWrapper>
              <p>
                Опубліковано: {item.createdAt.substring(0, 10)} | {item.createdAt.substring(11, 16)}
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
}

export default MainNewsComponent;
