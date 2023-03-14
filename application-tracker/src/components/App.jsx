import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Job from "./Job";
import Filter from "./Filter";
import EditModal from "./EditModal";


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
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
