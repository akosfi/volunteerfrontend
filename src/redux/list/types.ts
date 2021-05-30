export enum CellType {
    TEXT,
    IMAGE_WITH_CHECKBOX
}

export type Cell = {
    data: string;
};

export type Row = {
    id: number;
    cells: { [cellKey: string]: Cell };
};

export type Pagination = {
    currentPage: number;
    limit: number;
    allPageCount: number;
};
