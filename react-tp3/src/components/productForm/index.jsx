import { productSchema } from "../../validations/productValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

export default function ProductForm(props){
    const product = props.product;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ 
        defaultValues: {...product},
        resolver: yupResolver(productSchema) });

    const onSubmit = async (data) => {
        await (data);
    };

    useEffect(()=>{
        console.log(product);
    }, []);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Título" {...register("title")} />
            <p>{errors.title?.message}</p>

            <br />
            <br />

            <input
                type="text"
                placeholder="Descrição"
                {...register("description")}
            />
            <p>{errors.description?.message}</p>
            <br />
            <br />

            <input
                type="text"
                placeholder="Preço"
                {...register("price")}
            />
            <p>{errors.price?.message}</p>
        </form>
    )
} 