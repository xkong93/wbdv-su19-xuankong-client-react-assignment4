// import widgets from '../data/widgets'
import WidgetService from '../services/WidgetService'
// reducer => state => store => provider => container => map to props => components
const widgetService = WidgetService.getInstance()



const widgetReducer = (state = {widgets: widgetService.findAllWidgets()}, action) => {
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
        console.log("down")
        return {
            widgets:newWidgets(action.widget,state.widgets)

        }

    }
    return state;
}

var newWidgets = (targetWidget,widgets) => {
    let newArr = [...widgets]
    if(newArr.length  < 2){
        return newArr
    }
    for (var i = 0; i < newArr.length; i++){
        if(targetWidget.id === newArr[i].id && i < newArr.length - 1){
            var tempWidget = Object.assign(newArr[i + 1])
            console.log(tempWidget)
            newArr[i + 1] = Object.assign(newArr[i]);
            newArr[i] = tempWidget;
            break; //once it is found, it needs to break
        }
    }
    return newArr
}

export default widgetReducer