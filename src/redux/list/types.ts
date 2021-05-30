export enum CellType {
    TEXT,
    IMAGE_WITH_CHECKBOX
}

export type Cell = {
    data: string;
    type: CellType;
};

export type Row = {
    id: number;
    cells: Cell[];
};

export type Pagination = {
    currentPage: number;
    limit: number;
    allPageCount: number;
};
