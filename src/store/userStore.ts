/*
 * @Description: In User Settings Edit
 * @Author: means
 * @Date: 2019-09-03 09:37:58
 * @LastEditTime: 2019-09-03 10:54:53
 * @LastEditors: Please set LastEditors
 */
import {observable,action} from 'mobx';

export default class UserStroe {

    @observable userId: string;
    @observable userName: string;

    constructor(){
        this.userId="0000";
        this.userName="evolify";
        this.login();
    }

    @action login(){
        setTimeout(()=>{
            this.userName="Evolify"
        },1500)
    }
}
