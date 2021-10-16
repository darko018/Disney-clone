import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://cdn.vox-cdn.com/thumbor/K_gXqgjL3uJ1H_NwYmRAFCR-syU=/0x0:4096x2304/920x613/filters:focal(1973x1175:2627x1829):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png" />
      </ImageTitle>
      <Controls>
        <PlayButton></PlayButton>
        <TrailerButton></TrailerButton>
        <AddButton></AddButton>
        <GroupWatchButton></GroupWatchButton>
      </Controls>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh -70px);
  padding: 0 calc(3.5vw +5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div``;

const PlayButton = styled.button``;

const TrailerButton = styled.button``;

const AddButton = styled.button``;

const GroupWatchButton = styled.button``;
