import React from 'react'
import{TextInput,Box,Grid} from 'grommet';
function Fill() {
  return (
    <div >
      <Grid align ="center">
      <Box direction="column" animation="fadeIn" gridArea='main' className="Fill" align="center">
        <TextInput placeholder="Message" size="small" />\
        <h1>hello opacity</h1>
        </Box>
        </Grid>
    </div>
  )
}

export default Fill