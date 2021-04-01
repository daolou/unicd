/*
 * @Author: zhiguo.jzg
 * @Date: 2021-03-30 12:05:13
 */

/**
 * 将utf字符串转为 十六进制unicode
 */
const en = (str: string): string => {
  try {
    if (str === '' || typeof str === 'undefined') return '请输入要转码的字符';
    let s: string = '';
    for (let i = 0, len = str.length; i < len; i++) {
      let str16 = str.charCodeAt(i).toString(16);
      switch (str16.length) {
        case 0:
          str16 = '0000';
          break;
        case 1:
          str16 = '000' + str16;
          break;
        case 2:
          str16 = '00' + str16;
          break;
        case 3:
          str16 = '0' + str16;
          break;
        case 4:
          break;
        default:
          str16 = '0000';
          break;
      }
      s += '\\u' + str16;
    }
    return s;
  } catch (err) {
    console.log(err);
  }
};

/**
 * 将十六进制unicode转为utf字符串
 */
const de = (str: string): string => {
  try {
    if (str === '' || typeof str === 'undefined') return '请输入十六进制unicode';
    const strEs = escape(str);
    if (!strEs.startsWith('%u')) return str;
    const strArr = strEs.split('%u');
    let s: string = '';
    for (let i = 0, len = strArr.length; i < len; i++) {
      if (strArr[i] === '') continue;
      s += String.fromCharCode(parseInt(strArr[i], 16));
    }
    return s;
  } catch (err) {
    console.log(err);
  }
};

export default {
  en,
  de,
};
