// 板块（节点），类比树上的节点，用户就是树叶
export interface INode {
  id: number;
  avatar_large: string;
  avatar_normal: string;
  avatar_mini: string;
  root: boolean;
  parent_node_name: string;
  name: string;
  topics: number;
  url: string; // 转跳路径，可能需要体现层级关系，所以可能需要用到
}
