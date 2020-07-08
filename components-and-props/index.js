function WelcomeFunctionalComponent(props) {
    return <h1>Hello {props.name} from functional component</h1>
}

class WelcomeClassComponent extends React.Component{
    render() {
        return <h1>Hello blah {this.props.name} from class component</h1>
    }
}

const element = (
    <div>
        <WelcomeFunctionalComponent name="Random Person"/>
        <WelcomeClassComponent name="Another Random Person"/>
    </div>
);

const domContainer = document.querySelector('#root');

ReactDOM.render(element, domContainer);