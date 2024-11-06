// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import toast, { Toaster } from "react-hot-toast";
// import ForumArtifact from "./artifacts/contracts/Forum.sol/Forum.json";
// import { Navbar } from "./components/Navbar";
// import { CreatePost } from "./components/CreatePost";
// import { PostList } from "./components/PostList";
// import { Sidebar } from "./components/Sidebar";
// import { Post } from "./types";
// import config from "./config.json";

// export default function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState<any>(null);
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [memberCount, setMemberCount] = useState(1200);
//   const [onlineCount, setOnlineCount] = useState(42);
//   const [isCreatePostExpanded, setIsCreatePostExpanded] = useState(false);

//   useEffect(() => {
//     connectWallet();
//     simulateLiveCounts();
//   }, []);

//   function simulateLiveCounts() {
//     setInterval(() => {
//       setMemberCount((prev) => prev + Math.floor(Math.random() * 3));
//       setOnlineCount((prev) =>
//         Math.max(1, prev + Math.floor(Math.random() * 5) - 2)
//       );
//     }, 5000);
//   }

//   async function connectWallet() {
//     try {
//       if (typeof window.ethereum !== "undefined") {
//         await window.ethereum
//           .request({
//             method: "wallet_switchEthereumChain",
//             params: [{ chainId: "0x539" }],
//           })
//           .catch(async (error: any) => {
//             if (error.code === 4902) {
//               await window.ethereum.request({
//                 method: "wallet_addEthereumChain",
//                 params: [
//                   {
//                     chainId: "0x539",
//                     chainName: "Ganache",
//                     nativeCurrency: {
//                       name: "ETH",
//                       symbol: "ETH",
//                       decimals: 18,
//                     },
//                     rpcUrls: ["http://127.0.0.1:7545"],
//                   },
//                 ],
//               });
//             }
//           });

//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const forumContract = new ethers.Contract(
//           config.forumAddress,
//           ForumArtifact.abi,
//           signer
//         );

//         setAccount(accounts[0]);
//         setContract(forumContract);
//         loadPosts(forumContract);

//         window.ethereum.on("accountsChanged", (accounts: string[]) => {
//           setAccount(accounts[0]);
//         });
//       }
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//       toast.error(
//         "Failed to connect wallet. Make sure Ganache is running on port 7545"
//       );
//     }
//   }

//   async function loadPosts(contractInstance: any = contract) {
//     try {
//       if (!contractInstance) return;

//       const postCount = await contractInstance.postCount();
//       const loadedPosts = [];

//       for (let i = Number(postCount); i >= 1; i--) {
//         const post = await contractInstance.getPost(i);
//         loadedPosts.push({
//           id: Number(post.id),
//           author: post.author,
//           title: post.title,
//           content: post.content,
//           timestamp: new Date(Number(post.timestamp) * 1000).toLocaleString(),
//           upvotes: Number(post.upvotes),
//         });
//       }

//       setPosts(loadedPosts);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error loading posts:", error);
//       toast.error("Failed to load posts");
//     }
//   }

//   async function createPost(title: string, content: string) {
//     if (!title || !content) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     try {
//       const tx = await contract.createPost(title, content);
//       const toastId = toast.loading("Creating post...");
//       await tx.wait();
//       toast.dismiss(toastId);
//       toast.success("Post created successfully!");
//       loadPosts();
//     } catch (error) {
//       console.error("Error creating post:", error);
//       toast.error("Failed to create post");
//     }
//   }

//   async function upvotePost(id: number) {
//     try {
//       const tx = await contract.upvotePost(id);
//       const toastId = toast.loading("Upvoting...");
//       await tx.wait();
//       toast.dismiss(toastId);
//       toast.success("Upvoted successfully!");
//       loadPosts();
//     } catch (error) {
//       console.error("Error upvoting:", error);
//       toast.error("Failed to upvote");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Toaster position="top-right" />
//       <Navbar account={account} onConnect={connectWallet} />

//       <div className="max-w-6xl mx-auto px-4 py-6 flex">
//         <main className="flex-grow mr-6">
//           {!account ? (
//             <div className="bg-white rounded-md shadow-sm border border-gray-300 p-6 text-center">
//               <h2 className="text-xl font-semibold mb-2">
//                 Welcome to BlockForum
//               </h2>
//               <p className="text-gray-600">
//                 Connect your wallet to start posting and interacting
//               </p>
//             </div>
//           ) : (
//             <>
//               <CreatePost
//                 onSubmit={createPost}
//                 isExpanded={isCreatePostExpanded}
//                 setIsExpanded={setIsCreatePostExpanded}
//               />
//               <PostList posts={posts} loading={loading} onUpvote={upvotePost} />
//             </>
//           )}
//         </main>
//         <Sidebar
//           memberCount={memberCount}
//           onlineCount={onlineCount}
//           onCreatePost={() => setIsCreatePostExpanded(true)}
//         />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import ForumArtifact from "./artifacts/contracts/Forum.sol/Forum.json";
import { Navbar } from "./components/Navbar";
import { CreatePost } from "./components/CreatePost";
import { PostList } from "./components/PostList";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./types";
import config from "./config.json";

export default function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState<any>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [memberCount, setMemberCount] = useState(1200);
  const [onlineCount, setOnlineCount] = useState(42);
  const [isCreatePostExpanded, setIsCreatePostExpanded] = useState(false);

  useEffect(() => {
    connectWallet();
    simulateLiveCounts();
  }, []);

  function simulateLiveCounts() {
    const memberInterval = setInterval(() => {
      setMemberCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);

    const onlineInterval = setInterval(() => {
      setOnlineCount((prev) =>
        Math.max(1, prev + Math.floor(Math.random() * 5) - 2)
      );
    }, 3000);

    return () => {
      clearInterval(memberInterval);
      clearInterval(onlineInterval);
    };
  }

  async function connectWallet() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x539" }],
          })
          .catch(async (error: any) => {
            if (error.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x539",
                    chainName: "Ganache",
                    nativeCurrency: {
                      name: "ETH",
                      symbol: "ETH",
                      decimals: 18,
                    },
                    rpcUrls: ["http://127.0.0.1:7545"],
                  },
                ],
              });
            }
          });

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const forumContract = new ethers.Contract(
          config.forumAddress,
          ForumArtifact.abi,
          signer
        );

        setAccount(accounts[0]);
        setContract(forumContract);
        loadPosts(forumContract);

        window.ethereum.on("accountsChanged", (accounts: string[]) => {
          setAccount(accounts[0]);
        });
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error(
        "Failed to connect wallet. Make sure Ganache is running on port 7545"
      );
    }
  }

  async function loadPosts(contractInstance: any = contract) {
    try {
      if (!contractInstance) return;

      const postCount = await contractInstance.postCount();
      const loadedPosts = [];

      for (let i = Number(postCount); i >= 1; i--) {
        const post = await contractInstance.getPost(i);
        loadedPosts.push({
          id: Number(post.id),
          author: post.author,
          title: post.title,
          content: post.content,
          timestamp: new Date(Number(post.timestamp) * 1000).toLocaleString(),
          upvotes: Number(post.upvotes),
        });
      }

      setPosts(loadedPosts);
      setLoading(false);
    } catch (error) {
      console.error("Error loading posts:", error);
      toast.error("Failed to load posts");
    }
  }

  async function createPost(title: string, content: string) {
    if (!title || !content) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const tx = await contract.createPost(title, content);
      const toastId = toast.loading("Creating post...");
      await tx.wait();
      toast.dismiss(toastId);
      toast.success("Post created successfully!");
      loadPosts();
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post");
    }
  }

  async function upvotePost(id: number) {
    try {
      const tx = await contract.upvotePost(id);
      const toastId = toast.loading("Upvoting...");
      await tx.wait();
      toast.dismiss(toastId);
      toast.success("Upvoted successfully!");
      loadPosts();
    } catch (error) {
      console.error("Error upvoting:", error);
      toast.error("Failed to upvote");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <Navbar account={account} onConnect={connectWallet} />

      <div className="max-w-6xl mx-auto px-4 py-6 flex">
        <main className="flex-grow mr-6">
          {!account ? (
            <div className="bg-white rounded-md shadow-sm border border-gray-300 p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">
                Welcome to BlockForum
              </h2>
              <p className="text-gray-600">
                Connect your wallet to start posting and interacting
              </p>
            </div>
          ) : (
            <>
              <CreatePost
                onSubmit={createPost}
                isExpanded={isCreatePostExpanded}
                setIsExpanded={setIsCreatePostExpanded}
              />
              <PostList posts={posts} loading={loading} onUpvote={upvotePost} />
            </>
          )}
        </main>
        <Sidebar
          memberCount={memberCount}
          onlineCount={onlineCount}
          onCreatePost={() => setIsCreatePostExpanded(true)}
        />
      </div>
    </div>
  );
}
