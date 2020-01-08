import { Button } from "react-bootstrap";
import Router from "next/router";

const back = () => {
  Router.back();
};

function BuckButton() {
  return (
    <Button bsStyle='link' onClick={back}>
      戻る
    </Button>
  );
}

export default BuckButton;
