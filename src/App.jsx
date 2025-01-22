import React, { useState } from 'react';
    import Sidebar from './components/Sidebar';
    import MainContent from './components/MainContent';
    import { AiOutlineMenu } from 'react-icons/ai';
    import './App.css';

    function App() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

      return (
        <div className="app-container">
          <button className="menu-button" onClick={toggleSidebar}>
            <AiOutlineMenu />
          </button>
          <Sidebar isOpen={isSidebarOpen} />
          <MainContent />
        </div>
      );
    }

    export default App;
