import React from 'react'
import file_img from '../Components/Assets/files-icon.svg'
import './CSS/Upload.css'
import Fields from '../Components/Fields/Fields'

const Upload = () => {
  return (
    <div className="upload">
      <img src={file_img} alt="image" />

      <Fields className='section-upload' labelid='file-label' id='file' label='Upload' type= 'file' name='file' placeholder='Select File'/>

      
    </div>
  )
}

export default Upload