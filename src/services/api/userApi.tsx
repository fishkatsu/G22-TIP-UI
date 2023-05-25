// import axios from 'axios'
import * as ENDPOINT from '../endpoint';
import { UserLogin, UserList, UserCreate, UserUpdate, UserActivate, UserGetBySerial, UserIsUserExists, UserResetPassword, UserForgotPassword, UserFirstTimeSetupPassword } from '../models/user';
import { api } from '@core/api/api-client';

export function login(options: Partial<UserLogin.Request>) {
    return api
        .post<UserLogin.Response>(`${ENDPOINT.USER_LOGIN}`, options)
        .then((resp) => {
            return resp.data;
        });
}

export function userList(options: Partial<UserList.Request>) {
    return api.post<UserList.Response>(
        `${ENDPOINT.USER_LIST}`,
        options,
    ).then((resp) => {
        return resp.data;
    });
}

export function userIsUserExists(options: Partial<UserIsUserExists.Request>) {
    return api.post<UserIsUserExists.Response>(
        `${ENDPOINT.USER_IS_USER_EXISTS}`,
        options,
    ).then((resp) => {
        return resp.data;
    });
}

export function createUser(options: Partial<UserCreate.Request>) {
    return api.post<UserCreate.Response>(
        `${ENDPOINT.USER_BASE_URL}`,
        options,
    ).then((resp) => {
        return resp.data;
    });
}

export function updateUser(options: Partial<UserUpdate.Request>) {
    return api.put<UserUpdate.Response>(
        `${ENDPOINT.USER_UPDATE}`,
        options,
    ).then((resp) => {
        return resp.data;
    });
}

export function activeUser(options: Partial<UserActivate.Request>) {
    return api.put<UserActivate.Response>(
        `${ENDPOINT.USER_ACTIVE}`,
        options,
    ).then((resp) => {
        return resp.data;
    });
}

export function inactiveUser(options: Partial<UserActivate.Request>) {
    return api.delete<UserActivate.Response>(
        `${ENDPOINT.USER_INACTIVE}`,
        { data: options }
    ).then((resp) => {
        return resp.data;
    });
}

export function deleteUser(options: Partial<UserActivate.Request>) {
    return api.delete<UserActivate.Response>(
        `${ENDPOINT.USER_DELETE}`,
        { data: options }
    ).then((resp) => {
        return resp.data;
    });
}

export function getBySerial(options: Partial<UserGetBySerial.Request>) {
    return api.post<UserGetBySerial.Response>(
        `${ENDPOINT.USER_GET_DETAIL}`,
        options,
    ).then((resp) => {
        return resp.data;
    });
}

export async function userResetPassword(
    options: Partial<UserResetPassword.Request>
) {
    const response = await api.post<UserResetPassword.Response>(
        `${ENDPOINT.USER_RESET_PASSWORD}`,
        options
    );
    return response.data;
}

export async function userForgotPassword(
    options: Partial<UserForgotPassword.Request>
) {
    const response = await api.post<UserForgotPassword.Response>(
        `${ENDPOINT.USER_FORGOT_PASSWORD}`,
        options
    );
    return response.data;
}

export async function userFirstTimeSetupPassword(
    options: Partial<UserFirstTimeSetupPassword.Request>
) {
    const response = await api.post<UserFirstTimeSetupPassword.Response>(
        `${ENDPOINT.USER_FIRST_TIME_SETUP_PASSWORD}`,
        options
    );
    return response.data;
}