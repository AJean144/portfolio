import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#23c9ff]"></div>
      <p
        style={{
          fontSize: "0.5rem",
          color: "#23c9ff",
          fontWeight: 500,
          margin: "2rem auto",
        }}
      >
        {progress.toFixed(2)}% loading...
      </p>
    </Html>
  );
};

export default Loader;
