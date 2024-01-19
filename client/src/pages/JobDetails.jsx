import React from "react";

const JobDetails = () => {

    return(
 <>
    <Navbar/>
   
    <div className={styles.jobDetails}>
    <PageHeader title={"Get Started"} path={"Apply Job"} />
      <div className={styles.singleContent}>
         <div className={styles.singleContent_details}>
  
            <h6>Job Id: {id}</h6>
            <h6>Posted on:{job?.postingDate}</h6>
            <h4>Job Details</h4>
            <h2>{job?.jobTitle}</h2>
           
          <div className={styles.single_buttons}> <button style={{backgroundColor:'blue',border:'none'}}>{job?.employmentType}</button> {' '}
          {isUserAuthorized? <button onClick={handleApply}>Apply Now</button>: null}
           </div>
          <div>
              <h5>Job Description</h5>
              <p>{job?.description}</p>
            </div>
            <div>
            <h5>Job Location</h5>
              <p style={{textAlign:'center justify'}}><strong>{job?.jobLocation}</strong></p>
            </div>
            <div>
            <h5>Experience Level  </h5>
            <p>{job?.experienceLevel}</p>
            <h5>Salary </h5>  
            <p><strong>{job?.minPrice}k - {job?.maxPrice}k</strong> </p>
            </div>
         </div>
  
         <div className={styles.company}>
          <h5>Company Details</h5>
          <div className={styles.companyTitle}>
           
            <img  src={job?.companyLogo} alt="" />
            <h5>{job?.companyName}</h5>
          </div>
          <button style={{color:'#fff'}}><span ><Icon style={{color:'#fff'}} path={mdiPlusBoxMultipleOutline} size={1} />

</span> Follow </button>
         </div>
      </div>
    </div>
    </>
  )
}

export default JobDetails;
