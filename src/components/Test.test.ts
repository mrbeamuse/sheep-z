import Test from './Test'
import { render } from '@testing-library/vue'

test('it should work', () => {
  // 渲染组件
  const { getByText } = render(Test)
  // 断言
  // assert output
  getByText('点我0')
})
