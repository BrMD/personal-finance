import { useEffect, useState, useRef } from "react";

import styled from "styled-components";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(function () {
    const handler = (e: Event) => {
      if (!menuRef.current.contains(e.target)) setMenuActive(false);
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {menuActive ? (
        <SidebarDiv
          className={`sidebar-menu ${menuActive ? "active" : ""}`}
          ref={menuRef}
        >
          <MenuUl>
            <UserDiv>
              <UserNameDiv>
                <a href="#">Matheus</a>
              </UserNameDiv>
              <UserImgDiv>
                <ImgUser src="user_icon.png" />
              </UserImgDiv>
              <DivSignOut>
                <a href="#">Sign Out</a>
              </DivSignOut>
            </UserDiv>
            <li>
              <Linkli href="#">Home</Linkli>
            </li>
            <li>
              <Linkli href="#">About</Linkli>
            </li>
            <li>
              <Linkli href="#">Services</Linkli>
            </li>
            <li>
              <Linkli href="#">Contact</Linkli>
            </li>
          </MenuUl>
        </SidebarDiv>
      ) : (
        <ButtonSidebar onClick={() => setMenuActive(true)}>
          <LineButton></LineButton>
          <LineButton></LineButton>
          <LineButton></LineButton>
        </ButtonSidebar>
      )}
    </>
  );
};

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DivSignOut = styled.div`
  && a {
    text-decoration: none;
    font-size: 12px;
    color: var(--tropical--indigo-);
  }
`;
const UserNameDiv = styled.div`
  margin: 3em 0 0.5em 0;
  padding: 0;
  && > a {
    color: var(--tropical--indigo-);
    padding: 0px;
    text-decoration: none;
  }
`;
const UserImgDiv = styled.div`
  overflow: hidden;
  border: 2px solid var(--black--olive-);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  border-radius: 100%;
  align-items: center;
`;
const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 6px;
`;
const SidebarDiv = styled.div`
  border-right: 2px solid var(--tropical--indigo-);
  font-family: "Mukta", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #f2f2f2;
  padding: 20px;
  overflow-y: auto;
  z-index: 999;
`;

const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;

  && li {
    margin-bottom: 10px;
  }
`;

const Linkli = styled.a`
  display: block;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #000000;
`;
const ButtonSidebar = styled.button`
  cursor: pointer;
  position: absolute;
  border: none;
  top: 5%;
  left: 1.5%;
`;
const LineButton = styled.div`
  width: 13px;
  margin: 2px;
  height: 2px;
  background: #000;
`;
export default Sidebar;
