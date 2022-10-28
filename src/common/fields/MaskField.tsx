import { styled } from '@mui/material/styles';
import { useField } from 'formik';

import InputLabel from '@mui/material//InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';

import TextMaskCustom from '~/common/components/TextMaskCustom';

type Props = {
  name: string;
  label: string;
  disabled?: boolean;
  mask: string;
};

const MaskField = (props: Props) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;
  const { label, disabled = false } = props;

  let otherProps: any = {
    disabled,
  };

  if (meta.error && meta.touched) {
    otherProps.error = true;
  }

  return (
    <StyledFormControl variant="outlined">
      <InputLabel
        variant="outlined"
        style={{ marginTop: 0, backgroundColor: '#fff' }}
        {...otherProps}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        label={label}
        variant="outlined"
        inputComponent={TextMaskCustom as any}
        {...otherProps}
        {...field}
        onChange={e => {
          if (meta.touched === false) {
            setTouched(true);
          }

          setValue(e.target.value);
        }}
        inputProps={{
          mask: props.mask,
          definitions: {
            '#': /[0-9]/,
          },
        }}
      />

      {otherProps.error && <FormHelperText {...otherProps}>{meta.error}</FormHelperText>}
    </StyledFormControl>
  );
};

const StyledFormControl = styled(FormControl)(() => ({
  marginTop: 10,
  width: '100%',
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #2684FF !important',
  },
  '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderWidth: 2,
  },
}));

export default MaskField;
