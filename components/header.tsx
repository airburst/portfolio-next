import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  height: 3rem;
  padding: 1rem;
`;

const Nav = styled.nav`
  & a {
    text-transform: uppercase;
    color: #464646;

    &:hover {
      color: #262626;
      text-decoration: underline;
    }
  }
`;

export default function Navbar() {
  return (
    <Header>
      <Nav>
        <Link href="/">
          <a>Photos</a>
        </Link>
      </Nav>
    </Header>
  );
}
