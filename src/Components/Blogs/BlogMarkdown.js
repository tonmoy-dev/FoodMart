import React, { useRef } from "react";
import dynamic from "next/dynamic";

const importJodit = () => import("jodit-react");
const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

const BlogMarkdown = ({ initialValue, getValue }) => {
  const editor = useRef(null);
  const config = {
    readonly: false,
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={initialValue}
        config={config}
        tabIndex={1}
          onBlur={(newContent) => getValue(newContent)}
        // onChange={(newContent) => getValue(newContent)}
      />
    </>
  );
};

export default BlogMarkdown;
