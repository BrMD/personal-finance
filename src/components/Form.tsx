import styled from "styled-components";
// import { zod } from "Zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";

const loginSchema = z.object({
  login: z.string().min(1, { message: "Login is required" }),
  senha: z.string().min(1, { message: "Senha is required" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const onSubmit: SubmitHandler<LoginSchema> = (data) => console.log(data);

  return (
    <Container>
      <FormLogin onSubmit={handleSubmit(onSubmit)}>
        <InputField {...register("login")} placeholder="Login" />
        {errors.login && <p>{errors.login.message}</p>}
        <InputField {...register("senha")} placeholder="senha" />
        {errors.senha && <p>{errors.senha.message}</p>}
        <InputField type="submit" />
      </FormLogin>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const InputField = styled.input`
  width: 10em;
  height: 2em;
`;
export default Form;
