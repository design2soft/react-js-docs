function formatName(user) {
    return `${user.firstName} ${user.lastName}`
};

let user = {
    firstName: "Another",
    lastName: "Person"
}
const name = "Random Person";
const element = (<h1>Hello, {name} and {formatName(user)}</h1>);

const domContainer = document.querySelector("#root");
ReactDOM.render(element, domContainer);