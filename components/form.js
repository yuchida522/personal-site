import { FormControl, TextField } from "@mui/material"
import { Button } from "@mui/material"
import { useState } from "react"

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // "entry.839337160": ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const isEnabled = formData.email.length > 0 && formData.name.length > 0
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name == "") {
      console.log("name is missing")
    }
    console.log(formData)
  }
    return (
        <FormControl>
        <TextField id="outlined-basic" label="Name" variant="outlined" name="name" required onChange={handleChange}/> <br/>
        <br/>
        <TextField id="outlined-basic" label="Email" variant="outlined" name="email" required onChange={handleChange}/> <br/>
        <br/>
        
        <TextField
          id="outlined-textarea"
          label="Say a few words!"
          multiline
          rows={4}
          variant="outlined"
          name="message"
          onChange={handleChange}
        /> <br/>
        <br/>
        <Button variant="contained" disabled={!isEnabled} onClick={handleSubmit}>Submit</Button>
        </FormControl>
    )
        
    
}

export default Form