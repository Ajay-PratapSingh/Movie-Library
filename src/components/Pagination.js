import React, { Fragment } from "react";
import './Pagination.css';
import { useState } from "react";
const Pagination=(props)=>{

    const [currentPage,setCurrentPage]=useState(1);

    const pageHandler=(event)=>{
        if(event.target.value==="first"&& currentPage!==1){
            setCurrentPage(1);props.pageHandler(currentPage);
        }
        if(event.target.value==="next" && currentPage<props.totalpages){
            setCurrentPage(currentPage+1);props.pageHandler(currentPage);
        }
        if(event.target.value==="prev" && currentPage>1){
            setCurrentPage(currentPage-1); props.pageHandler(currentPage);
        }
        if(event.target.value==="last"){
            setCurrentPage(props.totalpages);props.pageHandler(currentPage);
        }
    }

    return(
        <Fragment>
        <section className="pgn">
          <button className="page" value="first" onClick={pageHandler}>1</button>
          <button className="page" value="prev" onClick={pageHandler}>prev</button>
          <button className="page">{currentPage}</button>
          <button className="page" value="next" onClick={pageHandler}>next</button>
          <button className="page" value="last" onClick={pageHandler}>{props.totalpages}</button>
        </section>
        </Fragment>
    )

}
export default Pagination;