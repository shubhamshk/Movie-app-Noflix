import React, { useEffect } from 'react'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import { MdArrowCircleLeft } from "react-icons/md";
import {useNavigate } from 'react-router-dom';




const MovieDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncloadmovie(id))

        return () => {
            dispatch(removemovie())
        }

    })
  return (
    <div className='h-screen w-screen px-[10%] text-white bg-red-300'>
        <nav className='w-full'>
        <MdArrowCircleLeft onClick={()=> navigate(-1)} className='hover:text-[#FF3F47] text-3xl fill-[#FF3F47] mr-2'/> 
        <a href=''></a>
        <a href=''></a>
        <a href=''></a>
        </nav>
    </div>
  )
}

export default MovieDetails