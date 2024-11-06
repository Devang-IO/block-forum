const hre = require("hardhat");
const fs = require('fs');
const path = require('path');

async function main() {
  const Forum = await hre.ethers.getContractFactory("Forum");
  const forum = await Forum.deploy();
  await forum.waitForDeployment();

  const address = await forum.getAddress();
  console.log("Forum deployed to:", address);

  // Write the contract address to a file
  const config = {
    forumAddress: address
  };

  fs.writeFileSync(
    path.join(__dirname, '../src/config.json'),
    JSON.stringify(config, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });