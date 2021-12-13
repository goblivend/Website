import React from "react";

function Project({ name, image, category, description, link }) {
    return (
        <div >
            <p>This is a project</p>
            <img src={image} alt={name} width="100" height="100"></img>
            <a href={link} target="_blank" rel="noreferrer" >{name}</a>
            <p>{category}</p>
            <p>{description}</p>
        </div>
    );
}
export default Project;