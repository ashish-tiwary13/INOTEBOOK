import React from 'react'

function About() {
  return (
    <div> <section className="text-center about" id="aboutuscolor">
    <h1>About US</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
          <span className="fa fa-group"></span>
          <h2>User's Feedback</h2>
          <p className="lead">User's feedback is only used to improve iNotebook.com. The feedback is stored in Gmail account. The user's feedback about the website, will not be given to any third party and will be deleted after handling.</p>
        </div>
        <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
          <span className="fa fa-info"></span>
          <h2>Application Data</h2>
          <p className="lead">RapidTables may save user's settings or user's application data in the browser's local storage and not in our server, so next time the user will enter the page, the data will be available to the user. The Application data can be deleted by the user by clearing the input data or by clearing the browser's Cache.</p>
        </div>
        <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
          <span className="fa fa-file"></span>
          <h2>Send feedback</h2>
          <p className="lead">Please help me improve this site by sending feedback with the feedback form below.
Please send feedback about:
 
 
Suggestions.
Missing content.
Corrections.
Spelling mistakes.</p>
        </div>
        
      </div>
      
    </div>
  </section>
      
    </div>
  )
}

export default About