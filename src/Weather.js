import React from 'react';

export default function Weather(props) {
  return (
    <div className="Weather"> 
    <form onSubmit={handleSubmit}>
            <div className="row">
            <div className='col-9'>
        <input 
        type="search" 
        placeholder="Enter City" 
        className="form-control" 
        autoFocus="on" 
        onChange={handleCityChange}
        />
        </div>
        <div className='col-3'>
        <input type="button" value="searh" className="btn btn-primary w-100" />
        </div>
        </div>
    </form>
    <WeatherInfo data={weatherData} />
   
   </div>
);
} else{
  
  Search();

  return "Loading.."
}

}