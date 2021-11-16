import logo from './logo.svg';
import xbutton from './xbutton.png'
import './App.css';
import React from "react";
import GoogleMapReact, {fitBounds} from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {withWidth} from "@material-ui/core";

class App extends React.Component {
    state = {type: 1, prev: 1, current: 0}
    obj = -1;

    request() {
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open("GET", "https://my.api.mockaroo.com/locations.json?key=a45f1200", false); // false for synchronous request
        // xmlHttp.send(null);
        // const json = xmlHttp.responseText;
        const json = "[{\"id\":1,\"name\":\"Metz Inc\",\"url\":\"https://skyrock.com/magna/vestibulum/aliquet/ultrices/erat/tortor.xml\",\"address\":\"60853 Fair Oaks Lane\",\"city\":\"Oxnard\",\"state\":\"CA\",\"postal_code\":\"93034\",\"latitude\":34.0324,\"longitude\":-119.1343,\"monday_open\":\"9:47 AM\",\"monday_close\":\"8:10 PM\",\"tuesday_open\":\"6:05 AM\",\"tuesday_close\":\"8:38 PM\",\"wednesday_open\":\"8:52 AM\",\"wednesday_close\":\"8:05 PM\",\"thursday_open\":\"9:03 AM\",\"thursday_close\":\"5:29 PM\",\"friday_open\":\"7:39 AM\",\"friday_close\":\"6:29 PM\",\"saturday_open\":\"8:03 AM\",\"saturday_close\":\"4:56 PM\",\"sunday_open\":\"9:03 AM\",\"sunday_close\":\"8:35 PM\"},{\"id\":2,\"name\":\"Kling-Bergstrom\",\"url\":\"http://zdnet.com/nulla/eget/eros/elementum/pellentesque.js\",\"address\":\"92383 Elgar Crossing\",\"city\":\"Las Vegas\",\"state\":\"NV\",\"postal_code\":\"89193\",\"latitude\":35.9279,\"longitude\":-114.9721,\"monday_open\":\"7:49 AM\",\"monday_close\":\"4:39 PM\",\"tuesday_open\":\"8:52 AM\",\"tuesday_close\":\"4:10 PM\",\"wednesday_open\":\"9:25 AM\",\"wednesday_close\":\"9:00 PM\",\"thursday_open\":\"7:16 AM\",\"thursday_close\":\"5:10 PM\",\"friday_open\":\"8:36 AM\",\"friday_close\":\"9:32 PM\",\"saturday_open\":\"7:46 AM\",\"saturday_close\":\"4:25 PM\",\"sunday_open\":\"8:46 AM\",\"sunday_close\":\"6:36 PM\"},{\"id\":3,\"name\":\"Reynolds, Upton and Champlin\",\"url\":\"http://google.es/accumsan/tortor.js\",\"address\":\"34 Fair Oaks Crossing\",\"city\":\"Philadelphia\",\"state\":\"PA\",\"postal_code\":\"19125\",\"latitude\":39.9788,\"longitude\":-75.1262,\"monday_open\":\"7:55 AM\",\"monday_close\":\"6:13 PM\",\"tuesday_open\":\"7:59 AM\",\"tuesday_close\":\"4:03 PM\",\"wednesday_open\":\"9:06 AM\",\"wednesday_close\":\"8:47 PM\",\"thursday_open\":\"9:25 AM\",\"thursday_close\":\"4:09 PM\",\"friday_open\":\"7:51 AM\",\"friday_close\":\"8:23 PM\",\"saturday_open\":\"8:05 AM\",\"saturday_close\":\"7:22 PM\",\"sunday_open\":\"9:45 AM\",\"sunday_close\":\"7:12 PM\"},{\"id\":4,\"name\":\"O'Connell-Quigley\",\"url\":\"https://paypal.com/duis/bibendum/felis/sed/interdum/venenatis/turpis.aspx\",\"address\":\"68 Mesta Junction\",\"city\":\"Las Vegas\",\"state\":\"NV\",\"postal_code\":\"89115\",\"latitude\":36.2158,\"longitude\":-115.0671,\"monday_open\":\"8:38 AM\",\"monday_close\":\"5:21 PM\",\"tuesday_open\":\"6:30 AM\",\"tuesday_close\":\"8:39 PM\",\"wednesday_open\":\"7:57 AM\",\"wednesday_close\":\"7:59 PM\",\"thursday_open\":\"9:40 AM\",\"thursday_close\":\"5:42 PM\",\"friday_open\":\"6:24 AM\",\"friday_close\":\"8:12 PM\",\"saturday_open\":\"9:38 AM\",\"saturday_close\":\"7:52 PM\",\"sunday_open\":\"8:12 AM\",\"sunday_close\":\"4:15 PM\"},{\"id\":5,\"name\":\"Murazik and Sons\",\"url\":\"http://cyberchimps.com/libero/convallis/eget/eleifend/luctus/ultricies/eu.png\",\"address\":\"53972 Luster Center\",\"city\":\"Richmond\",\"state\":\"VA\",\"postal_code\":\"23213\",\"latitude\":37.5593,\"longitude\":-77.4471,\"monday_open\":\"7:30 AM\",\"monday_close\":\"8:14 PM\",\"tuesday_open\":\"7:22 AM\",\"tuesday_close\":\"5:46 PM\",\"wednesday_open\":\"7:03 AM\",\"wednesday_close\":\"6:56 PM\",\"thursday_open\":\"8:29 AM\",\"thursday_close\":\"7:47 PM\",\"friday_open\":\"7:47 AM\",\"friday_close\":\"9:50 PM\",\"saturday_open\":\"6:36 AM\",\"saturday_close\":\"9:10 PM\",\"sunday_open\":\"9:10 AM\",\"sunday_close\":\"6:11 PM\"},{\"id\":6,\"name\":\"Kunze, Ritchie and Hamill\",\"url\":\"http://cnn.com/quam.xml\",\"address\":\"315 Corscot Lane\",\"city\":\"Hampton\",\"state\":\"VA\",\"postal_code\":\"23668\",\"latitude\":37.0206,\"longitude\":-76.3377,\"monday_open\":\"8:17 AM\",\"monday_close\":\"9:43 PM\",\"tuesday_open\":\"7:01 AM\",\"tuesday_close\":\"8:56 PM\",\"wednesday_open\":\"7:09 AM\",\"wednesday_close\":\"6:24 PM\",\"thursday_open\":\"6:29 AM\",\"thursday_close\":\"8:00 PM\",\"friday_open\":\"9:55 AM\",\"friday_close\":\"6:27 PM\",\"saturday_open\":\"6:33 AM\",\"saturday_close\":\"5:08 PM\",\"sunday_open\":\"8:15 AM\",\"sunday_close\":\"5:55 PM\"},{\"id\":7,\"name\":\"Anderson-Robel\",\"url\":\"https://edublogs.org/sed/accumsan/felis/ut/at/dolor/quis.png\",\"address\":\"2420 Anthes Terrace\",\"city\":\"Kansas City\",\"state\":\"MO\",\"postal_code\":\"64187\",\"latitude\":39.035,\"longitude\":-94.3567,\"monday_open\":\"8:49 AM\",\"monday_close\":\"9:12 PM\",\"tuesday_open\":\"6:48 AM\",\"tuesday_close\":\"5:01 PM\",\"wednesday_open\":\"8:20 AM\",\"wednesday_close\":\"4:26 PM\",\"thursday_open\":\"7:21 AM\",\"thursday_close\":\"8:52 PM\",\"friday_open\":\"9:48 AM\",\"friday_close\":\"5:43 PM\",\"saturday_open\":\"9:52 AM\",\"saturday_close\":\"7:27 PM\",\"sunday_open\":\"8:17 AM\",\"sunday_close\":\"8:52 PM\"},{\"id\":8,\"name\":\"Runte and Sons\",\"url\":\"http://fc2.com/semper/porta/volutpat/quam/pede/lobortis.jpg\",\"address\":\"9711 Schlimgen Alley\",\"city\":\"Tulsa\",\"state\":\"OK\",\"postal_code\":\"74156\",\"latitude\":36.3024,\"longitude\":-95.9605,\"monday_open\":\"8:20 AM\",\"monday_close\":\"6:04 PM\",\"tuesday_open\":\"6:00 AM\",\"tuesday_close\":\"6:34 PM\",\"wednesday_open\":\"7:11 AM\",\"wednesday_close\":\"8:21 PM\",\"thursday_open\":\"6:11 AM\",\"thursday_close\":\"7:08 PM\",\"friday_open\":\"6:33 AM\",\"friday_close\":\"6:38 PM\",\"saturday_open\":\"8:15 AM\",\"saturday_close\":\"4:10 PM\",\"sunday_open\":\"9:08 AM\",\"sunday_close\":\"6:59 PM\"},{\"id\":9,\"name\":\"Champlin, Rogahn and Waelchi\",\"url\":\"https://ocn.ne.jp/aenean.html\",\"address\":\"613 Express Road\",\"city\":\"Shawnee Mission\",\"state\":\"KS\",\"postal_code\":\"66210\",\"latitude\":38.9273,\"longitude\":-94.7143,\"monday_open\":\"8:12 AM\",\"monday_close\":\"4:29 PM\",\"tuesday_open\":\"8:51 AM\",\"tuesday_close\":\"7:21 PM\",\"wednesday_open\":\"9:44 AM\",\"wednesday_close\":\"5:20 PM\",\"thursday_open\":\"6:17 AM\",\"thursday_close\":\"8:42 PM\",\"friday_open\":\"8:55 AM\",\"friday_close\":\"4:27 PM\",\"saturday_open\":\"7:36 AM\",\"saturday_close\":\"8:33 PM\",\"sunday_open\":\"9:24 AM\",\"sunday_close\":\"6:52 PM\"},{\"id\":10,\"name\":\"Hoppe LLC\",\"url\":\"http://eventbrite.com/morbi/vestibulum/velit.aspx\",\"address\":\"2160 Hallows Hill\",\"city\":\"Brooklyn\",\"state\":\"NY\",\"postal_code\":\"11225\",\"latitude\":40.6628,\"longitude\":-73.9546,\"monday_open\":\"6:03 AM\",\"monday_close\":\"8:38 PM\",\"tuesday_open\":\"9:24 AM\",\"tuesday_close\":\"8:06 PM\",\"wednesday_open\":\"8:07 AM\",\"wednesday_close\":\"8:14 PM\",\"thursday_open\":\"8:03 AM\",\"thursday_close\":\"9:55 PM\",\"friday_open\":\"8:11 AM\",\"friday_close\":\"6:25 PM\",\"saturday_open\":\"8:54 AM\",\"saturday_close\":\"6:08 PM\",\"sunday_open\":\"7:04 AM\",\"sunday_close\":\"4:44 PM\"},{\"id\":11,\"name\":\"Fahey Inc\",\"url\":\"http://furl.net/interdum/venenatis/turpis/enim/blandit/mi/in.jpg\",\"address\":\"83717 Bartelt Street\",\"city\":\"Longview\",\"state\":\"TX\",\"postal_code\":\"75605\",\"latitude\":32.5547,\"longitude\":-94.7767,\"monday_open\":\"6:20 AM\",\"monday_close\":\"9:36 PM\",\"tuesday_open\":\"8:26 AM\",\"tuesday_close\":\"9:20 PM\",\"wednesday_open\":\"7:38 AM\",\"wednesday_close\":\"4:38 PM\",\"thursday_open\":\"9:37 AM\",\"thursday_close\":\"7:01 PM\",\"friday_open\":\"7:41 AM\",\"friday_close\":\"9:00 PM\",\"saturday_open\":\"7:13 AM\",\"saturday_close\":\"4:24 PM\",\"sunday_open\":\"7:20 AM\",\"sunday_close\":\"6:16 PM\"},{\"id\":12,\"name\":\"Jaskolski-Renner\",\"url\":\"http://dyndns.org/rutrum/rutrum/neque/aenean.html\",\"address\":\"1600 Riverside Pass\",\"city\":\"Seattle\",\"state\":\"WA\",\"postal_code\":\"98133\",\"latitude\":47.7377,\"longitude\":-122.3431,\"monday_open\":\"7:08 AM\",\"monday_close\":\"5:09 PM\",\"tuesday_open\":\"8:55 AM\",\"tuesday_close\":\"9:38 PM\",\"wednesday_open\":\"6:17 AM\",\"wednesday_close\":\"8:11 PM\",\"thursday_open\":\"8:17 AM\",\"thursday_close\":\"9:34 PM\",\"friday_open\":\"9:49 AM\",\"friday_close\":\"7:02 PM\",\"saturday_open\":\"6:01 AM\",\"saturday_close\":\"7:11 PM\",\"sunday_open\":\"6:50 AM\",\"sunday_close\":\"9:41 PM\"},{\"id\":13,\"name\":\"Hamill-Hartmann\",\"url\":\"https://upenn.edu/morbi/vel/lectus/in/quam.png\",\"address\":\"55170 Tennessee Alley\",\"city\":\"Detroit\",\"state\":\"MI\",\"postal_code\":\"48224\",\"latitude\":42.4098,\"longitude\":-82.9441,\"monday_open\":\"9:10 AM\",\"monday_close\":\"4:48 PM\",\"tuesday_open\":\"8:31 AM\",\"tuesday_close\":\"6:26 PM\",\"wednesday_open\":\"8:35 AM\",\"wednesday_close\":\"6:24 PM\",\"thursday_open\":\"6:01 AM\",\"thursday_close\":\"6:19 PM\",\"friday_open\":\"7:11 AM\",\"friday_close\":\"6:27 PM\",\"saturday_open\":\"8:22 AM\",\"saturday_close\":\"7:34 PM\",\"sunday_open\":\"8:52 AM\",\"sunday_close\":\"7:24 PM\"},{\"id\":14,\"name\":\"Hegmann Group\",\"url\":\"http://twitter.com/etiam.jpg\",\"address\":\"57636 4th Park\",\"city\":\"Chicago\",\"state\":\"IL\",\"postal_code\":\"60657\",\"latitude\":41.9399,\"longitude\":-87.6528,\"monday_open\":\"7:33 AM\",\"monday_close\":\"6:19 PM\",\"tuesday_open\":\"6:18 AM\",\"tuesday_close\":\"9:33 PM\",\"wednesday_open\":\"7:33 AM\",\"wednesday_close\":\"8:13 PM\",\"thursday_open\":\"6:50 AM\",\"thursday_close\":\"4:24 PM\",\"friday_open\":\"6:24 AM\",\"friday_close\":\"8:02 PM\",\"saturday_open\":\"9:22 AM\",\"saturday_close\":\"4:07 PM\",\"sunday_open\":\"8:58 AM\",\"sunday_close\":\"5:18 PM\"},{\"id\":15,\"name\":\"Cormier, Nolan and Kiehn\",\"url\":\"https://unblog.fr/at/nunc/commodo/placerat/praesent/blandit.json\",\"address\":\"5371 Chive Terrace\",\"city\":\"Oklahoma City\",\"state\":\"OK\",\"postal_code\":\"73104\",\"latitude\":35.4794,\"longitude\":-97.5017,\"monday_open\":\"6:52 AM\",\"monday_close\":\"8:35 PM\",\"tuesday_open\":\"9:10 AM\",\"tuesday_close\":\"5:20 PM\",\"wednesday_open\":\"6:09 AM\",\"wednesday_close\":\"5:03 PM\",\"thursday_open\":\"8:52 AM\",\"thursday_close\":\"9:25 PM\",\"friday_open\":\"8:26 AM\",\"friday_close\":\"5:30 PM\",\"saturday_open\":\"7:49 AM\",\"saturday_close\":\"8:52 PM\",\"sunday_open\":\"6:39 AM\",\"sunday_close\":\"5:45 PM\"},{\"id\":16,\"name\":\"Dicki Inc\",\"url\":\"http://blogspot.com/platea.js\",\"address\":\"04919 Utah Hill\",\"city\":\"Los Angeles\",\"state\":\"CA\",\"postal_code\":\"90020\",\"latitude\":34.0665,\"longitude\":-118.3022,\"monday_open\":\"6:06 AM\",\"monday_close\":\"8:40 PM\",\"tuesday_open\":\"6:29 AM\",\"tuesday_close\":\"7:56 PM\",\"wednesday_open\":\"6:41 AM\",\"wednesday_close\":\"9:47 PM\",\"thursday_open\":\"8:07 AM\",\"thursday_close\":\"5:36 PM\",\"friday_open\":\"8:57 AM\",\"friday_close\":\"9:37 PM\",\"saturday_open\":\"8:58 AM\",\"saturday_close\":\"4:42 PM\",\"sunday_open\":\"8:32 AM\",\"sunday_close\":\"5:49 PM\"},{\"id\":17,\"name\":\"Dare, Kutch and Cremin\",\"url\":\"http://last.fm/pharetra/magna/ac/consequat/metus/sapien/ut.aspx\",\"address\":\"35394 Golf Alley\",\"city\":\"Greensboro\",\"state\":\"NC\",\"postal_code\":\"27499\",\"latitude\":36.0807,\"longitude\":-80.0244,\"monday_open\":\"6:38 AM\",\"monday_close\":\"8:14 PM\",\"tuesday_open\":\"9:08 AM\",\"tuesday_close\":\"9:01 PM\",\"wednesday_open\":\"9:23 AM\",\"wednesday_close\":\"9:38 PM\",\"thursday_open\":\"9:02 AM\",\"thursday_close\":\"4:41 PM\",\"friday_open\":\"7:55 AM\",\"friday_close\":\"8:41 PM\",\"saturday_open\":\"7:21 AM\",\"saturday_close\":\"8:00 PM\",\"sunday_open\":\"7:05 AM\",\"sunday_close\":\"6:15 PM\"},{\"id\":18,\"name\":\"Pouros-Hermiston\",\"url\":\"http://clickbank.net/aenean/fermentum/donec/ut.json\",\"address\":\"04001 Washington Terrace\",\"city\":\"Los Angeles\",\"state\":\"CA\",\"postal_code\":\"90030\",\"latitude\":33.7866,\"longitude\":-118.2987,\"monday_open\":\"7:30 AM\",\"monday_close\":\"9:16 PM\",\"tuesday_open\":\"6:49 AM\",\"tuesday_close\":\"8:13 PM\",\"wednesday_open\":\"7:16 AM\",\"wednesday_close\":\"4:06 PM\",\"thursday_open\":\"8:27 AM\",\"thursday_close\":\"5:27 PM\",\"friday_open\":\"9:59 AM\",\"friday_close\":\"8:38 PM\",\"saturday_open\":\"8:24 AM\",\"saturday_close\":\"8:32 PM\",\"sunday_open\":\"6:02 AM\",\"sunday_close\":\"5:11 PM\"},{\"id\":19,\"name\":\"Ondricka-Hills\",\"url\":\"https://bizjournals.com/in/sagittis/dui/vel/nisl/duis.html\",\"address\":\"7520 Melrose Drive\",\"city\":\"Cleveland\",\"state\":\"OH\",\"postal_code\":\"44177\",\"latitude\":41.6857,\"longitude\":-81.6728,\"monday_open\":\"7:45 AM\",\"monday_close\":\"5:07 PM\",\"tuesday_open\":\"9:43 AM\",\"tuesday_close\":\"7:56 PM\",\"wednesday_open\":\"8:30 AM\",\"wednesday_close\":\"9:16 PM\",\"thursday_open\":\"6:38 AM\",\"thursday_close\":\"7:43 PM\",\"friday_open\":\"9:58 AM\",\"friday_close\":\"9:33 PM\",\"saturday_open\":\"8:52 AM\",\"saturday_close\":\"8:11 PM\",\"sunday_open\":\"8:34 AM\",\"sunday_close\":\"5:47 PM\"},{\"id\":20,\"name\":\"Heaney, Schumm and Cruickshank\",\"url\":\"http://hhs.gov/donec/odio/justo/sollicitudin/ut.aspx\",\"address\":\"2294 1st Trail\",\"city\":\"Austin\",\"state\":\"TX\",\"postal_code\":\"78726\",\"latitude\":30.43,\"longitude\":-97.8326,\"monday_open\":\"8:07 AM\",\"monday_close\":\"7:57 PM\",\"tuesday_open\":\"6:59 AM\",\"tuesday_close\":\"5:53 PM\",\"wednesday_open\":\"6:02 AM\",\"wednesday_close\":\"4:16 PM\",\"thursday_open\":\"7:11 AM\",\"thursday_close\":\"6:46 PM\",\"friday_open\":\"8:02 AM\",\"friday_close\":\"8:14 PM\",\"saturday_open\":\"8:33 AM\",\"saturday_close\":\"6:52 PM\",\"sunday_open\":\"7:18 AM\",\"sunday_close\":\"7:31 PM\"}]"
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
        } else if (this.state.type === 2) {
            console.log(this.state)
            return (
                <div className="Right">

                    {/*<div className="map-container">*/}
                        <Map bounds={withWidth(20)}
                            google={this.props.google}
                            className={"map"}
                            zoom={this.props.zoom}
                            initialCenter={this.props.center}
                             style={{float: 'end', height:'100%',width:'auto', display: 'flex'}}
                        >
                            <Marker lat={this.getLat(this.state.current)}
                                    lng={this.getLong(this.state.current)}></Marker>
                        </Map>
                    {/*</div>*/}
                </div>
            )
        } else if (this.state.type === 3) {
            return (
                <div className="Right">
                    <div id="overlay">
                        <div id="overlay2">
                            <div style={{textAlign: "right"}}><img
                                onClick={() => this.setState({type: this.state.prev, prev: 3})} className="XButton"
                                width={45} src={xbutton} alt={logo}></img></div>
                            <div style={{textAlign: "center"}}><img className="centerImage" width={200} src={logo}
                                                                    alt={logo}></img></div>
                            <br/><br/>
                            <div style={{fontSize: 25}} className="AppIndent">
                                {this.getName(this.state.current)}
                            </div>
                            <br/>
                            <div className="AppIndent">
                                {this.getAddress(this.state.current)}
                                <br/>
                                {this.getCity(this.state.current)}, {this.getState(this.state.current)} {this.getPostal(this.state.current)}
                            </div>
                            <br/><br/>
                            <div style={{textAlign: "center"}}>
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
                            <div style={{textAlign: "center"}}>
                                <button className="Button" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = this.getLink(this.state.current);
                                }}> VIEW FULL DETAILS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    async statetransition(id) {
        this.setState({type: 2, prev: 6, current: id})
    }
    handleClickMap = (event) => {
        const id = event.target.id;
        if(id !== '') {
            this.statetransition(id)
        }
    }
    handleClickInfo = (event) => {
        const id = event.target.id;
        var prev = (this.state.type !== 3? this.state.type:this.state.prev)
        this.setState({type: 3, prev, current: id})
    }

    render() {
        const showInMapClicked = (event) => {
            const id = event.target.id;
            window.open("https://www.google.com/maps/dir//"+ this.getLat(id)+","+this.getLong(id));
        };
        if (this.obj === -1) {
            this.request()
        }
        var addressCard = [];

        var rows = [];
        var i = 0;
        while (i < this.obj.length) {
            addressCard = [];
            addressCard.push(
                <div id={i}>
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
            );
            rows.push(
                <div className="Panel">
                        <div id={i} className="App" onClick={this.handleClickMap}>
                            <br/>
                            <div style={{fontSize:25}}>{this.getName(i)}</div>
                            <br/>
                            {this.getAddress(i)}
                            <br/>
                            {this.getCity(i)}, {this.getState(i)} {this.getPostal(i)}
                            <br/><br/>
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

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAGEZvGx3RgZ3rBZfxkOwtDuMqhgb1GunY')
})(App)
// 'AIzaSyAGEZvGx3RgZ3rBZfxkOwtDuMqhgb1GunY'
