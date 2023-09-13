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
          <DivTesteBorder></DivTesteBorder>
        </DashboardDiv>
      </ContainerDashboard>
    </>
  );
};

const DashboardDiv = styled.div`
  font-family: "Lato", sans-serif;
  width: 90%;
  height: 94%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 25px;
  border: 2px solid var(--tropical--indigo-);
`;
const DivTesteBorder = styled.div`
  clip-path: polygon(16% 91%, 100% 91%, 83% 100%, 0 100%);
  height: 2em;
  width: 10em;
  background-color: #000;
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
  font-size: 30px;
  font-weight: 400;
  border-bottom: 2px solid var(--aquamarine-);
`;
export default DashBoard;
