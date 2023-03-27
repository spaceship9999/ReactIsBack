interface button {
    link: string,
    title: string
}

interface TextMedia {
    heading: string,
    content: string,
    link: button,
    image: string
}

import { motion } from "framer-motion"

export default function SingleColumnTextMedia({ heading, content, link, image }: TextMedia) {
    return (
        <div className="container">
            <div className="pt-12 pb-24">
                <div className="xl:pr-24 text-dark-blue">
                    <motion.h3
                    initial={{ y: '200px', opacity: 0}}
                    whileInView={{ y: 0, opacity: 1}}
                        transition={{ duration: 1, ease:[.06, .63, .18, .92]}}
                     className=" font-montserrat t-36 font-bold mb-5">{heading}</motion.h3>
                    <motion.div 
                    className="font-rubik t-20 leading-[1.8] mb-8">{ content }</motion.div>
                    {
                        link && (
                            <motion.a 
                                whileHover={{ scale: 1.2, transition: { duration: 1, ease: [0, .6, .18, .98]}}}
                            className="inline-block py-6 px-[70px] t-20 text-white bg-light-blue font-bold rounded-[1.8rem]
                            outline outline-1 outline-offset-4 outline-light-blue" href={link?.link}
                            dangerouslySetInnerHTML={{__html: link.title}}/>
                        )
                    }
                </div>
                {
                    image && (
                        <div className="mt-32">
                            <img src={image} className="w-full" />
                        </div>
                    )
                }
            </div>
        </div>
       
    )
}
