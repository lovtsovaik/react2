/* Core */
import { render } from 'react-dom';

const Child = props => {
    console.log(props);

    return <h1>{props.children}</h1>;
};

const Parent = () => {
    return <Child children="Avada kedavra!" />;
};

render(<Parent />, document.getElementById('root'));
