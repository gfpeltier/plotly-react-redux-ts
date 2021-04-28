import { PayloadAction } from "@reduxjs/toolkit"

interface NamedPayloadAction extends PayloadAction {
  name: string
}

export function createNamedWrapperReducer(reducerFunction: (s: any, a: NamedPayloadAction) => void, reducerName: string) {
  return (state: any, action: NamedPayloadAction) => {
    const { name } = action
    const isInitializationCall = state === undefined
    if (name !== reducerName && !isInitializationCall) return state

    return reducerFunction(state, action)
  }
}