import styled, { ThemeConsumer } from "styled-components";

export const HeaderBackground = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  height: 13.25rem;
  width: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2.5rem;
`