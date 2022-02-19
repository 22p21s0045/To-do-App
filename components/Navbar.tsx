import React from "react";
import { Box, Anchor, Avatar, Header, Nav, Button } from "grommet";
function Navbar() {
  return (
    <div>
      <Header background="#FFBBBB">
        <Nav direction="row">
          <Box animation="pulse" alignContent="end" pad="medium">
            <Button label="LOGIN" />
          </Box>
          <Box gap="small">
            <Avatar>
              <Avatar background="black" size="medium" />
            </Avatar>
          </Box>
        </Nav>
      </Header>
    </div>
  );
}

export default Navbar;
