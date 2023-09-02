import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Head of QA",
          "Software Test Engineer",
          "Automation Engineer",
          "Freelancer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
