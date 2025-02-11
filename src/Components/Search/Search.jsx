import React from 'react'
import './Search.css'
import search from '../Assets/search_icon.png'

const Search = () => {
  return (
    <div className="search">
        <input type="text" placeholder="...Search for any Song" />
      <button type="submit"><img src={search} alt="" /></button>
    </div>
  )
}

export default Search