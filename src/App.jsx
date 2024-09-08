import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/home";
import Typography from "@mui/material/Typography";

import { useColorScheme } from '@mui/material/styles';

function ModeToggle() {
  const { mode, setMode } = useColorScheme(); // hỗ trợ lưu vào local storage sẵn rồi
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <br />
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
