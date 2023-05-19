import React from 'react';

const CourseTypeBadge = (props) => {
  const { type } = props;

  const getBadgeType = (type) => {
    let badgeClass = '';
    switch (type) {
      case 'new':
        badgeClass = '#acd2cc';
        break;
      case 'hot':
        badgeClass = '#fcaea0';
        break;
      case 'best seller':
        badgeClass = '#eceb98';
        break;
      default:
        badgeClass = '#f3ca8c';
        break;
    }
    return badgeClass;
  };

  const badgeStyle = {
    backgroundColor: getBadgeType(type),
  };

  return (
    <div style={badgeStyle} className="badgeContainer">
      <h3 className="badge">
        {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
      </h3>
    </div>
  );
};

export default CourseTypeBadge;
