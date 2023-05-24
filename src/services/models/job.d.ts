import { Pagination, PermissionData } from './common';

export namespace JobList {
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
        jobId: number;
        refNo: string;
        jobTitle: string;
        faculty: string;
        location: string;
        employmentType: string;
        openDate: date;
        closingDate: date;
        status: STATUS;
        createdBy: string;
        createdDate: string;
        changedBy: string;
        changedDate: string;
    }
}
