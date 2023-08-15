import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer position="top-center"/>
      <Component  {...pageProps} />

    </Layout>
  )
}