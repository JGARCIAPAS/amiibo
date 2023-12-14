import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  const [amiiboBands, setAmiiboBands] = useState<Amiibo[]>([]);
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
        setAmiiboBands(filterAndSortByType("Band", data.amiibo));
        setAmiiboYarns(filterAndSortByType("Yarn", data.amiibo));
      })
      .catch((error) => {
        console.error("fetch error", error);
      });
  }, [SeriesListProps, series]);

  return (
    <div className="body-content">
      {amiiboFigures.length != 0 ? (
        <div className="amiibo-block-type">
          <div className="amiibo-name-type">
            <h2>Figures</h2>
          </div>
          <ul className="amiibo-list">
            {amiiboFigures?.map((amiibo, index) => (
              <li key={index}>
                <Link to={encodeURIComponent(amiibo.name)}>
                  <img
                    src={amiibo.image}
                    alt={amiibo.name}
                    title={amiibo.name}
                  />
                  <p>{amiibo.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
      {amiiboCards.length != 0 ? (
        <div className="amiibo-block-type">
          <div className="amiibo-name-type">
            <h2>Cards</h2>
          </div>
          <ul className="amiibo-list">
            {amiiboCards?.map((amiibo, index) => (
              <li key={index}>
                <Link to={encodeURIComponent(amiibo.name)}>
                  <img
                    src={amiibo.image}
                    alt={amiibo.name}
                    title={amiibo.name}
                  />
                </Link>
                <p>{amiibo.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
      {amiiboYarns.length != 0 ? (
        <div className="amiibo-block-type">
          <div className="amiibo-name-type">
            <h2>Yarns</h2>
          </div>
          <ul className="amiibo-list">
            {amiiboYarns?.map((amiibo, index) => (
              <li key={index}>
                <Link to={amiibo.name}>
                  <img
                    src={amiibo.image}
                    alt={amiibo.name}
                    title={amiibo.name}
                  />
                </Link>
                <p>{amiibo.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}

      {amiiboBands.length != 0 ? (
        <div className="amiibo-block-type">
          <div className="amiibo-name-type">
            <h2>Bands</h2>
          </div>
          <ul className="amiibo-list">
            {amiiboBands?.map((amiibo, index) => (
              <li key={index}>
                <Link to={amiibo.name}>
                  <img
                    src={amiibo.image}
                    alt={amiibo.name}
                    title={amiibo.name}
                  />
                </Link>
                <p>{amiibo.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default SeriesList;
