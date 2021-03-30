/*
 * @Author: zhiguo.jzg
 * @Date: 2021-03-30 12:05:13
 */

/**
 * 将utf字符串转为 十六进制unicode
 */
const en = (str: string): string => {
  if (str === '' || typeof str === 'undefined') return '请输入要转码的字符';
  let s: string = '';
  for (let i = 0, len = str.length; i < len; i++) {
    s += '\\u' + str.charCodeAt(i).toString(16);
  }
  return s;
};

/**
 * 将十六进制unicode转为utf字符串
 */
const de = (str: string): string => {
  if (str === '' || typeof str === 'undefined') return '请输入十六进制unicode';
  const strArr = escape(str).split('%u');
  let s: string = '';
  for (let i = 0, len = strArr.length; i < len; i++) {
    if (strArr[i] === '') continue;
    s += String.fromCharCode(parseInt(strArr[i], 16));
  }
  return s;
};

export default {
  en,
  de,
};
