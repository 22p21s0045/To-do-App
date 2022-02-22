import React from "react";
import { TextInput, Box, Grid,Button } from "grommet";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
function Fill() {
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
          <TextInput placeholder="Message" size="small"  />
          
          <FormControl style={{paddingTop:50}}>
            <InputLabel style={{paddingTop:50}}>Tag</InputLabel>
            <Select
              label="Tag"
              size="small"
              placeholder="Tag"
              style={{ width: 100 ,height: 50 }}
              color="primary"
            >
              <MenuItem>Hello</MenuItem>
            </Select>
          </FormControl>
          <div style={{paddingTop:50}}>
          <Button label="Submit" />
          </div>
        </Box>
      </Grid>
    </div>
  );
}

export default Fill;
