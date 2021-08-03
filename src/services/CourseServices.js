import axios from "../axios"

export const CourseServices = {
    getAllCourses: function(){
        return axios.get('/api/courses');
    },
    getEnrolledCourses: function(){
        return axios.get('/api/student/courses');
    },
    dropEnrolledCourse: function(courseName){
        return axios.delete(`/api/student/course/${courseName}`);
    },
    enrollCourse: function(courseName){
        return axios.post(`/api/student/course/${courseName}`);
    },
}