import React from 'react'

const HeadingWidget = ({widget}) =>

    <div>
        <h1>Heading Widget</h1>
        <input placeholder="Heading text" />
        <select>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
            <option>Heading 4</option>
            <option>Heading 5</option>
        </select>
        <h3>Preview</h3>
        {console.log(widget)}
    </div>

export default HeadingWidget

