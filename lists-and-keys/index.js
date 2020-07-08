const numbers = [1,2,3,4,5];
const listItems = numbers.map(number => <li>{number}</li>);

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>)
    return (
        <ul>{listItems}</ul>
    )
}

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);