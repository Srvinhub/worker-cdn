# Proxy Worker

这是一个简单的 Cloudflare Worker 示例，用于将所有传入的请求转发到指定的目标服务器，并保持原始请求的路径、方法和头信息。该 Worker 会将请求转发到 `http://s10.serv00.com:10086`，并附加请求的路径。

## 功能描述

该 Cloudflare Worker 会拦截所有传入的请求，并将请求转发到目标服务器。请求的 URL 路径、方法（如 GET、POST 等）和请求头会被保持不变。对于 POST 请求，Request Body 会被转发到目标服务器。

## 使用方法

1. 在 [Cloudflare Workers](https://workers.cloudflare.com/) 控制台创建一个新的 Worker。
2. 将文件代码粘贴到 Worker 编辑器中
