import { verifyCloudProof } from "@worldcoin/idkit-core";

export default async function handler(req, res) {
  const proof = req.body;
  // APP ID PENUH (Jangan ubah)
  const app_id = "app_7147fcca529b9e4c5181157a356d9378"; 
  const action = "portal-akses-1414";

  try {
    const result = await verifyCloudProof(proof, app_id, action);
    if (result.success) {
      return res.status(200).json({ success: true, result });
    } else {
      return res.status(400).json({ success: false, result });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
