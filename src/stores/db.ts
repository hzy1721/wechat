import Dexie, { type Table } from 'dexie';
import type { Message } from '@/models/Message';

export class WechatDatabase extends Dexie {
  messages!: Table<Message>; 

  constructor() {
    super('WechatDatabase');
    this.version(1).stores({
      messages: 'id, text, time, from, to, type',
    });
  }
}

export const db = new WechatDatabase();
