import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

const WidgetListComponent = ({widgets,preview,previewMode, deleteWidget, createWidget, updateWidget, moveWidgetDown, moveWidgetUp}) =>//extends React.Component{

// bug: change form tag to div tag
    <div >
        <div className="d-flex flex-row justify-content-end"><button onClick={()=>previewMode()} className="btn btn-warning">Preview</button></div>
        {
            widgets.map(widget =>
                <div key={widget.id}>
                    <div className="flex-lg-row float-right">
                        <span hidden={preview}><i onClick={() => moveWidgetDown(widget)} class="arrow fa fa-chevron-down"></i></span>
                        <span hidden={preview}><i onClick={() => moveWidgetUp(widget)} class="arrow fa fa-chevron-up"></i></span>
                        <select hidden={preview}
                            onChange={(event) => updateWidget({...widget, type: event.target.value})}
                            value={widget.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LIST">List</option>
                            <option value="LINK">Link</option>
                        </select>

                        <button hidden={preview} className="btn btn-danger"
                            onClick={() => deleteWidget(widget.id)}>
                            Delete
                        </button>
                    </div>
                    {
                        widget.type === 'HEADING' &&
                        <HeadingWidget  widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                    {
                        widget.type === 'PARAGRAPH' &&
                        <ParagraphWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                    {
                        widget.type === 'LINK' &&
                        <LinkWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                    {
                        widget.type === 'LIST' &&
                        <ListWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                    {
                        widget.type === 'IMAGE' &&
                        <ImageWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                </div>
            )
        }
        <div className="pull-right mt-2">
            <button className="btn btn-success" onClick={createWidget}>
                Add
            </button>
        </div>
    </div>
export default WidgetListComponent