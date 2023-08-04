export interface EquipList {
  region: string;
  reader: string;
  name: string;
  gymCode: string;
  userId: string;
  waitingList: string[];
  waitingCount: number;
}

export type StateType = 'using' | 'waitnext' | 'empty';
