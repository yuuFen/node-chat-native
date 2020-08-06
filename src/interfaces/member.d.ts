// 会员
export interface IMember {
  id: number;
  username: string;
  avatar_mini: string;
  avatar_normal: string;
  avatar_large: string;
  tagline?: null; // 个性宣言
  location?: null;
  days: number; // 创建时间 xx 天
  threads: number; // 发表主题数
  likes: number; // 被喜欢数
  liking: number; // 喜欢数
  sex: number;
  coins: number; // 金币数
  following: number;
  follows: number;
}
