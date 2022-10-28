enum Sex {
  Male = 'male',
  Female = 'female',
}

export const Male = {
  label: 'Male',
  value: 'male',
};

export const Female = {
  label: 'Female',
  value: 'female',
};

export const getSexLabel = (sex: string) => {
  if (sex === Sex.Male) {
    return Male.label;
  }

  if (sex === Sex.Female) {
    return Female.label;
  }

  return '';
};

export default Sex;
