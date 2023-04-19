function globalEventListener(el, type, cb) {
  el.addEventListener(type, () => cb())
}

export default globalEventListener
