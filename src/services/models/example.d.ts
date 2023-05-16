import { Pagination } from './common';

export namespace ExampleModelList {
    interface Request {
        data: string;
    }

    interface Response {
        data: [];
        page: Pagination;
    }
}
