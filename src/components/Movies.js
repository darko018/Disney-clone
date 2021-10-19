import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recomended for You</h4>
      <Content>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap>
        {/* <Wrap>
          <img src="https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rhorizontal.w700.jpg" />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
  }
`;
