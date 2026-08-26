import { useState } from "react"
import './SearchBar.css'
const SearchBar = ({onSearch}) => {
    const[city, setCity]=useState('')

    const handelSubmit =(e)=>{
        e.preventDefault();
        if(city){
            onSearch(city);
            setCity('')
        }
    }

  return (
    <div>
        <form action="" onSubmit={handelSubmit}>
            <span className="search-icon">🔍</span>
            <input type="text" className="search-input" value={city}
            onChange={(e)=>setCity(e.target.value)}
            placeholder="Kenitra..."
            required
            />
        </form>
    </div>
  )
}

export default SearchBar
