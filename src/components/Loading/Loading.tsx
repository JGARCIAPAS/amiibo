const Loading = () => {
  return (
    <div className="background-loading">
      <div className="loading-container">
        <img src="img/mario.gif" />
        <div className="screen-text">
          <div className="loading-text">
            <p className="text-1">Loading</p>
            <p className="text-2">.</p>
            <p className="text-3">.</p>
            <p className="text-3">.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
