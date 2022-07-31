export interface User {
  id: string;
  name: string;
  username: string;
  description: string;
  profile_image: string;
}

export interface Gallery {
  id: string;
  user_id: string;
  creator_id: string;
  url: string;
  created_at: string;
}

export interface Comment {
  id: string;
  creator: User;
  content: string;
  created_at: string;
}