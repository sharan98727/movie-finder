import React from 'react'
import "./header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Header() {
    return (
        <div className="header">
          <div className="header__icons">
              <div className="header__icon
              header__icon--active">
                <HomeIcon/>
                <p>Home</p>
              </div>
              <div className="header__icon">
                <FlashOnIcon/>
                <p>Trending</p>
              </div>
              <div className="header__icon">
                <LiveTvIcon/>
                <p>Verified</p>
              </div>
              <div className="header__icon">
              <VideoLibraryIcon/>
                <p>Collections</p>
              </div>
              <div className="header__icon">
              <SearchIcon/>
                <p>Search</p>
              </div>
              <div className="header__icon">
              <PersonOutlineIcon/> 
                <p>Account</p>
              </div>             
          </div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAADFBMVEX29vb+/v739/f7+/vvbXZGAAADRElEQVR4nO3d4XLaMBQFYRDv/84taUmZ+F5ZK8kyHe/+7BD78DnpTIhDbsWau5WbNSYWSCyQWCCxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBZILNAL6xH3sZLljL0vrHvcx2I9ztgrFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFigj8OKz7j510Gsvue1h1WS21X+3LOye87HPfiw3//GPuCxRWjFKvHx0tttSrz43oK1195NPslzyrGyi9aLRQeUZMAMrOd5a1xibc6cc4kFzi0WOLlYbTPFqhRqiZWcP9ISKynSEisrWCBWmlig7QSx0rb/a4mVJxZos0GsPLFIP8eKVUks0M8RYlW6PFb0+n362GtjRd8el5Tr2ljJUTOta2PBY14aKzto9oUoVpRYDScXSyyxxBJLLLHEEkssscQSq/Kw7MWMdKtYJ2LhAWdiZcdtfvxRWNXHn4SVfRkkD5+PlQzIPrGWYKUnj8emr+1Px4qfWf7DhVOx7tvfZSn51O1XzTBWz4DTsIIfsVUe2401acDj63ejTsQCNd8lh7DwgIOxKl8GfKtYYGsP1tQBR2PNubLNBkdhlf8Iq/n8271TBvx9WkdjTbmy7TfYB1gTBxyONePKBiuasaZcrbII66DfCmrHmjHgdeEPxxq/stG3RgBrfMDrqMdjDY8Nv40EWMOfWt8DFmCN/q81jDV6tb4PugBrcCx6fSLeO2vACqyhsezWw2Tv0IB/x1yCNTA2exsEhjUy4O0oa7C6x9Kb6eje/d6PuAirc2z+IzOKNWXAKqyubzv4W5HkHzBjwDKs51/3Glo6ijVhwDqsG7u4fW+fVP+g2ovsLQMOvls5mNuwt+Gdubqwns+2eUBwqN4/2Ze9B9ne2C+w+huY7b+FWcfe9wnVAbXz+8cgQdfDGni+18MaSCyQWCCxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBboeUuqtfYLgKRDz0pr7n8AAAAASUVORK5CYII=" 
            alt=""/>
        </div>
    )
}

export default Header;

