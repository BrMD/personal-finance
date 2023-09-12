import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const DashBoard = () => {
  document.body.classList.add("backgroundDashboard");
  return (
    <ContainerDashboard>
      <Sidebar />
    </ContainerDashboard>
  );
};

const ContainerDashboard = styled.div`
  display: flex;
`;

export default DashBoard;
