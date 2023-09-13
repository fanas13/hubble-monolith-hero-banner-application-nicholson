import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Home = (props) => {
    const { className } = props;
    return(
        <Grid container md={8} justifyContent="center">
            <Grid item xs={12} md={8}>
                {/* Content for the first column */}
                <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }} className={className}>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }} color="primary">Monolith</Typography>
                    <Typography variant="h2">Use AI software to test less and learn more.</Typography>
                    <Typography variant="p">Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4} />
        </Grid>
    )
};

export default Home;