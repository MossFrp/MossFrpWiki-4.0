---
title: 导航
order: 1
toc: menu
nav:
  title: 指南
  order: 1
---
## 前言
### 什么是MossFrp
MossFrp是一个内网穿透服务项目，致力于提供优质且可靠的内网穿透
<br>我们使用自研管理后端，同时拥有大量国内节点
<br>用途包括但不限于MC联机，Steam游戏联机，远程桌面等

### 提问的智慧
为提高问题解决效率，对于需要提问的用户，我们给出以下建议：
- 1.首先，如果是系统问题等非MossFrpFrp问题，请先通过关键词百度/Bing/Google搜索
- 2.其次，先在本文档内找寻解决方案，大部分常见问题在右上角“常见问题”栏中均有提供解决方案
- 3.然后，如果是文档内未提及的问题或一些解决方法不明确的问题，请先到用户群内提问，提问时请带上一切可能有用的截图，如MossFrp客户端截图，日志截图，报错截图等（请注意给您的穿透码打码）
- 4.最后，如果群内迟迟没有人回答或群友提供的解决方案不可行，联系管理员或群主，带上问题信息提问
- PS：如果您的提问为已经在文档提供解决方法的问题，向墨守提问的时候可能会遇到一只暴躁的墨守喔~
- 用户交流群：（四群）207807775

## 注册教程
### 网站注册
- 1.https://panel.mossfrp.top/#/register
- 2.应该没什么好教的，挺简单的
- 3.网页注册后可在QQ群内使用 #绑定邮箱 指令绑定账号
### 群机器人注册[即将弃用]
- PS: 此功能即将弃用，如果机器人说去网页注册，那就乖乖去网页注册吧2333
- 1.加入用户交流群 609996925，一般来说会自动通过
- 2.在群内发送 #注册 指令，此时会有一个机器人回复你
- 3.点开机器人头像，和机器人发起群内临时会话
- 4.向机器人发送 #注册 指令，此时会自动生成一份默认的信息，如果觉着没问题就可以直接 #确认 了
- 5.如果需要自定义信息，请在 #注册 指令后加上 <邮箱> <名称> <密码> 这三个参数，举个例子：#注册 123456@qq.com HaoYe 12345678
- 6.确认信息无误后，发送 #确认 来确认你的指令，注意是 #确认 而不是 #确定！！！！！
### Tips
- 1.如果收不到邮件大概率是被判定为垃圾邮件了，换个邮箱吧
- 2.网页登录后是绑定IP的，所以建议在稳定的IP环境下使用panel

## 关于货币
> MossFrp使用金币&银币两种内部货币用于购买穿透码等操作
### 银币
> 银币是MossFrp的一种常规货币，可通过多种途径获取
- 获取途径：
- 1.每日签到
- 2.BUG反馈
- 3.各种活动
- 4.直接购买
- 5.节点赞助银币收益
- 6.注册就赠送3500银币
### 金币
> 金币是MossFrp的一种高级货币，能为节点提供者提供实际收益
- 获取途径：
- 1.直接购买（购买兑换常规比率：1RMB=1000金币）
- 2.BUG反馈
- 3.节点赞助金币收益

## 穿透码教程
> 与友商不同的是，MossFrp使用了一种独有的密钥格式：穿透码，请先阅读穿透码教程以了解此内容
- [穿透码相关教程](/guide/code.md) 

## 客户端使用教程
### 版本区别
[最推荐]MossFrpJava.jar是java端，支持win/linux，一个jar支持独立运行/bc/spigot/velocity，上手难度略高，功能最全，需要java环境
<br>[最推荐]MossFrp_Client_Fastv.exe是Windows命令行的极度简化版，有设置引导，使用无残留，不需要配置环境，建议新手小白用这个
<br>[较推荐]MossFrp_Client.exe是Windows命令行的简化标准版，有设置引导，不需要配置环境
<br>[不推荐]MossFrp.exe是简易GUI图形化客户端，适合萌新小白，上手难度最低，需要.net6环境（此版本客户端不再提供问题解答和技术支持）
### MossFrpJava 系列
> Jar同时支持作为模组/插件/独立客户端，功能较全，但需要Java8及以上的环境
- [Windows使用方法](/guide/client.md#Windows-使用方法) | [Linux使用方法](/guide/client#linux-使用方法)
- [Minecraft客户端使用方法](/guide/client#minecraft客户端使用方法) | [Minecraft服务端插件使用方法](/guide/client#minecraft服务端插件使用方法)
- PS：由于兼容困难，我们暂时不建议以插件/模组的形式运行，更推荐以独立客户端的形式运行
### MossFrpClient 系列
> 此系列客户端最为简单，推荐小白使用，不需要安装额外环境
- [[Win]MossFrp_Client]() | [[Win]MossFrp_Client_Fastv]()
### MossFrpGui 系列
> 此类客户端偏小白向，但均为第三方开发者维护，有较多问题（此版本客户端不再提供问题解答和技术支持，不建议使用）
- [[.NET] MossFrpGui - ki](/guide/client#net-mossfrpgui---ki)

## 修改密码
### Tips
- 1.一般情况下吧是没必要修改密码的，除了2022.11前注册的用户由于加密格式的变更，需要重新修改一次密码，才能正常使用密码登录
### 网站修改密码
- 1.https://panel.mossfrp.top/#/forgetpwd
- 2.应该也挺简单，毕竟有GUI界面，没什么好教的
### 群机器人修改密码[即将弃用]
- PS: 此功能即将弃用，建议使用网页panel
- 1.打开与机器人的私聊窗口
- 2.使用指令【#更新信息 password 你的密码】（示例：#更新信息 password 123456）
- 3.发送【#确认】（可能使用上一条指令会没回复，一般情况下都是收到了的，基本上直接确认就行）
- 4.理论上会给你发送一串验证码到邮箱
- 5.发送【#确认 验证码】，这个时候就更新好了
- 6.这里全程可能会需要盲输指令，可能只有指令输错或比较短的成功消息才会有回复，没办法，风控就这样
- 7.实在不行，你也可以找墨守帮忙重置一个随机密码

