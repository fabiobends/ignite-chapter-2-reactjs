import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface ModalProps {
  onNewTransactionModal: () => void;
}

export function Header({ onNewTransactionModal }: ModalProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onNewTransactionModal}>
          Nova transferência
        </button>
      </Content>
    </Container>
  );
}
