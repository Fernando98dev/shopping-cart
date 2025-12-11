import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from './itemsActions';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export type TypeAction =
    | { type: 'AddProductCart', payload: Product }
    | { type: 'UpdateQuantityProductCart', payload: Product }
    | { type: 'DeleteProductCart', payload: number };


export interface CartItem {
    product: Product;
    quantity: number;
}
export const itemsReducer = (state: CartItem[] = [], action: TypeAction) => {

    switch (action.type) {
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];
        case UpdateQuantityProductCart:

            return state.map((i) => {
                if (i.product.id === action.payload.id) {
                    return {
                        ...i,
                        quantity: i.quantity + 1,
                    };
                }
                return i;
            });
        case DeleteProductCart:
            return state.filter((i) => i.product.id !== action.payload);

        default:
            return state;
    }
}