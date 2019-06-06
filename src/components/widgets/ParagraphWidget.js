import React from 'react'

const ParagraphWidget = ({widget, updateWidget}) =>
    <div  className="border">
        <h1>Paragraph Widget</h1>
        <div className="form-group">
        <textarea className="form-control"
                  defaultValue={widget.text}
                  onChange={(e) => updateWidget({...widget, text: e.target.value})}
                  placeholder="Paragraph text"></textarea>
        </div>

        <div className="form-group">
            <input className="form-control" placeholder={widget.name}
                   onChange={(event) => updateWidget({...widget, name: event.target.value})}
            />
        </div>
        <h2>Preview</h2>
        <p>
            {widget.text}
        </p>
    </div>

export default ParagraphWidget