import { useEffect, useState } from "react";
import { getProductById } from "../../services/services";
import { useNavigate, useParams } from "react-router-dom";
import Modal from 'react-modal';

export default function ProductDetail() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    useEffect(() => {
        getProductById(id).then(
            res => {
                setProduct(res);
            }
        )
    })

    function goToEdit(){
        navigate("/editProduct/"+product.id);
    }
    Modal.setAppElement('#container');

    return (
        <div id="container">
            {/* <img className="w-48" src={product?.images[0]}/> */}
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
            <div className="flex flex-col items-start justify-center">
                <p>Avaliações</p>
                {product.reviews?.map((review) => {
                    return (
                        <div className="border">
                            <p>{review.reviewerName}</p>
                            <p>{review.rating}</p>
                            <p>{review.comment}</p>
                        </div>)
                }
                )}
            </div>
            <div>
                <button onClick={goToEdit} className="rounded-md bg-green-200 p-2">Editar</button>
                <button onClick={openModal} className="rounded-md bg-red-200 p-2">Excluir</button>
            </div>
        </div>
    )
}