import React from "react";
import { useState } from "react";
import Pagination from 'react-bootstrap/Pagination'
const MoviePagination = (props) => {

    const [currentPage, setCurrentPage] = useState(1);

    const PrevHandler = () => {
        setCurrentPage(currentPage - 1); props.pageHandler(currentPage);
    }

    const NextHandler = () => {
        setCurrentPage(currentPage + 1); props.pageHandler(currentPage);
    }

    return (


        <Pagination size="lg">
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={PrevHandler}
            />
            <Pagination.Next
                disabled={currentPage === props.totalpages}
                onClick={NextHandler}
            />
        </Pagination>
    )

}
export default MoviePagination;