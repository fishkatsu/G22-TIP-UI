import { Pagination } from "./common";

export namespace MasterDataList {
	interface Response {
		masterInfoEntityList: MasterInfoEntity[];
		total: string;
	}

	interface MasterInfoEntity {
		value: string;
		nameEn: string;
		nameTh: string;
	}
}
