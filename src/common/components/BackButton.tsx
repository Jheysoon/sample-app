import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type Props = {
  link: string;
  text: string;
};

const BackButton = ({ link, text }: Props) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: 5 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate(link);
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default BackButton;
