// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Forum {
    struct Post {
        uint256 id;
        address author;
        string title;
        string content;
        uint256 timestamp;
        uint256 upvotes;
    }

    mapping(uint256 => Post) public posts;
    uint256 public postCount;
    mapping(address => mapping(uint256 => bool)) public hasVoted;

    event PostCreated(uint256 indexed id, address indexed author, string title);
    event PostUpvoted(uint256 indexed id, address indexed voter);

    function createPost(string memory _title, string memory _content) public {
        postCount++;
        posts[postCount] = Post(
            postCount,
            msg.sender,
            _title,
            _content,
            block.timestamp,
            0
        );
        emit PostCreated(postCount, msg.sender, _title);
    }

    function upvotePost(uint256 _id) public {
        require(_id > 0 && _id <= postCount, "Post does not exist");
        require(!hasVoted[msg.sender][_id], "Already voted");
        
        Post storage post = posts[_id];
        post.upvotes++;
        hasVoted[msg.sender][_id] = true;
        
        emit PostUpvoted(_id, msg.sender);
    }

    function getPost(uint256 _id) public view returns (Post memory) {
        require(_id > 0 && _id <= postCount, "Post does not exist");
        return posts[_id];
    }
}