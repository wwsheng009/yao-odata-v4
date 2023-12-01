//yao run scripts.async.test
function test2(id) {
  let ret = {
    data: `your request:${id}`,
  };
  return ret;
}
function test() {
  log("run1 start", printNow());
  let promise1 = ReturnPromiseString("hello");
  log("run2 start", printNow());

  let promise2 = ReturnPromiseString2("hello");
  const promises = [promise1, promise2];

  let ret = {
    data: "message from server",
  };

  Promise.resolve("Hello").then(() => {
    ret = "xxx";
    console.log("function xxxxx:", ret);
  });

  (async () => await Promise.resolve("Hello"))();

  Promise.all(promises).then((value) => {
    ret = value;
    // Process("utils.time.Sleep", 2000);
    log("job done:", value);
  });

  console.log("function return:", ret);
  return ret;
}
function wrap() {
  return (async () => await test())();
}

function printNow() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const timeFormat = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  return timeFormat;
  // return new Date().getTime().toString();
}

async function a() {
  return "World";
}

function ReturnPromiseString(value) {
  // sleep(3000);
  console.log("call ReturnPromiseString");
  return new Promise((resole, reject) => {
    if (value == "hello") {
      log("task1 begin", printNow());
      Process("utils.time.Sleep", 2000);
      // sleep(5000).then(() => {
      //   log("task1 finished", printNow());
      //   resole(value);
      // });
      log("task1 finished", printNow());
      resole(value);
      return;
    }
    reject(new Error("PromiseString Error"));
  });
}

function log(text) {
  console.log(`\n${text} at :${printNow()}`);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function ReturnPromiseString2(value) {
  console.log("ReturnPromiseString2");
  // sleep(5000);
  return new Promise((resole, reject) => {
    if (value == "hello") {
      log("task2 begin", printNow());
      // sleep(5000).then(() => {
      //   log("task2 finished", printNow());
      //   resole(value);
      // });
      Process("utils.time.Sleep", 3000);
      log("task2 finished", printNow());
      resole(value);
      return;
    }
    reject(new Error("PromiseString Error"));
  });
}

// console.log("test is:", test());
// test();
