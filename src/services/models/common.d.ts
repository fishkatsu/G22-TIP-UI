export interface Pagination {
  pageNumber: number;
  pageSize: number;
  total?: number;
  totalPages?: number;
}

export interface Limit {
  pageNumber: number;
  pageSize: number;
}

export interface UserLoginInfo {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  isSetupPassword: boolean;
  companyId: number;
  logo: string;
  token: UserToken;
  permission: PermissionCategoryData[];
  role: string[];
}

export interface UserToken {
  accessToken: string;
  refreshToken: string;
}

export interface PermissionData {
  href: string;
  imageLocation: string;
  isMainPage: boolean;
  permissionCode: string;
  permissionNameEn: string;
  permissionNameTh: string;
  permissionValue: number;
}

export interface PermissionCategoryData {
  category: {
    categoryNameEn: string;
    categoryNameTh: string;
    isGroup: boolean;
  };
  permissions: PermissionData[];
}
