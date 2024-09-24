import React from "react";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

function FieldName(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
      <AccountCircle sx={{ color: "#000000" }} />
      <TextField
        id="standard-textarea"
        label="Ваше имя"
        
        placeholder="Ваше имя"
        type="tel"
        variant="standard"
        {...props}
      />
    </Box>
  );
}

export default FieldName;
