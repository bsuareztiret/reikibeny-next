import { FC, useState } from "react";
import { PATH } from "../../utils/constants";

type PROPS = {
  subPage: string;
  setSubPage: (name: string) => void;
}

const NavbarAbout: FC<PROPS> = ({ subPage, setSubPage }) => {
  return (
    <nav className="list">
      <div className="flex-container-navbar">
        <div className="index-grid container">
          <button className={subPage === "What" ? "active-button" : ""} onClick={() => setSubPage("What")}>Qu'est-ce que le Reiki?</button>
          <button className={subPage === "Table" ? "active-button" : ""} onClick={() => setSubPage("Table")}>À table</button>
          <button className={subPage === "Approach" ? "active-button" : ""} onClick={() => setSubPage("Approach")}>Mon approche</button>
          <button className={subPage === "About" ? "active-button" : ""} onClick={() => setSubPage("About")}>Mon parcours</button>
        </div>
      </div>
    </nav>
  )
}
export default NavbarAbout;