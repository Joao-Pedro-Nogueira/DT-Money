import { BasicButtonContainer } from "./styles";

interface BasicButtonProps {
  content: string;
}

export function BasicButton({content}: BasicButtonProps) {
  return (
    <BasicButtonContainer>
      {content}
    </BasicButtonContainer>
  )
}