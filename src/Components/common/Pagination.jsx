import React from "react";

let Pagination = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div className={"pagination"}>
            {
                pages.map(p =>
                    <span key={p} className={props.currentPage === p ? "selectedPage" : ''}
                          onClick={() => {
                              props.onSetCurrentPage(p)
                          }}>
                            {p}
                        </span>
                )
            }

        </div>
    )
}

export default Pagination
