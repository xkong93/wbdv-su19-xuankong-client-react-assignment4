import React from 'react'

const ListWidget = ({widget,updateWidget}) => {

    return(
        <div>
            <h1>List Widget</h1>
            <textarea
            defaultValue={widget.text}
            onChange={(e) => updateWidget({...widget, text: e.target.value})}
            placeholder="Paragraph text"></textarea>
            <select defaultValue={widget.ordered} onChange={(e) => updateWidget({...widget, ordered: e.target.value})}>

                <option value={false}>Unordered List</option>
                <option value={true}>Ordered List</option>
            </select>
        </div>



    )



}

export default ListWidget