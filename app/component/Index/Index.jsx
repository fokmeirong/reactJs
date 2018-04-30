
import React from 'react';
import createClass from 'create-react-class';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Component1 name="1" />
                <Component2 name="2" />
                <Component3 name='3' />
                <Component4 name="4" />
            </div>
        );
    }
}

class Component1 extends React.Component {
    render() {
        return (
            <div>Hello World {this.props.name}</div>
        );
    }
}

function Component2(props) {
    return (
        <div>Hello World {props.name}</div>
    );
}

var Component3 = createClass({
    render() {
        return (
            <div>Hello World {this.props.name}</div>
        );
    }
});


class Component4 extends React.PureComponent {
    render() {
        return (
            <div>Hello World {this.props.name}</div>
        );
    }
};


export default Index;