/**
 * 仿写 qs.parse
 * @returns Object
 */

// get传递参数格式：  '参数名=值&...&参数名=值'
// parse 将  get传递参数  转化为 对象

module.exports.parse = function (params) {
  if (!params) {
    return {};
  }
  let arr = params.split("&");
  let obj = {};
  arr.forEach((item) => {
    let temp = item.split("=");
    obj[temp[0]] = temp[1];
  });
  return obj;
};

/**
 * 仿写 qs.stringify
 * @returns String
 */

// get传递参数格式：  '参数名=值&...&参数名=值'
// stringify  将  对象  转化为   get传递参数格式

module.exports.stringify = function (params) {
  let arr = [];
  for (const key in params) {
    arr.push(`${key}=${params[key]}`);
  }
  return arr.join("&");
};
