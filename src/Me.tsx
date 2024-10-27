import { useEffect, useState } from "react";

function Me() {
  const [data, setData] = useState("");
  console.log("data", data);
  useEffect(() => {
    const fetchData = async () => {
      const delayedData = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("this is some data");
        }, 1000);
      });
      if (delayedData) {
        setData(delayedData);
      }
    };
    fetchData();
  }, []);

  return <div>{data ? data : "loading"}</div>;
}

export default Me;
