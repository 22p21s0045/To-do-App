import React from "react";
import { Box } from "grommet";
import Typewriter from "typewriter-effect";
import Image from 'next/image';
function Welcome(props: any) {
  return (
    <div>
      <Box align="center" className="Welcome">
        <Image src={require("../styles/image/Cat2.gif")} width="200px" height="200px" />
        <Typewriter
          options={{
            strings: [`Hello ${props.name}`, "List to do for life"],
            autoStart: false,
            loop: true,
          }}
        />
      </Box>
    </div>
  );
}

export default Welcome;
