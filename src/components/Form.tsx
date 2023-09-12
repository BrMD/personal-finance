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
        <DivForm>
          <InputField
            className={`${errors.login ? "errorFormColor" : "normalFormColor"}`}
            {...register("login")}
            placeholder="Login"
          />
          {errors.login && <p>{errors.login.message}</p>}
        </DivForm>
        <DivForm>
          <InputField
            className={`${errors.senha ? "errorFormColor" : "normalFormColor"}`}
            {...register("senha")}
            placeholder="Senha"
          />
          {errors.senha && <p>{errors.senha.message}</p>}
        </DivForm>
        <SpanCreateAccount>
          You dont have an account, create one <a href="#">Here!</a>
        </SpanCreateAccount>
        <ButtonForm type="submit">Enviar</ButtonForm>
      </FormLogin>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormLogin = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivForm = styled.div`
  font-family: "Hind", sans-serif;
  height: 5.5em;
  display: flex;
  align-items: center;
  flex-direction: column;
  && p {
    margin: 0.3em 0 0 0;
    color: var(--red--light-);
  }
`;
const InputField = styled.input`
  font-size: 15px;
  border: 2px solid;
  border-radius: 12px;
  padding: 0.7em;
  width: 14em;
  height: 2em;
  transition: all 0.5s;
  outline: none;
  &&:focus {
    border-color: var(--aquamarine-);
    color: #000;
  }
`;
const ButtonForm = styled.button`
  width: 8.5em;
  height: 2.5em;
  cursor: pointer;
  color: #fff;
  border-radius: 10px;
  border: none;
  background: var(--green--dark-);
  transition: all 0.5s;
  &&:hover {
    background: #41fa7e;
  }
`;
const SpanCreateAccount = styled.span`
  margin: 0 0 1em 0;
  font-size: 0.9em;
  font-weight: 400;
  font-family: "Mukta", sans-serif;
  && > a {
    text-decoration: none;
    color: var(--aquamarine-);
  }
`;
export default Form;
