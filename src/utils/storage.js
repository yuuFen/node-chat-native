import {AsyncStorage} from 'react-native';

export default class StorageUtils {
  static setData(keyName, keyData) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(keyName, keyData, (err) => {
        if (err) {
          return resolve('存储失败');
        }
        return resolve('存储成功');
      });
    });
  }

  static deleteData(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(key, (err) => {
        if (err) {
          return resolve('删除失败');
        }
        return resolve('删除成功');
      });
    });
  }

  static getData(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, res) => {
        if (err) {
          return resolve('获取失败');
        }
        return resolve(res);
      });
    });
  }
}
