import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/services";
import ProductForm from "../../components/productForm";



export default function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        getProductById(id).then(res => {
            setProduct(res);
        })
    }, [])

    return (
        <div>
        { product ? 
            <ProductForm  product={product}/>
            : ''
        }
        </div>
    )
}