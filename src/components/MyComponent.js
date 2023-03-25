import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Nguyen Quang Thang",
        age: 22,
    }

    changeName(event) {
        this.setState({
            name: "Thang"
        })
    }

    render() {
        return (
            <div>
                <p>Hello there! My name is {this.state.name}</p>
                <button onClick={() => this.setState({name: "Thang"})}>Change name</button>
            </div>

        );
    }
}
export default MyComponent;