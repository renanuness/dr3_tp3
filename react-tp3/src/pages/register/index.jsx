import { registerSchema } from "../../validations/userValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const registerUser = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 1000);
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data); // Chama a função de registro mockada

      if (response === "success") {
        alert("Cadastro realizado com sucesso!");
        navigate("/login"); // Redireciona para a página de login após sucesso
      } else {
        alert("Erro ao realizar cadastro.");
      }
    } catch (error) {
      alert("Erro inesperado: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome" {...register("name")} />
        <p>{errors.name?.message}</p>

        <input placeholder="E-mail" {...register("email")} />
        <p>{errors.email?.message}</p>

        <br />
        <br />

        <input
          placeholder="Digite sua senha"
          {...register("password")}
          type="password"
        />
        <p>{errors.password?.message}</p>

        <button>Enviar</button>
      </form>
    </div>
  );
}
