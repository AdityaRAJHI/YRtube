import React from 'react';
    import {
      AiFillHome,
      AiOutlineClockCircle,
      AiOutlineLike,
      AiOutlinePlaySquare,
      AiOutlineShopping,
      AiOutlineVideoCamera,
    } from 'react-icons/ai';
    import {
      MdOutlineSubscriptions,
      MdOutlineMusicNote,
      MdLocalMovies,
      MdOutlineLiveTv,
      MdOutlineSportsEsports,
      MdOutlineNewspaper,
    } from 'react-icons/md';
    import { BsFire, BsCollectionPlay } from 'react-icons/bs';
    import './Sidebar.css';

    function Sidebar({ isOpen }) {
      return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-section">
            <div className="sidebar-item active">
              <AiFillHome className="icon" />
              <span>Home</span>
            </div>
            <div className="sidebar-item">
              <AiOutlinePlaySquare className="icon" />
              <span>Shorts</span>
            </div>
            <div className="sidebar-item">
              <MdOutlineSubscriptions className="icon" />
              <span>Subscriptions</span>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-header">You</div>
            <div className="sidebar-item">
              <AiOutlineClockCircle className="icon" />
              <span>History</span>
            </div>
            <div className="sidebar-item">
              <BsCollectionPlay className="icon" />
              <span>Playlists</span>
            </div>
            <div className="sidebar-item">
              <AiOutlineVideoCamera className="icon" />
              <span>Your videos</span>
            </div>
            <div className="sidebar-item">
              <AiOutlineClockCircle className="icon" />
              <span>Watch later</span>
            </div>
            <div className="sidebar-item">
              <AiOutlineLike className="icon" />
              <span>Liked videos</span>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-header">Explore</div>
            <div className="sidebar-item">
              <BsFire className="icon" />
              <span>Trending</span>
            </div>
            <div className="sidebar-item">
              <AiOutlineShopping className="icon" />
              <span>Shopping</span>
            </div>
            <div className="sidebar-item">
              <MdOutlineMusicNote className="icon" />
              <span>Music</span>
            </div>
            <div className="sidebar-item">
              <MdLocalMovies className="icon" />
              <span>Movies</span>
            </div>
            <div className="sidebar-item">
              <MdOutlineLiveTv className="icon" />
              <span>Live</span>
            </div>
            <div className="sidebar-item">
              <MdOutlineSportsEsports className="icon" />
              <span>Gaming</span>
            </div>
            <div className="sidebar-item">
              <MdOutlineNewspaper className="icon" />
              <span>News</span>
            </div>
          </div>
        </div>
      );
    }

    export default Sidebar;
