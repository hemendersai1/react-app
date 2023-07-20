import React from 'react'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
const Todos = (props) => {
return (
<div className='todo-main-container'>
<div>
{props?.apiData?.map((data, index) =>{
return (<div key={index} className='todo-card'>
    <div>
        <div className='checkbox'></div>
    </div>
<div className='todo-content-container'>
<div className='todo-card-header'>
    <h2 className='todo-title'>{data?.title}</h2>
     <div className='icon-container'>
<ArchiveOutlinedIcon className='archive'/>
<BorderColorOutlinedIcon  className='edit'/>
<DeleteOutlineOutlinedIcon  className='delete'/>
</div></div>
    
<p className='todo-desc'>{data.desc}</p>

</div>
</div>);
        })}
      </div>
    </div>
  )
}

export default Todos
