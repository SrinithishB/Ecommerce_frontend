import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import CarouselBanner from '../components/CarouselBanner'

const Home = () => {
  const images = [
  'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20210122-101837-cf22.png',
  'https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg',
  'https://img.freepik.com/premium-vector/fashion-sale-banner-template_78532-289.jpg',
  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/accb40111009639.5ff9d3cc71796.jpg'
];
  return (
    <div>
      {/* <CarouselBanner images={images}/> */}
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home