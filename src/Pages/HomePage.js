import Hero from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import ContactForm from "../Components/ContactForm";
import ChatWidget from "../Components/ChatWidget";
import HowItWorks from "../Components/HowItWorks";

const HomePage = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
            <ChatWidget />
        </>
    );
};

export default HomePage;