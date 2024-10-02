import {
  ThirdwebProvider,
  ChainId,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Sepolia}
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
