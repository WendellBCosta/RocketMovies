import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return ( 
    <Container>
      <a href="/">RocketMovies</a>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <span>Axel Selbach</span>
          <a>sair</a>
        </div>
        <img src="https://github.com/AxelSelbach.png" alt="Foto do usuário" />

      </Profile>      
    </Container>
   );
}