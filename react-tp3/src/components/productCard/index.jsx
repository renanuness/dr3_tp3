


export default function ProductCard(props){
    const product = props.product;

    return (
        <div className="flex w-52 bg-gray-400 rounded-lg p-5 flex-col items-center hover:cursor-pointer" onClick={()=>props.productDetail(product.id)}>
            <img src={product.images[0]}/>
            <p className="text-center">{product.title}</p>
            <p className="text-center">R$ {product.price}</p>
            <p>{product.rating}/5</p>
        </div>
    )
}