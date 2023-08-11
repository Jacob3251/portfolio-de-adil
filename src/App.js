import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import AnimatedCursor from "react-animated-cursor";
import Layout from "./Pages/Layout/Layout";
import Blogs from "./Pages/Blogs/Blogs";
import BlogLayout from "./Pages/Layout/BlogLayout";
import Footer from "./Pages/Footer/Footer";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
    },
    {
      path: "/blogs",
      element: <BlogLayout></BlogLayout>,
    },
  ]);

  return (
    <div>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={12}
        color="240, 230, 140"
        outerAlpha={0.6}
        innerScale={5}
        outerScale={5}
      /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
