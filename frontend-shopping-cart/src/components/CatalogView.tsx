import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";
import type { Product } from "../reducer/itemsReducer";

interface Props {
    handler: (product: Product) => void;
}
export const CatalogView = ({ handler }: Props) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const findAll = async (): Promise<void> => {
        try {
            const prods = await getProducts();
            setProducts(prods);
            setIsLoading(false);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(
        () => {
            findAll();
        }, []);
    return (
        <>
            {
                isLoading &&
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">Loading...</div>
            }
            <div className="flex flex-wrap -mx-2">
                {products.map((prod) => (
                    <div key={prod.id} className="w-1/3 px-2 my-2">
                        <ProductCardView handler={handler} product={prod} />
                    </div>
                ))}
            </div>
        </>
    );
}