import React from "react";
import { Box, Anchor, Avatar, Header, Nav, Button } from "grommet";
import { useSession, signIn, signOut } from "next-auth/react";
import { supabase } from "../components/supabase";
import { useEffect } from "react";
function Navbar() {
  async function supaLog() {
    const { data, error } = await supabase
      .from("Userlist")
      .insert([{ Username: session?.user?.name }]);
    console.log(error);
  }
  const { data: session } = useSession();

  console.log(session);

  useEffect(() => {
    supaLog();
  }, [session]);

  if (session) {
    return (
      <div>
        <Header background="#FFBBBB">
          <Box style={{ paddingLeft: 10 }}>
            <Avatar align="start">
              <Avatar src={session!.user!.image!} size="medium" />
            </Avatar>
          </Box>

          <Box animation="pulse" alignContent="end" pad="medium">
            <Button onClick={() => signOut()} label="LOGOUT" />
          </Box>
        </Header>
      </div>
    );
  }
  return (
    <div>
      <Header background="#FFBBBB">
        <Box style={{ paddingLeft: 10 }}>
          <Avatar align="start">
            <Avatar background="black" size="medium" />
          </Avatar>
        </Box>

        <Box animation="pulse" alignContent="end" pad="medium">
          <Button onClick={() => signIn()} label="LOGIN" />
        </Box>
      </Header>
    </div>
  );
}

export default Navbar;
