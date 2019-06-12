import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from "react-redux";
import WidgetService from "../services/WidgetService"
const stateToPropMapper = state => {
    console.log(state)

    return {
        widgets: state.widgets,
        preview: state.preview
    };
};

const propsToDispatcher = dispatch => (
    {
        loadWidgets: () =>{

        },
        updateWidget: widget => {
            dispatch({type: "UPDATE_WIDGET", widget: widget});
        },
        deleteWidget: (wid) => {
            dispatch({type: "DELETE_WIDGET", widgetId: wid});
        },
        createWidget: () => {
            dispatch({
                type: "CREATE_WIDGET"
            });
        },
        moveWidgetUp: (widget) => {
            dispatch({
                type: "Move_Up",
                widget: widget
            })
        },
        moveWidgetDown: (widget) => {
            dispatch({
                type: "Move_Down",
                widget: widget
            })
        },
        findWidget: (wid) => {
            dispatch({
                type: "FIND_WIDGET",
                widgetId: wid
            })
        },
        findAllWidgets: () => {
            dispatch({
                type: "FIND_ALL_WIDGET",
            })
        },
        previewMode: () => {
            dispatch({
                type: "PREVIEW",
            })
        }

    });

const WidgetListContainer = connect(
    stateToPropMapper,
    propsToDispatcher
)(WidgetListComponent);

export default WidgetListContainer;
