import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const DashBoard = () => {
  document.body.classList.add("backgroundDashboard");
  return (
    <>
      <Sidebar />
      <ContainerDashboard>
        <DashboardDiv>
          <SpanDash>Dashboard</SpanDash>
          <DivDashboard>
            <DashboardViewDiv className="saldoAtual">
              <DivSpanImg>
                <span>Saldo Atual</span>
                <img src="bank.png" width={"20px"} height={"20px"} />
              </DivSpanImg>
              <span>R$ 5.000,00</span>
            </DashboardViewDiv>
            <DashboardViewDiv className="receitas">
              <DivSpanImg>
                <span>Receitas</span>
                <img src="chart_ascending.png" width={"20px"} height={"20px"} />
              </DivSpanImg>
              <span>R$ 5.000,00</span>
            </DashboardViewDiv>
            <DashboardViewDiv className="despesas">
              <DivSpanImg>
                <span>Saldo Atual</span>
                <img
                  src="chart_descending.png"
                  width={"20px"}
                  height={"20px"}
                />
              </DivSpanImg>
              <span>R$ 5.000,00</span>
            </DashboardViewDiv>
            <DashboardViewDiv className="cartaoDeCredito">
              <DivSpanImg>
                <span>Cartao de Credito</span>
                <img src="credit_card.png" width={"20px"} height={"20px"} />
              </DivSpanImg>
              <span>R$ 5.000,00</span>
            </DashboardViewDiv>
          </DivDashboard>
        </DashboardDiv>
      </ContainerDashboard>
    </>
  );
};

const DivSpanImg = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const DashboardDiv = styled.div`
  font-family: "Lato", sans-serif;
  width: 90%;
  height: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 25px;
  border: 2px solid var(--tropical--indigo-);
`;

const DashboardViewDiv = styled.div`
  font-family: "Mukta", sans-serif;
  font-weight: 500;
  cursor: pointer;
  width: 12em;
  height: 4em;
  margin: 2.5em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
`;

const DivDashboard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const SpanDash = styled.span`
  margin-top: 2em;
  height: 1.2em;
  width: auto;
  font-size: 30px;
  font-weight: 400;
  border-bottom: 2px solid var(--aquamarine-);
`;

export default DashBoard;
