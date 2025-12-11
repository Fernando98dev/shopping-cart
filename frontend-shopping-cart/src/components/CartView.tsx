import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "../services/productService";
import type { CartItem } from "../reducer/itemsReducer";


interface Props {
    handlerDelete: Function,
    items?: CartItem[];
}
export const CartView = ({ handlerDelete, items }: Props) => {

    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

    const onDeleteProduct = (id: number) => {
        // console.log('eliminado producto')
        handlerDelete(id);
    }

    const onCatalog = () => {
        navigate('/catalog');
    }
    return (
        <>
            <h3 className="text-xl font-semibold mb-4">Carro de compras</h3>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Nombre</th>
                        <th className="border border-gray-300 px-4 py-2">Precio</th>
                        <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                        <th className="border border-gray-300 px-4 py-2">Total</th>
                        <th className="border border-gray-300 px-4 py-2">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map(item => (
                        <tr key={item.product.id} className="hover:bg-gray-100 even:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{item.product.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.product.price}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.quantity * item.product.price}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    onClick={() => onDeleteProduct(item.product.id)}
                                >
                                    eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 text-end font-bold" colSpan={3}>Total</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">{total}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
                onClick={onCatalog}
            >
                Seguir comprando
            </button>
        </>
    )
}
