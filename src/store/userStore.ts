/*
 * @Description: In User Settings Edit
 * @Author: means
 * @Date: 2019-09-03 09:37:58
 * @LastEditTime: 2019-09-03 10:54:53
 * @LastEditors: Please set LastEditors
 */
import {observable,action} from 'mobx';

class UserStore {

    @observable userId: string = '';
    @observable userName: string = 'means';

    @action login(){
        setTimeout(()=>{
            this.userName="Evolify"
        }, 200)
    }
}

export default new UserStore();