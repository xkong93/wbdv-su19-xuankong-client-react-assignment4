import React from 'react'


const HeadingWidget = ({widget, updateWidget}) => {
    return (
        <div>
            <h1>Heading Widget</h1>
            <input placeholder="Heading text"
                   onChange={(event) => updateWidget({...widget, text: event.target.value})} // key point
            />
            <select onChange={(event) => updateWidget({...widget, size: event.target.value})}
                    value={widget.size}>
                >
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
                <option value="5">Heading 5</option>
            </select>
            <h3>{widget.name}</h3>
            <h3>Preview</h3>
            {widget.size === "1" && <h1>{widget.text}</h1>}
            {widget.size === "2" && <h2>{widget.text}</h2>}
            {widget.size === "3" && <h3>{widget.text}</h3>}
            {widget.size === "4" && <h4>{widget.text}</h4>}
            {widget.size === "5" && <h5>{widget.text}</h5>}
        </div>
    )
}


export default HeadingWidget

