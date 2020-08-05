// 会员
export interface IMember {
  id: number;
  username: string;
  nick: string;
  avatar_normal: string;
  avatar_large: string;
  avatar_mini: string;
  tagline?: null; // 个性宣言
  location?: null;
  created_days: number; // 创建时间 xx 天
  creations: number; // 创作数
  loves: number; // 喜欢数
  sex: number;
  coins: number; // 金币数
}
