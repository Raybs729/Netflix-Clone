import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start, end) => {
        return movies.slice(start, end)
    }
  return (
    <SliderWrapper>
        <MovieSlider data ={getMoviesBetween(0,10)} title='Ori and Cookie Specials'/>
        <MovieSlider data ={getMoviesBetween(10,20)} title='Only On Netflix'/>
        <MovieSlider data ={getMoviesBetween(20,30)} title='Trending Now'/>
        <MovieSlider data ={getMoviesBetween(30,40)} title='Popular On Netflix'/>
        <MovieSlider data ={getMoviesBetween(40,50)} title='Fan Favories'/>
        <MovieSlider data ={getMoviesBetween(50,60)} title='Horror Movies'/>
        <MovieSlider data ={getMoviesBetween(60,70)} title='New Releases'/>
        <MovieSlider data ={getMoviesBetween(70,80)} title='Action Moives'/>

    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`

`

export default SliderContainer