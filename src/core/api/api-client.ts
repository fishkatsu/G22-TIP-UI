import axios, { AxiosInstance } from "axios";
// import * as userLoginUtils from "@utils/user-login-utils";
// import configUrl from "@configs";
// import { doEncryptClientSide, convertIsoDatetimeWithLocal, notifyFailed } from "@utils/apiUtils";

// function authInterceptor(config: AxiosRequestConfig) {
//   if (userLoginUtils.isLogedIn()) {
//     const token = userLoginUtils.getUserToken()?.accessToken;
//     const key = "Authorization";
//     config.headers[key] = `Bearer ${userLoginUtils.getUserToken()?.accessToken}`;
//     const xApiKey = "X-API-KEY";
//     config.headers.common[xApiKey] = configUrl.apiKey;
//     const isoDate = convertIsoDatetimeWithLocal(new Date());
//     const encrypt = {
//       key: configUrl.secret,
//       iv: configUrl.iv,
//       text: isoDate,
//     };
//     const encryptToken = doEncryptClientSide(encrypt);
//     config.headers.token = encryptToken;
//   }
// }

// function registerInterceptors(axiosInstance: AxiosInstance) {
//   axiosInstance.interceptors.request.use(
//     (config) => {
//       authInterceptor(config);
//       return config;
//     },
//     (error) => {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );

//   // Add a response interceptor
//   axiosInstance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       switch (error?.response?.status) {
//         case 400:
//           notifyFailed("ไม่สามารถดำเนินการต่อได้");
//           break;
//         case 401:
//           notifyFailed("Session timeout", "กรุณาลองใหม่อีกครั้ง");
//           // history.replace(ROUTE.LOGIN);
//           window.location.href = "/login";
//           break;
//         case 404:
//           notifyFailed("IDCardNo not found", "ไม่พบเลขบัตรประชาชนนี้ โปรดติดต่อเจ้าหน้าที่");
//           break;
//         case 500:
//           notifyFailed("เกิดข้อผิดพลาดในการเรียกคะแนน", "กรุณาลองใหม่อีกครั้ง");
//           break;
//           // history.replace(ROUTE.LOGIN);
//           window.location.href = "/login";
//           break;
//         default:
//           return Promise.reject(error);
//       }
//     }
//   );
// }

class ApiClient {
	static getAxioInstance() {
		if (!this.axiosInstance) {
			// console.log('CREATE AxiosInstance');

			this.axiosInstance = axios.create();
			// registerInterceptors(this.axiosInstance);
		}
		return this.axiosInstance;
	}

	static getAxioExternalInstance() {
		if (!this.axiosExternalInstance) {
			// console.log('CREATE AxiosInstance');

			this.axiosExternalInstance = axios.create();
			// credoLabInterceptors(this.axiosExternalInstance);
		}
		return this.axiosExternalInstance;
	}
	private static axiosInstance?: AxiosInstance;
	private static axiosExternalInstance?: AxiosInstance;
}

const api = ApiClient.getAxioInstance();
const apiExternal = ApiClient.getAxioExternalInstance();

export { api, apiExternal };
