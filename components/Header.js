import { Box, Typography , Button} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { useContext } from "react";
import SearchContext from "./searchContext";
import AuthContext from './authContext';

export default function Header(){

  const router = useRouter()
  const { setSearch,setIsSearch,ChangeTopic,setChangeTopic }= useContext(SearchContext)
  const { user, login }=useContext(AuthContext)
  
  function Circle(){
    let name = user.user_metadata.full_name
    name =name[0].toUpperCase()
    return(
      <svg width="40" height="40">
      <circle cx="20" cy="20" r="17" fill="#aeaeae" />
      <text x="50%" y="55%" textAnchor="middle" fill="RGB(235, 52, 192)" fontSize="25px"  dy=".3em">{name}</text>
    </svg>
    )
}   
  function handleChange(){
    setIsSearch(true)
    setChangeTopic(ChangeTopic+1)
  }

    return(
    <div className='header'>
        <Box sx={{ marginLeft:5 ,display:'flex'}} >
          <Typography variant='h5' component="h3" 
          sx={{color:'rgb(174, 184, 184)' , marginTop:3 ,width:'200px'}}>
          GBL News
          </Typography>
          {!user && <InputBase
          sx={{background:'rgb(77, 79, 79)',height:40 ,width:700,padding:2,
          marginLeft:5 ,marginTop:3 , borderRadius:10 ,color:'RGB(224,214,213)'}}
          placeholder= "login to use this feature"
          />}
          {user && <InputBase
          sx={{background:'rgb(77, 79, 79)',height:40 ,width:700,padding:2,
          marginLeft:5 ,marginTop:3 , borderRadius:10 ,color:'RGB(224,214,213)'}}
          placeholder="Search for any topic"
          onChange={(event)=>setSearch(event.target.value)}
          />}
          {user && <IconButton type="submit" sx={{ p: '10px',marginTop:3 ,
          marginRight:'20px'}} aria-label="search"
          onClick={handleChange}>
            <SearchIcon sx={{color:'RGB(224,214,213)'}}/>
          </IconButton> }
          {!user && <IconButton type="submit" sx={{ p: '10px',marginTop:3 ,
            marginRight:'20px'}} aria-label="search">
              <SearchIcon sx={{color:'RGB(224,214,213)'}}/>
            </IconButton>}
          
            {!user && <Button sx={{fontSize:12 , marginTop:2 ,marginLeft:10,width:'100px'}}
            onClick={login}>login / Sign up</Button>}
            {user && <Box sx={{marginTop:3, marginLeft:10 ,cursor:'pointer'}}
            onClick={login}>{Circle()}</Box>}                                   
        </Box>     
        <div className="line"></div>   
      </div>
    )
}