export interface ChatSession {
  name: string;
  avatar: string;
  time: Date;
  msg: string;
  mute: boolean;
  member?: number;
}