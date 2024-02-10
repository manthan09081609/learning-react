import { Outlet } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Outlet />
    </UserContextProvider>
  );
}

export default App;
