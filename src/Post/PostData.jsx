import React from "react";

const PostData = ({ send, userId }) => {
  const filteredPosts = send.filter((post) => post.userId === userId);

  return (
    <div className="mt-2">
      {filteredPosts &&
        filteredPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded p-2 mb-2 bg-gray-50 shadow"
          >
            <div className="font-medium">{post.title}</div>
            <div className="text-sm">{post.body}</div>
          </div>
        ))}
    </div>
  );
};

export default PostData;
