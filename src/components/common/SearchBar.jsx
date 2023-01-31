import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './SearchBar.css'

const SearchBar = ({setSearchQuery, displayFilters, areFiltersEmpty}) => { 
    
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value.toLowerCase());
    }
    
    return (
        <div className='searchBar-wrap'>
            <input type='text' placeholder='Search for products...' onChange={(e)=>handleSearch(e)} />
            <SearchIcon className='icon searchBar-icon' />

            <div className='mobile-filter-container'>
                {!areFiltersEmpty() ? <div className='filter-active'></div> : null}
                <FilterAltIcon className='icon filter-btn-mobile' onClick={() => displayFilters( prev => !prev)}/>
            </div>
            
        </div>   
    ); 
}

export default SearchBar;
