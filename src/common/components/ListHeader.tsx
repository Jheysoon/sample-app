import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import RightAlignContent from './RightAlignContent';

type Props = {
  headerText: string;
  hasCreateButton?: boolean;
  createFn?: () => void;
};

const ListHeader = (props: Props) => {
  const { headerText, hasCreateButton = false } = props;

  return (
    <StyledGrid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={3} md={3}>
        <Text>{headerText}</Text>
      </Grid>
      <Grid item xs={4} md={2}>
        <RightAlignContent>
          {hasCreateButton && (
            <Button variant="contained" startIcon={<AddIcon />} onClick={props?.createFn}>
              Create
            </Button>
          )}
        </RightAlignContent>
      </Grid>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)(() => ({
  marginTop: 16,
  marginBottom: 8,
}));

const Text = styled(Typography)(() => ({
  fontSize: 32,
  fontWeight: 700,
}));

export default ListHeader;
