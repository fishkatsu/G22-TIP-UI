import config from "@configs";

export const URL = config.baseApi;
export const BASE = `${URL}/api`;
export const BASE_AUTH = `${URL}/api-auth`;

/// example-api
export const EXAMPLE_BASE_URL = `${BASE}/example`;
export const EXAMPLE_LIST = `${EXAMPLE_BASE_URL}/list`;

/// user-api
export const USER_BASE_URL = `${URL}/user`;
export const USER_UPDATE = `${URL}/user/update`;
export const USER_ACTIVE = `${URL}/user/active`;
export const USER_INACTIVE = `${URL}/user/inactive`;
export const USER_DELETE = `${URL}/user/delete`;
export const USER_LIST = `${URL}/user/list`;
export const USER_IS_USER_EXISTS = `${URL}/user/is-user-exists`;

/// job-api
export const COMPANY_BASE_URL = `${URL}/job`;
export const COMPANY_LIST = `${URL}/job/list`;

/// application-api
export const APPLICATION_BASE_URL = `${URL}/application`;
export const APPLICATION_LIST = `${URL}/application/list`;

/// unit-api
export const UNIT_BASE_URL = `${URL}/unit`;
export const UNIT_LIST = `${URL}/unit/list`;

/// auth-api
export const USER_LOGIN = `${BASE_AUTH}/login`;
export const USER_FORGOT_PASSWORD = `${BASE_AUTH}/forgot-password`;
export const USER_RESET_PASSWORD = `${BASE_AUTH}/reset-password`;
