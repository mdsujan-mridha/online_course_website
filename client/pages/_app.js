import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
import "../styles/globals.css";

export default function MyApp({Component, pageProps}){
      return(
        <Layout>
         <Component  {...pageProps}/>
        </Layout>
      )
}