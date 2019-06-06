import React from 'react'

const ImageWidget = ({widget, updateWidget}) => {
    return (
        <div className="border">
            <h1>Image Widget</h1>
            <div className="form-group">
                <input className="form-control" defaultValue={widget.src} placeholder={widget.src}
                       onChange={(e) => updateWidget({...widget, src: e.target.value})}/>
            </div>
            <div className="form-group">
            <input className="form-control" placeholder={widget.name}
                   onChange={(event) => updateWidget({...widget, name: event.target.value})}
            />
        </div>
            <h3>Preview</h3>
            <img src={widget.src}/>
        </div>


    )

}
export default ImageWidget