import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from "react-redux";

const stateToPropMapper = state => {
    return {
        widgets: state.widgets
    };
};

const propsToDispatcher = dispatch => (
    {
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
        moveWidgetUp:(widget) =>{
            dispatch({
                type:"Move_UP",
                widget: widget
            })
        },
        moveWidgetDown:(widget) =>{
            dispatch({
                type:"Move_Down",
                widget: widget
            })
        }
    });

const WidgetListContainer = connect(
    stateToPropMapper,
    propsToDispatcher
)(WidgetListComponent);

export default WidgetListContainer;
