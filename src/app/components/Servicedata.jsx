"use client"
import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
    {
      title: "Web Designing",
      photo: '/images/design.png',
      alt: "Web Development Design",
      description: "Expert Web Designing services to transform your online presence. Stunning, user-friendly, and responsive websites that drive results.",
    },
    {
      title: "Web Development",
      photo: '/images/development.png',
      alt: "SEO Optimization",
      description: "Bring your website to life with our expert Web Development services. Custom solutions, seamless functionality, and scalable technology to drive your online success.",
    },
    {
      title: "Marketing",
      photo: '/images/marketing.png',
      alt: "Content Creation",
      description: "Boost your brand's visibility and drive results with our strategic Marketing services. Expert solutions for digital marketing, branding, and lead generation to grow your business.",
    },
    {
      title: "SEO Optimization",
      photo: '/images/seo.png',
      alt: "Social Media Marketing",
      description: "Boost search engine rankings, drive organic traffic, and grow your online visibility with our expert SEO Optimization services and tailored strategies.",
    },
  ];
export default function ServiceData(){
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <>
        <div className="grid grid-cols-1 gap-6 py-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col gap-4 border-b border-b-slate-400 p-2 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => handleToggle(index)}
              >
                
                  <div className="flex justify-between w-full items-center">
                    <h3 className="text-white  md:text-xl  uppercase">
                      {service.title}
                    </h3>
                    <p className={`border p-2 text-2xl rounded-full text-white transition-transform duration-125 ${openIndex === index ? 'rotate-90' : ''}`}>
                    <IoIosArrowRoundForward  />
                    </p>
                </div>
                {openIndex === index && (
                  <div className="flex flex-row gap-5 mt-4 text-white shadow-lg ">
                    <Image
                      src={service.photo}
                      alt={service.alt}
                      width={100}
                      height={100}
                      className="object-cover h-auto"
                    />
                    <p className="mt-2  text-sm">{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
    )
}