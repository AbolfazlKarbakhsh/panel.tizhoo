import React from "react";

function PersnalDetails({name , semat , className}) {
  return (
    <div className={`header-aside-lg align-items-center py-3 px-0 ${className}`}>
      <div className="font2 mx-2 text-center">{name}   </div>|
      <div className="badge btn-brand mx-2 fw-light"> {semat}</div>
    </div>
  );
}

export default PersnalDetails;
