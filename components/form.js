import { TextField } from "@mui/material"
import { Button } from "@mui/material"

const Form = () => {
    return (
        <>
        <TextField id="outlined-basic" label="Name" variant="outlined" /> <br/>
        <br/>
        <TextField id="outlined-basic" label="Email" variant="outlined" /> <br/>
        <br/>
        <TextField
          id="outlined-textarea"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        /> <br/>
        <br/>
        <Button variant="contained">Submit</Button>
        </>
    )
        
    
}

export default Form