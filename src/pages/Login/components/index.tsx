import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

export const CstmCard = styled(Card)(() => ({
  padding: 24,
  border: '2px solid #5b6be8',
  marginTop: 150,
}));

export const CstmBox = styled(Box)(() => ({
  width: 450,
  margin: '10px auto 0 auto',
}));

export const CstmCardMedia = styled(CardMedia)<CardMediaProps | any>(() => ({
  width: '300px',
  display: 'block',
  margin: '0 auto',
}));
