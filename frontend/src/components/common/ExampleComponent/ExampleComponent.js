import { useState, useEffect } from "react";
import { exampleAPI } from "../../../apis";

const ExampleComponent = () => {
  const [data, setData] = useState([]);
  async function FetchExample() {
    try {
      const response = await fetch(exampleAPI);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    FetchExample();
  }, []);

  return (
    <div>
      <h1>Example Component</h1>
      <p>API URL: {exampleAPI}</p>
      <ul>
        {data.map((item, index) => (
          <div key={index}>
            <p>-----</p>
            <li>{item.ID}</li>
            <li>{item.NAME}</li>
            <li>{item.AGE}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
