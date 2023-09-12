import { useEffect, useState } from "react";
import { isButtonElement } from "react-router-dom/dist/dom";

import styled from "styled-components";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(function () {
    const closeSidebar = (e: MouseEvent) => {
      const eventPath = e.composedPath();
      console.log(eventPath);
      if (isButtonElement(eventPath[0])) setMenuActive(false);
    };

    document.body.addEventListener("click", closeSidebar);
    return () => document.body.removeEventListener("click", closeSidebar);
  }, []);

  return (
    <>
      {menuActive ? (
        <SidebarDiv
          className={`${menuActive ? "menuActive" : "menuDeactivated"}`}
        >
          <MenuUl>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </MenuUl>
        </SidebarDiv>
      ) : (
        <button onClick={() => setMenuActive(true)}>active</button>
      )}
    </>
  );
};

const SidebarDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: #f2f2f2;
  padding: 20px;
  overflow-y: auto;
  z-index: 999;
`;

const MenuUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  && li {
    margin-bottom: 10px;
  }
  && a {
    display: block;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: #000000;
  }
  && a:hover {
    background-color: #333;
    color: #fff;
  }
`;
export default Sidebar;
