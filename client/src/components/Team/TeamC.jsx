import React from "react";
import "./Team.scss"
function Services () {
    let message = `We are a team of passionate designers and developers who really love creating awesome WordPress themes & giving support.`;
    return (
      <section class="section-white">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="section-title">The Team Behind 'eduLance.'</h2>
              <p class="section-subtitle">{message}</p>
            </div>              
          {/* Team Member 1 */}
            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
                <h3>OMESH BARHATE</h3>            
                <div class="team-info"><p>BACKEND DEVELOPER</p></div>
                <div class="team-info"><p>NODE, EXPRESS & MONGO</p></div>
                <p> Johnathan is our  co-founder and 
                    from international brands to medium sized businesses for over five years.
                </p>  
                <ul class="team-icon">    
                  <li>
                    <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                    </a>
                  </li>        
                  <li>
                    <a href="#" class="github">
                    <i class="fa fa-github"></i>
                    </a>
                  </li>        
                </ul>          
              </div>
            </div> 
            {/* Team Member 2 */} 
            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src="https://csi.dbit.in/assets/img/team/2023/Divij.webp" class="team-img" alt="pic" />                   
                <h3>DIVIJ SARKALE</h3>            
                <div class="team-info"><p>FULLSTACK DEVELOPER</p></div>
                <div class="team-info"><p>NODE & REACT JS</p></div>
                <p> Johnathan is our  co-founder and 
                    from international brands to medium sized businesses for over five years.
                </p>  
                <ul class="team-icon">    
                  <li>
                    <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                    </a>
                  </li>                        
                  <li>
                    <a href="#" class="github">
                    <i class="fa fa-github"></i>
                    </a>
                  </li>        
                </ul>          
              </div>
            </div> 
            {/* Team Member 1 */}
            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src="https://csi.dbit.in/assets/img/team/2023/Pratham.webp" class="team-img" alt="pic" />                   
                <h3>PRATHAM JUNGHARE</h3>            
                <div class="team-info"><p>FRONTEND DEVELOPER</p></div>
                <div class="team-info"><p>REACT JS & HTML/CSS</p></div>
                <p> Johnathan is our  co-founder and 
                    from international brands to medium sized businesses for over five years.
                </p>  
                <ul class="team-icon">    
                  <li>
                    <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                    </a>
                  </li>        
                  <li>
                    <a href="#" class="github">
                    <i class="fa fa-github"></i>
                    </a>
                  </li>        
                </ul>          
              </div>
            </div>   
          </div> 
        </div> 

    </section>
    )
}

export default Services;