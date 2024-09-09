import ModeSelect from '../../components/ModeSelect';
import Box from '@mui/material/Box';

function AppBar() {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            width: '100%',
            height: (theme) => theme.trelloCustom.appBarHeight,
            display: 'flex',
            alignItems: 'center', // căn giữa theo chiều dọc
        }}>
            <ModeSelect />
        </Box>
    )
}

export default AppBar