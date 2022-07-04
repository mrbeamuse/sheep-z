// 文件操作是同步的
import { ensureDirSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'

export type ComponentMeta = {
  name: string
  title: string
  category: string
}

export default function createComponent(meta: ComponentMeta) {
  const { name } = meta
  // 拼接组件目录
  const componentDir = resolve('../src', name)

  // 其他核心文件：组件源文件、类型文件、样式文件
  const compSrcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')

  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)

  console.log(
    lightGreen(
      `✔ The component "${name}" directory has been generated successfully.`
    )
  )
  console.log(lightBlue(`✈ Target directory: ${componentDir}`))
}
