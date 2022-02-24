import { Configuration, ItemData } from '../../common/interface'

export const gameConfig = {
  modes: ['4K', '5K', '6K', '8K'] as const,
  difficulties: ['NORMAL', 'HARD', 'MAXIMUM', 'SC'] as const,
  metadataKeys: ['category', 'bpm', 'totalNotes'] as const
}

export type modes = typeof gameConfig.modes[number]
export type difficulties = typeof gameConfig.difficulties[number]
export type metadataKeys = typeof gameConfig.metadataKeys[number]

export type DMRVMetadata = {
  [key in metadataKeys]: string | number
}

export interface DRMVConfig extends Configuration {
  title: string
  modes: Array<modes>
  metadata: DMRVMetadata
}

export interface DMRVData extends Omit<ItemData, 'metadata'> {
  title: string
  metadata: DMRVMetadata
  difficultTable: {
    [Key in modes]: Array<number>
  }
}

export interface DMRVRankTable {
  date: string,
  data: {
    insert?: Array<DMRVData>,
    update?: { [key: string]: DMRVData },
    delete?: Array<string>
  }
}
