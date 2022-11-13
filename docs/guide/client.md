---
title: 客户端使用教程
order: 1
toc: menu
---
## MossFrpJava 系列

### Windows 使用方法
 <details> <summary>视频教程</summary>

<iframe src="//player.bilibili.com/player.html?aid=304583517&bvid=BV1CP411P7Tr&cid=874576568&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" width="700" height="400" allowfullscreen="true"> </iframe>
</details>

#### 前言&准备
Windows 系统本是不带Java运行环境的，所以我们需要自行去下载，我这里推荐[ZuluJDK](https://www.azul.com/downloads/?version=java-8-lts&os=windows&architecture=x86-64-bit&package=jdk)，理论支持Java8+,安装Java这里就不在多赘述了，记得在安装页面勾选Java-Home。

#### 启动
在群文件内下载MossFrpJava.jar并双击他，目录下会自动生成一个run.bat

![114514](https://s1.ax1x.com/2022/10/27/xhMYsH.md.png)

双击run.bat启动后，当我们看到`[信息]启动完成！耗时0.912秒！使用指令‘help’来查看帮助！`就说明他已经启动成功了

![1](https://s1.ax1x.com/2022/10/27/xhMdot.md.png)
#### 创建激活码
> 在我们获取激活码之前，我们要先需要一个MossFrp账户，在群里发送`#注册`即可，非常简单，我这里不再过多的赘述
在群内发送`#创建穿透码 节点 带宽 天数`即可创建，我这里使用qd1作为演示节点

[![xhQimd.md.png](https://s1.ax1x.com/2022/10/27/xhQimd.md.png)](https://imgse.com/i/xhQimd)
#### 查看激活码
这一步我们可以私聊BOT/邮件查看我们的穿透码，我这里选择邮件查看的方法，在群内发送`#穿透码邮件`Bot就会给我们发送带有穿透码的邮件。

[![xhQGt0.md.png](https://s1.ax1x.com/2022/10/27/xhQGt0.md.png)](https://imgse.com/i/xhQGt0)
#### 使用穿透码
我们在邮箱内查看Bot发送给我们的邮件，在穿透码栏复制我们的穿透码，在刚刚打开的客户端中使用`save 名字 穿透码`

[![xhQ0B9.md.png](https://s1.ax1x.com/2022/10/27/xhQ0B9.md.png)](https://imgse.com/i/xhQ0B9)
#### 配置穿透码
我们可以在客户端下文件夹/MossFrp/configs里找到`名字.yml`，打开并修改它，里面注释非常详细，跟着注释修改即可
```yml
#MossFrp客户端配置文件

#是否启用此隧道
enable: true

#隧道类型
#如果是MossFrp用户则填mossfrp
#反之填custom
type: "mossfrp"

#本地地址
#一般填127.0.0.1即可
localIP: "127.0.0.1"
#本地端口
#MC服务器默认25565
#联机请填开放端口
#如MC开启局域网游戏后聊天栏提示的端口
localPort: "25565"

#服务器地址
#frp服务器的地址
#MossFrp用户则为 节点.mossfrp.cn
#如zz1节点就填zz1.mossfrp.cn
remoteIP: "qd1.mossfrp.cn"
#服务器端口
#即服务端frps设置的连接端口
#MossFrp用户即穿透码列表里头显示的端口（一般尾数为0）
#如果使用的save指令生成的配置文件就不用改
remotePort: "41710"
#开放端口
#也就是后面连接服务器使用的端口
#MossFrp用户一般是上面remotePort的后面顺序9个
#可用的端口范围是41711-41719
openPort: "41711"

#Token密码
#用于服务端身份验证，MossFrp用户在此填你的穿透码
#考虑到安全性原因，我们要求无论是否为mossfrp用户都需要设置token
token: "3qd126761684716935667"

#穿透协议
#选填tcp/udp
#MC一般是tcp
protocol: tcp

#---------------------------
#以下是一些高级设置，不懂就别乱动哈
#---------------------------

#启用带宽压缩
#据说会有一点点延迟
#带宽不够用可以开启
use_compression: false
#启用链接加密
#讲真没啥用，需要可以开启
#在特殊情况下无法连接到frp服务器可以尝试开启
use_encryption: false

#开启protocol
#可选参数：false/v1/v2
#例如MC用于Bungee转发真实IP
#请在Bungee配置文件中设置proxy_protocol: true以及ip_forward: true
#然后在Spigot配置文件中设置BungeeCord: true
#最后在此设置参数为 v2
proxy_protocol_version: false

#frpc的基础额外配置
#非必要，没特殊需求就别动
commonExtraSettings: ""
#frpc的隧道额外配置
#非必要，没特殊需求就别动
tunnelExtraSettings: ""
```
#### 重载配置文件
在修改完文件后保存，并在客户端内输入`reload`，看到`隧道启动成功！请使用指令 list 查看隧道列表！`和你的链接地址就说明你已经成功拉！

[![xh1Mon.md.png](https://s1.ax1x.com/2022/10/27/xh1Mon.md.png)](https://imgse.com/i/xh1Mon)
#### [进阶玩法]把客户端部署成服务
待补充ing....

### Linux 使用方法 
<Alert>
教程目前只针对 ArchLinux 做了详细教程，其他发行版自行替换命令 ❤
</Alert>
<details> <summary>视频教程</summary>

<iframe src="//player.bilibili.com/player.html?aid=559582371&bvid=BV1Qe4y1277h&cid=875582184&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" width="700" height="400" allowfullscreen="true"> </iframe>
</details>

#### 前言&准备
Linux 系统一般是不带Java运行环境的，所以我们需要从源里安装，我这里使用Arch源里的OpenJDK，理论支持Java8+，输入密码后等待安装成功即可
```
sudo pacman -S jre8-openjdk --noconfirm
```

[![zCrRi9.md.png](https://s1.ax1x.com/2022/11/11/zCrRi9.md.png)](https://imgse.com/i/zCrRi9)
#### 启动
在群文件/Github内下载MossFrpJava.jar，创建一个新目录，把文件移动进去并打开终端，当我们在终端内输入命令启动后，当我们看到`[信息]启动完成！耗时0.912秒！使用指令‘help’来查看帮助！`就说明他已经启动成功了
```
java -jar MossFrpJava.jar -MossFrp=nb
```

[![zCrWGR.md.jpg](https://s1.ax1x.com/2022/11/11/zCrWGR.md.jpg)](https://imgse.com/i/zCrWGR)
#### 创建激活码
> 在我们获取激活码之前，我们要先需要一个MossFrp账户，在群里发送`#注册`即可，非常简单，我这里不再过多的赘述
在群内发送`#创建穿透码 节点 带宽 天数`即可创建，我这里使用qd1作为演示节点

[![zCrfR1.md.jpg](https://s1.ax1x.com/2022/11/11/zCrfR1.md.jpg)](https://imgse.com/i/zCrfR1)
#### 查看激活码
这一步我们可以私聊BOT/邮件查看我们的穿透码，我这里选择邮件查看的方法，在群内发送`#穿透码邮件`Bot就会给我们发送带有穿透码的邮件。

[![zCrhxx.md.jpg](https://s1.ax1x.com/2022/11/11/zCrhxx.md.jpg)](https://imgse.com/i/zCrhxx)
#### 使用穿透码
我们在邮箱内查看Bot发送给我们的邮件，在穿透码栏复制我们的穿透码，在刚刚打开的客户端中使用`save 名字 穿透码`

[![zCroqO.md.png](https://s1.ax1x.com/2022/11/11/zCroqO.md.png)](https://imgse.com/i/zCroqO)
#### 配置穿透码
我们可以在客户端下文件夹/MossFrp/configs里找到`名字.yml`，打开并修改它，里面注释非常详细，跟着注释修改即可
```yml
#MossFrp客户端配置文件

#是否启用此隧道
enable: true

#隧道类型
#如果是MossFrp用户则填mossfrp
#反之填custom
type: "mossfrp"

#本地地址
#一般填127.0.0.1即可
localIP: "127.0.0.1"
#本地端口
#MC服务器默认25565
#联机请填开放端口
#如MC开启局域网游戏后聊天栏提示的端口
localPort: "25565"

#服务器地址
#frp服务器的地址
#MossFrp用户则为 节点.mossfrp.cn
#如zz1节点就填zz1.mossfrp.cn
remoteIP: "qd1.mossfrp.cn"
#服务器端口
#即服务端frps设置的连接端口
#MossFrp用户即穿透码列表里头显示的端口（一般尾数为0）
#如果使用的save指令生成的配置文件就不用改
remotePort: "43510"
#开放端口
#也就是后面连接服务器使用的端口
#MossFrp用户一般是上面remotePort的后面顺序9个
#可用的端口范围是43511-43519
openPort: "43511"

#Token密码
#用于服务端身份验证，MossFrp用户在此填你的穿透码
#考虑到安全性原因，我们要求无论是否为mossfrp用户都需要设置token
token: "3qd118662621726342897"

#穿透协议
#选填tcp/udp
#MC一般是tcp
protocol: tcp

#---------------------------
#以下是一些高级设置，不懂就别乱动哈
#---------------------------

#启用带宽压缩
#据说会有一点点延迟
#带宽不够用可以开启
use_compression: false
#启用链接加密
#讲真没啥用，需要可以开启
#在特殊情况下无法连接到frp服务器可以尝试开启
use_encryption: false

#开启protocol
#可选参数：false/v1/v2
#例如MC用于Bungee转发真实IP
#请在Bungee配置文件中设置proxy_protocol: true以及ip_forward: true
#然后在Spigot配置文件中设置BungeeCord: true
#最后在此设置参数为 v2
proxy_protocol_version: false

#frpc的基础额外配置
#非必要，没特殊需求就别动
commonExtraSettings: ""
#frpc的隧道额外配置
#非必要，没特殊需求就别动
tunnelExtraSettings: ""
```
#### 重载配置文件
在修改完文件后保存，并在客户端内输入`reload`，看到`隧道启动成功！请使用指令 list 查看隧道列表！`和你的链接地址就说明你已经成功拉！

[![zCrHde.md.png](https://s1.ax1x.com/2022/11/11/zCrHde.md.png)](https://imgse.com/i/zCrHde)
#### [进阶玩法]把客户端部署成服务

待补充ing....

### Minecraft客户端使用方法
<Alert>
此教程使用 Forge 环境做演示，Fabric 环境自行替换前置即可 ❤
</Alert>

#### 前言&准备
这是一款可以安装在客户端的 Frp 内网穿透模组。

你可以选择使用自备 Frp 服务器，也可以选择 MossFrp 提供的 Frp 服务器。

我们推荐使用可以设置正版验证是否开启且可以固定端口的模组一同食用。

> 现支持的 MC 版本有
> - [x] Fabric 1.14 - 1.19.3
> - [x] Forge 1.12 - 1.9

本模组有三个 jar 文件，您可以在群文件/Github中下载，分别为`MossFrpJava.jar（本体）`，`MossFrpForgeSupport-x.x.jar（Forge 前置）`，`MossFrpFabricSupport-x.x.jar（Fabric 前置）`

如何您使用的为 Forge 环境客户端请安装`MossFrpJava.jar`，`MossFrpForgeSupport-x.x.jar`

如何您使用的为 Fabric 环境客户端请安装`MossFrpJava.jar`，`MossFrpFabricSupport-x.x.jar`，<a target="_blank" href="https://www.mcmod.cn/class/3124.html">`Fabric API`</a>
#### 启动 
如果你的minecraft开启了版本隔离，那么你的mod文件夹就应该在`\.minecraft\versions\版本名\mods`，但如果你没有开启那么你的mod文件夹会在`\.minecraft\mods`，我们将自己所需环境的前置mod和MossFrpJava.jar移动到mod文件夹后启动，启动成功后我们可以点到Mod选项中查看是否有MossFrp相关的两个Mod（一个主文件，一个前置

[![ziGWxe.md.png](https://s1.ax1x.com/2022/11/12/ziGWxe.md.png)](https://imgse.com/i/ziGWxe)
#### 创建激活码
> 在我们获取激活码之前，我们要先需要一个MossFrp账户，在群里发送`#注册`即可，非常简单，我这里不再过多的赘述
在群内发送`#创建穿透码 节点 带宽 天数`即可创建，我这里使用qd1作为演示节点

[![ziJSZn.md.png](https://s1.ax1x.com/2022/11/12/ziJSZn.md.png)](https://imgse.com/i/ziJSZn)
#### 查看激活码
这一步我们可以私聊BOT/邮件查看我们的穿透码，我这里选择邮件查看的方法，在群内发送`#穿透码邮件`Bot就会给我们发送带有穿透码的邮件。

[![zit5qJ.md.jpg](https://s1.ax1x.com/2022/11/12/zit5qJ.md.jpg)](https://imgse.com/i/zit5qJ)
#### 使用穿透码
首先进入我们需要让好基友进入的地图，开启局域网链接，之后我们在邮箱内查看Bot发送给我们的邮件，在穿透码栏复制我们的穿透码，在刚刚打开的客户端中使用`mossfrp save 名字 穿透码`

[![zityan.png](https://s1.ax1x.com/2022/11/12/zityan.md.png)](https://imgse.com/i/zityan)
#### 配置穿透码
我们可以在游戏客户端下文件夹/config/MossFrp/configs里找到`名字.yml`，打开并修改它，里面注释非常详细，跟着注释修改即可，比如说我这里的开放端口为52382，那我就可以修改config里面的`localPort`
```yml
#MossFrp客户端配置文件

#是否启用此隧道
enable: true

#隧道类型
#如果是MossFrp用户则填mossfrp
#反之填custom
type: "mossfrp"

#本地地址
#一般填127.0.0.1即可
localIP: "127.0.0.1"
#本地端口
#MC服务器默认25565
#联机请填开放端口
#如MC开启局域网游戏后聊天栏提示的端口
localPort: "52382"

#服务器地址
#frp服务器的地址
#MossFrp用户则为 节点.mossfrp.cn
#如zz1节点就填zz1.mossfrp.cn
remoteIP: "qd1.mossfrp.cn"
#服务器端口
#即服务端frps设置的连接端口
#MossFrp用户即穿透码列表里头显示的端口（一般尾数为0）
#如果使用的save指令生成的配置文件就不用改
remotePort: "43220"
#开放端口
#也就是后面连接服务器使用的端口
#MossFrp用户一般是上面remotePort的后面顺序9个
#可用的端口范围是43221-43229
openPort: "43221"

#Token密码
#用于服务端身份验证，MossFrp用户在此填你的穿透码
#考虑到安全性原因，我们要求无论是否为mossfrp用户都需要设置token
token: "3qd128107713275010942"

#穿透协议
#选填tcp/udp
#MC一般是tcp
protocol: tcp

#---------------------------
#以下是一些高级设置，不懂就别乱动哈
#---------------------------

#启用带宽压缩
#据说会有一点点延迟
#带宽不够用可以开启
use_compression: false
#启用链接加密
#讲真没啥用，需要可以开启
#在特殊情况下无法连接到frp服务器可以尝试开启
use_encryption: false

#开启protocol
#可选参数：false/v1/v2
#例如MC用于Bungee转发真实IP
#请在Bungee配置文件中设置proxy_protocol: true以及ip_forward: true
#然后在Spigot配置文件中设置BungeeCord: true
#最后在此设置参数为 v2
proxy_protocol_version: false

#frpc的基础额外配置
#非必要，没特殊需求就别动
commonExtraSettings: ""
#frpc的隧道额外配置
#非必要，没特殊需求就别动
tunnelExtraSettings: ""
```
#### 重载配置文件
在修改完文件后保存，并在客户端内输入`mossfrp reload`，看到`隧道启动成功！请使用指令 list 查看隧道列表！`和你的链接地址就说明你已经成功拉！这时候你可以把链接地址给你的好朋友，就可以进去拉，我这里第二个客户端没有安装mod，就不演示进去了

[![zitsVs.png](https://s1.ax1x.com/2022/11/12/zitsVs.md.png)](https://imgse.com/i/zitsVs)
### Minecraft服务端插件使用方法
<Alert>
此教程使用 Paper-1.19.2 为演示，适用于 Bungeecord Spigot Velocity 等 💕
</Alert>

#### 前言&准备
首先你需要知道，本插件是不带有开服功能的。他只是在服务端内作为一个插件来帮助你映射，在教程中不会为您提供开服教程。
#### 启动
在群文件/Github内下载MossFrpJava.jar，将他移动到服务器的Plugins目录，然后开启服务器，当我们看到`[MossFrp] Enabling MossFrp`就说明他已经启动成功了。
[![zFu5jI.md.jpg](https://s1.ax1x.com/2022/11/13/zFu5jI.md.jpg)](https://imgse.com/i/zFu5jI)
#### 创建激活码

> 在我们获取激活码之前，我们要先需要一个MossFrp账户，在群里发送`#注册`即可，非常简单，我这里不再过多的赘述
在群内发送`#创建穿透码 节点 带宽 天数`即可创建，我这里使用qd1作为演示节点

[![zFuTDP.md.png](https://s1.ax1x.com/2022/11/13/zFuTDP.md.png)](https://imgse.com/i/zFuTDP)

#### 查看激活码

这一步我们可以私聊BOT/邮件查看我们的穿透码，我这里选择邮件查看的方法，在群内发送`#穿透码邮件`Bot就会给我们发送带有穿透码的邮件。

[![zFu7Hf.md.jpg](https://s1.ax1x.com/2022/11/13/zFu7Hf.md.jpg)](https://imgse.com/i/zFu7Hf)

#### 使用穿透码

我们在邮箱内查看Bot发送给我们的邮件，在穿透码栏复制我们的穿透码，在刚刚打开的客户端中使用`mossfrp save 名字 穿透码`

[![zFubE8.md.png](https://s1.ax1x.com/2022/11/13/zFubE8.md.png)](https://imgse.com/i/zFubE8)

#### 配置穿透码

我们可以在客户端下文件夹/plugins/MossFrp/configs里找到`名字.yml`，打开并修改它，里面注释非常详细，跟着注释修改即可,比如说我的服务器端口为25565，并开启了真实ip转发。
```yml
#MossFrp客户端配置文件

#是否启用此隧道
enable: true

#隧道类型
#如果是MossFrp用户则填mossfrp
#反之填custom
type: "mossfrp"

#本地地址
#一般填127.0.0.1即可
localIP: "127.0.0.1"
#本地端口
#MC服务器默认25565
#联机请填开放端口
#如MC开启局域网游戏后聊天栏提示的端口
localPort: "25565"

#服务器地址
#frp服务器的地址
#MossFrp用户则为 节点.mossfrp.cn
#如zz1节点就填zz1.mossfrp.cn
remoteIP: "qd1.mossfrp.cn"
#服务器端口
#即服务端frps设置的连接端口
#MossFrp用户即穿透码列表里头显示的端口（一般尾数为0）
#如果使用的save指令生成的配置文件就不用改
remotePort: "44090"
#开放端口
#也就是后面连接服务器使用的端口
#MossFrp用户一般是上面remotePort的后面顺序9个
#可用的端口范围是44091-44099
openPort: "44091"

#Token密码
#用于服务端身份验证，MossFrp用户在此填你的穿透码
#考虑到安全性原因，我们要求无论是否为mossfrp用户都需要设置token
token: "3qd111806558965273835"

#穿透协议
#选填tcp/udp
#MC一般是tcp
protocol: tcp

#---------------------------
#以下是一些高级设置，不懂就别乱动哈
#---------------------------

#启用带宽压缩
#据说会有一点点延迟
#带宽不够用可以开启
use_compression: false
#启用链接加密
#讲真没啥用，需要可以开启
#在特殊情况下无法连接到frp服务器可以尝试开启
use_encryption: false

#开启protocol
#可选参数：false/v1/v2
#例如MC用于Bungee转发真实IP
#请在Bungee配置文件中设置proxy_protocol: true以及ip_forward: true
#然后在Spigot配置文件中设置BungeeCord: true
#最后在此设置参数为 v2
proxy_protocol_version: v2

#frpc的基础额外配置
#非必要，没特殊需求就别动
commonExtraSettings: ""
#frpc的隧道额外配置
#非必要，没特殊需求就别动
tunnelExtraSettings: ""
```
#### 重载文件

在修改完文件后保存，并在客户端内输入`mossfrp reload`，看到`隧道启动成功！请使用指令 list 查看隧道列表！`和你的链接地址就说明你已经成功拉！这时候你可以把链接地址给你的好朋友，就可以进去拉！
[![zFuqUS.md.png](https://s1.ax1x.com/2022/11/13/zFuqUS.md.png)](https://imgse.com/i/zFuqUS)

## MossFrpGui 系列
### [.NET] MossFrpGui - ki
#### 前言&准备
Windows 系统貌似是不带有.NET 6.3 运行环境的，但是本软件需要，所以需要我们自行去[下载](https://download.visualstudio.microsoft.com/download/pr/2a392287-fd51-4ee8-9c15-a672ab9bc55d/03d4784b3a543a0fb9ce5677ed13a9a3/windowsdesktop-runtime-6.0.11-win-x86.exe)，并且本程序不带有开服功能，请熟知
#### 启动
安装完后，我们从群文件中下载`[.NET]MossFrpGUI-ki-小白选这个-win32`，当你看到主窗口时便启动成功了。

[![zFMeJg.md.png](https://s1.ax1x.com/2022/11/13/zFMeJg.md.png)](https://imgse.com/i/zFMeJg)
#### 创建激活码
> 在我们获取激活码之前，我们要先需要一个MossFrp账户，在群里发送`#注册`即可，非常简单，我这里不再过多的赘述
在群内发送`#创建穿透码 节点 带宽 天数`即可创建，我这里使用qd1作为演示节点

[![zFlwa6.md.png](https://s1.ax1x.com/2022/11/13/zFlwa6.md.png)](https://imgse.com/i/zFlwa6)
#### 查看激活码
这一步我们可以私聊BOT/邮件查看我们的穿透码，我这里选择邮件查看的方法，在群内发送`#穿透码邮件`Bot就会给我们发送带有穿透码的邮件。

[![zFlrGD.md.jpg](https://s1.ax1x.com/2022/11/13/zFlrGD.md.jpg)](https://imgse.com/i/zFlrGD)
#### 使用穿透码
我们在邮箱内查看Bot发送给我们的邮件，在穿透码栏复制我们的穿透码，在刚刚打开的客户端中输入我们的穿透码并点击解析穿透码

[![zFlyxH.md.png](https://s1.ax1x.com/2022/11/13/zFlyxH.md.png)](https://imgse.com/i/zFlyxH)
#### 配置穿透码
比如说，我MC的局域网游戏端口为1034，那我就要在本机端口中填写1034。后根据我的需求打开/关闭一些功能，例如转发协议，是否开启真实ip转发等

>带宽压缩，据说会有一点点延迟，带宽不够用可以开启

>链接加密，讲真没啥用，需要可以开启，在特殊情况下无法连接到frp服务器可以尝试开启

>真实ip转发，例如MC用于Bungee转发真实IP，如需使用请在Bungee配置文件中设置proxy_protocol: true以及ip_forward: true，然后在Spigot配置文件中设置BungeeCord: true，最后在此设置参数为 v2

[![zFlgsA.md.png](https://s1.ax1x.com/2022/11/13/zFlgsA.md.png)](https://imgse.com/i/zFlgsA)
#### 开始打洞
在我们配置好所有选项后，点击开始打洞，看到`你的远程连接地址为：xxxxxx`就说明已经成功了，把这段话复制给你的朋友，让他链接即可。

[![zFlHMj.md.png](https://s1.ax1x.com/2022/11/13/zFlHMj.md.png)](https://imgse.com/i/zFlHMj)
## MossFrpScript 系列
### [Win]MossFrp_Client
#### 前言&准备
MossFrpClient是MossFrp最简化标准版，有设置引导，不需要配置运行环境的脚本，但关闭后文件还会存在，使用简单

#### 启动
在群文件内下载MossFrp_Client并打开它，你就可以看见一个cmd窗口，并在目录下看见多出来三个文件，看见`请输入穿透码`说明就已经启动成功了

[![zFd7qS.md.png](https://s1.ax1x.com/2022/11/13/zFd7qS.md.png)](https://imgse.com/i/zFd7qS)
#### 创建激活码
> 在我们获取激活码之前，我们要先需要一个MossFrp账户，在群里发送`#注册`即可，非常简单，我这里不再过多的赘述
在群内发送`#创建穿透码 节点 带宽 天数`即可创建，我这里使用qd1作为演示节点

[![zFdjGn.md.png](https://s1.ax1x.com/2022/11/13/zFdjGn.md.png)](https://imgse.com/i/zFdjGn)
#### 查看激活码
这一步我们可以私聊BOT/邮件查看我们的穿透码，我这里选择邮件查看的方法，在群内发送`#穿透码邮件`Bot就会给我们发送带有穿透码的邮件。

[![zFwMZD.md.png](https://s1.ax1x.com/2022/11/13/zFwMZD.md.png)](https://imgse.com/i/zFwMZD)
#### 使用穿透码
我们在邮箱内查看Bot发送给我们的邮件，在穿透码栏复制我们的穿透码，在刚刚打开的客户端中粘贴进去

[![zFwlIH.md.png](https://s1.ax1x.com/2022/11/13/zFwlIH.md.png)](https://imgse.com/i/zFwlIH)
#### 配置穿透码
我们安照引导，一步一步输入即可，十分简单
```
1. 设置隧道名      #随便乱敲些东西进去即可，只要别空着
2. 设置映射类型    #注意是输入映射类型前数字
3. 设置远程端口    #一个穿透码对应会有十个端口，有一个作为服务端口，我们还有九个端口可选
4. 设置本地地址    #无特殊情况一律填写 127.0.0.1
5. 设置本地端口    #你需要映射服务的端口
```
#### 确认信息
确认无误输入Y 有错误请输入N，输入Y后，他会自动帮你启动，如果你下次想启动的时候点击目录下的`点击启动.bat`即可，无需再次打开MossFrp_Client

[![zF0IHS.md.png](https://s1.ax1x.com/2022/11/13/zF0IHS.md.png)](https://imgse.com/i/zF0IHS)
### [Win]MossFrp_Client_Fastv
#### 前言&准备
MossFrpClient_Fastv是Windows命令行的极度简化版，有设置引导，关闭后清除文件，同样不需要配置环境

#### 启动
在群文件内下载MossFrp_Client_Fastv并打开它，你就可以看见一个cmd窗口，并在目录下看见多出来三个文件，看见`请输入穿透码`说明就已经启动成功了

[![zFDSMt.md.png](https://s1.ax1x.com/2022/11/13/zFDSMt.md.png)](https://imgse.com/i/zFDSMt)
#### 创建激活码
> 在我们获取激活码之前，我们要先需要一个MossFrp账户，在群里发送`#注册`即可，非常简单，我这里不再过多的赘述
在群内发送`#创建穿透码 节点 带宽 天数`即可创建，我这里使用qd1作为演示节点

[![zFdjGn.md.png](https://s1.ax1x.com/2022/11/13/zFdjGn.md.png)](https://imgse.com/i/zFdjGn)
#### 查看激活码
这一步我们可以私聊BOT/邮件查看我们的穿透码，我这里选择邮件查看的方法，在群内发送`#穿透码邮件`Bot就会给我们发送带有穿透码的邮件。

[![zFwMZD.md.png](https://s1.ax1x.com/2022/11/13/zFwMZD.md.png)](https://imgse.com/i/zFwMZD)
#### 使用穿透码
我们在邮箱内查看Bot发送给我们的邮件，在穿透码栏复制我们的穿透码，在刚刚打开的客户端中粘贴进去

[![zFDPZ8.md.png](https://s1.ax1x.com/2022/11/13/zFDPZ8.md.png)](https://imgse.com/i/zFDPZ8)
#### 配置穿透码
我们安照引导，一步一步输入即可，十分简单
```
1. 设置隧道名      #随便乱敲些东西进去即可，只要别空着
2. 设置映射类型    #注意是输入映射类型前数字
3. 设置远程端口    #一个穿透码对应会有十个端口，有一个作为服务端口，我们还有九个端口可选
4. 设置本地地址    #无特殊情况一律填写 127.0.0.1
5. 设置本地端口    #你需要映射服务的端口
```
#### 确认信息
确认无误输入Y 有错误请输入N，输入Y后，他会自动帮你启动，关闭终端后Frp文件消失，如果你下次想启动的时候需要重新打开MossFrp_Client_Fastv进行重新配置后使用
