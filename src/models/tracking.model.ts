import { Gps } from '../models/gps.model';
export class Tracking {
  id?: string;
  userid?: string;
  name?: string;
  description?: string;
  date?: string; 
  gps?: Array<Gps>; 
}
