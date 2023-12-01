# batch 请求

batch 请求格式如下：

请求信息：

```json
--batch_id-1693739362678-19
Content-Type:application/http
Content-Transfer-Encoding:binary

GET table?$select=browser,engine,id,platform,version&$skip=0&$top=10 HTTP/1.1
Accept:application/json;odata.metadata=minimal;IEEE754Compatible=true
Accept-Language:zh-CN
X-CSRF-Token:123123
Content-Type:application/json;charset=UTF-8;IEEE754Compatible=true


--batch_id-1693739362678-19--
Group ID: $auto
```

包含几部分信息。

- 使用 boundary 分隔数据，每段信息使用`\r\n\r\n`隔开

```json
--batch_id-1693739362678-19

--batch_id-1693739362678-19--
```

- Mime 头信息。

每一个 boundary 后面一定要跟随一个 Mime 头信息。

```json
--batch_id-1693739362678-19
Content-Type:application/http
Content-Transfer-Encoding:binary


--batch_id-1693739362678-19
Content-Type:application/http
Content-Transfer-Encoding:binary

```

-- 请求正文

```json
GET table?$select=browser,engine,id,platform,version&$skip=0&$top=10 HTTP/1.1
Accept:application/json;odata.metadata=minimal;IEEE754Compatible=true
Accept-Language:zh-CN
X-CSRF-Token:123123
Content-Type:application/json;charset=UTF-8;IEEE754Compatible=true

```

请求 header:

- `Content-Type` 格式是 `multipart/mixed` 加上 boundary 标识，服务端会根据这里的 boundary 进行数据分隔。

```json
POST /api/v1/odata/service/$batch HTTP/1.1
Accept: multipart/mixed
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN
Connection: keep-alive
Content-Length: 408
Content-Type: multipart/mixed; boundary=batch_id-1693739362678-19
Host: localhost:8080
MIME-Version: 1.0
OData-MaxVersion: 4.0
OData-Version: 4.0
Origin: http://localhost:8080
Referer: http://localhost:8080/index.html
X-CSRF-Token: 123123

```

参考：

- https://developers.google.com/classroom/best-practices/batch?hl=zh-cn
