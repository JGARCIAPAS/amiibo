interface FooterProps {
  seriesName: string;
  lastUpdate: Date;
}

const Footer: React.FC<FooterProps> = (FooterProps) => {
  const date = new Date(FooterProps.lastUpdate);
  const formattedDate = date.toLocaleDateString("es-ES");
  return (
    <div className="footer">
      {FooterProps.seriesName ? (
        <p>Select an Amiibo</p>
      ) : (
        <p>{`Last update: ${formattedDate}`}</p>
      )}
    </div>
  );
};
export default Footer;
