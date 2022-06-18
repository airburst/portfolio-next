import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  height: 5rem;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export default function Footer() {
  return <StyledFooter>&copy; 2022 Mark Fairhurst</StyledFooter>;
}
