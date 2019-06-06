import widgets from '../data/widgets'
import WidgetService from '../services/WidgetService'
// reducer => state => store => provider => container => map to props => components
const widgetService = WidgetService.getInstance()

var data = widgetService.findAllWidgets();


const widgetReducer = (state = {widgets: widgets,preview : false}, action) => {
    if (action.type === 'DELETE_WIDGET') {
        return {
            widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
        }
    } else if (action.type === 'CREATE_WIDGET') {
        return {
            widgets: [
                ...state.widgets,
                {
                    id: (new Date()).getTime(),
                    name: 'New Widget',
                    type: 'HEADING',
                    size:'1',
                    text: "heading demo",
                    href: "",
                    src: "",
                    ordered: "true"

                }
            ]
        }
    } else if (action.type === 'UPDATE_WIDGET') {
        // console.log(typeof JSON.parse(action.widget.ordered));
        return {
            widgets: state.widgets.map(widget => {
                if (widget.id === action.widget.id) {
                    widget.size = action.widget.size
                    widget.text = action.widget.text
                    widget.href = action.widget.href
                    widget.src = action.widget.src
                    widget.ordered = action.widget.ordered  // how to convert string to boolean
                    return action.widget;
                }
                return widget
            })
        }
    }else if(action.type === "Move_Down"){
        return {
            widgets:newDownWidgets(action.widget,state.widgets)
        }
    }else if(action.type === "Move_Up"){
        return {
            widgets:newUpWidgets(action.widget,state.widgets)
        }
    }else if (action.type === "FIND_WIDGET"){
        return {
            widget:state.widgets.find( widget => widget.id == action.wid)
        }
    }else if (action.type === "FIND_ALL_WIDGET"){
        return {
            widgets:[...state.widgets]
        }
    }else if (action.type === "PREVIEW"){
        console.log("preview")
        // let newState = Object.assign({}, state)
        // newState.preview = !newState.preview
        // return newState
        return {
          widgets: state.widgets,
          preview: !state.preview
        }
    }
    return state;
}

var newDownWidgets = (targetWidget,widgets) => {
    let newArr = [...widgets]
    if(newArr.length  < 2){
        return newArr
    }
    for (var i = 0; i < newArr.length; i++){
        if(targetWidget.id === newArr[i].id && i < newArr.length - 1){
            var tempWidget = newArr[i + 1]
            console.log(tempWidget)
            newArr[i + 1] = newArr[i];
            newArr[i] = tempWidget;
            break; //once it is found, it needs to break
        }
    }
    return newArr
}

var newUpWidgets = (targetWidget,widgets) => {
    let newArr = [...widgets]
    if(newArr.length  < 2){
        return newArr
    }
    for (var i = 0; i < newArr.length; i++){
        if(targetWidget.id === newArr[i].id && i > 0){
            var tempWidget = newArr[i - 1]
            console.log(tempWidget)
            newArr[i - 1] = newArr[i];
            newArr[i] = tempWidget;
            break; //once it is found, it needs to break
        }
    }
    return newArr
}

export default widgetReducer