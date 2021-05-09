export interface Options {
  attachTo?: Element
}

const MARK_KEY = 'INJECT_CSS_KEY'

type NodeHasMarkKey<T extends Element = Element> = T & { [MARK_KEY]: string }

function getContainer(option: Options) {
  if (option.attachTo) {
    return option.attachTo
  }

  const head = document.querySelector('head')
  return head || document.body
}

function injectCSS(css: string, option: Options = {}) {
  const styleNode = document.createElement('style')
  styleNode.innerHTML = css

  const container = getContainer(option)
  container.appendChild(styleNode)

  return styleNode as NodeHasMarkKey<HTMLStyleElement>
}

function updateCSS(css: string, key: string, option: Options = {}) {
  const container = getContainer(option)

  const existNode = Array.from(container.children).find(
    (node) =>
      node.tagName === 'STYLE' && (node as NodeHasMarkKey)[MARK_KEY] === key
  ) as HTMLStyleElement

  if (existNode) {
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css
    }

    return existNode
  }

  const newNode = injectCSS(css, option)
  newNode[MARK_KEY] = key
  return newNode
}

export { injectCSS, updateCSS }
