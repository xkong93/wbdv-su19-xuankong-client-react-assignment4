import React from 'react'

const ListWidget = ({widget, updateWidget}) => {

    var array = widget.text.split("\n")
    var keyIncre = 0
    return (
        <div>
            <h1>List Widget</h1>
            <textarea
                defaultValue={widget.text}
                onChange={(e) => updateWidget({...widget, text: e.target.value})}
                placeholder="Paragraph text"></textarea>
            <select defaultValue="true" onChange={(e) => updateWidget({...widget, ordered: e.target.value})}>
                <option value={false}>Unordered List</option>
                <option value={true}>Ordered List</option>
            </select>

            {
                widget.ordered == "true" && <ol>
                    {array.map( element =><li key={++keyIncre}>{element}</li>)}
                </ol>
            }

            {
                widget.ordered == "false" && <ul>
                    {array.map( element =><li key={++keyIncre}>{element}</li>)}
                </ul>
            }


        </div>


    )


}

export default ListWidget