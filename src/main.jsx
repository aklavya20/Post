import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Component1 from "./Component/Component1.jsx";
import Component2 from "./Component/Component2.jsx";

import AboutUs from "./Component/AboutSection.jsx/AboutUs.jsx";
import ContactUs from "./Component/AboutSection.jsx/ContatUs.jsx";
import Home from "./Component/Home.jsx";
import Error from "./Component/Error.jsx";
import Users from "./Component/Users.jsx";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <Error />,
//   },
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "aboutus",
//         element: <AboutUs />,
//         children: [
//           {
//             path: "path1",
//             element: <Component1 />,
//           },
//           {
//             path: "path2",
//             element: <Component2 />,
//           },
//         ],
//       },
//       {
//         path: "contactus",
//         element: <ContactUs />,
//       },
//       {
//         path: "users/:name",
//         element: <Users />,
//       },
//     ],
//   },
// ]);
createRoot(document.getElementById("root")).render(<App />);
