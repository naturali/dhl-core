export const UserType = {
  USER: 1,
  AGENT: 2
};

export interface UserInfo {
  userId: string;
  userName?: string;
  avatar?: string;
  type: number;
}
