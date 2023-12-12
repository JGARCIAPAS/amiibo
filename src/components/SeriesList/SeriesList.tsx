import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Amiibo } from "../../interfaces/interfaces";

interface SeriesListProps {
  amiiboSeries: (seriesName: string) => void;
}

const sortByAlphabeticalOrder = (array: Amiibo[]) => {
  return array.sort((a, b) => a.name.localeCompare(b.name));
};
const filterAndSortByType = (type: string, array: Amiibo[]) => {
  const filteredType = array.filter(
    (item) => item.type.toLowerCase() === type.toLowerCase()
  );
  return sortByAlphabeticalOrder(filteredType);
};
const SeriesList: React.FC<SeriesListProps> = (SeriesListProps) => {
  const { series } = useParams();
  const [amiiboFigures, setAmiiboFigures] = useState<Amiibo[]>([]);
  const [amiiboCards, setAmiiboCards] = useState<Amiibo[]>([]);
  const [amiiboYarns, setAmiiboYarns] = useState<Amiibo[]>([]);

  useEffect(() => {
    SeriesListProps.amiiboSeries(series as string);
    fetch(`https://amiiboapi.com/api/amiibo/?amiiboSeries=${series}`)
      .then((response) => {
        if (!response.ok) {
          console.log("response error");
        }
        return response.json();
      })
      .then((data) => {
        setAmiiboFigures(filterAndSortByType("Figure", data.amiibo));
        setAmiiboCards(filterAndSortByType("Card", data.amiibo));
        setAmiiboYarns(filterAndSortByType("Yarn", data.amiibo));
      })
      .catch((error) => {
        console.error("fetch error", error);
      });
  }, [SeriesListProps, series]);

  console.log("las figuras son: ", amiiboFigures);
  console.log("las cartas son: ", amiiboCards);
  console.log("las cintas son: ", amiiboYarns);
  return (
    <div className="body-content">
      {/*       <ul className="amiibo-list">
        {amiiboList?.map((amiibo, index) => (
          <li key={index}>
            <img src={amiibo.image} alt={amiibo.name} title={amiibo.name} />
            <p>{amiibo.name}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default SeriesList;
