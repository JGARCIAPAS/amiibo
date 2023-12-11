import { Link } from "react-router-dom";
import { Amiibo } from "../../interfaces/interfaces";
interface MenuSeriesProps {
  amiiboList: Amiibo;
}

const MenuSeries: React.FC<MenuSeriesProps> = (MenuSeriesProps) => {
  //console.log("los amiibo son: ", MenuSeriesProps.amiiboList);
  const AmiiboSeriesSet = new Set<string>();
  if (
    Array.isArray(MenuSeriesProps.amiiboList) &&
    MenuSeriesProps.amiiboList.length > 0
  ) {
    MenuSeriesProps.amiiboList.forEach((amiibo) => {
      AmiiboSeriesSet.add(amiibo.amiiboSeries);
    });
  }
  const AmiiboSeriesArray = Array.from(AmiiboSeriesSet);
  const AmiiboSeriesArrayOrdered = AmiiboSeriesArray.sort((a, b) =>
    a.localeCompare(b, "es", { sensitivity: "base" })
  );
  //console.log(AmiiboSeriesArrayOrdered);
  return (
    <div className="body-content">
      <ul className="nav-menu">
        {AmiiboSeriesArrayOrdered.map((series, index) => (
          <Link key={index} to={`${encodeURIComponent(series)}`}>
            <li className={`nav-item nav-item-${index + 1}`}>
              <p>{series}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default MenuSeries;
