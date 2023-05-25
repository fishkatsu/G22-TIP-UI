import { userIsSetupPassword } from '@services/api/userApi';
import { Pagination, PermissionData } from './common';

export namespace UserLogin {
    interface Request {
        email: string;
        password: string;
    }

    interface Response {
        accessToken: string;
        refreshToken: string;
        status: boolean;
        userLoginInfo: {
            companyId: number;
            email: string;
            firstName: string;
            id: number;
            lastName: string;
            password: string;
            permissions: PermissionCategoryData[];
            phone: string;
            roles: string[];
            serial: string;
            type: string;
            isSetupPassword: boolean;
            logo: string;
        };
    }
}

export namespace UserList {
    interface Request {
        statusList?: ENTITY_STATUS;
        all?: string;
        email?: string;
        text?: string;
        limit: Limit;
        status?: string;
        sortBy?: string;
        sortDirectionBy?: string;
    }
    interface Response {
        data: Data[];
        page: Pagination;
    }
    interface Data {
        info: Entity;
        state: State;
    }
    interface Entity {
        id: number;
        userId: number;
        firstName: string;
        lastname: string;
        serial: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        status: STATUS;
        createBy: string;
        createDate: string;
        changeBy: string;
        changeDate: string;
    }
}

export namespace UserCreate {
    interface Request {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        dob: Date;
        phoneNo: string;
        address: string;
        userType: string;
        genderCode: string;
        Code: string;
    }

    interface Response {
        serial: string;
        result: string;
    }
}

export namespace UserUpdate {
    interface Request {
        serial: string;
        firstName: string;
        lastName: string;
        phone: string;
        companyId: string;
        // roleCode: string;
        // type: string;
        username: string;
    }

    interface Response {
        serial: string;
        result: string;
    }
}

export namespace UserActivate {
    interface Request {
        serial: string;
        username: string;
    }

    interface Response {
        serial: string;
        result: string;
    }
}


export namespace UserGetBySerial {
    interface Request {
        serial: string;
    }

    interface Response {
        info: State;
        state: Entity;
    }
}

export namespace UserIsUserExists {
    interface Request {
        email: string;
    }

    interface Response {
        result: boolean;
    }
}

export namespace UserIsFirstTimeLogin {
    interface Request {
        email: string;
    }

    interface Response {
        result: boolean;
    }
}

export namespace UserResetPassword {
    interface Request {
        email: string;
        password: string;
        confirmPassword: string;
        refCode: string;
        urlRef: string;
    }

    interface Response {
        result: string;
        serial: string;
    }
}

export namespace UserIsSetupPassword {
    interface Request {
        email: string;
    }

    interface Response {
        result: boolean;
    }
}

export namespace UserForgotPassword {
    interface Request {
        email: string;
    }

    interface Response {
        result: string;
        serial: string;
    }
}

export namespace UserFirstTimeSetupPassword {
    interface Request {
        email: string;
        oldPassword: string;
        password: string;
        confirmPassword: string;
    }

    interface Response {
        result: string;
        serial: string;
    }
}