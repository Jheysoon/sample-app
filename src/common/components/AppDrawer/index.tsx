import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonIcon from '@mui/icons-material/Person';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SpeedIcon from '@mui/icons-material/Speed';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIcon from '@mui/icons-material/Assignment';

import SetupModule from './SetupModule';

import { drawerWidth } from '~/common/constants/components';

type Props = {
  open: boolean;
  onClose: () => void;
};

const AppDrawer = ({ open, onClose }: Props) => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          //px: [1],
        }}
      >
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <List>
        <ListItem
          button
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <SetupModule />

        <ListItem
          button
          onClick={() => {
            navigate('/Patients');
          }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            navigate('/Appointments');
          }}
        >
          <ListItemIcon>
            <SummarizeIcon />
          </ListItemIcon>
          <ListItemText primary="Appointments" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            navigate('/MedicalCertificates');
          }}
        >
          <ListItemIcon>
            <BadgeIcon />
          </ListItemIcon>
          <ListItemText primary="Medical Certificates" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            navigate('/LabRequests');
          }}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Requests" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
    }),
  },
}));

// https://mui.com/components/drawers/#main-content

export default AppDrawer;
