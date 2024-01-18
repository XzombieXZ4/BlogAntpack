export interface BlogResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//procesed posts response interface
export interface PostUserInfo {
  id: number;
  picture: string;
  name: string;
}

export interface BlogPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
