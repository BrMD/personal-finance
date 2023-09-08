import styled from "styled-components";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  return (
    <Container>
      <FormLogin
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <InputLogin
          {...(register("login"), { required: true })}
          placeholder="Login"
        />
        <span></span>
        <InputLogin
          {...(register("senha"), { required: "This field is required" })}
          placeholder="Senha"
        />
        {errors.senha?.type === "required" && <span>"Senha is required"</span>}
        <InputLogin type="submit" />
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

const InputLogin = styled.input`
  width: 10em;
  height: 2em;
`;
export default App;
