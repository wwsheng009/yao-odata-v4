function parse(urlStr, parseQueryString, slashesDenoteHost) {
  var hash = "";
  var query = null;
  var protocol = null;
  var auth = null;
  var host = null;
  var pathname = null;
  var port = null;
  var hostname = null;
  var password = null;
  var search = null;
  var queryKey = null;
  var queryVal = null;
  var queryArr = null;
  var queryArrLength = null;
  var queryArrIndex = null;
  var strLen = urlStr.length;
  var start = -1;
  var end = -1;
  var i = 0;
  var tmpStr = "";
  var tmpChar = "";
  var tmpArr = null;

  // get hash
  for (i = strLen - 1; i >= 0; i--) {
    tmpChar = urlStr.charAt(i);
    if (tmpChar === "#") {
      start = i + 1;
      hash = urlStr.slice(start, strLen);
      urlStr = urlStr.slice(0, i);
      strLen = urlStr.length;
      break;
    } else if (tmpChar === "?") {
      break;
    }
  }

  // get query
  for (i = strLen - 1; i >= 0; i--) {
    tmpChar = urlStr.charAt(i);
    if (tmpChar === "?") {
      start = i + 1;
      query = urlStr.slice(start, strLen);
      urlStr = urlStr.slice(0, i);
      strLen = urlStr.length;
      break;
    }
  }

  // get protocol
  if (urlStr.substring(0, 2) === "//") {
    if (slashesDenoteHost) {
      start = 2;
      end = urlStr.indexOf("/", 2);
      if (end === -1) {
        end = strLen;
      }
      host = urlStr.slice(start, end);
      urlStr = urlStr.slice(end, strLen);
      strLen = urlStr.length;
    }
  }
  if (urlStr.indexOf(":") !== -1) {
    end = urlStr.indexOf(":");
    protocol = urlStr.slice(0, end);
    urlStr = urlStr.slice(end + 1, strLen);
    strLen = urlStr.length;
  }

  // get auth
  if (urlStr.substring(0, 2) === "//") {
    start = 2;
    end = urlStr.indexOf("@");
    if (end !== -1) {
      auth = urlStr.slice(start, end);
      urlStr = urlStr.slice(end + 1, strLen);
      strLen = urlStr.length;
      if (auth.indexOf(":") !== -1) {
        tmpArr = auth.split(":");
        if (tmpArr.length === 2) {
          hostname = tmpArr[0];
          password = tmpArr[1];
        }
      } else {
        hostname = auth;
      }
    }
  }

  // get hostname and port
  if (urlStr.charAt(0) === "[") {
    end = urlStr.indexOf("]");
    if (end !== -1) {
      hostname = urlStr.slice(1, end);
      urlStr = urlStr.slice(end + 1, strLen);
      strLen = urlStr.length;
      if (urlStr.charAt(0) === ":") {
        urlStr = urlStr.slice(1, strLen);
        strLen = urlStr.length;
        for (i = 0; i < strLen; i++) {
          tmpChar = urlStr.charAt(i);
          if (tmpChar >= "0" && tmpChar <= "9") {
            tmpStr += tmpChar;
          } else {
            break;
          }
        }
        if (tmpStr.length > 0) {
          port = parseInt(tmpStr, 10);
        }
      }
    }
  } else {
    end = -1;
    for (i = 0; i < strLen; i++) {
      tmpChar = urlStr.charAt(i);
      if (tmpChar === ":" || tmpChar === "/") {
        end = i;
        break;
      }
    }
    if (end !== -1) {
      hostname = urlStr.slice(0, end);
      urlStr = urlStr.slice(end, strLen);
      strLen = urlStr.length;
      if (urlStr.charAt(0) === ":") {
        urlStr = urlStr.slice(1, strLen);
        strLen = urlStr.length;
        for (i = 0; i < strLen; i++) {
          tmpChar = urlStr.charAt(i);
          if (tmpChar >= "0" && tmpChar <= "9") {
            tmpStr += tmpChar;
          } else {
            break;
          }
        }
        if (tmpStr.length > 0) {
          port = parseInt(tmpStr, 10);
        }
      }
    } else {
      hostname = urlStr;
    }
  }

  // get pathname
  if (urlStr.charAt(0) === "/") {
    pathname = urlStr;
  } else {
    end = -1;
    for (i = 0; i < strLen; i++) {
      tmpChar = urlStr.charAt(i);
      if (tmpChar === "?" || tmpChar === "#") {
        end = i;
        break;
      }
    }
    if (end !== -1) {
      pathname = urlStr.slice(0, end);
      urlStr = urlStr.slice(end, strLen);
      strLen = urlStr.length;
    } else {
      pathname = urlStr;
    }
  }

  // get search
  if (query !== null) {
    search = "?" + query;
  }

  // get queryKey and queryVal
  if (query !== null && parseQueryString) {
    queryArr = query.split("&");
    queryArrLength = queryArr.length;
    for (i = 0; i < queryArrLength; i++) {
      tmpArr = queryArr[i].split("=");
      queryKey = decodeURIComponent(tmpArr[0]);
      queryVal = tmpArr.length > 1 ? decodeURIComponent(tmpArr[1]) : "";
      if (queryKey.length > 0) {
        if (queryVal.length === 0) {
          queryVal = null;
        }
        if (queryKey in query) {
          if (Array.isArray(query[queryKey])) {
            query[queryKey].push(queryVal);
          } else {
            query[queryKey] = [query[queryKey], queryVal];
          }
        } else {
          query[queryKey] = queryVal;
        }
      }
    }
  }

  return {
    hash: hash,
    query: query,
    protocol: protocol,
    auth: auth,
    host: host,
    pathname: pathname,
    port: port,
    hostname: hostname,
    password: password,
    search: search,
  };
}

function format(urlObj) {
  var protocol = urlObj.protocol || "";
  var auth = urlObj.auth || "";
  var hostname = urlObj.hostname || "";
  var port = urlObj.port || "";
  var pathname = urlObj.pathname || "";
  var search = urlObj.search || "";
  var hash = urlObj.hash || "";

  var host = "";

  if (hostname !== "") {
    host = hostname;
    if (port !== "") {
      host += ":" + port;
    }
  }

  var result = protocol + "//" + auth + host + pathname + search + hash;

  return result;
}

module.exports = {
  parse: parse,
  format: format,
};
