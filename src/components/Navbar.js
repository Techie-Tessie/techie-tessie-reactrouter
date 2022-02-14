import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./Navbar.styled";

export const Navbar = () => {
  return (
    <styles.TechieNav>
      <styles.TechieLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </styles.TechieLinks>
    </styles.TechieNav>
  );
};
