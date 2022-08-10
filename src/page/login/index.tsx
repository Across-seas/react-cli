import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import { IStore, IUserStore } from '../../store/interfaceStore';

interface IProps {
    userStore: IUserStore
}

type LoginProps = IProps & RouteComponentProps;

@inject((store: IStore) => ({
    userStore: store.userStore
}))
@observer
class Login extends React.Component<LoginProps> {
    componentDidMount() {
        console.log(this.props.userStore)
    }
    render() {
        return (
            <div onClick={() => {
                this.props.userStore.login();
            }}>
                用户名: {this.props.userStore.userName}
            </div>
        )
    }
}

export default Login;
