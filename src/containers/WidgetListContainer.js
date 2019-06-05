import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from "react-redux";

const stateToPropMapper = state => {
    console.log(state)
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
        }
    });

const WidgetListContainer = connect(
    stateToPropMapper,
    propsToDispatcher
)(WidgetListComponent);

export default WidgetListContainer;
