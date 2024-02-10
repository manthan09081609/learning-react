import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  // Actual Change in Theme
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <div className="flex flex-wrap h-screen w-full justify-center p-20 items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
