interface AmiiboCardProps {
  name: string;
  img: string;
  series: string;
}

const encodeFileNames = (text: string) => {
  const removeSpaces = text.replace(/ /g, "_");
  const removeExclamations = removeSpaces.replace(/!/g, "");
  return removeExclamations;
};
const AmiiboCard: React.FC<AmiiboCardProps> = (AmiiboCardProps) => {
  return (
    <li className="amiibo-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="amiibo-card-image">
            <img
              src={AmiiboCardProps.img}
              alt={AmiiboCardProps.name}
              title={AmiiboCardProps.name}
            />
          </div>
          <div className="amiibo-card-name">
            <p>{AmiiboCardProps.name}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h3>{AmiiboCardProps.name}</h3>
          <p>Stickers available</p>
          <button>
            <a
              href={`img/cards/${encodeFileNames(
                AmiiboCardProps.name
              )}/${encodeFileNames(AmiiboCardProps.name)}.png`}
              download
            >
              85.5 mm x 54 mm Card
            </a>
          </button>
          <button>
            <a
              href={`img/coins/${encodeFileNames(
                AmiiboCardProps.name
              )}/${encodeFileNames(AmiiboCardProps.name)}.png`}
              download
            >
              25 mm Coin
            </a>
          </button>
        </div>
      </div>
    </li>
  );
};
export default AmiiboCard;
