import './Sidebar.css';



function Sidebar() {
  
    return (
      <div className="Sidebar">
        <div className='homeButton'>
            <button>Home</button>
        </div>
        <div className='region-container'>
        <div className='region'><button>All</button></div>
        <div className='region'><button>Kanto</button></div>
        <div className='region'><button>Johto</button></div>
        <div className='region'><button>Hoenn</button></div>
        <div className='region'><button>Sinnoh</button></div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;