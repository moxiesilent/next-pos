import { useCartDispatch } from "@/context/CartContext";
import styles from "./index.module.css"
import Image from "next/image";

const ProductList = ({products}) => {
    const dispatch = useCartDispatch()

    const handleAddToCart = product => {
        dispatch({
            type: 'add',
            payload: product
        })
    }
    return ( 
        <div className={styles['product-list']}>
            {products.map((product, index) => {
                return (
                    <div
                        key={index}
                        className={styles['product-list__product-card']}
                    >
                        <div className={styles['product-list__product-card__image']}>
                            <Image 
                                src={product.img_product}
                                alt={product.name}
                                fill
                                style={{objectFit: 'contain'}}
                            />
                        </div>
                        <div className={styles['product-list__product-card__desc']}>
                            <p>{product.name}</p>
                            <button onClick={() => handleAddToCart(product)}>+</button>
                        </div>

                    </div>
                )
            })}
        </div>
     );
}
 
export default ProductList;