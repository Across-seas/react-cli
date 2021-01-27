/*
 * @Description: In User Settings Edit
 * @Author: means
 * @Date: 2019-09-03 10:51:34
 * @LastEditTime: 2019-09-03 10:53:12
 * @LastEditors: Please set LastEditors
 */
export interface IUserStore {
    userId: string
    userName: string
}

// store interFace
export interface IStore {
    userStore: IUserStore;
}