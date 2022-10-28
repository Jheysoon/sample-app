import { indexOf } from 'lodash';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MedicationIcon from '@mui/icons-material/Medication';
import PersonIcon from '@mui/icons-material/Person';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ADMIN, SECRETARY } from '~/common/constants/userTypes';
import { selectUser } from '~/reducers/user.reducer';

const SetupModule = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);

  const menus = [
    {
      link: '/Secretaries',
      icon: <PersonIcon />,
      text: 'Secretaries',
      users: [ADMIN],
    },
    {
      link: '/Clinics',
      icon: <LocalPharmacyIcon />,
      text: 'Clinics',
      users: [ADMIN],
    },
    {
      link: '/Medicines',
      icon: <MedicalServicesIcon />,
      text: 'Medicines',
      users: [ADMIN, SECRETARY],
    },
    {
      link: '/DosageInstructions',
      icon: <MedicationIcon />,
      text: 'Dosage Instructions',
      users: [ADMIN, SECRETARY],
    },
    {
      link: '/LabExaminations',
      icon: <ContentPasteSearchIcon />,
      text: 'Examinations',
      users: [ADMIN, SECRETARY],
    },
  ];

  return (
    <>
      <ListItem
        button
        onClick={() => {
          setOpen(open => {
            return !open;
          });
        }}
      >
        <ListItemText primary="Setup Module" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menus.map((menu, key) => {
            if (indexOf(menu.users, user.user_type) !== -1) {
              return (
                <ListItem
                  key={key}
                  button
                  onClick={() => {
                    navigate(menu.link);
                  }}
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.text} />
                </ListItem>
              );
            }

            return null;
          })}
        </List>
      </Collapse>
    </>
  );
};

export default SetupModule;
