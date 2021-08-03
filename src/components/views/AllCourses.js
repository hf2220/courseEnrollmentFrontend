import { useEffect, useState } from "react";
import { CourseServices } from "../../services/CourseServices";
import CourseTable from "../CourseTable";

export default function AllCourses(){
    const[courses, setCourses] = useState([]);
    //AJAX
    useEffect(() =>{ //react-hook function
        //1.xhr to get data from backend
        CourseServices.getAllCourses()
            .then(response =>{
        //2.set state to trigger updating
            setCourses(response.data);
            })
            .catch(error => console.log(error))
    }, []);
    return (
        <div>
            <CourseTable courses = {courses} actionName="Enroll" handleAction={enrollCourse} />
        </div>
    );

    function enrollCourse(courseName) {
        console.log("Enroll course!", courseName);
        CourseServices.enrollCourse(courseName)
            .then(response => {
                alert(`Successfully enrolled course ${courseName}`);
            })
            .catch(error => {
                alert(`Failed enrolled course ${courseName}`);
            })
    }
}