import { Link } from "react-router-dom";

interface HeaderProps {
  seriesName: string;
  resetSeriesName: () => void;
}
const Header: React.FC<HeaderProps> = (HeaderProps) => {
  return (
    <div className="header-wrapper">
      <div className="header">
        {HeaderProps.seriesName ? (
          <div>
            <Link to={"/amiibo/"}>
              <button onClick={HeaderProps.resetSeriesName}>
                <i className="fa-brands fa-fort-awesome home-icon"></i>
              </button>
            </Link>
            <h1>{`${HeaderProps.seriesName}`}</h1>
          </div>
        ) : (
          <h1>Amiibo index</h1>
        )}
      </div>
    </div>
  );
};
export default Header;
