import React from 'react'

export default function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage}) {
  // calculating the number of pagination required for the whole array data
  let pages = [];
  for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++ ){
    pages.push(i);
  }

  return (
    <div>
        <span className='btn text-primary' onClick={()=> {if(currentPage>1) setCurrentPage(currentPage-1)}}>Previous</span>
        {pages.map((page,index) => {
            return <button key={index} type='button' 
                      className={ page==currentPage ? 'active btn btn-outline-primary me-2' : 'btn btn-outline-primary me-2' }
                      onClick={()=> setCurrentPage(page)}>{page}
                    </button>
        })}
        <span className='btn text-primary' onClick={()=> {if(currentPage<pages.length) setCurrentPage(currentPage+1)}}>Next</span>
    </div>
  )
}
