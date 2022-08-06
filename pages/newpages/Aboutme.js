import { Box, createTheme, Paper, ThemeProvider, Typography,Grid  } from "@mui/material";

export default function Aboutme(){
    return(
        <Paper sx={{background:'RGB(37, 38, 38)' , width:'500px', marginLeft:50, 
        color:'RGB(224,214,213)', marginTop:20}}>
            <Typography variant='body1' component='h2' sx={{ background:'RGB(37, 38, 38)'}}>
            <Box>
                Hi , this is Wai Yan
            </Box>           
             
            This is the Nextjs version of my first portfolio project which is writtn in 
            Reactjs .In this project I have also used the netlify identity  and a litte bit
            of material ui also.
            <Box sx={{marginTop:5}}>
                Contact me at 
                <Typography variant='body1' component='p' sx={{color:'RGB(9, 105, 214)'}}>
                <Box>YenXXXW@gmail.com</Box>                   
                <Box>WaiiiYannn56@gmail.com</Box>
                </Typography>
            </Box>
            </Typography>
        </Paper>
    )
} 