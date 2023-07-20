import React from 'react'

const Filters = (props) => {
  return (
    <div>
      <div className='filter-container'>
        {props?.apiData?.stats?.map((data,index) => {
          return (
            <div key={index} className='filter-btn-container'>
<button className=''>
<h3>{data?.label}</h3>
<p>{data?.value}</p>
</button>
            </div>
          );
          })}
          </div>
          </div>
  );
        };
          

export default Filters;
