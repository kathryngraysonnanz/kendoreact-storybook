import React from 'react';
import PropTypes from 'prop-types';
import { DragAndDrop } from "@progress/kendo-react-common";
import { DraggableButton } from "./assets/draggable-button";
import { DroppableBox } from "./assets/droppable-box";
import './assets/index.scss';

export const DragDrop = ({...props }) => {

  const [box, setBox] = React.useState("A");
  const handleDrop = React.useCallback((id) => {
   setBox(id);
 }, []);
 return (
   <div
     style={{
       height: '100%',
       width: '100%',
       display: "grid",
       gridGap: 30,
       gridTemplateColumns: "40% 40%",
     }}
   >
     <DragAndDrop>
       <DroppableBox selected={box === "A"} id="A" onDrop={handleDrop}>
         {box === "A" ? <DraggableButton /> : null}
       </DroppableBox>
       <DroppableBox selected={box === "B"} id="B" onDrop={handleDrop}>
         {box === "B" ? <DraggableButton /> : null}
       </DroppableBox>
       <DroppableBox selected={box === "C"} id="C" onDrop={handleDrop}>
         {box === "C" ? <DraggableButton /> : null}
       </DroppableBox>
       <DroppableBox selected={box === "D"} id="D" onDrop={handleDrop}>
         {box === "D" ? <DraggableButton /> : null}
       </DroppableBox>
     </DragAndDrop>
   </div>
 );
};

DragDrop.propTypes = {
  children: PropTypes.node
};

DragDrop.defaultProps = {

};
