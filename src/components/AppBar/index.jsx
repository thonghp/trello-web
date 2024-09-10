import ModeSelect from '~/components/ModeSelect';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';

function AppBar() {
    return (
        // px là căn chỉnh cả padding left, right, 1 <=> 8px 
        <Box px={2} sx={{
            width: '100%',
            height: (theme) => theme.trelloCustom.appBarHeight,
            display: 'flex',
            alignItems: 'center', // căn giữa theo chiều dọc
            justifyContent: 'space-between', // đá nội dung ra 2 bên
            gap: 2,
            overflowX: 'auto', // tạo scroll bar ngang
        }}>
            {/* gap là spacing giữa các element bên trong */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AppsIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {/* Sử dụng icon svg tải về và biến nó giống icon của mui */}
                    <SvgIcon component={TrelloLogo} fontSize="small" inheritViewBox sx={{ color: 'primary.main' }} />
                    {/* typography dùng để chỉ định kiểu chữ, định dạng */}
                    <Typography variant='span'
                        sx={{ color: 'primary.main', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Trello
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <Workspaces />
                        <Recent />
                        <Starred />
                        <Templates />
                        <Button variant="outlined">Create</Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: 120 }} />
                <ModeSelect />
                <Tooltip title="Notifications">
                    <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
                        <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help">
                    <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
                </Tooltip>
                <Profiles />
            </Box>
        </Box>
    )
}

export default AppBar