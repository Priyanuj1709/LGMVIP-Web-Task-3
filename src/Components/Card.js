import React from "react";

function Card(props) {
  return (
    <tr>
      <td>
        <h3 className="name-show">{props.name}</h3>
        <p className="email-show">{props.email}</p>
        <p className="gender-show">{props.gender}</p>
        <p className="skill-show">{props.skills.map((skill)=>{
          return <span> {skill},</span>
        })}</p>
      </td>
      
    </tr>
  );
}

export default Card;
