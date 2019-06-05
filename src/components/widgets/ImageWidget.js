import React from 'react'

const ImageWidget = ({widget, updateWidget}) => {


    return (
        <div>
            <h1>Image Widget</h1>
            <input defaultValue={widget.src} placeholder={widget.src}
                   onChange={(e) => updateWidget({...widget, src: e.target.value})}/>
            <h3>{widget.name}</h3>
            <h3>Preview</h3>
            <img src={widget.src}/>
        </div>


)

}
export default ImageWidget