declare module '*.css' {
  const content: object
  export default content
}

declare module '*responsive' {
  import type { ImageData } from '@responsive-image/core'

  const value: ImageData
  export default value
}

declare module '*.svg' {
  import type { SVGProps } from 'react'

  const component: (props: SVGProps<SVGSVGElement>) => JSX.Element
  export default component
}
