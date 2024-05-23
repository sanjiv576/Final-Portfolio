import React, { useEffect, useState } from 'react'
import { testimonials } from "../constants/index";
import { useParams } from 'react-router-dom';
import { styles } from '../style';
import { fadeIn, textVariant } from "../utils/motion";

export const SingleTestimonial = ({ index }) => {

    const { testimonialId } = useParams();

    const [testimonialData, setTestimonialData] = useState({});

    useEffect(() => {

        testimonials.map(data => {
            if (data.id == testimonialId) {

                setTestimonialData(data)

            }
        });

    }, [0]);
    return (
        <>


            <div className="m-14 card md:card-side bg-base-100 shadow-xl shadow-green-700">
                <div className='w-300 h-300'><img
                    className='object-cover w-full h-full'
                    src={`/testimonials/${testimonialData.image}`}
                    alt={`feedback_by-${testimonialData.name}`}
                /></div>
                <div className="card-body">
                    <h2 className={`card-title text-white `}>- &nbsp; {testimonialData.name}</h2>
                    <h2 className='text-sm italic'>{testimonialData.designation} at {testimonialData.company}</h2>
                    <span className='text-6xl text-start mt-4'>"</span>
                    <p className={`text-white text-center`}>{testimonialData.testimonial}</p>
                    <span className='text-6xl text-end mt-4'>"</span>


                </div>
            </div>

        </>
    )
}
