// const { Metadata } = require("./meta");
// const { XmlWriter } = require("./xml");

const { Metadata } = Require("meta");
const { XmlWriter } = Require("xml");
const { getModels } = Require("model");

function test() {
  //   console.log("Metadata=>", Metadata);
  let models = getModels();

  // let models = {
  //   table: {
  //     DSL: "models/table.mod.json",
  //     ID: "table",
  //     columns: {
  //       browser: {
  //         label: "浏览器",
  //         name: "browser",
  //         type: "string",
  //       },
  //       engine: {
  //         label: "引擎",
  //         name: "engine",
  //         type: "string",
  //       },
  //       grade: {
  //         label: "级别",
  //         name: "grade",
  //         type: "string",
  //       },
  //       id: {
  //         label: "ID",
  //         name: "id",
  //         type: "ID",
  //       },
  //       platform: {
  //         label: "操作系统",
  //         name: "platform",
  //         type: "string",
  //       },
  //       version: {
  //         label: "版本",
  //         name: "version",
  //         type: "string",
  //       },
  //     },
  //     connector: "",
  //     indexes: null,
  //     option: {},
  //     relations: null,
  //     table: {
  //       charset: "",
  //       collation: "",
  //       comment: "演示表",
  //       engine: "InnoDB",
  //       name: "demo_table",
  //       primarykeys: null,
  //     },
  //   },
  // };
  // console.log(models);
  let meta = new Metadata(models);
  let data = meta.ctrl();

  let xml = new XmlWriter();
  const ret = xml.writeXml(data, 200);
  //   console.log(ret);
  return ret;
}

// test();
