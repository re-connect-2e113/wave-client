export const BOT_SAN = 'BOT_SAN';
export type TBOT_SAN = typeof BOT_SAN;

export interface IMessage {
  sender: string | TBOT_SAN;
  text: string;
}
