import ServiceCard from './ServiceCard';
import useServices from '../../../hooks/useServices';

const Services = () => {

    const services = useServices()

    return (
        <div className='py-20'>
            <div className='w-1/2 mx-auto text-center'>
                <h3 className="text-2xl text-[#FF3811]">Services</h3>
                <h2 className="sm:text-3xl lg:text-5xl font-bold py-3">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;