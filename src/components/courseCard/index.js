import React from 'react';
import CourseTypeBadge from '../courseTypeBadge';

const CourseCard = (props) => {
  const {
    courseImage,
    courseTitle,
    author,
    ratings,
    price,
    discountPrice,
    courseType,
    veiwerCount,
  } = props.courseDetails;

  return (
    <div className="courseContainer">
      <img src={courseImage} />
      <div className="courseDetails">
        <h4>{courseTitle}</h4>
        <h5 className="author">{author}</h5>
        <div className="rating">
          <h3 className="ratings">{ratings}</h3>
          <div className="veiwerCount">({veiwerCount})</div>
        </div>
        <div className="price">
          <h5>₦{price}</h5>
          <h5 className="discountPrice">₦{discountPrice}</h5>
        </div>
        {courseType && (
          <div>
            <CourseTypeBadge type={courseType} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
