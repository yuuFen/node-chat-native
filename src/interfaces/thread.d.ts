import { INode } from "./node";
import { IMember } from "./member";

// 主题
export interface IThread {
  id: number;
  node: INode; // 板块
  author: IMember; // 作者
  loves: number;
  replies: number;
  last_replied: string; // xx分钟前
  creat_before: string; // xx分钟前

  title: string;
  content: string;
  picture: string[];
}
