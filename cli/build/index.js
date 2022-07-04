'use strict'
exports.__esModule = true
var commander_1 = require('commander')
// import { onCreate } from './commands/create'
// 创建命令对象
var program = new commander_1.Command()
// 注册命令、参数、回调
program
  // 注册 create 命令
  .command('create')
  // 添加命令描述
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
  .option(
    '-t --type <type>',
    '\u521B\u5EFA\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\uFF1Acomponent, lib-entry'
  )
  // 注册命令回调
  .action(function (args) {
    console.log('args ', args)
  })
// 执行命令行参数解析
program.parse()
// console.log('hello sheep-ui cli!')
