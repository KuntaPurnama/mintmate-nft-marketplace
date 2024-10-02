// components/MintForm.js
import { useState } from "react";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";

const MintForm = () => {
  const [nftName, setNftName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const address = useAddress();
  const { contract } = useContract(process.env.CONTRACT_ADDRESS);
  const { mutateAsync: mintNFT, isLoading } = useContractWrite(
    contract,
    "mintNFT"
  );

  const handleMint = async () => {
    try {
      const tokenURI = "ipfs://" + imageUrl; // Ensure the image is uploaded to IPFS
      await mintNFT({ args: [address, tokenURI] });
      alert("NFT Minted!");
    } catch (error) {
      console.error(error);
      alert("Error minting NFT.");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={nftName}
        onChange={(e) => setNftName(e.target.value)}
        placeholder="NFT Name"
        className="border p-2"
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL (IPFS)"
        className="border p-2 ml-2"
      />
      <button onClick={handleMint} className="bg-blue-500 text-white p-2 ml-4">
        {isLoading ? "Minting..." : "Mint NFT"}
      </button>
    </div>
  );
};

export default MintForm;
