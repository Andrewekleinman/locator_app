import logo from './logo.svg';
import './App.css';
import React from "react";

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
        // console.log(this.get(i).name)
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
                    not testing a map panel
                </div>
            </div>
        )
        else {
            // console.log(this.state.current);
            return (
                <div className="Right">
                    <div id="overlay" onClick={() => this.setState({type: this.state.prev, prev: 3})}>
                        <div style={{textAlign: "center"}}><img className="centerImage" width={200} src={logo}
                                                                alt={logo}></img></div>
                        <div style={{fontSize: 25, marginLeft: 10}}>
                            {this.getName(this.state.current)}
                        </div>
                        <br/>
                        <div style={{marginLeft: 10}}>
                            {this.getAddress(this.state.current)}
                            <br/>
                            {this.getCity(this.state.current)}, {this.getState(this.state.current)} {this.getPostal(this.state.current)}
                        </div>
                        <br/>
                    </div>
                </div>
            )
        }
    }

    handleClick(event) {
        const id = event.target.id;

        console.log(id);
    }

    delta() {
        this.setState({
            type : 3,
            prev: this.state.type,
            current: 1
        });
    }

    render() {
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
                                onClick={() => this.setState({type: 1, prev: this.state.type})}>DIRECTIONS
                        </button>
                        <button id={i} className="Button"
                                onClick={() => this.setState({type: 3, prev: this.state.type})}>MORE INFO
                        </button>
                        {/*<button id={i} onClick={this.handleClick}>Button</button>*/}
                        <button id="testID" onClick={this.delta.bind(this)}>+</button>
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
