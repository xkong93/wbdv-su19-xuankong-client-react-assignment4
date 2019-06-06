import React from 'react'

const ListWidget = ({widget, preview,updateWidget}) => {

    var array = widget.text.split("\n")
    var keyIncre = 0
    return (
        <div className="border">
            <h1 hidden={preview}>List Widget</h1>
            <div hidden={preview} className="form-group">
                <label for="List">List Text</label>

                <textarea id="List" className="form-control"
                          defaultValue={widget.text}
                          onChange={(e) => updateWidget({...widget, text: e.target.value})}
                          placeholder="Paragraph text"></textarea>
            </div>

            <div hidden={preview} className="form-group">
                <label for="ListChoice">List Style</label>

                <select id="ListChoice" className="form-control" defaultValue="true"
                        onChange={(e) => updateWidget({...widget, ordered: e.target.value})}>
                    <option value={false}>Unordered List</option>
                    <option value={true}>Ordered List</option>
                </select>
            </div>

            <div hidden={preview} className="form-group">
                <label for="WidgetListName">Widget Name </label>

                <input id="WidgetListName" className="form-control" placeholder={widget.name}
                       onChange={(event) => updateWidget({...widget, name: event.target.value})}
                />
            </div>

            {
                widget.ordered == "true" && <ol>
                    {array.map(element => <li key={++keyIncre}>{element}</li>)}
                </ol>
            }

            {
                widget.ordered == "false" && <ul>
                    {array.map(element => <li key={++keyIncre}>{element}</li>)}
                </ul>
            }
        </div>


    )


}

export default ListWidget