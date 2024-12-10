import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop.jsx";
import ProductListPage from "./pages/ProductListPage/ProductListPage.jsx";
import ShopAppWrapper from "./pages/ShopAppWrapper.jsx";
import ProductDetails from "./pages/ProductDetailsPage/ProductDetails.jsx";
import { loadProductById } from "./routes/Products.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopAppWrapper />,
        children: [
            {
                path: "/",
                element: <Shop />
            },
            {
                path: "/women",
                element: <ProductListPage categoryType={'WOMEN'}/>
            },
            {
                path: "/men",
                element: <ProductListPage categoryType={'MEN'}/>
            },
            {
                path: "/product/:productId",
                loader: loadProductById,
                element: <ProductDetails />
            }
        ]
    }
]);
