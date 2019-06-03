import React from "react";
import CourseListComponent from "../components/CourseListComponent";
import CourseService from "../services/CourseService";
import NavBarAndTableHead from "../components/NavBarAndTableHeader";
import CourseGrid from "../components/CourseGrid";
export default class CourseListContainer extends React.Component {
  constructor(props) {
    super(props);

    //new an obj
    this.courseService = CourseService.getInstance();
    this.state = {
      courses: this.courseService.findAllCourses(),
      toggle: false,
    };
    this.onclickChangeView = this.onclickChangeView.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

 onclickChangeView(){
    this.setState({
        toggle: !this.state.toggle
    })
 }

      deleteRow = (id) => {
        this.setState({
            courses:this.state.courses.filter(course => course.id != id)
        })
    }

  render() {
    return (
      <div>
        <NavBarAndTableHead changeView={this.onclickChangeView}/>
        {this.state.toggle ? <CourseGrid deleteRow={this.deleteRow} courses={this.state.courses} />: <CourseListComponent deleteRow={this.deleteRow} 
        courses={this.state.courses} /> }
      </div>
    );
  }
}
