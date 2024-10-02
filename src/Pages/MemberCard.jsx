import React from "react";
const MemberCard = ({employeeName,role,email}) =>{
  return (
    <div className="container">
    <p className="text-sm font-sans">{employeeName}</p>
    <p className="text-sm font-normal">{email}</p>
    <p>{role}</p>
    </div>
  )
}

export default MemberCard;