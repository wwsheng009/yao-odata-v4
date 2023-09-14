// const odataParser = Require("parser.v2.parser");
const { defaultParser } = require("./lib/parser");

/**
 * convert the query object into query string
 * @param {object} oQuery query object
 * @returns string
 */
function queryObjectToUrl(oQuery) {
  let sParams = "";
  for (const key in oQuery) {
    if (oQuery.hasOwnProperty(key)) {
      const value = Array.isArray(oQuery[key])
        ? oQuery[key].join(",")
        : oQuery[key];
      // sParams += `${decodeURIComponent(key)}=${decodeURIComponent(value)}&`;
      sParams += `${key}=${value}&`;
    }
  }
  if (sParams.endsWith("&")) {
    sParams = sParams.slice(0, -1);
  }
  return sParams;
}
//yao run scripts.parser.v4.test.dummy
function dummy() {
  const queryObj = {
    $format: ["json"],
    $select: ["browser,engine,id,platform,version"],
    $skip: ["0"],
    $top: ["10"],
    expand: ["products/iu"],
  };
  let url1 = queryObjectToUrl(queryObj);
  url1 = "/test?" + url1;
  console.log("url1:", url1);
  const result1 = defaultParser.odataUri(url1);
  console.log(result1);

  // let url2 = "/xx?$format=json&$skip=0&$top=10";
  // // url2 = "/test?" + url2;
  // // console.log("url2:", url2);

  // const result2 = defaultParser.odataUri(url2);
  // // console.log(result2);
  // const url =
  //   "table?$skip=0&$top=10&$select=browser,engine,id,platform,version&$skip=0&$top=10&expand=products/iu";
  // const result = defaultParser.odataUri(url);
  // console.log(result);
}

//yao run scripts.parser.v4.test.dummy
function dummy1() {
  const url1 = "/table";
  console.log("url1:", url1);
  const result1 = defaultParser.odataUri(url1);
  console.log(result1);

  const table = result1.value.resource.raw;
}

function dummy2() {
  const url1 = "/table(1)";
  console.log("url1:", url1);
  const result1 = defaultParser.odataUri(url1);
  console.log(result1);

  const table = result1.value.resource.raw;
}

// dummy2();
