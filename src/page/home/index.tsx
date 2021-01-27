import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps {}

type HomeProps = IProps & RouteComponentProps;

interface IState {}
class Home extends React.Component<HomeProps, IState> {
    constructor (props: HomeProps) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>这是首页</div>
        )
    }
}

export default Home;
