import { useParams } from "react-router-dom";

/* interface SeriesListProps {
  series: string;
} */

const SeriesList /* : React.FC<SeriesListProps> */ = () => {
  const { series } = useParams();

  fetch(`https://amiiboapi.com/api/amiibo/?amiiboSeries=${series}`)
    .then((response) => {
      if (!response.ok) {
        console.log("response error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.amiibo);
    })
    .catch((error) => {
      console.error("fetch error", error);
    });

  return (
    <>
      <h1>{series}</h1>
    </>
  );
};
export default SeriesList;
