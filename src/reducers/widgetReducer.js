import widgets from '../data/widgets'

// reducer => state => store => provider => container => map to props => components

const widgetReducer = (state = {widgets: widgets}, action) => {
    if (action.type === 'DELETE_WIDGET') {
        return {
            widgets: state.widgets.filter(widget => widget.id != action.widgetId)
        }
    } else if (action.type === 'CREATE_WIDGET') {
        return {
            widgets: [
                ...state.widgets,
                {
                    id: (new Date()).getTime(),
                    name: 'New Widget',
                    type: 'HEADING',
                    size:'1'
                }
            ]
        }
    } else if (action.type === 'UPDATE_WIDGET') {
        console.log(typeof JSON.parse(action.widget.ordered));
        return {
            widgets: state.widgets.map(widget => {
                if (widget.id === action.widget.id) {
                    widget.size = action.widget.size
                    widget.text = action.widget.text
                    widget.href = action.widget.href
                    widget.src = action.widget.src
                    console.log(typeof widget.ordered)
                    widget.ordered = 1
                    return action.widget;
                }
                return widget
            })
        }
    }
    return state;
}

export default widgetReducer