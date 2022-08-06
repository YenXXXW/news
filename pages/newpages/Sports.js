import { useContext ,useState , useEffect } from "react"
import AuthContext from "../../components/authContext"
import SearchContext from "../../components/searchContext"
import { Box, createTheme, Paper, ThemeProvider, Typography,Grid  } from "@mui/material";

export default function Sports(){
    const { user } = useContext(AuthContext)
    const [news,setNews] = useState()
    const {Search,IsSearch,ChangeTopic} = useContext(SearchContext)
    const theme = createTheme({
        components: {
          MuiTypography: {
            variants: [
              {
                props: {
                  variant: "body3",
                },
                style: {
                  fontSize: 11,
                  color:'rgb(142, 147, 151)',
                  fontWeight:'bold'
                },
              },
            ],
          },
        },
      });
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8763dbd93dmsh4a1b73dad25b14fp17f779jsn0c4a8d5ab79d',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
      };
    
    
    useEffect(()=>{
      !IsSearch ?(
        fetch('https://newscatcher.p.rapidapi.com/v1/search?q=sports&lang=en&sort_by=relevancy&page=1&media=True', options)
        .then(response => response.json())
        .then(data=>{
            setNews(data)
        })
        .catch(err => console.error(err))):
        (
          fetch('https://newscatcher.p.rapidapi.com/v1/search?q='+Search+'&lang=en&sort_by=relevancy&page=1&media=True', options)
          .then(response => response.json())
          .then(data=>{
            setNews(data)
          })
          .catch(err => console.error(err))
        )
    },[ChangeTopic])
    if (user){
        return(
            <div className="news">
            <ThemeProvider theme={theme}>
              {!news && (<Box 
              sx={{marginTop:3, marginLeft:5 , color:'RGB(224,214,213)',
              fontSize:20}}>
              Loading please wait</Box>)}
              {news &&(
              <Box>           
                 {news['articles'].map((val,index)=>{
                  return(                    
                      <Paper  variant="outlined" sx={{borderColor:'RGB(114, 117, 115)',
                          background:' RGB(37, 38, 38)' , padding:2, width:900,
                          marginTop:3, marginLeft:3
                          }}  key={index}>
                            <Grid container spacing={1} >
                            <Grid item xs={9}>
                                  <Box>
                              <Typography variant='subtitle1' component='h6'
                              sx={{ color:'white'}}>
                              {val.title}
                              </Typography>
                              <Box sx={{display:"flex"}}>
                                <Typography variant='body3' component='p'
                                sx={{marginLeft:1}}>
                                {val.published_date}
                                </Typography>
                                <Typography variant='body3' component='p'
                                sx={{marginLeft:1}}>
                                {val.author}
                                </Typography>
                              </Box>                            
                              <Typography sx={{marginTop:2 , color:'RGB(224,214,213)'}}>
                                {val.summary}
                              </Typography>
                              <a href={val.link} >
                              <Typography variant='body3' component='p'
                              sx={{marginTop:1}}>
                                click here to see in website
                              </Typography>
                              </a>
                          </Box>
                          </Grid>
                          <Grid item xs={3}>
                          <Box sx={{marginY:3}}>
                              <img src={val.media} width={200} height={150} alt='img'/>
                          </Box>
                          </Grid>
                        </Grid>
                      </Paper>                  
                  )})}                             
              </Box>
          )}
          </ThemeProvider>
        </div>        
    )
    }else{
        return(
          <Paper sx={{background:'RGB(209, 29, 56)' , width:'500px', marginLeft:50, 
          color:'RGB(224,214,213)', marginTop:"200px"}}>
             <Box sx={{textAlign:'center', padding:5}}>
              <Typography>
                please login to see the content
              </Typography>
             </Box>
            </Paper>
        )    
    }
    
} 
