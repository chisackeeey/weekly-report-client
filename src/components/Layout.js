import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { Grid } from "react-bootstrap";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>週次進捗回</title>
      </Head>
      <Header />
      <Grid>{children}</Grid>
    </>
  );
}

export default Layout;
