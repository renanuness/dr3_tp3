


export default function ProductCard(props){
    const product = props.product;

    function setFavorite(){
        let saved = localStorage.getItem('saved');
        if(saved == null){
            saved = [];
        }

        saved.push(product.id);
        localStorage.setItem('saved', saved);
    }

    return (
        <div className="flex w-52 bg-gray-400 rounded-lg p-5 flex-col items-center">
            <img src={product.images[0]}/>
            <p className="text-center">{product.title}</p>
            <p className="text-center">R$ {product.price}</p>
            <p>{product.rating}/5</p>
            <div>
                <button className="rounded-md bg-green-200 p-2" onClick={()=>props.productDetail(product.id)}>Ver mais</button>
                <button className="rounded-md bg-orange-400-200 p-2" onClick={setFavorite}>Favoritar</button>
            </div>
        </div>
    )
}