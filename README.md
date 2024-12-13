# Cloudflare Proxy Worker

## 简介

一个简单的 Cloudflare Worker 示例，用于将所有传入的请求转发到指定的目标服务器，同时保持原始请求的路径、方法和头信息。

此外，还可以通过设置页面规则来绕过缓存，以避免 WebSocket 连接错误。

## 功能描述

* **请求转发：** 将所有传入的请求转发到目标服务器。

* **保持原始请求信息：** 保持请求的 URL 路径、方法和头信息不变。

* **支持 POST 请求：** 将 POST 请求的 Request Body 转发到目标服务器。

* **绕过缓存：** 通过设置页面规则，可以将特定的请求类型（如 WebSocket）直接发送到源站，避免 Worker 干扰。

## 使用方法

### 1. 创建 Cloudflare Worker

* 登录 Cloudflare 控制面板。

* 选择要配置的域名。

* 进入“Workers”选项卡。

* 点击“创建 Worker”。



### 2. 粘贴 Worker 代码

* 将文件代码粘贴到 Worker 编辑器中
* 自定义域名端口



### 3. 设置页面规则

* 登录 Cloudflare 控制面板。

* 在 Page Rules 中创建规则：

* URL 匹配：https://cdn.example.com/xx*
* xx 为 WebSocket 路径，* 为通配符，表示匹配 /xx 路径下的所有子路径。

* 设置规则：启用 Cache Level 为 Bypass，以避免 Cloudflare 缓存动态内容。
