import { useColorScheme } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function ModeSelect() {
    /*
     * Ban đầu const { mode, setMode } = useColorScheme(); sẽ chạy đầu tiên
     * Mặc định lần đầu chạy nó sẽ là light nếu ta chọn mode khác chẳng hạn như dark thì lần sau khi
     * chạy lại nó sẽ nhận dark vì mode được lưu trong local storage.
     * 
     * Chạy xong hàm trên nó sẽ sẽ nhảy tới return để render jsx, khi người dùng nhấn chọn một select
     * nó sẽ chạy hàm onChange, lúc này hàm sẽ đọc giá trị người dùng chọn và setMode nó lưu vào local
     * storage và rerender lại và lúc này nó chạy lại hàm này và bước 1 sẽ được gọi lại
     */
    
    /*
     * là một hook do mui viết sử dụng prefers-color-scheme để đọc dark hoặc light mode đang chạy trên
     * máy tính cá nhân của user 
     * const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
     */
    const { mode, setMode } = useColorScheme(); 
    const handleChange = (event) => {
        const selectedMode = event.target.value // đọc giá trị khi nhấn vào mode select
        setMode(selectedMode)
    };

    return (
        <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    {/* icon nó bị lệch nêu dùng flex để căn chỉnh nó lại */}
                    {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}> */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LightModeIcon fontSize="small" /> Light
                    </Box>
                </MenuItem>
                <MenuItem value="dark">
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

export default ModeSelect;