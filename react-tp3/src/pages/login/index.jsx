import { loginSchema } from "../../validations/userValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const verifyUserCredentials = (email, password) => {
    if (
      email === "corinthians123@gmail.com" &&
      password === "vaicurintia123!"
    ) {
      return "success";
    } else {
      return "fail";
    }
  };

  const onSubmit = (data) => {
    const response = verifyUserCredentials(data.email, data.password); //seria feito assim caso estivesse utilizando uma API real.

    if (response === "success") {
      alert("Login realizado com sucesso.");
    } else {
      alert("Erro ao realizar login.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="E-mail" {...register("email")} />
        <p>{errors.email?.message}</p>

        <br />
        <br />

        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
}
