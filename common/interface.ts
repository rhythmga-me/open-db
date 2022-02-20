export interface Configuration {
  title: string
  modes: Array<unknown>
  difficulties: Array<unknown>
}

export interface ItemData {
  title: string
  metadata: Array<{key: string, value: string}> // metadata displaying datas 
  difficultTable: unknown
}