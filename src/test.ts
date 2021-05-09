import { injectCSS, updateCSS } from './index'

const testStyle = '.test { display: "block" }'

describe('test', () => {
  beforeEach(() => {
    expect(document.querySelectorAll('style')).toHaveLength(0)
  })
  afterEach(() => {
    const styles = document.querySelectorAll('style')
    styles.forEach((style) => {
      style.remove()
    })
  })
  test('inject css', () => {
    const node = injectCSS(testStyle)
    const styles = document.querySelectorAll('style')
    const style = styles[0]
    expect(styles).toHaveLength(1)
    expect(style).toBe(node)
    expect(style.innerHTML).toBe(testStyle)
  })
  test('attach to', () => {
    const node = injectCSS(testStyle, { attachTo: document.body })
    const styles = document.body.querySelectorAll('style')
    expect(styles).toHaveLength(1)
    expect(styles[0]).toBe(node)
  })
  test('update css', () => {
    updateCSS(testStyle, 'test')
    const newStyle = '.test { display: "flex" }'
    const node = updateCSS(newStyle, 'test')

    expect(document.querySelectorAll('style')).toHaveLength(1)
    expect(node.innerHTML).toBe(newStyle)
  })
})
