import React from "react";
import Project from "../components/project";
import CMTAL from "../assets/CodeMeToAfterlife.png"

function Projects() {
    return (
        <div >
            <p>This is my Projects component !!</p>
            <Project name="CodeMeToAfterlife" image={CMTAL} category="Game, Unity" link="https://codemetoafterlife.ml/" description="A project made during my second semester of school at EPITA" />
            <Project name="CodeMeToAfterlife" image={CMTAL} category="Game, Unity" link="https://codemetoafterlife.ml/" description="A project made during my second semester of school at EPITA" />
            <Project name="CodeMeToAfterlife" image={CMTAL} category="Game, Unity" link="https://codemetoafterlife.ml/" description="A project made during my second semester of school at EPITA" />
            <Project name="CodeMeToAfterlife" image={CMTAL} category="Game, Unity" link="https://codemetoafterlife.ml/" description="A project made during my second semester of school at EPITA" />
            <Project name="CodeMeToAfterlife" image={CMTAL} category="Game, Unity" link="https://codemetoafterlife.ml/" description="A project made during my second semester of school at EPITA" />
            <Project name="CodeMeToAfterlife" image={CMTAL} category="Game, Unity" link="https://codemetoafterlife.ml/" description="A project made during my second semester of school at EPITA" />


        </div>
    );
}
export default Projects;