import React from "react";
import ReactDOM  from "react-dom";
import Geo from "./geo";

//class component kullanımı function kullanıma göre daha complex yerlerde kullanılır
//state yapısı yalnızca class based componentlerde kullanılır
//

class App extends React.Component{



   

        state = {latitude:null,errorMesssage:"", longitude:null,};


        //constructor da kullanılabilir componentDidMount da
        componentDidMount(props){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
                this.setState({longitude: position.coords.longitude})
            },
            
            (error)=> {

                this.setState({errorMesssage: error.message})
            })
        }

        render(){
            if(!this.state.errorMesssage && this.state.latitude && this.state.longitude)
                    {
                      return(  <div>
                        <Geo latitude= {this.state.latitude} longitude={this.state.longitude} />
                        </div> )
                    }

            if(this.state.errorMesssage && ( !this.state.latitude || this.state.longitude))
                    {
                      return( <div><Geo errorMessage={this.state.errorMesssage}/></div>)
                    }

            if(!this.state.errorMesssage && (!this.state.latitude || this.state.longitude) )
                    {
                        return(  <div>Loading</div> )
                    }


        }

    }

    export default App;

    

ReactDOM.render(

    <App />,
    document.querySelector("#root")
)