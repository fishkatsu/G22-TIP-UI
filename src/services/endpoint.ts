import config from "@configs";

export const URL = config.baseApi;
export const BASE = `${URL}/api`;
export const BASE_BO = `${URL}/api-bo`;
export const BASE_ACB = `${URL}/api-acb`;
export const BASE_AUTH = `${URL}/api-auth`;
export const BASE_COMMON = `${URL}/api-common`;

/// example-api
export const EXAMPLE_BASE_URL = `${BASE}/example`;
export const EXAMPLE_LIST = `${EXAMPLE_BASE_URL}/list`;

/// role-api
export const ROLE_BASE_URL = `${BASE_BO}/role`;
export const ROLE_USER_ROLE_PERMISSION_LIST = `${ROLE_BASE_URL}/user-role-permission/list`;
export const ROLE_USER_ROLE_PERMISSION_PAGE = `${ROLE_BASE_URL}/user-role-permission/page`;

/// user-api
export const USER_BASE_URL = `${BASE_BO}/user`;
export const USER_UPDATE = `${BASE_BO}/user/update`;
export const USER_ACTIVE = `${BASE_BO}/user/active`;
export const USER_INACTIVE = `${BASE_BO}/user/inactive`;
export const USER_DELETE = `${BASE_BO}/user/delete`;
export const USER_LIST = `${BASE_BO}/user/list`;
export const USER_IS_USER_EXISTS = `${BASE_BO}/user/is-user-exists`;
export const USER_GET_DETAIL = `${BASE_BO}/user/find-user-by-serial`;
export const USER_FIRST_TIME_SETUP_PASSWORD = `${BASE_BO}/user/first-time-setup-password`;

/// company-api
export const COMPANY_BASE_URL = `${BASE_BO}/company`;
export const COMPANY_LIST = `${BASE_BO}/company/list`;

/// auth-api
export const USER_LOGIN = `${BASE_AUTH}/login`;
export const USER_FORGOT_PASSWORD = `${BASE_AUTH}/forgot-password`;
export const USER_RESET_PASSWORD = `${BASE_AUTH}/reset-password`;

//score-bo-api
export const SCORE_BO_BASE_URL = `${BASE_BO}/score`;
export const SCORE_BO_LIST = `${SCORE_BO_BASE_URL}/list`;
export const SCORE_BO_GRADE_LIST = `${SCORE_BO_BASE_URL}/grade-list`;

//master-data-api
export const MASTER_DATA_BASE_URL = `${BASE_COMMON}/master`;
export const MASTER_DATA_TRANSACTION_STAGE = `${MASTER_DATA_BASE_URL}/transaction-stage`;
export const MASTER_DATA_COMPANY_LIST = `${MASTER_DATA_BASE_URL}/company-list`;
export const MASTER_DATA_RP_LIST = `${MASTER_DATA_BASE_URL}/rp-list`;
export const MASTER_DATA_CE_LIST = `${MASTER_DATA_BASE_URL}/ce-list`;

//report
export const REPORT_BO_BASE_URL = `${BASE_BO}/report`;
export const REPORT_ACB_TRANSACTION_DETAIL = `${REPORT_BO_BASE_URL}/excel/acb-transaction-detail`;
export const REPORT_CE_TRANSACTION_DETAIL = `${REPORT_BO_BASE_URL}/excel/ce-transaction-detail`;
export const REPORT_RP_SUMMARY_TRANSACTION = `${REPORT_BO_BASE_URL}/excel/rp-transaction-summary`;
export const REPORT_RP_TRANSACTION_DETAIL = `${REPORT_BO_BASE_URL}/excel/rp-transaction-detail`;
export const REPORT_CE_SUMMARY_TRANSACTION = `${REPORT_BO_BASE_URL}/excel/ce-transaction-summary`;

//rp-bo-api
export const RP_BO_BASE_URL = `${BASE_BO}/rp`;
export const RP_SUMMARY_LIST = `${RP_BO_BASE_URL}/summary-list`;
export const RP_CE_SUMMARY_LIST = `${RP_BO_BASE_URL}/ce-summary-list`;
export const RP_CE_DETAIL_LIST = `${RP_BO_BASE_URL}/rp-ce-detail-list`;
export const RP_LIST = `${RP_BO_BASE_URL}/list`;

//ce-bo-api
export const CE_BO_BASE_URL = `${BASE_BO}/ce`;
export const CE_SUMMARY_LIST = `${CE_BO_BASE_URL}/summary-list`;
export const CE_DETAIL = `${CE_BO_BASE_URL}/detail`;
export const CE_TRANSACTION_LIST = `${CE_BO_BASE_URL}/ce-transaction-list`;
export const CE_RP_SUMMARY_LIST = `${CE_BO_BASE_URL}/rp-summary-list`;
export const CE_LIST = `${CE_BO_BASE_URL}/list`;
export const CE_SCORE_MAX_SCORE = `${CE_BO_BASE_URL}/ce-score-max-score-by-ce-id`;
export const CE_SCORE_MIN_SCORE = `${CE_BO_BASE_URL}/ce-score-min-score-by-ce-id`;
export const CE_SCORE_MEDIAN_SCORE = `${CE_BO_BASE_URL}/ce-score-median-score-by-ce-id`;

//assessee-api
export const ASSESEE_BO_BASE_URL = `${BASE_BO}/assessee`;
export const ASSESEE_SUMMARY_LIST = `${ASSESEE_BO_BASE_URL}/summary-list`;
export const ASSESEE_RP_SUMMARY_LIST = `${ASSESEE_BO_BASE_URL}/rp-summary-list`;
export const ASSESEE_RP_SUMMARY_TRANSACTION_LIST = `${ASSESEE_BO_BASE_URL}/rp-summary-transaction-list`;
export const ASSESEE_CE_SUMMARY_LIST = `${ASSESEE_BO_BASE_URL}/ce-summary-list`;
export const ASSESEE_PAH_ADDRESS_LIST = `${ASSESEE_BO_BASE_URL}/pah-address`;

//rp-ce-api
export const RP_CE_BO_BASE_URL = `${BASE_BO}/rpce`;

//dashboard-api
export const DASHBOARD_BASE_URL = `${BASE_BO}/dashboard`;

//transaction-api
export const TRANSACTION_BASE_URL = `${BASE_BO}/transaction`;
export const TRANSACTION_CE_LIST = `${TRANSACTION_BASE_URL}/ce/list`;
export const TRANSACTION_LIST = `${TRANSACTION_BASE_URL}/list`;

//cerdoLabScore-api
export const CREDO_LAB_SCORE_URL = `${BASE_BO}/credolabscore`;
