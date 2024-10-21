import React from 'react'
import Hero from '../components/Hero/Hero'
import Benefit from '../components/Benefit/Benefit'
import Service from '../components/Service/Service'
import Testimonial from '../components/Testimonial/Testimonial'
import Legal from '../components/Legal/Legal'
import Footer from '../components/Footer/Footer'
const Home = () => {
    return (
        <div>
            <div>
                <Hero/>
                <Benefit/>
                <Legal/>
                <Testimonial/>                               
            </div>
        </div>
    )
}

export default Home
