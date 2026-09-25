import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import FieldPresence from "../components/Contact/FieldPresence";
import LocationMap from "../components/Contact/LocationMap";


const Contact = () => {
    return (
        <>
            <ContactHero />
            <ContactForm />
            <FieldPresence />
            <LocationMap />
        </>
    );
};

export default Contact;