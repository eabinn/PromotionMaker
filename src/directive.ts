import { App, Directive } from 'vue'

export const registerDirectives = (
  app: App<Element>,
  directives: { [key: string]: Directive<any, any> }
) => {
  directives = directives || {}
  for (const name in directives) {
    const directive = directives[name as keyof typeof directives]
    app.directive(name, directive)
  }
}
