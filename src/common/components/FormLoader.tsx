import CircularProgress from '@mui/material/CircularProgress';

const FormLoader = () => {
  return (
    <div
      style={{
        display: 'block',
        margin: '0px auto 20px',
        width: '48px',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default FormLoader;
