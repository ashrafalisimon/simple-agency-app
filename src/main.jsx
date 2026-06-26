import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import 'sweetalert2/dist/sweetalert2.js';
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./context/AuthContext";
import './index.css';
import Blogs from "./pages/blogs/Blogs";
import Dashbord from "./pages/Dashbord/Dashbord";
import Home from "./pages/home/Home";
import Priceing from "./pages/home/Priceing";
import ServicesSection from "./pages/home/ServicesSection";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pricing", element: <Priceing /> },
      { path: "/services", element: <ServicesSection /> },
      { path: "/blogs", element: <Blogs /> },
      // error page
      { path: "*", element: <ErrorPage /> },
    ],
  },
  // authiication
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },

  // dashbord
  { path: "/dashbord", element: <PrivateRoute><Dashbord /></PrivateRoute> }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
