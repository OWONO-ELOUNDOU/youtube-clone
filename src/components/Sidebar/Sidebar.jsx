import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles_icon from '../../assets/automobiles.png'
import sports_icon from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className="side-link">
            <img src={home} alt="" srcset="" /><p>Home</p>
        </div>
        <div className="side-link">
            <img src={game_icon} alt="" srcset="" /><p>Gaming</p>
        </div>
        <div className="side-link">
            <img src={automobiles_icon} alt="" srcset="" /><p>Automobiles</p>
        </div>
        <div className="side-link">
            <img src={sports_icon} alt="" srcset="" /><p>Sports</p>
        </div>
        <div className="side-link">
            <img src={entertainment} alt="" srcset="" /><p>Entertainment</p>
        </div>
        <div className="side-link">
            <img src={tech} alt="" srcset="" /><p>Technology</p>
        </div>
        <div className="side-link">
            <img src={music} alt="" srcset="" /><p>Music</p>
        </div>
        <div className="side-link">
            <img src={blogs} alt="" srcset="" /><p>Blogs</p>
        </div>
        <div className="side-link">
            <img src={news} alt="" srcset="" /><p>News</p>
        </div>
        <hr />
      </div>
      
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
            <img src={jack} alt="" srcset="" /> <p>PewDiePie</p>
        </div>
        <div className="side-link">
            <img src={simon} alt="" srcset="" /> <p>MrBeast</p>
        </div>
        <div className="side-link">
            <img src={tom} alt="" srcset="" /> <p>Justin Bieber</p>
        </div>
        <div className="side-link">
            <img src={megan} alt="" srcset="" /> <p>5-minute Crafts</p>
        </div>
        <div className="side-link">
            <img src={cameron} alt="" srcset="" /> <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
