import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="all">
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
