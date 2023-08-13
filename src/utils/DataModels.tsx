export interface ReportModal {
  id: string;
  name: string;
  description: string;
  images: string[];
  guideId: string;
  createdAt: Date;
  updatedAt: Date;
  postedBy: any;
}

export interface GudieModal {
  _id: string;
  title: string;
  description: string;
  reportsIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModal {
  _id: string;
  email: string;
  name: string;
  imageUrl: string;
  follower: number;
  following: number;
  like: number;
  bio: string;
  userName: string;
  isDeleted: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
