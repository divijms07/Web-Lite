import React from "react";

function Services () {
    // let message = `We are a team of passionate designers and developers who really love creating awesome WordPress themes & giving support.`;
    return (
      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              {/* <h2 className="section-title">The Team Behind 'eduLance.'</h2> */}
              {/* <p className="section-subtitle">{message}</p> */}
            </div> 
            <div className="teamstogether">           
          {/* Team Member 1 */}
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src="https://media.licdn.com/dms/image/D4D03AQEk1pKwl1--WQ/profile-displayphoto-shrink_800_800/0/1695457857524?e=1702512000&v=beta&t=bVk7c8KTEBqUwp2E2JLOOemPf4T0wO9fgVzHWe14FeM" class="team-img" alt="pic" />                   
                <h3>OMESH BARHATE</h3>            
                <div className="team-info"><p>NODE, EXPRESS & MONGO</p></div>
                <p> 
                </p>  
                {/* <ul className="team-icon">    
                  <li>
                    <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                    </a>
                  </li>        
                  <li>
                    <a href="#" class="github">
                    <i className="fa fa-github"></i>
                    </a>
                  </li>        
                </ul>           */}
              </div>
            </div> 
            {/* Team Member 2 */} 
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src="https://csi.dbit.in/assets/img/team/2023/Divij.webp" class="team-img" alt="pic" />                   
                <h3>DIVIJ SARKALE</h3>            
                <div className="team-info"><p>NODE & REACT JS</p></div>
                <p>
                </p>  
                {/* <ul className="team-icon">    
                  <li>
                    <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                    </a>
                  </li>                        
                  <li>
                    <a href="#" className="github">
                    <i className="fa fa-github"></i>
                    </a>
                  </li>        
                </ul>           */}
              </div>
            </div> 
            {/* Team Member 1 */}
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src="https://csi.dbit.in/assets/img/team/2023/Pratham.webp" class="team-img" alt="pic" />                   
                <h3>PRATHAM JUNGHARE</h3>            
                <div className="team-info"><p>REACT JS & HTML/CSS</p></div>
                <p> 
                </p>  
                {/* <ul className="team-icon">    
                  <li>
                    <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                    </a>
                  </li>        
                  <li>
                    <a href="#" className="github">
                    <i className="fa fa-github"></i>
                    </a>
                  </li>        
                </ul>           */}
              </div>
            </div> 
            </div>  
          </div> 
        </div> 

    </section>
    )
}

export default Services;