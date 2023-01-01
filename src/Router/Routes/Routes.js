import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AddCart from "../../Pages/Home/Products/AddCart";
import Details from "../../Pages/Home/Products/Details";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '*',
                element: <div className='text-center p-12 mt-6'>
                    <h1 className="text-2xl text-dark font-bold">404</h1>
                    <h2 className="text-2xl text-dark font-bold" >Oops!!! You're Lost 😥</h2>
                    <p className="text-2xl text-dark font-bold">The Page you are looking for was not found..................</p>
                </div>
            },
            {
                path: "/addcart/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <AddCart></AddCart>

            },

            {
                path: "/products/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <Details></Details>
            }
        ]
    }

])

export default router;