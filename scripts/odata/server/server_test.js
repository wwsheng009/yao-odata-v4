const { ODataServer } = require("./server");

function test() {
  const server = new ODataServer();
  server.onRequest({
    url: "/Orders?$filter=Status eq 'Shipped'&$orderby=OrderDate desc&$expand=Customer($select=Name,Address),Items($select=Product,Quantity,Price;$filter=Quantity gt 5)",
    method: "get",
    secure: false,
    headers: {
      host: "127.0.0.1",
    },
    baseUrl: "/test",
  });
}

// test();
