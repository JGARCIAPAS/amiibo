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

const App = () => {
  const [amiiboList, setAmiiboList] = useState<Amiibo | null>(null);
  useEffect(() => {
    fetch("https://amiiboapi.com/api/amiibo/")
      .then((response) => {
        if (!response.ok) {
          console.log("response error");
        }
        return response.json();
      })
      .then((data) => {
        setAmiiboList(data.amiibo);
      })
      .catch((error) => {
        console.error("fetch error", error);
      });
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {amiiboList ? (
        <div>
          <Header />
          <Routes>
            <Route
              path={"/amiibo"}
              element={<MenuSeries amiiboList={amiiboList} />}
            />
            <Route path={"/amiibo/:series"} element={<SeriesList />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default App;
