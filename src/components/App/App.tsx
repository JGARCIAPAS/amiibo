import { useState, useEffect } from "react";
import "./App.css";
import MenuSeries from "../MenuSeries/MenuSeries";
import { Amiibo } from "../../interfaces/interfaces";
import Loading from "../Loading/Loading";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SeriesList from "../SeriesList/SeriesList";
import AmiiboItem from "../AmiiboItem/AmiiboItem";
import NotFound from "../NotFound/NotFound";

const App = () => {
  const [amiiboList, setAmiiboList] = useState<Amiibo | null>(null);
  const [amiiboSeries, setAmiiboSeries] = useState("");
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  useEffect(() => {
    Promise.all([
      fetch("https://amiiboapi.com/api/amiibo/"),
      fetch("https://amiiboapi.com/api/lastupdated/"),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        setAmiiboList(data[0].amiibo);
        setLastUpdate(data[1].lastUpdated);
      })
      .catch((error) => {
        console.error("fetch error", error);
      });
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleSeries = (seriesName: string) => {
    setAmiiboSeries(seriesName);
  };
  const resetSeriesName = () => {
    setAmiiboSeries("");
  };
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {amiiboList && lastUpdate ? (
        <div>
          <Header seriesName={amiiboSeries} resetSeriesName={resetSeriesName} />
          <Routes>
            <Route
              path="/amiibo/"
              element={<MenuSeries amiiboList={amiiboList} />}
            />
            <Route
              path="/amiibo/:series"
              element={<SeriesList amiiboSeries={handleSeries} />}
            />
            <Route path="/amiibo/:series/:item" element={<AmiiboItem />} />
            <Route path="/amiibo/*" element={<NotFound />} />
          </Routes>
          <Footer seriesName={amiiboSeries} lastUpdate={lastUpdate} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default App;
