import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                {/* icon div with only 1 child */}
                <img 
                    className="header__icon"
                    src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
                    alt=""
                />            
            </Link>
            
            {/* search input with 2 children */}
            <div className="header__center">
                <input type="text" placeholder="Start your search"/>
                <SearchIcon cursor='pointer'/>    
            </div>

            {/* rightmost div with 4 children */}
            <div className="header__right">
                <div className="header__host">
                    <p>Become a host</p>
                </div>
                <div className="header__globe">
                    <LanguageIcon />
                </div>
                <div className="header__user">
                    <ExpandMoreIcon />
                    <Avatar />
                </div>
            </div>            
        </div>
    )
}

export default Header
