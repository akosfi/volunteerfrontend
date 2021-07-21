import * as React from "react";
import { FC, useState } from "react";
import { map, get } from "lodash";
import { makeStyles, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        position: "absolute",
        zIndex: 1,
        bottom: 0,
        width: "100%",
        height: "44px",
        background: "white",
        borderTop: "1px solid #DDDDDD"
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    limitSelector: {
        display: "flex",
        alignItems: "center"
    },
    limitSelectorSelect: {
        margin: "0 8px"
    },
    pageSelector: {
        margin: "0 8px",
        userSelect: "none"
    },
    pageSelectorArrow: {
        cursor: "pointer"
    }
}));

const limitConfig = [25, 50, 100];

export type Props = {};

const Pagination: FC = () => {
    const classes = useStyles();
    const [pageLimit, setPageLimit] = useState<25 | 50 | 100>(25);
    const [page, setPage] = useState(1);

    const handlePageLimitChange = (event: any) => setPageLimit(get(event, "target.value", 25));

    const handlePageSelectorIncrementChange = () => setPage(page + 1);

    const handlePageSelectorDecrementChange = () => setPage(page - 1);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.limitSelector}>
                    <div>
                        <Select
                            value={pageLimit}
                            onChange={handlePageLimitChange}
                            className={classes.limitSelectorSelect}
                        >
                            {map(limitConfig, limit => (
                                <MenuItem value={limit}>{limit} sor</MenuItem>
                            ))}
                        </Select>
                    </div>
                    <span> oldalanként</span>
                </div>
                <div className={classes.pageSelector}>
                    <span className={classes.pageSelectorArrow} onClick={handlePageSelectorDecrementChange}>
                        &lt;
                    </span>
                    <span>
                        {" "}
                        <b>{page}</b> / 30{" "}
                    </span>
                    <span className={classes.pageSelectorArrow} onClick={handlePageSelectorIncrementChange}>
                        &gt;
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
