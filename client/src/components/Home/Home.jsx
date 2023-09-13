/* eslint-disable react/jsx-key */
import styled from "styled-components";
import useGitHubRepos from "../../Hooks/useRepos";
import useCommits from "../../Hooks/useCommits";

const Home = () => {
  const accessToken = "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";
  const owner = "tanvirim";
  const repositories = useGitHubRepos(accessToken)

  const dateFrequencyMap = useCommits(owner, repositories, accessToken)

  const data = Object.entries(dateFrequencyMap).map(([date, count]) => ({
    date: new Date(date),
    count,
  }));

  const sortedDate = data.sort((a, b) => new Date(a.date) - new Date(b.date));

  localStorage.setItem("data", JSON.stringify(sortedDate));
  
  const localData = JSON.parse(localStorage.getItem("data"))
  
  return (
    <>
      <Container >
        {console.log("local data",localData)}
      
        {localData &&
  localData.map((date, index) => {
    let className = "column"; // Default class
    if (date.count >= 1 && date.count <= 2) {
      className += " class1"; // Apply class1 for the range 1-2
    } else if (date.count >= 3 && date.count <= 5) {
      className += " class2"; // Apply class2 for the range 3-5
    } else if (date.count >= 6 && date.count <= 7) {
      className += " class3"; // Apply class3 for the range 6-7
    } else if (date.count > 7) {
      className += " class4"; // Apply class4 for values greater than 7
    }

    return (
      <div key={index} className={className}>
        <div className="content">{date.count}</div>
      </div>
    );
  })}

    </Container>                        
    </>
  );
};                                                                


export default Home;

const Container = styled.div`
   display: flex;
   width:100px;
   gap:5px;
   flex-direction: column;
   position: relative;

  .column {
 width: 40px;
 height:40px;
 
 transition: all 0.3s ease-in-out;
}

.column:hover {
  border-radius:50%;
  cursor: pointer;
 
  
}
.content {
  display: none; /* Hide the content by default */
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  width: 100px; /* Adjust width as needed */
  height: 50px; /* Adjust height as needed */
  border-radius: 5px;

}
.class1{
  background-color:#EF5124

}
.class1:hover{
  background-color:#28292D ;

}
.class2{
  background-color: #ED7E5E ;
}
.class2:hover{
  background-color:#626265 ;

}
.class3{
  background-color:#B3B0B0 ;

}
.class4{
  background-color: #ECBBAE

}
.class4:hover{
  background-color:#CECCCD ;

}



`;
