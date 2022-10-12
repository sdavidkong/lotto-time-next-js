import React from "react";
import Link from "next/link";
import navStyles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Enter Lotto!</Link>
        </li>
        <li>
          <Link href="/how">How Does it Work?</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
