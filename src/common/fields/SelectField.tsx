import { useField } from 'formik';
import { indexOf } from 'lodash';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

type Props = {
  name: string;
  label: string;
  options: any;
  multiple?: boolean;
};

const SelectField = ({ name, ...props }: Props) => {
  const [field, meta] = useField({ name });
  const { options, label } = props;

  let otherProps: any = {};

  if (meta.error && meta.touched) {
    otherProps.error = true;
  }

  let selectProps: any = {};

  if (props.multiple) {
    selectProps.multiple = true;

    selectProps.renderValue = (selected: any) => {
      const renderValue: any = [];

      options.forEach((val: any) => {
        if (indexOf(selected, val.value) > -1) {
          renderValue.push(val.label);
        }
      });

      return renderValue.join(', ');
    };
  }

  return (
    <Box style={{ marginTop: '10px' }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel {...otherProps}>{label}</InputLabel>
        <Select label={label} {...otherProps} {...field} {...selectProps}>
          {options.map((option: any, key: any) => (
            <MenuItem value={option.value} key={key}>
              {props.multiple ? (
                <>
                  <Checkbox checked={indexOf(field.value, option.value) > -1} />
                  <ListItemText primary={option.label} />
                </>
              ) : (
                option.label
              )}
            </MenuItem>
          ))}
        </Select>

        {otherProps.error && <FormHelperText {...otherProps}>{meta.error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default SelectField;
