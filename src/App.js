import logo from './logo.svg';
import xbutton from './xbutton.png'
import './App.css';
import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class App extends React.Component {
    state = {type: 1, prev: 1, current: 0}
    obj = -1;

    request() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://my.api.mockaroo.com/locations.json?key=a45f1200", false); // false for synchronous request
        xmlHttp.send(null);
        const json = xmlHttp.responseText;
        const obj = JSON.parse(json)
        this.obj = obj;
        return obj
    }

    get(i) {
        return this.obj[i]
    }

    getId(i) {
        return this.get(i).id
    }

    getName(i) {
        return this.get(i).name
    }

    getUrl(i) {
        return this.get(i).url
    }

    getAddress(i) {
        return this.get(i).address
    }

    getCity(i) {
        return this.get(i).city
    }

    getState(i) {
        return this.get(i).state
    }

    getPostal(i) {
        return this.get(i).postal_code
    }
    getMonday(i) {
        return  this.get(i).monday_open + " - " + this.get(i).monday_close
    }
    getTuesday(i) {
        return this.get(i).tuesday_open + " - " + this.get(i).tuesday_close
    }
    getWednesday(i) {
        return this.get(i).wednesday_open + " - " + this.get(i).wednesday_close
    }
    getThursday(i) {
        return this.get(i).thursday_open + " - " + this.get(i).thursday_close
    }
    getFriday(i) {
        return this.get(i).friday_open + " - " + this.get(i).friday_close
    }
    getSaturday(i) {
        return this.get(i).saturday_open + " - " + this.get(i).saturday_close
    }
    getSunday(i) {
        return this.get(i).sunday_open + " - " + this.get(i).sunday_close
    }
    getLink(i) {
        return this.get(i).url
    }
    getLat(i) {
        return this.get(i).latitude
    }
    getLong(i) {
        return this.get(i).longitude
    }

    getRightPanel(i) {
        if (this.state.type === 1) {
            return (
                <div className="Right">
                    Click a location card to load a map
                </div>
            )
        } else if (this.state.type === 2) return (
            <div className="Right">
                <div className="Map">
                    <Map google={this.props.google} />
                </div>
            </div>
        )
        else if(this.state.type ===3) {
            return (
                <div className="Right">
                    <div id="overlay" >
                        <div id = "overlay2">
                            <div style={{textAlign: "right"}}><img onClick={() => this.setState({type: this.state.prev, prev: 3})} className="XButton" width={45} src={xbutton} alt={logo}></img></div>
                            <div style={{textAlign: "center"}}><img className="centerImage" width={200} src={logo} alt={logo}></img></div>
                            <br/><br/>
                            <div style={{fontSize: 25, marginLeft: 10}}>
                                {this.getName(this.state.current)}
                            </div>
                            <br/>
                            <div style={{marginLeft: 10}}>
                                {this.getAddress(this.state.current)}
                                <br/>
                                {this.getCity(this.state.current)}, {this.getState(this.state.current)} {this.getPostal(this.state.current)}
                            </div>
                            <br/><br/>
                            <div style={{marginLeft: 10 ,textAlign:"center"}}>
                                Monday: &emsp;&emsp; {this.getMonday(this.state.current)}
                                <br/>
                                Tuesday: &emsp;&ensp;&nbsp; {this.getTuesday(this.state.current)}
                                <br/>
                                Wednesday: &nbsp; {this.getWednesday(this.state.current)}
                                <br/>
                                Thursday: &emsp;&nbsp; {this.getThursday(this.state.current)}
                                <br/>
                                Friday: &emsp;&emsp;&ensp;  {this.getFriday(this.state.current)}
                                <br/>
                                Saturday: &emsp;&ensp; {this.getSaturday(this.state.current)}
                                <br/>
                                Sunday: &emsp;&emsp; {this.getSunday(this.state.current)}
                            </div>
                            <br/><br/>
                            <div style={{textAlign: "center"}}><button className="Button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href=this.getLink(this.state.current);
                            }}> VIEW FULL DETAILS </button></div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            const showInMapClicked = () => {
                window.open("https://www.google.com/maps/dir//"+ this.getLat(this.state.current)+","+this.getLong(this.state.current));
            };
            return(
                <div className="right">
                    {showInMapClicked()}
                </div>
            )
        }
    }

    handleClickInfo = (event) => {
        const id = event.target.id;
        var prev = (this.state.type !== 3? this.state.type:this.state.prev)
        this.setState({type: 3, prev, current: id})
    }

    render() {
        const showInMapClicked = () => {
            window.open("https://www.google.com/maps/dir//"+ this.getLat(this.state.current)+","+this.getLong(this.state.current));
        };
        if (this.obj === -1) {
            this.request()
        }
        var rows = [];
        var i = 0;
        while (i < this.obj.length) {
            rows.push(
                <div className="Panel">
                    <div onClick={() => this.setState({type: 2, prev: this.state.type})}>
                        <div className="App" style={{fontSize: 25}}>
                            {this.getName(i)}
                        </div>
                        <br/>
                        <div className="App">
                            {this.getAddress(i)}
                        </div>
                        <div className="App">
                            {this.getCity(i)}, {this.getState(i)} {this.getPostal(i)}
                        </div>
                        <br/>
                    </div>
                    <div className="App" style={{marginLeft: 7.5}}>
                        <button id={i} className="Button"
                                onClick={showInMapClicked}>DIRECTIONS
                        </button>
                        <button id={i} className="Button"
                                onClick={this.handleClickInfo}>MORE INFO
                        </button>
                    </div>
                </div>
            )
            i++;
        }
        return (
            <div>
                <div className="Left">
                    {rows}
                </div>
                {this.getRightPanel(i-1)}
            </div>
        );
    }

}


export default App;
