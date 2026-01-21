title: 客户端使用教程
order: 2
toc: menu
---
## MossFrpClient 系列

### Windows 使用方法

#### 前言&准备
Windows 系统本是不带Java运行环境的，所以我们需要自行去下载，我这里推荐[ZuluJDK](https://www.azul.com/downloads/?version=java-8-lts&os=windows&architecture=x86-64-bit&package=jdk)，理论支持Java8+,安装Java这里就不在多赘述了，记得在安装页面勾选Java-Home。

#### 启动
在群文件内下载MossFrpClient.jar并双击他，目录下会自动生成一个run.bat，理论上会自动打开命令行窗口运行

<img width="632" height="165" alt="image" src="https://github.com/user-attachments/assets/247f997e-c5df-4bcb-884d-a2116dfecd4a" />

双击run.bat启动后，当我们看到`启动完成！耗时：114514毫秒！`就说明他已经启动成功了

<img width="647" height="105" alt="image" src="https://github.com/user-attachments/assets/3458f5c8-7665-4bba-9f7f-7d98308da943" />

如果双击没有生成run.bat，那么我们自己写一个
```
@echo off
java -Xmx128m -server -jar MoBoxFrpClient.jar
pause
```
把这段复制到同文件夹下的run.bat双击运行就好啦

启动完成之后，访问本地网站

[http://127.0.0.1:11451/](http://127.0.0.1:11451/)

即可管理本地隧道
#### 获取穿透码
获取穿透码此处不再额外赘述，请参考穿透码相关教程：

[获取穿透码教程](/guide/code.md)

#### 登录账号

<img width="510" height="616" alt="image" src="https://github.com/user-attachments/assets/2ab662e5-575e-47fe-b792-65e1b0264a9c" />

不用我说了吧~

#### 查看穿透码

<img width="2516" height="784" alt="image" src="https://github.com/user-attachments/assets/c48cf68f-4cd8-4ea3-86e8-02c57be2a515" />

你可以在此页面查看你的穿透码列表

#### 创建配置文件

<img width="278" height="418" alt="image" src="https://github.com/user-attachments/assets/a96ede9d-3daa-45b1-9c1a-dcc03b81ab1e" />

在这个页面，你可以创建隧道配置文件。

本配置文件保存在本地MoBoxFrp/configs文件夹里面，如果你需要移动客户端，记得连带文件夹一起挪

<img width="847" height="1175" alt="image" src="https://github.com/user-attachments/assets/e7aae08e-345f-494c-ba90-cb544769e998" />

创建配置文件的流程很简单，选择了穿透码的话基本不用动脑

本地地址在【MoBoxFrp客户端和游戏服务端/主机端在同一台电脑上】99.99%的情况下都是127.0.0.1。

常用端口在都可以直接选择，也可以自定义


#### 启动配置文件

<img width="736" height="838" alt="image" src="https://github.com/user-attachments/assets/93bd910e-e87f-4773-8d9b-594256433768" />

在配置文件管理页面里，你可以看到你刚刚设置的配置文件

确认本地端口与本地需要开放的服务的运行端口一致，点击启动，隧道就会开始运行

启动成功与否网页右上角会弹出消息提醒

<img width="321" height="65" alt="image" src="https://github.com/user-attachments/assets/69389ac9-2cbf-4ae2-bbe6-0d7fc025ef08" />

你也可以在命令行里面观察启动信息

#### [进阶玩法]命令行

如果你不想要使用网页，想要用命令行操作，那么直接输入help指令即可查看帮助

<img width="570" height="208" alt="image" src="https://github.com/user-attachments/assets/f429cdf0-6707-471e-996d-f6a5f9e71277" />

#### [进阶玩法]把客户端部署成服务

我觉得你都用Linux了肯定会这个吧~
