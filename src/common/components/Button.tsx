import Button, { ButtonProps } from '@mui/material/Button';

const CstmButton = ({ children, ...props }: ButtonProps) => (
  <Button variant="contained" fullWidth {...props}>
    {children}
  </Button>
);

export default CstmButton;
