import Image from "next/image"

export default function MissionStatement() {
    return (
        <div className="relative h-auto">
            <div className="absolute inset-0">
                <Image
                    src="/images/genericsplash1.webp"
                    alt="background image"
                    placeholder="blur"
                    blurDataURL="/images/genericsplash1loading.webp"
                    fill
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-2">
                <p className='text-xl text-gray-900 text-center'>"Here at Optimized Synergies Inc., our mission is to empower businesses and individuals by providing innovative, robust, and scalable solutions. We are committed to creating value for our stakeholders by leveraging our unique blend of technology and creativity. Our focus is on continuous improvement, exceptional customer service, and sustainable business practices. In all our endeavors, we maintain the highest standards of integrity and professionalism, understanding that our customers' success is our success. We strive towards cultivating an inclusive and diverse environment that fosters growth, teamwork, and personal excellence. Our aim is not just to meet expectations, but to consistently exceed them, and to create lasting partnerships along the way."</p>
            </div>
        </div>
    )
}
