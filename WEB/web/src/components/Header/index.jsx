import React from 'react'
import Icon from '../Icon'
import Menu from '../Menu'
import "./style.css"
const Header = () => {
  return (
    <div id='header'>
     
          <div className="top-header">
            <div className="container">
            <div className="top-left-icon">
              <Icon></Icon>
            </div>
            <div className="top-right-link">
                <a href="#">REGISTER</a>
                <span>/</span>
                <a href="#">LOG IN</a>
            </div>
          </div>
            </div>
            
          <div className="bottom-header">
            <div className="container">
            <div className="logo">Tuan's Page</div>
            <Menu></Menu>
            <div className="search">
              <button className='btn-search'><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
            </div>
            </div>
            
          </div>
        
        
        </div>
        
  )
}

export default Header