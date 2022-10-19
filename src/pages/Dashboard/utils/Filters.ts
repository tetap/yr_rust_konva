import initWasm, { canvas_to_gray } from '@wasm/image'

export const Filters = {
  async init() {
    await initWasm()
  }
}
