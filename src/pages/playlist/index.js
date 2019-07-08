import React from "react";
import { Container, Header, SongList } from "./styles";
import clockIcon from "../../assets/images/clock.svg";
import plusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button>Play</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={clockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={plusIcon} alt="Adicionar" />
          </td>
          <td>Tijolão</td>
          <td>Jorge e Matheus</td>
          <td>Arrocha 2019</td>
          <td>3:16</td>
        </tr>
        <tr>
          <td>
            <img src={plusIcon} alt="Adicionar" />
          </td>
          <td>Tijolão</td>
          <td>Jorge e Matheus</td>
          <td>Arrocha 2019</td>
          <td>3:16</td>
        </tr>
        <tr>
          <td>
            <img src={plusIcon} alt="Adicionar" />
          </td>
          <td>Tijolão</td>
          <td>Jorge e Matheus</td>
          <td>Arrocha 2019</td>
          <td>3:16</td>
        </tr>
        <tr>
          <td>
            <img src={plusIcon} alt="Adicionar" />
          </td>
          <td>Tijolão</td>
          <td>Jorge e Matheus</td>
          <td>Arrocha 2019</td>
          <td>3:16</td>
        </tr>
        <tr>
          <td>
            <img src={plusIcon} alt="Adicionar" />
          </td>
          <td>Tijolão</td>
          <td>Jorge e Matheus</td>
          <td>Arrocha 2019</td>
          <td>3:16</td>
        </tr>
        <tr>
          <td>
            <img src={plusIcon} alt="Adicionar" />
          </td>
          <td>Tijolão</td>
          <td>Jorge e Matheus</td>
          <td>Arrocha 2019</td>
          <td>3:16</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
