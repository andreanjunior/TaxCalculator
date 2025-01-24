import { Container, Typography } from '@mui/material';

const TaxReport = ({ taxData }) => {
  return (
    <Container>
      <Typography variant="h5"> Relatorio de impostos </Typography>
      <Typography variant="boby1"> Nome: {taxData.name}</Typography>
      <Typography variant="boby1"> Idade: {taxData.age} anos </Typography>
      <Typography variant="boby1">
        {' '}
        Renda:{' '}
        {parseFloat(taxData.income).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Typography>
      <Typography variant="boby1">
        {' '}
        Imposto a pagar:{' '}
        {parseFloat(taxData.tax).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Typography>
    </Container>
  );
};

export default TaxReport;
