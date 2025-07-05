import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./Components/Error";
import IndexPage from "./IndexPage";
import ProductPage from "./Product/ProductPage";
import ProductPageId from "./Product/ProductPageId";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/",
      element: <IndexPage />,
      children: [
        {
          path: "products",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "/product/:id",
      element: <ProductPageId />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
