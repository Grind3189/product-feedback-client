export interface SuggestionType {
  _id: string
  title: string;
  category: string;
  description: string;
  status: string;
  upvotes: number;
  isLiked: boolean;
  comments: CommentType[];
}

export interface CommentType {
  _id: string;
  content: string;
  user: UserType;
  replies: ReplyType[];
}

export interface ReplyType {
  content: string;
  replyingTo: string;
  user: UserType;
}

export interface UserType {
  image: string;
  name: string;
  username: string;
}
