interface DarkModeButtonProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = (DarkModeButtonProps) => {
  return (
    <div
      className={`slide-btn ${DarkModeButtonProps.darkMode ? "on" : "off"}`}
      onClick={DarkModeButtonProps.toggleDarkMode}
    >
      <div className="inner-circle">
        <i
          className={`fa-solid  icon-mode ${
            DarkModeButtonProps.darkMode ? "fa-moon" : "fa-sun"
          }`}
        ></i>
      </div>
    </div>
  );
};
export default DarkModeButton;
