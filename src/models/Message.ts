export interface Message {
  id: number;
  text: string;
  time: Date;
  from: number;
  to: number;
  type: string;
}