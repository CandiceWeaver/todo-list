import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: string
      blue: string[]
      yellow: string
    }
  }
}
