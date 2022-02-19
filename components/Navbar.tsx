import React from "react";
import { Box, Anchor, Avatar, Header, Nav, Button } from "grommet";
function Navbar() {
  return (
    <div>
      <Header background="#FFBBBB">
          <Box style={{paddingLeft:10}}>
        <Avatar align="start">
          <Avatar background="black" size="medium" />
        </Avatar>
        </Box>

        <Box animation="pulse" alignContent="end" pad="medium">
          <Button label="LOGIN" />
        </Box>
      </Header>
    </div>
  );
}

export default Navbar;
