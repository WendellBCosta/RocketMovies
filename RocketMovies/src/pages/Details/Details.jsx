import { Container } from './styles'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

import { FiArrowLeft } from 'react-icons/fi'


export function Details() {
  return ( 
    <Container>
      <Header />

      <ButtonText
        icon={FiArrowLeft}
        title="Sair" 
      />

      <h1>Novo filme</h1>

      <Input 
        placeholder="Título" 
      />
      <Input
        type="number"
        placeholder="Sua nota (de 0 a 5)"
     />

    </Container>
   );
}