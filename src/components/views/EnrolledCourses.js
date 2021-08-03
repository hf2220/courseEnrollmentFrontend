import React from "react";
import { CourseServices } from "../../services/CourseServices";
import CourseTable from "../CourseTable";

export default class EnrolledCourses extends React.Component{
    // state = {
    //     courses: [].
    // }
    constructor(props){
        super(props);
        this.state = {
            courses: [],
        }
    }
    componentDidMount() {
        this.getEnrolledCourses();
    }

    getEnrolledCourses(){
        //AJAX
        //1. xhr to get backend data
        CourseServices.getEnrolledCourses() 
        .then(response => {
            //2.setState to trigger updating
            this.setState({
                courses: response.data,
            });
        })
        .catch(error => console.log(error));
    }
    render(){
        return (
            <div>
                <CourseTable courses={this.state.courses} actionName = "Drop" handleAction = {this.dropCourse.bind(this)}/>
            </div>
        );
    }

    dropCourse(courseName) {
        CourseServices.dropEnrolledCourse(courseName)
            .then(response => {
                alert(`Successfully drop course ${courseName}`);
                this.getEnrolledCourses();
            })
            .catch(error => {
                alert(`Failed to drop course ${courseName}`);
            })
    }
}