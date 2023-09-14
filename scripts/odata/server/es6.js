const { ODataServer } = require("./server");
const { ODataController } = require("./controller");
const { ODataEntity } = require("./odata");
const odata = require("./odata");
const Edm = require("./edm");

//定义一个基础类型，需要继承ODataEntity后才以应用define方法。
class ES6Type extends ODataEntity {}

//给类型批量应用修饰器
ES6Type.define({
  id: [Edm.Int32, Edm.Key, Edm.Computed],
  key: Edm.String,
  value: Edm.String,
});

//定义一个控制器，继承ODataController，也拥有define能力
class ES6Controller extends ODataController {
  all() {
    return [
      Object.assign(new ES6Type(), {
        id: 1,
        key: "almafa",
        value: "kiscica",
      }),
    ];
  }
  one(key) {
    return Object.assign(new ES6Type(), {
      id: key,
      key: "almafa2",
      value: "kiscica2",
    });
  }
}
//应用修饰器，会在ES6Controller注入elementType=ES6Type
ES6Controller.define(odata.type(ES6Type), {
  //应用修饰器，给控制器的方法增加路由功能。
  all: odata.GET,
  one: [
    odata.GET,
    {
      key: odata.key,
    },
  ],
});

class ES6Server extends ODataServer {}
//关联server与controller
ES6Server.define(odata.controller(ES6Controller, true));
// ES6Server.create(3000);

class Response {
  constructor() {
    this.headers = {};
    this.statusCode = 200;
    this.headersSent = false;
    this.encoding = "";
    this.isDone = false;
    this.res = null;
  }
  setHeader(key, value) {
    this.headers[key] = value;
  }
  status(statusCode) {
    this.statusCode = statusCode;
  }
  send(data) {
    this.res = data;
    // console.log("data send", data);
  }

  set(key, value) {
    this.headers[key] = value;
  }
  contentType(type) {
    this.headers["Content-type"] = type;
  }
  write(chunk, encoding, done) {
    this.res += chunk;
    this.encoding = encoding;
    this.isDone = done;
  }
  end() {}
  json(data) {
    this.res = JSON.stringify(data);
  }
}
class Request {
  constructor() {
    this.method = "";
    this.url = "";
    this.headers = {};
    this.originalUrl = "/";
    this.protocol = "http";
    this.host = "localhost";
  }
  get(key) {
    if (this.hasOwnProperty(key)) {
      return this[key];
    }
  }
}
let request = new Request();

// const request = {
request.url = "/ES6";
// url: "/ES6?$filter=Status eq 'Shipped'&$orderby=OrderDate desc&$expand=Customer($select=Name,Address),Items($select=Product,Quantity,Price;$filter=Quantity gt 5)",
request.method = "get";
request.secure = false;
request.headers = {
  host: "127.0.0.1",
};
request.baseUrl = "/test";
// };
let res = new Response();

function next(err) {
  console.log(err);
}
ES6Server.document().requestHandler()(request, res, next);
console.log("result:", res.res);

ES6Server.$metadata().requestHandler()(request, res, next);
console.log("result:", res.res);

ES6Server.requestHandler()(request, res, next);
console.log("result:", res.res);

// console.log("ES6 OData server listening on port: 3000");
