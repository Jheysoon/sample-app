import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

type Props = {
  label: string;
  value: string;
};

const StyledTypography = styled(Typography)(() => ({
  minWidth: '180px',
  fontWeight: 500,
}));

const FormField = (props: Props) => {
  const { label, value } = props;

  return (
    <Box>
      <StyledTypography>{label}</StyledTypography>
      <Typography>{value}</Typography>
    </Box>
  );
};

export default FormField;
