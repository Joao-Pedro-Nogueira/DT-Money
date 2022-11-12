import styled from "styled-components";



// Componente SerchForm

export const SerachFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  
  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-900"]};
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]}
    }

    :focus {
      border: 1px solid ${props => props.theme["green-300"]}
    }
  }
`

export const SearchButton = styled.button`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  border: 1px solid ${props => props.theme["green-300"]};
  padding: 1rem;
  background-color: transparent;
  color: ${props => props.theme["green-300"]};
  font-weight: bold;
  border-radius: 6px;
  line-height: 160%;
  font-size: 1rem;

  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background-color: ${props => props.theme["green-500"]};
    border: 1px solid ${props => props.theme["green-500"]};
    color: ${props => props.theme["white"]};
  }
`