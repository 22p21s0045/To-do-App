import React from "react";
import { Box, Anchor, Avatar, Header, Nav, Button } from "grommet";
import { useSession, signIn, signOut } from "next-auth/react"
function Navbar() {
  const { data: session } = useSession()
  if (session){
    <div>
      <Header background="#FFBBBB">
          <Box style={{paddingLeft:10}}>
        <Avatar align="start">
          <Avatar background="black" size="medium" />
        </Avatar>
        </Box>

        <Box animation="pulse" alignContent="end" pad="medium">
          <Button onClick ={()=>signOut}label="LOGOUT" />
        </Box>
      </Header>
    </div>

  }
  return (
    <div>
      <Header background="#FFBBBB">
          <Box style={{paddingLeft:10}}>
        <Avatar align="start">
          <Avatar background="black" size="medium" />
        </Avatar>
        </Box>

        <Box animation="pulse" alignContent="end" pad="medium">
          <Button onClick ={()=>signIn} label="LOGIN" />
        </Box>
      </Header>
    </div>
  );
}

export default Navbar;
