import { useAtom } from 'jotai';
import { productsAtom, Product } from './atoms_ArrayOfObject.ts';
import { useState } from 'react';

const FirstComponent_Array = () => {
    const [products, setProducts] = useAtom(productsAtom);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const addProduct = () => {
        const newProduct: Product = {
            id: products.length + 1,
            name,
            price,
        };
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <h2>First Component</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <button onClick={addProduct}>Add Product</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default FirstComponent_Array;