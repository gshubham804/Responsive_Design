import './Service.css';
import {MdBrandingWatermark,MdNoPhotography} from 'react-icons/md'
import {SiAdobeillustrator,SiWebpack} from 'react-icons/si'
import {FaMobile} from 'react-icons/fa';
import {DiGoogleAnalytics} from 'react-icons/di'


const Service =() =>{
    return (
        <>
        <div className="service-main-cont">
            <h1>Premium Services</h1>
            <div className="service-micro-services">
                <div className='service-micro-services-option'>
                <MdBrandingWatermark className="service-icons"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, modi.</p>
                </div>
                <div className='service-micro-services-option'>
                <DiGoogleAnalytics className="service-icons"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, modi.</p>
                </div>
                <div className='service-micro-services-option'>
                <SiWebpack className="service-icons"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, modi.</p>
                </div>
                <div className='service-micro-services-option'>
                <FaMobile className="service-icons"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, modi.</p>
                </div>
                <div className='service-micro-services-option'>
                <SiAdobeillustrator className="service-icons"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, modi.</p>
                </div>
                <div className='service-micro-services-option'>
                <MdNoPhotography className="service-icons"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, modi.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Service