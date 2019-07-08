/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, NewPlayList, Nav } from "./styles";
import addPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="">Navegar</a>
          </li>
          <li>
            <a href="">Rádio</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>SUA BIBLIOTECA</span>
          </li>
          <li>
            <a href="">Seu Daily Mix</a>
          </li>
          <li>
            <a href="">Tocados Recentemente</a>
          </li>
          <li>
            <a href="">Músicas</a>
          </li>
          <li>
            <a href="">Álbuns</a>
          </li>
          <li>
            <a href="">Artistas</a>
          </li>
          <li>
            <a href="">Estações</a>
          </li>
          <li>
            <a href="">Arquivos Locais</a>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Podcasts</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>PLAYLIST</span>
          </li>
          <li>
            <a href="">Meu Arrocha</a>
          </li>
          <li>
            <a href="">Melhores do rock</a>
          </li>
        </Nav>
      </div>
      <NewPlayList>
        <img src={addPlaylistIcon} alt="Adicionar Playlist" />
        Nova playlist
      </NewPlayList>
    </Container>
  );
};

export default Sidebar;
