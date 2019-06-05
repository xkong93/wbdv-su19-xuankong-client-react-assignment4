import React from 'react'

const LinkWidget = ({widget, updateWidget}) => {
    return (
        <div>
            <h1>Link Widget</h1>
            <input defaultValue={widget.href} placeholder={widget.href}
                   onChange={(event) => updateWidget({...widget, href: event.target.value})}/>

            <h3>{widget.name}</h3>
            <h3>Preview</h3>

            <a href={widget.href}>Link text</a>
        </div>
    )
}

export default LinkWidget