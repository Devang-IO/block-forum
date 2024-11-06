# Block Forum

**Block Forum** is a decentralized, blockchain-based forum that allows users to create, view, and interact with posts securely. Built on Ethereum and using smart contracts, Block Forum ensures transparent and immutable discussions, leveraging the power of blockchain technology.

## Screenshot

![image](https://github.com/user-attachments/assets/81e3d7ba-2fc4-45b1-96ad-91b9bf6a7510)

## Features

- Decentralized, censorship-resistant forum
- Create, view, and interact with posts and upvotes!
- Transparent and secure discussions
- Immutable records stored on the blockchain

## Prerequisites

To set up Block Forum locally, you’ll need the following:

- **Node.js** (v16+)
- **npm** or **yarn** (for package management)
- **Hardhat** (for compiling and deploying smart contracts)
- **MetaMask** (for interacting with the blockchain)
- **Ganache** (for local blockchain testing)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/block-forum.git
cd block-forum
```

### 2. Install Dependencies

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

### 3. Compile Smart Contracts

```bash
npx hardhat compile
```

### 4. Configure Local Blockchain (Optional for Development)

To test the forum locally, you can use Ganache to simulate a local Ethereum blockchain.

- Download and run Ganache: https://trufflesuite.com/ganache
- Deploy Contracts to Ganache: If needed; Modify hardhat.config.js to point to Ganache's local network then run:

```bash
npx hardhat run scripts/deploy.js --network ganache
```

### 5. Run the Project

Start the Vite development server to run Block Forum locally.

```bash
npm run dev
```

This will start the app, and it should be accessible at:

```bash
Local: http://localhost:5175/
```

### Ganache Configuration for MetaMask

1.  **Open Ganache** and start a new workspace or Quickstart Ethereum.
2.  Once Ganache is running, it should display network details like **RPC Server**, **Network ID**, and **Port**. Use this information to configure MetaMask.

### Configure MetaMask to Connect to Ganache

1.  **Open MetaMask** in your browser.
2.  **Add a New Network**:

    - Click on the network dropdown (usually says "Ethereum Mainnet") and select **Add Network**.

3.  **Enter the Following Details**:

    - **Network Name**: `Ganache Localhost` (or any name you prefer)
    - **New RPC URL**: `http://127.0.0.1:7545` (or the RPC server URL shown in Ganache)
    - **Chain ID**: `1337` (This is the default Chain ID for Ganache, but double-check in Ganache’s settings if it’s different)
    - **Currency Symbol**: `ETH`
    - **Block Explorer URL**: Leave this blank (optional)

    | Field              | Value                 |
    | ------------------ | --------------------- |
    | Network Name       | Ganache Localhost     |
    | New RPC URL        | http://127.0.0.1:7545 |
    | Chain ID           | 1337                  |
    | Currency Symbol    | ETH                   |
    | Block Explorer URL | (Leave blank)         |

    > **Note**: Ensure the RPC URL and Chain ID match what is displayed in your Ganache app. If you’re using a different port (e.g., if you’ve customized it in Ganache), make sure to replace `7545` in the URL with the actual port.

4.  **Save the Network**: Click **Save** to add the network to MetaMask.
5.  **Import an Account from Ganache**:

    - In Ganache, you’ll see a list of generated accounts with private keys.
    - Copy the private key for one of the accounts.
    - In MetaMask, click on your profile icon, select **Import Account**, and paste the private key.
    - This will import the account into MetaMask, allowing you to interact with the blockchain through Ganache.

6.  **Test the Connection**: After connecting MetaMask to Ganache and importing an account, you should see the same ETH balance in MetaMask as displayed in Ganache.

## Usage

1.  Open [MetaMask](https://metamask.io/) and connect to your local Ganache network.
2.  Navigate to `http://localhost:5175/` in your browser.
3.  Start creating and interacting with posts on Block Forum!

## Troubleshooting

1. Failed to Resolve Import: Ensure paths in App.tsx match the actual location of your Forum.json artifact file.
2. PostCSS Error: Verify the syntax in postcss.config.js (use module.exports for Node.js compatibility).

### Enjoy using Block Forum!
