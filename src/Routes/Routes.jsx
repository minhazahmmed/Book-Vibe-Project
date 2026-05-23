import { createBrowserRouter } from "react-router";
import Roots from "../pages/Root/Roots";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import Readlist from "../pages/Readlist/Readlist";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
        },
        {
          path: '/about',
          Component: About,
        },
        {
          path: '/readlist',
          Component: Readlist,
        },
        {
          path: '/bookDetails/:id',
          loader: ()=> fetch('booksData.json'),
          Component: BookDetails,
        },
       
    ]
  },
]);