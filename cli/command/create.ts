// inquirer只支持cjs，需要用* as inquirer来引入
import * as inquirer from 'inquirer' //inquirer版本8.2.2写法，只支持cjs

// 创建类型
const CREATE_TYPES = ['component', 'lib-entry']

export async function onCreate(args) {
  // 容错，判断用户是否输入type
  let { type } = args
  // 未输入，提示用户重新输入，给用户一个列表去选择
  if (!type) {
    const result = await inquirer.prompt([
      {
        // 获取输入后的属性名
        name: 'type',
        // 交互方式为列表
        type: 'list',
        // 提示信息
        message: '（必填）请选择创建类型：',
        // 选项列表
        choices: CREATE_TYPES,
        // 默认选项
        default: 0
      }
    ])
    type = result.type
  }
}
