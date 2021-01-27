/*
 * @Description: In User Settings Edit
 * @Author: means
 * @Date: 2019-09-03 09:37:58
 * @LastEditTime: 2019-09-03 11:06:32
 * @LastEditors: Please set LastEditors
 */
import UserStroe from './userStore';
import { IUserStore } from './interfaceStore';

class Store {
   userStore: IUserStore;

   constructor(){
      this.userStore = new UserStroe();
   }
}

export default new Store();