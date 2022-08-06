import { createContext,  useEffect,  useState } from "react";

const SearchContext = createContext()

export const SearchContextProvider= ({children})=>{
    const [Search,setSearch] = useState()
    const [IsSearch , setIsSearch] = useState(false)
    const [ChangeTopic,setChangeTopic] = useState(0)
    const context = {Search,setSearch,IsSearch,setIsSearch,ChangeTopic,setChangeTopic}
    return(
        <SearchContext.Provider value={context}>
            {children}
        </SearchContext.Provider>
    )
}
export default SearchContext;