import styled from "styled-components";

export const TechieNav = styled.nav`
  background: #8c54fc;
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

export const TechieLinks = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  & > a {
    color: #fff;
    text-decoration: none;
  }
`;
