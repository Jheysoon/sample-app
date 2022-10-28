import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const PageContent = ({ children }: any) => {
  return (
    <Container maxWidth="md" disableGutters>
      <Box sx={{ padding: '4px' }}>{children}</Box>
    </Container>
  );
};

export default PageContent;
