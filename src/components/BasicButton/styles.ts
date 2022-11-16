import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const BasicButtonContainer = styled(Dialog.Trigger)`
  height: 3.125rem;
  padding: 0.75rem 1.25rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
  transition: background-color 0.2s;
  border-radius: 6px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
