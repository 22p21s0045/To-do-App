import React from "react";
import { TextInput, Box, Grid, Button, Calendar } from "grommet";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
function Fill() {
  const [message, setmessage] = useState("");
  const [tag, settag] = useState("");
  const handleTag = (event: SelectChangeEvent) => {
    settag(event.target.value as string);
  };
  const [date, setdate] = useState<string | string[]>();
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
            <Button label="Submit" />
            <Button label="Clear" />
          </div>
        </Box>
      </Grid>
    </div>
  );
}

export default Fill;
