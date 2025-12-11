
import type { CartItem } from "../reducer/itemsReducer";

export const getProducts = async () => {
    const response = await fetch('http://localhost:8080/api/products');
    const products = await response.json();
    return products;
}

export const calculateTotal = (items: CartItem[] = []) => {
    return items.reduce(
        (accumulator: number, item: { product: { price: number; }; quantity: number; }) => accumulator + item.product.price * item.quantity
        , 0);
}