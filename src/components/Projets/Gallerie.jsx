import React, { useState } from "react";
import ArrowLeft from "../../images/angleLeft.webp";
import ArrowRight from "../../images/angleRight.webp";
import '../../sass/gallery.scss';

export default function Slider({imageSlider, classSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }


    return (
        <section  className='carousel'>
            <img key={"img-"+currentIndex} className={classSlider} src={imageSlider[currentIndex]} alt="" />
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className={'carousel_arrow carousel_arrow_right'}
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={() => {
                            nextSlide();
                        }
                        }
                    />
                    <img 
                        className={'carousel_arrow carousel_arrow_left'}
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={() => {
                            prevSlide();
                        }
                    }

                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}
