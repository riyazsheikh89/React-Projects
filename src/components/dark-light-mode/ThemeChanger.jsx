import "./Theme.css"
import useLocalStorage from "./useLocalStorage";

const ThemeChanger = () => {
    const [theme, setTheme] = useLocalStorage("curr_theme", "light");

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }


    return (
      <div className="dark-light-mode" data-theme={theme}>
        <div className="theme-changer-container">
          <h1>Theme changer (Dar/Light) Component</h1>
          <button id="toggle-button" onClick={toggleTheme}>Change theme</button>
        </div>
      </div>
    );
}

export default ThemeChanger;
