import './Sidebar.css';



function Sidebar( {onSelectionChange} ) {
  
    return (
      <div className="Sidebar">
        <div className='homeButton'>
        </div>
        <div className='region-container'>
        <div className='region' onClick={() => onSelectionChange('all')}><button>All</button></div>
        <div className='region' onClick={() => onSelectionChange('kanto')}><button>Kanto</button></div>
        <div className='region' onClick={() => onSelectionChange('johto')}><button>Johto</button></div>
        <div className='region' onClick={() => onSelectionChange('hoenn')}><button>Hoenn</button></div>
        <div className='region' onClick={() => onSelectionChange('sinnoh')}><button>Sinnoh</button></div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;