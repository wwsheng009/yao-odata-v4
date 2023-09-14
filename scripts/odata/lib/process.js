const { getModelNameList } = Require("model");
const { getModels, getModel } = Require("model");
const { Metadata } = Require("odata.lib.meta");
const { XmlWriter } = Require("odata.lib.xml");

function getEntryMetaDataXml(base) {
  // https://services.odata.org/V2/OData/OData.svc/
  const nameList = getModelNameList();

  let data = [];
  nameList.forEach((name) => {
    data.push(`<collection href="${name}">
        <atom:title>${name}</atom:title>
    </collection>`);
  });
  return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<service xmlns="http://www.w3.org/2007/app" xmlns:atom="http://www.w3.org/2005/Atom" xml:base="${base}">
    <workspace>
    <atom:title>Default</atom:title>
    ${data}
    </workspace>
</service>`;
}

function getMetaDataXml2() {
  const models = getModels();
  const meta = new Metadata(models);
  const data = meta.ctrl();

  const xml = new XmlWriter();
  const ret = xml.writeXml(data, 200);
  return ret;
}

function convertJsonToXml(json, sModelName, sBaseUrl) {
  const entrys = convertEntrys(json, sModelName, sBaseUrl);

  const xml = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<feed xml:base="${sBaseUrl}" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns="http://www.w3.org/2005/Atom">
    <title type="text">${sModelName}</title>
    <id>${sBaseUrl}${sModelName}</id>
    <updated>2023-09-07T04:58:35Z</updated>
    <link rel="self" title="${sModelName}" href="${sModelName}" />
    ${entrys.join("")}
</feed>`;
  return xml;
}
function convertEntrys(json, sModelName, sBaseUrl) {
  const model = getModel(sModelName);

  const entrys = [];
  for (const item of json) {
    let colXmlstr = "";
    // 不要直接循环item对象，那个索引是随机的。
    model.columns.forEach((col) => {
      const key = col.name;
      if (Object.hasOwnProperty.call(item, key)) {
        // column info

        let element = item[key];

        let edmType = getEdmType(col);
        // edmType = "Edm.String";
        if (edmType == "Edm.String") {
          element = escapedXmlString(element);
        }
        colXmlstr += `<d:${key} m:type="${edmType}">${element}</d:${key}>
              `;
      }
    });

    entrys.push(`<entry>
      <id>${sBaseUrl}${sModelName}(${item.id})</id>
      <link rel="edit" title="${sModelName}" href="${sModelName}(${item.id})" />
      <category term="OdataService.${sModelName}" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme" />
      <content type="application/xml">
          <m:properties>
              ${colXmlstr}
          </m:properties>
      </content>
    </entry>
`);
  }
  return entrys;
}
/**
 * escape xml string
 * @param {string} str text need to be escaped
 * @returns
 */
function escapedXmlString(str) {
  if (!str || typeof str.replace !== "function") {
    return str;
  }
  const strXml = str.replace(/[&<>"']/g, (char) => {
    const entityMap = {
      // Object to map characters to their XML entities
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    };
    return entityMap[char] || char; // Return XML entity if exists, otherwise return original character
  });
  return strXml;
}

function getEdmType(column) {
  let newColumn = {};
  const type = column.type.toUpperCase();
  switch (type) {
    case "STRING":
    case "CHAR":
      newColumn.type = "Edm.String";
      if (column.length) {
        newColumn.maxLength = column.length;
      }
      break;
    case "TEXT":
    case "MEDIUMTEXT":
    case "LONGTEXT":
      newColumn.type = "Edm.String";
      if (column.length) {
        newColumn.maxLength = column.length;
      }
      break;
    case "JSON":
    case "JSONB":
      newColumn.type = "Edm.String";
      newColumn.language = "json";
      if (column.length) {
        newColumn.maxLength = column.length;
      }
      break;
    case "DATE":
      newColumn.type = "Edm.DateTime";
      newColumn.format = "YYYY-MM-DD";
      break;
    case "DATETIME":
      newColumn.type = "Edm.DateTime";
      newColumn.format = "YYYY-MM-DD HH:mm:ss";
      break;
    case "DATETIMETZ":
      newColumn.type = "Edm.DateTime";
      newColumn.format = "YYYY-MM-DDTHH:mm:ssZ";
      break;
    case "TIME":
      newColumn.type = "Edm.Time";
      newColumn.format = "HH:mm:ss";
      break;
    case "TIMETZ":
      newColumn.type = "Edm.Time";
      newColumn.format = "HH:mm:ssZ";
      break;
    case "TIMESTAMP":
    case "TIMESTAMPTZ":
      newColumn.type = "Edm.DateTime";
      break;
    case "TINYINTEGER":
    case "SMALLINTEGER":
    case "INTEGER":
    case "BIGINTEGE":
      newColumn.type = "Edm.Int32";
      break;
    case "UNSIGNEDTINYINTEGER":
    case "UNSIGNEDSMALLINTEGER":
    case "UNSIGNEDINTEGER":
      newColumn.type = "Edm.Int32";
      newColumn.min = 0;
      break;
    case "UNSIGNEDBIGINTEGER":
      newColumn.type = "Edm.Int64";
      newColumn.min = 0;
      newColumn.big = true;
      break;
    case "ID":
    case "TINYINCREMENTS":
    case "SMALLINCREMENTS":
    case "INCREMENTS":
      // 自增长的类型不应该手工输入
      newColumn.type = "Edm.Int32"; //"Edm.Int32";
      newColumn.isID = true;
      // 自增不需要手动输入
      delete newColumn.required;
      break;
    case "BIGINCREMENTS":
      newColumn.type = "Edm.Int64";
      newColumn.big = true;
      break;
    case "FLOAT":
    case "DOUBLE":
      newColumn.type = "Edm.Double";
      break;
    case "DEMICAL":
      newColumn.type = "Edm.Decimal";
      newColumn.precision = column.precision;
      newColumn.step = column.scale && 0.1 ^ column.scale;
      break;
    case "UNSIGNEDFLOAT":
    case "UNSIGNEDDOUBLE":
    case "UNSIGNEDDECIMAL":
      newColumn.type = "Edm.Decimal";
      newColumn.precision = column.precision;
      newColumn.min = 0;
      newColumn.step = column.scale && 0.1 ^ column.scale;
      break;
    case "BOOLEAN":
      newColumn.type = "Edm.Boolean";
      //if is mysql
      if (IsMysql()) {
        newColumn.trueValue = 1;
        newColumn.falseValue = 0;
      }
      break;
    case "UUID":
      newColumn.type = "Edm.Guid";
      break;
    case "ENUM":
      //input-tag
      newColumn.type = "select";
      let options =
        column.option &&
        column.option.map((option) => {
          return {
            label: option,
            value: option,
          };
        });
      newColumn.options = options;
      break;
    default:
      break;
  }
  return newColumn.type;
}
module.exports = {
  getEntryMetaDataXml,
  getMetaDataXml2,
  convertJsonToXml,
};
