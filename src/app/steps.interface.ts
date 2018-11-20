import { Item } from './item.interface';

export interface Steps {
    id: number;
    name: string;
    description: string;
    image: string;
    selectableItems: number;
    available: boolean;
    items: Array <Item>;
  }