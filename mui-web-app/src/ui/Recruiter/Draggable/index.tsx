import { Avatar, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

import { closeGreyIcon, dragIcon } from "../../../assets/images";

const SkillList = () => {
  const [skills, setSkills] = useState([
    { id: "prototyping", content: "Prototyping" },
    { id: "figma", content: "Figma" },
    { id: "wireframe", content: "Wireframe" },
    { id: "ux", content: "Ux" },
  ]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedSkills = Array.from(skills);
    const [reorderedSkill] = reorderedSkills.splice(result.source.index, 1);
    reorderedSkills.splice(result.destination.index, 0, reorderedSkill);

    // Update state with the reordered skills
    setSkills(reorderedSkills);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ul className="skill-list">
        <Droppable droppableId="skills">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {skills.map((skill, index) => (
                <Draggable key={skill.id} draggableId={skill.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex-row"
                    >
                      <IconButton color="primary" sx={{ mr: 1.25, ml: -1 }}>
                        <Avatar src={closeGreyIcon} alt="Close" />
                      </IconButton>
                      <Typography
                        variant="body1"
                        className="title-color fw-500 pb-0"
                      >
                        {skill.content}
                      </Typography>
                      <IconButton color="primary" sx={{ ml: "auto" }}>
                        <Avatar src={dragIcon} alt="Drag" />
                      </IconButton>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ul>
    </DragDropContext>
  );
};

export default SkillList;
