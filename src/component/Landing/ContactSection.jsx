import React from "react";
import { MapPin,Phone,Mail } from 'lucide-react';


function ContactSection() {
  const contactMethods = [
    {
        icon: <MapPin/>,
        contact: "Al Hoceima Morocco.",
        title: "Our office"
    },
    {
        icon: <Phone />,
        contact: "+212 (555) 000-000",
        title: "Phone"
    },
    {
        icon:<Mail/>,
        contact: "LifeLog@gmail.com",
        title: "Email"
    },
]

return (
    <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-xl space-y-3">
                <h3 className="text-gray-600 font-semibold">
                    LifeLog
                </h3>
                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Why Lifelog?
                </p>
                <p>Because your story deserves to be recorded, your goals deserve to be achieved, 
        and your journey deserves to be celebrated. 
        Lifelog isn’t just a tool—it’s your trusted companion in creating a life you love. 
        Thank you for being part of our journey. Together, let’s make every day count!</p>
    
            </div>
            <div>
                <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                    {
                        contactMethods.map((item, idx) => (
                            <li key={idx}>
                                <h4 className="text-gray-800 text-lg font-medium">{item.title}</h4>
                                <div className="mt-3 flex items-center gap-x-3">
                                    <div className="flex-none text-gray-400">
                                        {item.icon}
                                    </div>
                                    <p>{item.contact}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </main>
)
}

export default ContactSection;
