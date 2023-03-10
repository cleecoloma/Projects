import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Job from "./Job";
import Filter from "./Filter";
import Form from "./Form";


function App() {
  const [jobs, setJobs] = useState([]);

  function addJob(newJob) {
    setJobs(prevJobs => {
      return [...prevJobs, newJob];
    });
  }
  
  function deleteJob(id) {
    setJobs(prevJobs => {
      return prevJobs.filter((jobList, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="content"> 
        
        <Filter />
        <Form onAdd={addJob} />
        {jobs.map((jobList, index) => {
          return (
            <Job 
              key={index}
              id={index}
              title={jobList.title}
              company={jobList.company}
              location={jobList.location}
              link={jobList.link}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
