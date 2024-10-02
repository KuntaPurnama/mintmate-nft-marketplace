import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const { EvmChain } = require("@moralisweb3/common-evm-utils");
const Moralis = require("moralis").default;

export default function GetNFTS() {
  // Remove 'async' from here
  const [nfts, setNfts] = useState([]);

  const chain = EvmChain.SEPOLIA;

  console.log("masuk2");

  useEffect(() => {
    const fetchNFTs = async () => {
      console.log("Fetching NFTs...");
      const address = process.env.CONTRACT_ADDRESS;
      console.log("address brok ", address);
      // Initialize Moralis once
      try {
        const response = await Moralis.EvmApi.nft.getContractNFTs({
          address,
          chain,
        });
        console.log("Response: ", response);
        // setNfts(response.data.result); // Uncomment to set NFT data to state
      } catch (error) {
        console.log("Error fetching NFTs: ", error);
      }
    };

    fetchNFTs(); // Call the async function inside useEffect
  }, [chain]);

  console.log("masuk");

  return (
    <section className={styles.dataContainer}>
      {/* {nfts.map((nft) => (
        <div key={nft.token_id}>
          <p>{nft.name}</p>
        </div>
      ))} */}
    </section>
  );
}
