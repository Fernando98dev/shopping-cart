import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "../components/CartView"
import { CatalogView } from "../components/CatalogView"
import type { CartItem, Product } from "../reducer/itemsReducer";


interface Props {
    handlerAddProductCart: (product: Product) => void,
    handlerDeleteProductCart: (id: number) => void,
    cartItems?: CartItem[];
}
export const CartRoutes = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems = [] }: Props) => {
    return (
        <Routes>
            <Route
                path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />}
            />

            <Route path="cart" element={(
                cartItems?.length <= 0 ?
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 text-yellow-700 font-bold" role="alert">No hay productos en el carrito de compras!</div>
                    :
                    (
                        <div className="my-4 w-1/2">
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
            )} />

            <Route path="/" element={<Navigate to={'/catalog'} />} />

        </Routes>
    )
}