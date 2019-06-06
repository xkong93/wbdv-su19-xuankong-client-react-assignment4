import React from 'react'

const LinkWidget = ({widget, preview, updateWidget}) => {
    return (
        <div className="border">

            <div hidden={preview}>
                <h1>Link Widget</h1>

                <div className="form-group">
                    <label for="Link">Link Path</label>

                    <input id="Link" className="form-control" defaultValue={widget.href} placeholder={widget.href}
                           onChange={(event) => updateWidget({...widget, href: event.target.value})}/>

                </div>
                <div className="form-group">
                    <label for="LinkWidgetName">Widget Name</label>

                    <input id="LinkWidgetName" className="form-control" placeholder={widget.name}
                           onChange={(event) => updateWidget({...widget, name: event.target.value})}
                    />
                </div>
                <h3>Preview</h3>

            </div>

            <div>

                <a href={widget.href}>Link text</a>
            </div>
        </div>
    )
}

export default LinkWidget