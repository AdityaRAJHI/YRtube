import React, { useState } from 'react';
    import './MainContent.css';
    import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
    import {
      MdAccountCircle,
      MdSettings,
      MdHelpOutline,
      MdFeedback,
      MdOutlineSwitchAccount,
      MdLogout,
      MdOutlinePlayCircleOutline,
      MdOutlineMonetizationOn,
      MdOutlineDataUsage,
      MdOutlineDarkMode,
      MdLanguage,
      MdOutlineReport,
      MdPublic,
      MdKeyboard,
    } from 'react-icons/md';
    import { BsPlus } from 'react-icons/bs';

    function MainContent() {
      const categories = [
        'All',
        'News',
        'Music',
        'Podcasts',
        'Live',
        'Public transport',
        'Mixes',
        'Reaction videos',
        'Villages',
        'Mutual funds',
        'AI',
        'Marketplaces',
        'Aircraft',
      ];

      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <div className="main-content">
          <div className="header">
            <span className="website-name">YRtube</span>
            <div className="search-bar">
              <input type="text" placeholder="Search" className="search-input" />
              <button className="search-button">
                <AiOutlineSearch />
              </button>
            </div>
            <div className="header-buttons">
              <button className="create-button">
                <BsPlus />
                Create
              </button>
              <button className="notification-button">
                <AiOutlineBell />
              </button>
              <div className="channel-logo-container" onClick={toggleMenu}>
                <img
                  src="https://yt3.ggpht.com/ytc/AOPolaS_j7_k7h9_770-0_770-0_c-k-c0xffffffff-no-rj-mo"
                  alt="Channel Logo"
                  className="channel-logo dot-style"
                />
                {isMenuOpen && (
                  <div className="channel-menu">
                    <div className="menu-header">View your channel</div>
                    <div className="menu-item">
                      <MdAccountCircle className="menu-icon" />
                      <span>Google Account</span>
                    </div>
                    <div className="menu-item">
                      <MdOutlineSwitchAccount className="menu-icon" />
                      <span>Switch account</span>
                    </div>
                    <div className="menu-item">
                      <MdLogout className="menu-icon" />
                      <span>Sign out</span>
                    </div>
                    <hr />
                    <div className="menu-item">
                      <MdOutlinePlayCircleOutline className="menu-icon" />
                      <span>YouTube Studio</span>
                    </div>
                    <div className="menu-item">
                      <MdOutlineMonetizationOn className="menu-icon" />
                      <span>Purchases and memberships</span>
                    </div>
                    <hr />
                    <div className="menu-item">
                      <MdOutlineDataUsage className="menu-icon" />
                      <span>Your data in YouTube</span>
                    </div>
                    <div className="menu-item">
                      <MdOutlineDarkMode className="menu-icon" />
                      <span>Appearance: Device theme</span>
                    </div>
                    <div className="menu-item">
                      <MdLanguage className="menu-icon" />
                      <span>Language: English</span>
                    </div>
                    <div className="menu-item">
                      <MdOutlineReport className="menu-icon" />
                      <span>Restricted Mode: Off</span>
                    </div>
                    <div className="menu-item">
                      <MdPublic className="menu-icon" />
                      <span>Location: India</span>
                    </div>
                    <div className="menu-item">
                      <MdKeyboard className="menu-icon" />
                      <span>Keyboard shortcuts</span>
                    </div>
                    <hr />
                    <div className="menu-item">
                      <MdSettings className="menu-icon" />
                      <span>Settings</span>
                    </div>
                    <div className="menu-item">
                      <MdHelpOutline className="menu-icon" />
                      <span>Help</span>
                    </div>
                    <div className="menu-item">
                      <MdFeedback className="menu-icon" />
                      <span>Send feedback</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="home-categories">
            {categories.map((category, index) => (
              <button key={index} className="category-button">
                {category}
              </button>
            ))}
          </div>
          <h1>Main Content Area</h1>
          <p>This is where the main content of the dashboard will go.</p>
        </div>
      );
    }

    export default MainContent;
