import { isString } from './util';
/**
 * 解决 px 问题
 *
 * @param {Object} value 处理的字符串
 * @private
 * @example
   console.log(px(1)); // 1px
   console.log(px('1')); // 1px
   console.log(px('#666')); // '#fff'
 * @returns {string} value 新字符串
 */
export const px = (value) => {
  const newVal = value - 0;
  return typeof value === 'number' || (typeof newVal === 'number' && !Number.isNaN(newVal)) ? `${value}px` : value;
};
export const delPx = (value) => {
  if (!isString(value)) {
    return value;
  }
  return value.replace(/px/g, '');
};
