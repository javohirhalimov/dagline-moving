import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FeatureList from '../components/FeatureList'
import ServiceType from '../components/ServiceType'
import Slider from '../components/Slider'
import Value from '../components/Value'
import ContactUs from '../components/ContactUs'


export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <FeatureList />
      <Value />
      <ContactUs />
      <ServiceType />
      <Footer />
    </div>
  )
}
