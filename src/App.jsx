import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutView from "./page/AboutView";
import CartView from "./page/CartView";
import HomeView from "./page/HomeView";
import OrderView from "./page/OrderView";
import ProductView from "./page/ProductView";
import PublicLayout from "./layouts/PublicLayout";

import LoginView from "./page/auth/LoginView";
import RegisterView from "./page/auth/RegisterView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },

      {
        path: "about",
        element: <AboutView />,
      },

      {
        path: "cart",
        element: <CartView />,
      },

      {
        path: "orders",
        element: <OrderView />,
      },

      {
        path: "products",
        element: <ProductView />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
