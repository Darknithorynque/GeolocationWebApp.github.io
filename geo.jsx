import React from "react";
import { ReactDOM } from "react-dom";
import picAsia from "./images/asia.png"
import picAfrica from "./images/africa.png"
import picAntarctica from "./images/antarctica.png"
import picEurope from "./images/europe.png"
import picNamerica from "./images/n_america.png"
import picSamerica from "./images/s_america.png"
import picAustralia from "./images/australia.png"
import "./geo.css"





const Geo = (props /*{latitude}*/) =>  {

    //props.latitude meaning {latitude}


const locationProperties = {

     Europe:
     {
   
          id:1,
          text: "Continental Europe",
          picture: picEurope,
         // require("./images/europe.png")
      },
          Asia :
           {
              
              text: "Continental Asia",
              picture: picAsia,
          },
  
          N_america :
          {
              text: "Continental Northern America",
              picture: picNamerica,
          },
  
          Australia:
           {
              text: "Continental Australia",
              picture: picAustralia,
          },
          Africa: 
          {
              text: "Continental Africa",
              picture: picAfrica,
          },
  
          S_america: 
          {
              text: "Continental Southern America",
              picture: picSamerica,
          },
  
          Antarctica: 
          {
              text: "Continental Antarctica",
              picture: picAntarctica,
          }, 
        }
  
        if(props.latitude>-60 && props.latitude<14
            && (props.longitude<0 || props.longitude>-100)){
            
                    var continent = "S_america"
            }
    
    if(props.latitude>34 && props.latitude<72
    && props.longitude>-25 && props.longitude<45 ){

        var continent ="Europe" ;

        } 

    if((props.longitude>46 && props.longitude<170)){

        if((props.latitude>-8 && props.latitude<80)){

            var continent = "Asia";

        }

        }

     

    if(props.latitude>-45 && props.latitude<-8
        && props.longitude>100 && props.longitude<180){

            var continent = "Australia"
        }

    if(props.latitude<34 && props.latitude>-40
        && props.longitude>0 && props.longitude<50){

            var continent = "Africa"
        }

    

        if(props.latitude>14 && props.latitude<80
            && props.longitude>-178 && props.longitude<-45){
        
                    var continent = "N_america"
            }


  

    
    if(props.latitude<-45 && props.latitude>-80){

        var continent = "Antarctica"
    }



       const {text, picture} = locationProperties[continent];




  

        return(



                    <div className={continent}>
                            
                            <img src={picture} alt="Continent" />

                      
                      <div id="text">
                            
                              {text}
                        </div> 

                    </div>

         
        )



} 


export default Geo;



