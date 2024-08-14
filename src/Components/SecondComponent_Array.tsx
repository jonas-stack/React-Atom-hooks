import { useAtom } from 'jotai';
import { productsAtom } from './atoms_ArrayOfObject.ts';

const SecondComponent_Array = () => {
    const [products, setProducts] = useAtom(productsAtom);

    const removeProduct = (id: number) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <h2>Second Component</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => removeProduct(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SecondComponent_Array;