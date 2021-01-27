import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import {inject, observer} from 'mobx-react';
import { IStore, IUserStore } from '../../store/interfaceStore';
import { Button } from 'antd';

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
            <div>
                <Button type="primary">点击登录</Button>
            </div>
        )
    }
}

export default Login;
