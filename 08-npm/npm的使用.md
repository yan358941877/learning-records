### npm介绍

* NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具
* NPM的作用:
允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

### npm的基本命令

* npm init 
运行构建新项目的向导
* npm install module_name 
在项目中安装一个模块
* npm install -g module_name 
全局方式安装一个模块
* npm install module_name –save 
在项目中安装一个模块，并把此模块添加到项目配置文件package.json中，作为项目依赖
* npm install module_name –save-dev 
在项目中安装一个模块，并把此模块添加到项目配置文件package.json中，作为项目开发依赖（devDependency）
* npm list 
列出项目中已安装的所有模块
* npm list -g 
列出系统中全局安装的所有模块
* npm remove module_name 
从项目中移除已安装的模块
* npm remove -g module_name 
从系统的全局安装中移除已安装的模块
* npm remove module_name –save 
从项目中移除已安装的模块，并从配置依赖中移除依赖关系
* npm remove module_name –save-dev 
从项目中移除已安装的模块，并从配置依赖中移除开发依赖（devDependency）关系
* npm update module_name 
更新指定的已安装模块的版本
* npm update -g module_name 
更新指定的全局安装模块的版本
* npm -v 
显示npm包管理器的当前版本
* npm adduser username 
在npmjs.org创建一个账户
* npm whoami 
显示你在npmjs.org上的账户详细信息
* npm login
登录账户
* npm publish 
发布自己开发的模块到npmjs.org，要发布模块必须先有账户

### package.json说明

当我们使用 `npm init` 命令来创建一个新的项目(模块)时,会生成package.json用来对该项目进行相关描述:

##### bin的作用:

```
package.json
{
  "name": "yanxintest",
  "version": "1.0.11",
  "description": "test npm",
  "main": "index.js",
  "bin": {
		"sayhello": "./bin/sayhello"
	},
  "author": "yanxin",
  "license": "ISC"
}
```
`"sayhello": "./bin/sayhello"`表明了在和package.json同级目录下,存在一个bin文件夹,其中有个sayhello文件.
![01.png](http://upload-images.jianshu.io/upload_images/3685006-8afc6a70e394e099.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![02.png](http://upload-images.jianshu.io/upload_images/3685006-c5af323a805fe9d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

该sayhello文件中包含的是可以在nodejs中运行的JavaScript语句

```
// sayhello文件
#!/usr/bin/env node   
console.log("hello npm!");
```
其中,`!/usr/bin/env node `表明了这是在nodejs环境中运行的.

当用户全局安装该npm工具时,会在/usr/local/bin/(视具体情况而定) 目录下创建快捷方式sayhello,该快捷方式指向了/usr/local/lib/node_modules/npm工具名称/bin目录下的sayhello文件.

当在命令行中输入sayhello命令时,nodejs会自动运行对应的sayhello文件,执行相应的操作.

##### scripts的作用:

npm允许在package.json文件里面,使用scripts字段定义脚本命令

```
//...
"scripts" : {
    "build": "node build.js"
}
```
上面的代码时package.json文件的一个片段,里面的scripts字段是一个对象.它的每一个属性,对应一段脚本.例如,build命令对应的脚本时`node build.js`.

命令行下使用 npm run 命令,就可以执行这段脚本.

```
$ npm run build
# 等同于执行
$ node build.js
```

* 注意: 要在package.json所在路径下使用对应的`npm run`命令
