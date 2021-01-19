import react, {useState, useEffect} from 'react';

const game = ({url}) => {

    useEffect(() => {
        console.log(url.query.idx)
        //url.query.idx 를 기반으로 운영자가 제공하는 메인 태그 찾기
        //url.query.idx 를 기반으로 게시판의 글 찾기.
    }, [])

    
   return(
       <>
       game
       </>
   )
}

export default game;