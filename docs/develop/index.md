---
title: 开发者相关
order: 1
toc: menu
nav:
  title: 开发者相关
  order: 3
---
## API 参考

### 注意

由于新版后端API尚未完全完成，此处文档已过时，请等待更新或直接从网站扒接口

### 前言
API 现已开放测试啦！ 欢迎各位大佬前来调试与二次开发捏！注意，由于加密格式的变更，需要私信机器人使用#更新信息指令重新设置密码才能登录成功！ 

此API文档仅包含Client部分，数据返回格式均为JSON，使用GET方式请求，请严格参照请求格式，注意参数大小写等细节，参数返回时http状态码均为200，实际状态码在status参数里面，以下接收内容均为返回码为200的情况下才会返回的，如果返回码为非200，基本只会有message参数解释

API 调用地址：public.ghs.wiki:7001
### 常用输入参数
"type" 请求类型，必需

"token" 请求token，相当于密钥，绑定IP与userID

除非示例里面没有用到token，其它情况下都得用

### 常用status返回码解析
"200" 请求成功

"400" 缺少type参数或该参数错误

"400" 参数错误或参数不足

"401" Token错误或缺失

"423" 当前访问IP被限制为黑名单（出现多次非法请求或爆破等情况会自动拉黑）

### 注意事项
1.由于WebAPI本身特性原因，有小概率会出现请求失败的情况，推荐如果请求失败的话，有延迟的重新请求2-3次

2.请勿快速请求同一个不需要经常更新的内容，会被视为DOS，我也会不定期翻看各第三方客户端的源码找此类问题

### Login登录请求
使用API必须的请求，会返回一个token，后续不管什么操作都要使用
#### 特殊返回码
"404" 账号或密码错误
#### 发送内容
```
  {
    "type": "login", #请求类型
    "loginType": "qq", #登录方式，qq/email/userID
    "account": "123456", #登录账号
    "password": "66666666" #登录密码，暂定为明文
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "token": "xxx" #返回的token，应定义为全局变量，全程都要用
  }
```
#### 参考用法
```
http://[API地址]/API?type=login&loginType=qq&account=1292141077&password=123456
```
#### 参考返回
```
  {
    "status": "200",
    "token": "70caf24d-a6de-48ab-9529-deaf92c76776"
  }
```
### UserCode用户穿透码信息请求
也是一个必需的请求，会返回用户所有的穿透码及其完整信息
#### 特殊返回码
  无
#### 发送内容
```
  {
    "type": "userCode", #请求类型
    "token": "xxx" #token，绑定用户的userID
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "codeData": { #返回的穿透码列表，为JSON形式
      "1": { #数据编号，一般从1开始，顺序向下排，便于读取
        "node": "xxx", #节点编号
        "number": "xxx", #穿透码编号，用于操作穿透码
        "code": "xxx", #穿透码
        "activity": "xxx", #是否为活动穿透码（是的话无法删除）
        "stop": "xxx", #到期时间
        "port": "xxx", #服务端口，可用端口为顺序后9个
        "start": "xxx", #创建时间
        "warning": "xxx", #是否发送到期警告
        "ID": "xxx", #穿透码编号，仅为区分穿透码使用
        "band": "xxx", #带宽，单位Mbps
        "user": "xxx", #用户userID
        "status": "xxx" #穿透码状态，run为正常运行，outdated为到期，banned为封禁
      }, #下面同上，只是表现多个穿透码时候的数据结构
      "2": {
        "node": "xxx",
        "number": "xxx",
        "code": "xxx",
        "activity": "xxx",
        "stop": "xxx",
        "port": "xxx",
        "start": "xxx",
        "warning": "xxx",
        "ID": "xxx",
        "band": "xxx",
        "user": "xxx",
        "status": "xxx"
      }
    }
  }
``` 
#### 参考用法
http://[API地址]/API?type=userCode&token=1fe470d6-33dc-4e97-81b4-937be4a15bf1
#### 参考返回
```
  {
    "status": "200",
    "codeData": {
      "1": {
        "node": "test",
        "number": "1234567",
        "code": "4test6666666666666666",
        "activity": "false",
        "stop": "1966173815000",
        "port": "40960",
        "start": "1637661815000",
        "warning": "false",
        "ID": "69",
        "band": "5",
        "user": "10000000",
        "status": "run"
      },
      "2": {
        "node": "sq3",
        "number": "8910111",
        "code": "3sq666666666666666666",
        "activity": "false",
        "stop": "1668595157748",
        "port": "59410",
        "start": "1664620757746",
        "warning": "false",
        "ID": "4697",
        "band": "30",
        "user": "10000000",
        "status": "run"
      }
    }
  }
```
### AllNode全部节点信息请求
也是挺重要的，毕竟不指望用户会去背下来全部节点，返回数据量有点大，你忍一下
#### 特殊返回码
无
#### 发送内容
```
  {
    "type": "userCode", #请求类型
    "token": "xxx" #token，绑定用户的userID
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "nodeData": {
      "ab1": { #节点编号
        "address": "xxx", #地区以及网络类型
        "activity": "xxx", #是否为活动节点（活动节点所创建/续期/升配的穿透码都会变成活动穿透码）
        "load": "xxx%", #节点负载（只有一个的话，就说明是旧版节点，只显示理论负载）
        "enable": "xxx", #此节点是否可用
        "price": "xxx", #价格，单位见coin
        "band-max-per": "xxx", #单穿透码最高带宽，不代表节点实际最大带宽
        "coin": "xxx", #购买类型（gold是只能金币购买，silver是只能银币购买，mixed是都可以）
        "info": "xxx" #节点信息或备注
      }, #下面同上，只是表现返回多个节点时候的数据结构
      "ab2": {
        "address": "xxx",
        "activity": "xxx",
        "load": "xxx% | xxx%", #这里后面那个是实际上行带宽负载
        "enable": "xxx",
        "price": "xxx",
        "band-max-per": "xxx",
        "coin": "xxx",
        "info": "xxx"
      }
    }
  }
```
#### 参考用法
http://[API地址]/API?type=allNode&token=1ccb96bb-16d1-4d81-bb89-358aa6a8edc0
#### 参考返回
```
  {
    "status":"200",
    "nodeData": {
      "sh6": {
        "address": "上海腾讯云",
        "activity": "false",
        "load": "0.00%",
        "enable": "true",
        "price": "37",
        "band-max-per": "10",
        "coin": "gold",
        "info": "赞助By-misaka，本节点禁止建站/websocket，禁止v2/ss/trojan/clash以及搭建订阅网站"
      },
      "sh5": {
        "address": "上海电信单线",
        "activity": "false",
        "load": "16.00% | 0.10%",
        "enable": "true",
        "price": "36",
        "band-max-per": "30",
        "coin": "mixed",
        "info": "赞助By-阳阳，本节点不允许建站，禁止v2/ss/trojan/clash以及搭建订阅网站"
      }
    }
  }
```
### RemoveCode删除穿透码请求
一个有一定风险的请求，请在客户端做好确认机制，后端不会提供确认机制，发了请求就直接删除了
#### 特殊返回码
"403" 各种错误原因，详见message参数
#### 发送内容
```
  {
    "type": "removeCode", #请求类型
    "token": "xxx", #token，绑定用户的userID
    "node": "xxx", #该穿透码的节点
    "number": "xxx" #该穿透码的七位数字编号
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "coin": "xxx" #删除该穿透码所返还的银币（一般是扣除当天）
  }
```
#### 参考用法
http://[API地址]/API?type=removeCode&token=1ccb96bb-16d1-4d81-bb89-358aa6a8edc0&node=sq1&number=1234567
#### 参考返回
```
  {
    "status": "200",
    "coin": "999"
  }
```
### CreateCode创建穿透码请求
通过请求自动创建穿透码，创建完成后需要一定时间给节点响应，后端不会提供确认机制，发了请求就直接创建了
#### 特殊返回码
"403" 各种创建失败原因，详见message参数
#### 发送内容
```
  {
    "type": "removeCode", #请求类型
    "token": "xxx", #token，绑定用户的userID
    "node": "xxx", #该穿透码的节点
    "date": "xxx", #穿透码时长，单位：天
    "band": "xxx" #穿透码带宽，单位：Mbps
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "coin": "xxx", #创建该穿透码所消耗的银币
    "type": "xxx" #所使用的货币类型（MIXED混合，GOLD金币，SILVER银币）
  }
```
#### 参考用法
http://[API地址]/API?type=createCode&token=1ccb96bb-16d1-4d81-bb89-358aa6a8edc0&node=sq1&band=1&date=3
#### 参考返回
```
  {
    "status": "200",
    "coin": "120",
    "type": "MIXED"
  }
```
### Verification验证码请求
通过请求向目标游戏发送六位验证码，并存入缓存，才能进行后续需要验证码的操作比如注册，一个邮箱只能同时缓存一个验证码，验证码每隔60S才能发送一次
#### 特殊返回码
无
#### 发送内容
```
  {
    "type": "verification", #请求类型
    "email": "xxx", #用户的邮箱
    "key": "xxx" #本次验证码用途，可填参数见具体请求需求
  }
```
#### 接收内容
```
  {
    "status": "200" #返回码
  }
```
#### 参考用法
http://[API地址]/API?type=verification&email=1292141077@qq.com&key=register
#### 参考返回
```
  {
    "status": "200"
  }
```
### Register注册请求
需要先发送verification请求向邮箱发送验证码才可以注册，此方法为敏感方法，发现异常会被立刻阻断，客户端需要自备人机验证，API后续开发会提供人机验证，对于QQ这一些非必要参数，可以通过更新信息的API进行补充，注意，此方法是验证码通过在前，信息检查在后，故一旦信息不合法，需要获取新的验证码（冷却不重置）
#### 特殊返回码
"403" 信息有误，详见message参数
"404" 验证码错误
#### 发送内容
```
  {
    "type": "register", #请求类型
    "email": "xxx", #用户的邮箱
    "username": "xxx", #用户名称
    "password": "xxx", #用户密码
    "code": "xxx" #发送verification请求后获得的验证码，verification请求的key参数：register
  }
```
#### 接收内容
```
  {
    "status": "200" #返回码
  }
```
#### 参考用法
http://[API地址]/API?type=register&email=1292141077@qq.com&username=MossCG&code=ABC123&password=www123www
#### 参考返回
```
  {
    "status": "200"
  }
```
### InfoUpdate请求
需要先发送verification请求向邮箱发送验证码才可以操作，此方法为敏感方法，发现异常会被立刻阻断，客户端需要自备人机验证，API后续开发会提供人机验证，当更新邮件的时候，需要向两个邮箱（新旧）同时发送infoUpdate验证码，客户端需要判定俩邮箱是否一致，QQ参数只能在QQ机器人那里解绑绑定，注意，此方法是验证码通过在前，信息检查在后，故一旦信息合法，需要获取新的验证码（冷却不重置）
#### 特殊返回码
"403" 信息有误，详见message参数
"404" 验证码错误
#### 发送内容
```
  {
    "type": "infoUpdate", #请求类型
    "token": "xxx", #token，绑定用户的userID
    "key": "xxx", #更新的目标参数（username用户名称，email邮箱，password密码）
    "value": "xxx", #对应参数的信息
    "code": "xxx", #发送verification请求后获得的验证码，verification请求的key参数：infoUpdate
    "code2": "xxx" #只有在更新email的时候才会用到，平时不需要加，作为新邮箱的验证码
  }
```
#### 接收内容
```
  {
    "status": "200" #返回码
  }
```
#### 参考用法
http://[API地址]/API?type=infoUpdate&key=email&value=1292141077@qq.com&code=ABC123&code2=DEF456&token=1ccb96bb-16d1-4d81-bb89-358aa6a8edc0
#### 参考返回
```
  {
    "status": "200"
  }
```
### UserInfo用户信息请求
也是一个必需的请求，会返回用户所有的非隐私信息
#### 特殊返回码
无
#### 发送内容
```
  {
    "type": "userInfo", #请求类型
    "token": "xxx" #token，绑定用户的userID
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "userInfo": { #返回的用户信息列表，为JSON信息
      "userID": "xxx", #用户编号
      "username": "xxx", #用户名称
      "email": "xxx", #邮箱
      "qq": "xxx", #QQ，可能为null
      "level": "xxx", #用户等级（admin站长、staff管理员、provider节点提供者、default普通用户、banned封禁用户）
      "gold": "xxx", #金币数量
      "silver": "xxx" #银币数量
    }
  }
```
#### 参考用法
http://[API地址]/API?type=userInfo&token=1fe470d6-33dc-4e97-81b4-937be4a15bf1
#### 参考返回
```
  {
    "status": "200",
    "userInfo": {
      "userID": "10000000",
      "username": "墨守MossCG",
      "email": "1292141077@qq.com",
      "qq": "1292141077",
      "level": "admin",
      "gold": "10000",
      "silver": "100000"
    }
  }
```
### DateCode续期穿透码请求
通过请求自动续期穿透码，后端不会提供确认机制，发了请求就直接续期了
#### 特殊返回码
"403" 各种创建失败原因，详见message参数
#### 发送内容
```
  {
    "type": "dateCode", #请求类型
    "token": "xxx", #token，绑定用户的userID
    "node": "xxx", #该穿透码的节点
    "number": "xxx", #该穿透码的7位编号
    "date": "xxx" #穿透码续期时长，单位：天
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "coin": "xxx", #续期该穿透码所消耗的银币
    "type": "xxx" #所使用的货币类型（MIXED混合，GOLD金币，SILVER银币）
  }
```
#### 参考用法
http://[API地址]/API?type=dateCode&token=1ccb96bb-16d1-4d81-bb89-358aa6a8edc0&node=sq1&number=1234567&date=3
#### 参考返回
```
  {
    "status": "200",
    "coin": "120",
    "type": "MIXED"
  }
```
### BandCode升配穿透码请求
通过请求自动升配穿透码，后端不会提供确认机制，发了请求就直接升配了
#### 特殊返回码
"403" 各种创建失败原因，详见message参数
#### 发送内容
```
  {
    "type": "bandCode", #请求类型
    "token": "xxx", #token，绑定用户的userID
    "node": "xxx", #该穿透码的节点
    "number": "xxx", #该穿透码的7位编号
    "band": "xxx" #穿透码增加带宽（注意不是”增加到“是”增加“），单位：Mbps
  }
```
#### 接收内容
```
  {
    "status": "200", #返回码
    "coin": "xxx", #续期该穿透码所消耗的银币
    "type": "xxx" #所使用的货币类型（MIXED混合，GOLD金币，SILVER银币）
  }
```
#### 参考用法
http://[API地址]/API?type=bandCode&token=1ccb96bb-16d1-4d81-bb89-358aa6a8edc0&node=sq1&number=1234567&band=3
#### 参考返回
```
  {
    "status": "200",
    "coin": "120",
    "type": "MIXED"
  }

```
