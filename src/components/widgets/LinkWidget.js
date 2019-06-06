import React from 'react'

const LinkWidget = ({widget, updateWidget}) => {
    return (
        <div className="border">
            <h1>Link Widget</h1>
            <div className="form-group">
                <input className="form-control" defaultValue={widget.href} placeholder={widget.href}
                       onChange={(event) => updateWidget({...widget, href: event.target.value})}/>

            </div>
            <div className="form-group">
                <input className="form-control" placeholder={widget.name}
                       onChange={(event) => updateWidget({...widget, name: event.target.value})}
                />
            </div>
            <h3>{widget.name}</h3>
            <h3>Preview</h3>

            <a href={widget.href}>Link text</a>
        </div>
    )
}

export default LinkWidget