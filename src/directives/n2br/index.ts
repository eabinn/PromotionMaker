import { Directive, DirectiveBinding } from 'vue'

const setInnerHtml = (el: HTMLElement, binding: DirectiveBinding<{ htmlText: string }>) => {
  const text = binding.value.htmlText.replace(/(?:\r\n|\r|\n)/g, '<br />')
  el.innerHTML = text
}

export const n2br: { [key: string]: Directive<any, any> } = {
  mounted: setInnerHtml,
  updated: setInnerHtml,
}
