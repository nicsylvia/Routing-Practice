import React from 'react'
import { useRoutes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Docs from './Docs';
import FirstRoute from './FirstRoute';



import Home from './Home';
import NotFound from './NotFound';

const AllRoutes = () => {

    let element = useRoutes([
        {
            path: "/",
            element : <Home />
        },

        {
            path: "/about",
            element: <About />
        },

        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/docs",
            children : [
                {
                    index: true,
                    element: <Docs />
                },
                {
                    path: "Gettingstarted",
                    element: <FirstRoute />
                }
            ]
        },
        {
            path: "*",
            element : <NotFound />
        }
    ]);

   return element;
  
}

export default AllRoutes