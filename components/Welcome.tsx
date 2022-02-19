import React from "react";
import { Box } from "grommet";
import Typewriter from "typewriter-effect";
function Welcome(props: any) {
  return (
    <div>
      <Box align="center" className="Welcome">
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
