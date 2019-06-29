# rn_ts

> A template for react-native in Typescript.

## Start

开发安卓必须的SDK
在SDK Manager中安装对应版本的build-tool 和 platform-tool
需要配置镜像代理

#### 踩坑
1. SDK Manager闪退
和java目录有关，如果你改变了原来java jdk的目录，那么有可能导致SDK Manager闪退
在sdk\tools目录下，有一个android.bat脚本，它利用sdk\tools\lib目录下的find_java.bat查找java的jdk，如果你变更过jdk目录，则需要手动修改android.bat脚本

android.bat
```bat
rem Check we have a valid Java.exe in the path.
set java_exe = call lib\find_java.bat
```
改为(例如jdk在D:\Java\jdk\bin\java.exe)
```bat
rem Check we have a valid Java.exe in the path.
set java_exe=D:\Java\jdk\bin\java.exe
rem call lib\find_java.bat
```

2. 无法安装Android SDK 28，SDK Manager报错 `Download interrupted: URL not found.`，科学上网也没用

在报错信息中找到Fetching URL地址，在浏览器中打开
查找`Android SDK 28`，找到对应sdk:url标签，内容是一个.zip后缀的文件名
将它拼接在`https://dl.google.com/android/repository/sys-img/android/`后，
或者是`https://dl.google.com/android/repository/`后

3. 手机端报错提示`adb devices` `adb reverse tcp:8081 tcp:8081`
显而易见，cmd 执行

```bash
adb devices

adb reverse tcp:8081 tcp:8081
```