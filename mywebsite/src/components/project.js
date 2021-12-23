import React from "react";

function Project({ name, image, category, description, link }) {
    return (
        <div className="font-bold back">
            <p>This is a project</p>
            <div className="flex flex-line bg-gradient-to-tr font-semibold from-blue-500 to-red-500 text-gray-200 pl-16 pr-20 py-16 lg:w-screen h-1">
                <img src={image} alt={name} width="100" height="100" className="align-left"></img>
                <a href={link} target="_blank" rel="noreferrer" >{name}</a>
                <p>{category}</p>
                <p>{description}</p>
            </div>
        </div >
    );
}
export default Project;