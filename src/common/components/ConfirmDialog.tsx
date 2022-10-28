import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
// https://mui.com/material-ui/react-dialog/

type Props = {
  open: boolean;
  title: string;
  text: string;
  cancelText?: string;
  okText?: string;
  handleCancel: () => void;
  handleOk: () => void;
};

const ConfirmDialog = (props: Props) => {
  const { open, title, text, cancelText = 'Cancel', okText = 'Ok', handleCancel, handleOk } = props;

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      keepMounted
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{text}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          {cancelText}
        </Button>
        <Button onClick={handleOk}>{okText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
