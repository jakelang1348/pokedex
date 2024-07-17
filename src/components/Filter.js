import './Filter.css';



function Filter() {
  
    return (
      <div className="filter-container">
        <div className='filter-object'>
            <select className='typefilter' name="Type">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='filter-object'>
            <select className='best-stat-filter' name="best stat">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='filter-object'>
            <select className='worst-stat-filter' name="worst stat">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
      </div>
    );
  }
  
  export default Filter;