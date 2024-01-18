export interface BlogResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//procesed posts response interface
export interface PostUserInfo {
  userId: string;
  picture: string;
  name: string;
}

export interface BlogPosts {
  userId: string;
  id: string;
  title: string;
  body: string;
}
