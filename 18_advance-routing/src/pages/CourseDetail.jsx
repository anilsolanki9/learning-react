import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const param = useParams();
  console.log(param);

  return (
    <div>
      <h1>Course Details of course : {param.id}</h1>
    </div>
  );
};

export default CourseDetail;
