import React from "react";

const Breadcrumb = ({ info, prod }) => {
  return <div className="breadcrumb">{`${info} > ${prod}  `}</div>;
};

export default Breadcrumb;
