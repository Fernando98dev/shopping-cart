import { useEffect, useReducer } from "react";
import { itemsReducer, type CartItem, type Product } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const inititalCartItems: CartItem[] = JSON.parse(sessionStorage.getItem('cart') || '[]');

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product: Product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
        } else {
            dispatch({
                type: AddProductCart,
                payload: product,
            });
        }
    }

    const handlerDeleteProductCart = (id: number) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}