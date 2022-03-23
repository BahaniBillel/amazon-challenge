import React from "react";
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
        className="header__logo"
      />
      <div className="header__search">
        <input type="search" className="header__searchInput" />
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">SignIn</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
