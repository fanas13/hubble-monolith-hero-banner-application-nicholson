import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Home = (props) => {
    const { className } = props;
    return(
        <Grid container item md={8} justifyContent="center">
            <Grid item xs={12} md={8}>
                {/* Content for the first column */}
                <div className={className}>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }} color="primary">Monolith</Typography>
                    <Typography variant="h2" color="secondary">Use AI software to test less and learn more.</Typography>
                    <Typography variant="p" color="secondary">Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4} />
        </Grid>
    )
};

export default styled(Home)`
  
`;