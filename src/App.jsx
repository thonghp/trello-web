import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/home";
import Typography  from "@mui/material/Typography";

function App() {
  return (
    <>
      <div>abcdef</div>
      <Typography variant="body2" color="text.secondary">Typography</Typography>
      <Button variant="text">Text</Button>
      <Button var iant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
