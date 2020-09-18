import { EmMlApiErrorCode } from './enums'

interface IfaProps {
  code: number
  [key: string]: any
}

class MlApiError {
  constructor(props: IfaProps) {
    Object.assign(
      this,
      {
        code: EmMlApiErrorCode.GENERAL,
        serverCode: null,
        message: null,
        source: null,
      },
      props || {}
    )
  }
}

export default MlApiError
