// const defaultParser = Require("parser.v4.parser");

//yao run scripts.parser.v4.test1.dummy
function dummy() { }

console.log(typeof Require === "function");
console.log(typeof Require);
if (typeof require !== "function") {
  require = function (file) {
    file = file.replace(/\.\//g, "scripts.parser.v4.");
    console.log(file);
    return Require(file);
  };
}

if (typeof Require != "function") {
  Require = function (file) {
    file = file.replace(/scripts\.parser\.v4\./, "./");
    console.log(file);
    return require(file);
  };
}
// const Edm = Require("scripts.parser.v4.edm");
// console.log(Edm);
