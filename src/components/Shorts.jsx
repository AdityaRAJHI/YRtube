import React from 'react';
    import './Shorts.css';
    import { AiOutlineLike, AiOutlineDislike, AiOutlineShare } from 'react-icons/ai';
    import { FaComment } from 'react-icons/fa';
    import { BsThreeDots } from 'react-icons/bs';

    function Shorts() {
      return (
        <div className="shorts-container">
          <div className="shorts-video">
            <video controls className="video-player">
              <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="shorts-overlay">
              <div className="shorts-info">
                <div className="shorts-header">
                  <img
                    src="https://yt3.ggpht.com/ytc/AOPolaS_j7_k7h9_770-0_770-0_c-k-c0xffffffff-no-rj-mo"
                    alt="Channel Avatar"
                    className="channel-avatar"
                  />
                  <div className="channel-info">
                    <div className="channel-name">MINDfUKING_MEMES 😂</div>
                    <div className="channel-handle">@mindfuking_memes</div>
                  </div>
                </div>
                <div className="shorts-description">
                  Bro's IQ Level📈😂 #shorts #dankmemes #memes #trending #trendingshorts #funnymemes
                </div>
                <div className="shorts-music">
                  <span className="music-icon">🎵</span> Tony's Mayhem - Ravi Basrur
                </div>
              </div>
              <div className="shorts-actions">
                <div className="action-item">
                  <AiOutlineLike className="action-icon" />
                  <span className="action-count">41K</span>
                </div>
                <div className="action-item">
                  <AiOutlineDislike className="action-icon" />
                  <span className="action-text">Dislike</span>
                </div>
                <div className="action-item">
                  <FaComment className="action-icon" />
                  <span className="action-count">131</span>
                </div>
                <div className="action-item">
                  <AiOutlineShare className="action-icon" />
                  <span className="action-text">Share</span>
                </div>
                <div className="action-item">
                  <BsThreeDots className="action-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Shorts;
