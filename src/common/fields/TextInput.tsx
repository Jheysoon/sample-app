import { useField } from 'formik';

import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props = TextFieldProps & {
  name: string;
};

const TextInput = ({ name, ...props }: Props) => {
  const [field, meta, helpers] = useField({ name });

  let otherProps: any = props;

  if (meta.touched && meta.error) {
    otherProps.helperText = meta.error;
    otherProps.error = true;
  }

  return (
    <TextField
      name={field.name}
      value={field.value}
      variant="outlined"
      fullWidth
      onChange={event => {
        helpers.setValue(event.target.value);
      }}
      margin="dense"
      {...otherProps}
    />
  );
};

export default TextInput;
