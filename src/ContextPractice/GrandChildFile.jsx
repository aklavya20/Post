import React, { useContext } from "react";
import MessageContext from "./ContextFile";

const GrandChildFile = () => {
  const Messages = useContext(MessageContext);
  return <div>This is GrandChild = {Messages}</div>;
};

export default GrandChildFile;
