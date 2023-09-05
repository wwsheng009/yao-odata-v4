const { defaultParser } = require("./odataParser");
// const { defaultParser } = Require("bound");

//yao run scripts.test2.test
function test() {
  console.l;
  console.log("defaultParser:", defaultParser);
  const expandUrl =
    "Orders?$filter=Status eq 'Shipped'&$orderby=OrderDate desc&$expand=Customer($select=Name,Address),Items($select=Product,Quantity,Price;$filter=Quantity gt 5)";

  const ast = defaultParser.odataUri(expandUrl);
  console.log(ast);

  //   const ast2 = defaultParser.query(expandUrl);
  //   console.log(ast2);
}

test();
