import HeaderSection from '../sections/Header'
import LogosSection from '../sections/Logos'
import DealsSection from '../sections/Deals'
import NewArrivalsSection from '../sections/NewArrivals'
import PeakyBlindersSection from '../sections/PeakyBlinders'
import FeaturesSection from '../sections/Features'
import FollowUsSection from '../sections/FollowUs'
import TestimonialsSection from '../sections/Testimonials'
import NewsletterSection from '../sections/Newsletter'
import HomeNavbar from '../components/layout/HomeNavBar'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <div id='home' className='space-y-12 px-4 md:px-0'>
      <HomeNavbar />
      <HeaderSection />
      <LogosSection />
      <DealsSection />
      <NewArrivalsSection />
      <PeakyBlindersSection />
      <FeaturesSection />
      <FollowUsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
