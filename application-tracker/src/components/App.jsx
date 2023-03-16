import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Job from "./Job";
import Filter from "./Filter";
import { ListItem } from "@mui/material";

function App() {
  const [jobs, setJobs] = useState([]);

  function addJob(newJob) {
    setJobs(prevJobs => {
      return [...prevJobs, newJob];
    });
  }

  function addEditedJob(newJob) {
    setJobs(prevJobs => {
      return prevJobs.map((jobList, index) => {
        if (prevJobs.id === newJob.id ) {
          return {...prevJobs, newJob}
        } else {
          return {prevJobs}
        }
      });
    });
  }

  // function addEditedJob(newJob) {
  //   setJobs(prevJobs => {
  //     return [...prevJobs, newJob];
  //   });
  // }

  function editJob(id) {
    setJobs(prevJobs => {
      return prevJobs.filter((jobList, index) => {
        return index === id;
      });
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
      <Header saveJob={addJob} />
      <div className="content"> 
        <Filter />
        {jobs.map((jobList, index) => {
          return (
            <Job
              key={index}
              id={index}
              title={jobList.title}
              company={jobList.company}
              location={jobList.location}
              link={jobList.link}
              removeJob={deleteJob}
              saveJob={addJob}
              updateJob={editJob}
              saveEditedJob={addEditedJob}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
