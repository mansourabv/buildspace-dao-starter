import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xc4963bd3CADbceAbA09795A5eFaE6Cf6C48418f4");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "TPOW membership card",
        description: "This NFT will give you access to TPOW DAO!",
        image: readFileSync("scripts/assets/pow-card.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();