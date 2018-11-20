
import { Steps } from './steps.interface';

export interface Product {
    codebar: number;
    name: string;
    nameStyle: string;
    price: number;
    description: string;
    image: string;
    available: boolean;
    deal: boolean;
    steps: Array <Steps>;
  }