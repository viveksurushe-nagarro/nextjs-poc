import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/Navbar.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <div style={{ margin: "10px 20px" }}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
}

export default MyApp;
