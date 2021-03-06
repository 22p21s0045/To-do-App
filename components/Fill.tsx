import React from "react";
import { TextInput, Box, Grid, Button, Calendar } from "grommet";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Alerts from "../components/Alerts";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { supabase } from "../components/supabase";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Table from "./Tables";

function Fill() {
  async function Submit() {
    const statusSuccess: string = "success";
    const statusError: string = "error";
    const { data, error } = await supabase
      .from("Show")
      .insert([{ UserName: session?.user?.name, Message: message, Tag: tag }]);
    if (error) {
      alert("Error" + error.message);
      setStatus(["error", error.message]);
      <Alerts key={Status} status={statusError} message={error.message} />;
    } else {
      setStatus(["success", "Successfully submitted"]);
      alert("Success");
      <Alerts key={Status} status={statusSuccess} message="Success" />;
    }
  }
  function Clear() {
    setmessage("");
    settag("");
    setdate("");
  }
  const { data: session } = useSession();
  const [Status, setStatus] = useState<string[] | undefined[]>([
    "info",
    "Ready for submit 🐱",
  ]);
  const [message, setmessage] = useState("");
  const [tag, settag] = useState("");
  const handleTag = (event: SelectChangeEvent) => {
    settag(event.target.value as string);
  };
  const [date, setdate] = useState<string | string[]>();
  const sent = [message, tag, date];
  console.log(sent);
  return (
    <div>
      <Grid align="center">
        <Box
          direction="column"
          animation="fadeIn"
          gridArea="main"
          className="Fill"
          align="center"
        >
          <div style={{ paddingTop: 50 }}>
            <TextInput
              placeholder="Message"
              value={message}
              onChange={(event) => setmessage(event.target.value)}
              size="large"
            />
          </div>
          <FormControl style={{ paddingTop: 50 }}>
            <InputLabel style={{ paddingTop: 50 }}>Tag</InputLabel>
            <Select
              label="Tag"
              size="small"
              placeholder="Tag"
              style={{ width: 100, height: 50 }}
              color="primary"
              onChange={handleTag}
            >
              <MenuItem value={"Hello"}>Hello</MenuItem>
              <MenuItem value={"World"}>World</MenuItem>
              <MenuItem value={""}>None</MenuItem>
            </Select>
          </FormControl>
          <Calendar
            size="small"
            style={{ paddingTop: 50 }}
            date={new Date().toISOString().substring(0, 10)}
            onSelect={(date) => setdate(date)}
          />
          <h1>{message}</h1>
          <h3>{tag}</h3>
          <h3>{date}</h3>
          <div style={{ paddingTop: 50 }}>
            <Alerts status={Status[0]} message={Status[1]} />
            <Button label="Submit" onClick={() => Submit()} />
            <Button label="Clear" onClick={() => Clear()} />
          </div>
          <Table />
        </Box>
      </Grid>
    </div>
  );
}

export default Fill;
