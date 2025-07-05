import React from "react";
import ChildFile from "./ChildFile";
import MessageContext from "./ContextFile";
import GrandChildFile from "./GrandChildFile";

const ParentFile = () => {
  const Message = "Hello World!";
  const Messages = "Hello World";
  return (
    <div>
      <h1>This is Parent</h1>
      <ChildFile msg={Message} />
      <MessageContext.Provider value={Messages}>
        <GrandChildFile />
      </MessageContext.Provider>
    </div>
  );
};

export default ParentFile;
