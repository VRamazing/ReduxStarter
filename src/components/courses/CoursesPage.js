import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      course: {
        title: ''
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onCourseInputChange = this.onCourseInputChange.bind(this);
  }
  
  onSubmit(e){
    e.preventDefault();
    this.props.addCourse(this.state.course)
  }

  onCourseInputChange(e){
    this.setState({
      course: {title: e.target.value}
    })
  }

  render() {
    return(
      <div>
        <h2>Courses</h2>
        <form onSubmit={this.onSubmit}>
            <input type="text" onChange={this.onCourseInputChange}/> 
            <input type="submit" value="Add course" />
        </form>
        {this.props.courses.map((item) => <li key={item.title}>{item.title}</li>)}
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  addCourse: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (course) => {
      dispatch(courseActions.createCourse(course))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
