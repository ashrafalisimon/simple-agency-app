import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App