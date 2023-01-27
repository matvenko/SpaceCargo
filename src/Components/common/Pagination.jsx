import React, {useEffect, useState} from "react";

let Pagination = ({totalItemsCount, pageSize, currentPage, onSetCurrentPage, portionSize=10}) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);

    return (
        <div className={"pagination"}>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {pages
                .filter(p=> p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => {
                        return <span key={p} className={currentPage === p ? "selectedPage" : ''}
                                     onClick={() => {
                                         if(currentPage !== p) {
                                             onSetCurrentPage(p)
                                         }
                                     }}>
                            {p}
                        </span>
                    }
                )
            }
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }

        </div>
    )
}

export default Pagination
