import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

import { useColorScheme } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Container from '@mui/material/Container';

function ModeSelect() {
  /*
   * là một hook do mui viết sử dụng prefers-color-scheme để đọc dark hoặc light mode đang chạy trên
   * máy tính cá nhân của user 
   * const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
   */
  const { mode, setMode } = useColorScheme(); // hỗ trợ lưu vào local storage sẵn rồi
  const handleChange = (event) => {
    const selectedMode = event.target.value // đọc giá trị khi nhấn vào mode select
    setMode(selectedMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          {/* icon nó bị lệch nêu dùng flex để căn chỉnh nó lại, 
          gap (spacing) dùng để tạo khoảng cách, mặc định nó là 8px  */}
          {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}> */}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          {/* nó giống div ở trên */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    /*
     * 100vh là chiều cao màn hình 100%, màn bao nhiêu inch nó cũng kéo dài full chiều cao màn hình
     * disableGutters mặc định là false, khi ta gọi nó không chỉ định gì nó sẽ hiểu là true
     *    padding left và right sẽ bị xoá
     * maxWidth mặc định là true, ta chỉ định false nó sẽ full màn hình
     */
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center', // căn giữa theo chiều dọc
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center', // căn giữa theo chiều dọc
      }}>
        Board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center', // căn giữa theo chiều dọc
      }}>
        Content
      </Box>
    </Container>
  );
}

export default App;
