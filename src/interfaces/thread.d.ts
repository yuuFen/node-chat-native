import {INode} from './node';
import {IMember} from './member';

// 主题
export interface IThread {
  id: number;
  node: INode; // 板块
  author: IMember; // 作者
  likes: number;
  replies: number;
  creat_before: string; // xx分钟前
  content: string;
  picture: string[];
  liked: boolean;
}
