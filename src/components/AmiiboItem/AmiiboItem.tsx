import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AmiiboItem: React.FC = () => {
  const { item } = useParams();
  useEffect(() => {
    fetch(`https://amiiboapi.com/api/amiibo/?character=${item}&showusage`)
      .then((response) => {
        if (!response.ok) {
          console.log("response error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("fetch error", error);
      });
  }, [item]);
  return (
    <>
      <h1>{item}</h1>
    </>
  );
};
export default AmiiboItem;
