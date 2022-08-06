import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import SearchContext from './searchContext';
import { SideBarData } from './SidebarData';

export default function Sidebar(){
    const router = useRouter()
    const {ChangeTopic,setChangeTopic , setIsSearch} = useContext(SearchContext)

    return(
        <div className="Sidebar">
            <div className="SidebarList">
                {SideBarData.map((val,index)=>{
                    return(
                        <div className="row"
                        id={router.pathname===val.link ? 'active' :''} 
                         onClick={()=>{
                          router.push(val.link)
                          setIsSearch(false)
                          setChangeTopic(ChangeTopic+1)}}
                         key={index}><div>{val.title}</div> </div>
                    )                                            
                })}
            </div>           
        </div>
      );
}