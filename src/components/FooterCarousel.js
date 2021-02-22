import React from 'react';

const FooterCarousel = (props) => {
    return (
        <div className="p-2">
            <div className={props.class}>
                <div className="d-flex justify-content-center mb-2 mt-4">
                    <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="13.651" height="27.842" viewBox="0 0 13.651 27.842">
                        <path id="Path_46" data-name="Path 46" d="M0,13.806,13.651,0V27.842H0Z" fill="#777"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.651" height="27.842" viewBox="0 0 13.651 27.842">
                        <path id="Path_46" data-name="Path 46" d="M0,13.806,13.651,0V27.842H0Z" fill="#777"/>
                    </svg>
                </div>
                <p className={props.textclass}>Ajoyib ushbu jamoa yordamida men o'z biznesimni yuqori natijalarga olib chiqdim. Hozirgi kunda o'z kompaniyam orqali katta hissa qo'shyapman albatta va albatta, MBM IT kompaniyasiga katta minnatdorchilik bildiraman </p>

            </div>
            <div className="d-flex justify-content-center">
            <div className="arrow-down mx-auto">
                <div className="arrowOne"></div>
                <div className="arrowTwo"></div>
                <div className="arrowThree "></div>
            </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <img src="images/img_8.png" alt=""/>
            </div>
            <h4 className="text-center mt-3 text-white">Leo Messi</h4>
            <p className="text-center text-color">Football player</p>

        </div>
    );
};

export default FooterCarousel;


