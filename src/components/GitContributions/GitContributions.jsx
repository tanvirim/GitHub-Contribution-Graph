/* eslint-disable no-undef */

import styled from "styled-components";
import useGitHubRepos from "../../Hooks/useRepos";
import useCommits from "../../Hooks/useCommits";
import { useState } from "react";
import { accessToken, owner } from "../../constants";

const GitContributionsBar = () => {
  const repositories = useGitHubRepos(accessToken);

  const dateFrequencyMap = useCommits(owner, repositories, accessToken);

  const data = Object.entries(dateFrequencyMap).map(([date, count]) => ({
    date: new Date(date),
    count,
  }));

  const [tooltipText, setTooltipText] = useState("");

  const handleMouseEnter = (date) => {
    setTooltipText(
      `on ${date.date.toString().slice(4, 16)} ${date.count} contributions`
    );
  };

  const handleMouseLeave = () => {
    setTooltipText(""); // Clear the tooltip text when mouse leaves
  };

  const sortedDate = data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <Container>
      {sortedDate &&
        sortedDate.map((date, index) => {
          let className = "column"; // Default class
          if (date.count >= 1 && date.count <= 2) {
            className += " class4"; // Apply class1 for the range 1-2
          } else if (date.count >= 3 && date.count <= 5) {
            className += " class3"; // Apply class2 for the range 3-5
          } else if (date.count >= 6 && date.count <= 7) {
            className += " class2"; // Apply class3 for the range 6-7
          } else if (date.count > 7) {
            className += " class1"; // Apply class4 for values greater than 7
          }

          return (
            <div
              key={index}
              className={className}
              onMouseEnter={() => handleMouseEnter(date)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="tooltip">{tooltipText}</div>
            </div>
          );
        })}
    </Container>
  );
};

export default GitContributionsBar;

const Container = styled.div`
margin-left:40px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  width: 20%;

  .column {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 10%;
    transition: all 0.3s ease-in-out;
  }

  .column:hover {
    border-radius: 50%;
    cursor: pointer;
  }
  .tooltip {
    width: 100px;
    display: none; /* Initially hidden */
    position: absolute;
    background-color: #000000;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    /* Add other tooltip styles as needed */
  }
  .column:hover .tooltip {
    display: block;
    top: -60px; /* Adjust this value to position the tooltip as needed */
    left: 50%;
    transform: translateX(-50%);
    z-index: 1; /* Ensure the tooltip is above other elements */
  }

  .class1 {
    background-color: #39d353;
  }
  .class1:hover {
    background-color: #28292d;
  }
  .class2 {
    background-color: #39d353;
  }
  .class2:hover {
    background-color: #626265;
  }
  .class3 {
    background-color: #006d32;
  }
  .class3:hover {
    background-color: #8a8787;
  }
  .class4 {
    background-color: #0e4429;
  }
  .class4:hover {
    background-color: #cecccd;
  }
`;
