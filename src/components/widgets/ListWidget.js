import React from 'react'

const ListWidget = ({widget, updateWidget}) => {

    var array = widget.text.split("\n")
    var keyIncre = 0
    return (
        <div className="border">
            <h1>List Widget</h1>
            <div className="form-group">
            <textarea className="form-control"
                      defaultValue={widget.text}
                      onChange={(e) => updateWidget({...widget, text: e.target.value})}
                      placeholder="Paragraph text"></textarea>
            </div>
            <div className="form-group">
                <select className="form-control" defaultValue="true"
                        onChange={(e) => updateWidget({...widget, ordered: e.target.value})}>
                    <option value={false}>Unordered List</option>
                    <option value={true}>Ordered List</option>
                </select>
            </div>
             <div className="form-group">
                <input className="form-control" placeholder={widget.name}
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