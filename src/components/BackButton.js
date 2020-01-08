import { Button } from "react-bootstrap";
import Router from "next/router";
import styled from "styled-components";

const BackButtonContainer = styled.div`
  margin-top: 10px;
`;

const back = () => {
  Router.back();
};

function BuckButton() {
  return (
    <BackButtonContainer>
      <Button bsStyle='link' onClick={back}>
        戻る
      </Button>
    </BackButtonContainer>
  );
}

export default BuckButton;
