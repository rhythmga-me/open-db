import { Configuration, ItemData } from '../../common/interface'

export const gameConfig = {
  modes: ['4K', '5K', '6K', '8K'] as const,
  difficulties: ['NORMAL', 'HARD', 'MAXIMUM', 'SC'] as const,
  metadataKeys: ['category', 'bpm', 'totalNotes'] as const
}

export type modes = typeof gameConfig.modes[number]
export type difficulties = typeof gameConfig.difficulties[number]
export type metadataKeys = typeof gameConfig.metadataKeys[number]

export type DMRV_Metadata = {
  [key in metadataKeys]: string | number | Array<number>
}

export interface DMRV_Config extends Configuration {
  title: string
  modes: Array<modes>
  metadata: DMRV_Metadata
}

export interface DMRV_Data extends Omit<ItemData, 'metadata'> {
  title: string
  metadata: DMRV_Metadata
  difficultTable: {
    [Key in modes]: Array<number>
  }
}

export interface DMRV_DataTable {
  date: string,
  data: {
    insert?: Array<DMRV_Data>,
    update?: { [key: string]: DMRV_Data },
    delete?: Array<string>
  }
}
