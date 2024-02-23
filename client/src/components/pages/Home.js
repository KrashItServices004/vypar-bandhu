import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Header from "./Header"
import OurWorkflow from "./OurWorkflow"
import Review from "./Review"
import Services from "./Services"
import Slider from "./Slider"
import TestiMonials from "./TestiMonials"
import WhyVyapar from "./WhyVyapar"

const Home = () => {
    return (
        <>
            <div className="App">
                {/* <Header/> */}
                {/* <PrivateLlimitedCompany/>   */}
                {/* <AnnualFiling/> */}
                <Header />
                <Slider />
                <Services />
                <OurWorkflow />
                <AboutUs />
                <WhyVyapar />
                <Review />
                <TestiMonials />
                <ContactUs />
                <Footer />
            </div>
        </>
    )

}
export default Home