import { UserModel } from './user.model';

export interface UserResponseModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserModel[];
  ad: {
    company: string;
    url: string;
    text: string;
  };
}
