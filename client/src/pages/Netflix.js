import React, {useState} from 'react'
import TopNav from '../components/TopNav'

const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false)// the initial state of webpage is false since user has not moved up or down (greater than zero will set it to TRUE)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false: true)
      return () => (window.onscroll = null)
  }
  console.log(isScrolled)
  return (
    <div className='Hero'>
      <TopNav/>
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' alt = 'hero image'/> {/*change this to ori and cook*/}
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' alt = 'hero image'/> {/*change this to ori and cook*/}
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' alt = 'hero image'/> {/*change this to ori and cook*/}
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' alt = 'hero image'/> {/*change this to ori and cook*/}
    </div>
  )
}

export default Netflix