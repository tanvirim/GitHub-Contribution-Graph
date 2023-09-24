/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import GitContributionsBar from "../GitContributions/GitContributions";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { useState } from "react";
import { CgColorPicker } from "react-icons/cg";
import { GiCrossMark } from "react-icons/gi";

const Home = () => {
  const [color, setColor] = useState("#060096");
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <Container>
        <div className="icon-container">
          {!showPicker ? (
            <CgColorPicker
              size={30}
              color={color}
              onClick={() => setShowPicker(!showPicker)}
            />
          ) : (
            <GiCrossMark
              size={30}
              color={color}
              onClick={() => setShowPicker(!showPicker)}
            />
          )}
        </div>

        <div className={`hidden-component ${showPicker ? 'visible' : ''}`}>
          {showPicker && (
            <SketchPicker
              width="200px"
              color={color}
              onChange={(color) => setColor(color.hex)}
            />
          )}
        </div>

        <div>       
          <GitContributionsBar color={color} />
        </div>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;

  flex-direction: column;

  .hidden-component {
  display: none; /* Initially hidden */
  position: absolute; /* Position it without affecting other elements */
  top: 50px; /* Adjust the top position as needed */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.visible {
  display: block; /* Show the component when it's visible */
  z-index:999;
}


  .icon-container:hover {
    cursor: pointer;
  }
`;
