import React from "react";
import { Container, Title, List, PlayList } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <PlayList href="#">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Relaxe enquanto você programa</p>
      </PlayList>
      <PlayList href="#">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Relaxe enquanto você programa</p>
      </PlayList>
      <PlayList href="#">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Relaxe enquanto você programa</p>
      </PlayList>
      <PlayList href="#">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Relaxe enquanto você programa</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
