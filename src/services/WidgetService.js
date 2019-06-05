import widgets from '../data/widgets.json'

export default class WidgetService {
    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance = new WidgetService()
        }
        return this.myInstance
    }

    createWidget = widget => {
        widgets.push(widget)
    }

    findAllWidgets = () => {
        return widgets
    }


    findWidgetById = (widgetId) => {
        return widgets.find( widget => widget.id == widgetId)
    }

    updateWidget =(widgetId, newWidget) => {
        widgets = widgets.map(widget => widget.id == widgetId ? newWidget : widget)
    }

    deleteWidget = (widgetId) => {
        widgets = widgets.filter(widget => widget.id != widgetId);
    }
}



