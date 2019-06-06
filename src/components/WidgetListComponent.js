import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

const WidgetListComponent = ({widgets, deleteWidget, createWidget, updateWidget,moveWidgetDown}) =>//extends React.Component{

    <form>
        {
            widgets.map(widget =>
                <div key={widget.id}>
                    {widget.name}
                    {widget.type}
                    <div className="row justify-content-between">
                        <select
                            onChange={(event) => updateWidget({...widget, type: event.target.value})}
                            value={widget.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LIST">List</option>
                            <option value="LINK">Link</option>
                        </select>
                        <span ><i onClick={() => moveWidgetDown(widget)} class="arrow fa fa-chevron-down"></i></span>
                        <span><i class="arrow fa fa-chevron-up"></i></span>
                        <button
                            onClick={() => deleteWidget(widget.id)}>
                            Delete
                        </button>
                    </div>
                    {
                        widget.type === 'HEADING' &&
                        <HeadingWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'PARAGRAPH' &&
                        <ParagraphWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'LINK' &&
                        <LinkWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'LIST' &&
                        <ListWidget widget={widget} updateWidget={updateWidget}/>
                    }
                    {
                        widget.type === 'IMAGE' &&
                        <ImageWidget widget={widget} updateWidget={updateWidget}/>
                    }
                </div>
            )
        }
        <li>
            <button onClick={createWidget}>
                Add
            </button>
        </li>
    </form>
export default WidgetListComponent