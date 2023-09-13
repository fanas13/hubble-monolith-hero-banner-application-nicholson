import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import CarouselSilder from '../../components/Sliders/CarouselSilder';

const Home = (props) => {
    const { className } = props;
    const StyledButton = styled(Button)`
    && {
            border-radius: 30px;
            padding: 10px;
            font-size: 16px;
            color: #ffffff
        }
    `;
    return(
        <Grid container item md={8} >
            <>
                <Grid item xs={12} md={8}>
                    {/* Content for the first column */}
                    <div className={className}>
                        <Typography variant="body1" style={{ fontWeight: 'bold' }} color="primary">Monolith</Typography>
                        <Typography variant="h2" color="secondary">Use AI software to test less and learn more.</Typography>
                        <Typography variant="p" color="secondary">Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</Typography>
                    </div>
                </Grid>
                <   Grid item xs={12} md={4} />
            </>
            <>
                <Grid item spacing={1} xs={12} md={8} container margin="40px 0 0 0">
                    {/* Content for the first column */}
                    <Grid item xs={12} md={4}>
                        <StyledButton fullWidth variant="contained" disableElevation>Request demo</StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledButton fullWidth variant="outlined" disableElevation>Speak to our team</StyledButton>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} />
            </>
            <>
                <Grid item spacing={1} xs={12} md={12} container margin="40px 0 0 0">
                    <Grid item xs={12}>
                        <CarouselSilder />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} />
            </>
        </Grid>
    )
};

export default styled(Home)`
  
`;