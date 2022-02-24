import { Configuration, ItemData } from '../../common/interface'

export const gameConfig = {
  modes: ['4K', '5K', '6K', '8K'] as const,
  difficulties: ['EZ', 'NM', 'HD', 'SHD'] as const,
  metadataKeys: ['series', 'bpm', 'totalNotes'] as const
}

export type modes = typeof gameConfig.modes[number]
export type difficulties = typeof gameConfig.difficulties[number]
export type metadataKeys = typeof gameConfig.metadataKeys[number]

export type EZ2ON_Metadata = {
  [key in metadataKeys]: string | number | Array<number>
}

export interface EZ2ON_Config extends Configuration {
  title: string
  modes: Array<modes>
  metadata: EZ2ON_Metadata
}

export interface EZ2ON_Data extends Omit<ItemData, 'metadata'> {
  title: string
  metadata: EZ2ON_Metadata
  difficultTable: {
    [Key in modes]: Array<number>
  }
}

export interface EZ2ON_DataTable {
  date: string,
  data: {
    insert?: Array<EZ2ON_Data>,
    update?: { [key: string]: EZ2ON_Data },
    delete?: Array<string>
  }
}
