import * as yup from "yup";

const userSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(6),
    email: yup.string().email().required(),
})