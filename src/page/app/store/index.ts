/*
 * @Description: In User Settings Edit
 * @Author: means
 * @Date: 2019-09-02 17:49:34
 * @LastEditTime: 2019-09-02 18:12:50
 * @LastEditors: Please set LastEditors
 */
import { observable } from 'mobx';

import { Customer } from '../interface';

class Store {
  @observable customer:Customer = {
      id: '11'
  }
}

export default new Store();