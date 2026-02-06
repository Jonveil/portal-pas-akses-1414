import { MiniKit } from "@worldcoin/minikit-js";

const handleClaim = async () => {
  try {
    setClaiming(true);

    // Encode function call
    const tx = await contract.erc721.claim.prepare(1);

    // World App signs the transaction
    const result = await MiniKit.wallet.sendTransaction({
      to: tx.to,
      data: tx.data,
      value: "0",
    });

    alert("Claim berjaya! Tx Hash: " + result.transaction_hash);
  } catch (err) {
    alert("Claim gagal: " + err.message);
  } finally {
    setClaiming(false);
  }
};
