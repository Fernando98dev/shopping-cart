import { useNavigate } from "react-router-dom";
import type { Product } from "../reducer/itemsReducer";

interface Props {
    handler: (p: Product) => void;
    product: Product;
}

export const ProductCardView = ({ handler, product }: Props) => {

    const navigate = useNavigate();

    const onAddProduct = (product: Product) => {
        console.log(product);
        handler(product);
        navigate('/cart');
    }

    return (
        <>
            <div className="bg-white rounded shadow p-4">
                <div className="flex flex-col items-start">
                    <h5 className="text-lg font-semibold mb-2">{product.name}</h5>
                    <p className="mb-2">{product.description}</p>
                    <p className="mb-4 font-semibold">$ {product.price}</p>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => onAddProduct({ ...product })}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </>
    )
}
