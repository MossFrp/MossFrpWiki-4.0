---
title: 客户端常见问题
order: 1
toc: menu
nav:
  title: 常见问题
  order: 2
---
## frpc 常见日志
## 'frpc.exe' 不是内部或外部命令，也不是可运行的程序
本软件已和360/windef/卡巴斯基等杀毒软件达成单向合作，会随机触发彩蛋：报毒/找不到文件，若出现上述彩蛋请关闭/卸载360等杀毒软件（尤其是360）
### `[XXX]` start proxy success
`XXX` 隧道启动成功，隧道启动成功，一切正常 
### ecover success: [`XXX`]
不断线重连成功: [`XXX`]，属于正常网络波动，10 分钟内不超过 1 次则可以忽略 
### recover to server timed out
不断线重连失败，大概可能是网络波动造成的，frpc 会自动尝试另外一种重连方式，一般可以忽略
### Connection recover failed: `XXX` 
不断线重连失败: `XXX`，大概可能应该是网络波动造成的，frpc 会自动尝试另外一种重连方式，一般可以忽略
### read from control connection EOF
控制连接读取失败EOF, 可能是网络不稳定
### write message to control connection error: `XXX`
控制连接写入失败, 可能是网络不稳定: `XXX`
### login to server failed: `XXX`
登录节点失败, 请检查网络连接: `XXX`，你或许可以运行 PING 测试节点连通性
### connect to local service [`XXX`] error: `YYY`
连接映射目标 [`XXX`] 失败, 请检查本地服务是否打开: `YYY`，可能是存在 frpc 进程残留
