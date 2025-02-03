import React from "react";
import { Facebook,Twitter,Inbox } from 'lucide-react';
import Logo from '../../images/logo.png'

function Footer() {
  const footerNavs = [
    {
        label: "Our Team",
        items: [
            {
                name: 'Partners'
            },
            {
                name: 'Blog'
            },
            {
                name: 'Team'
            },
            {
                name: 'Careers'
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                name: 'contact'
            },
            {
                name: 'Support'
            },
            {
                name: 'Docs'
            },
            {
                name: 'Pricing'
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                name: 'Terms'
            },
            {
                name: 'License'
            },
            {
                name: 'Privacy'
            },
            {
                name: 'About US'
            },
        ]
    }
]

return (
    <footer className="text-gray-500 bg-transparent px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
            <div className="flex-1">
                <div className="max-w-xs">
                    <img src={Logo} alt="Logo" className="w-32" />
                </div>
                <form 
                    onSubmit={(e) => e.preventDefault()}
                >
                    <label className="block pt-4 pb-2">
                        Stay up to date
                    </label>
                    <div className="max-w-sm flex items-center  rounded-md p-1">
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2.5 outline-none"
                        />
                        <button
                            className="p-2.5  text-white bg-pink-600 outline-none shadow-md focus:shadow-none sm:px-5"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                {
                    footerNavs.map((item, idx) => (
                        <ul
                            className="space-y-4"
                            key={idx}
                        >
                            <h4 className="text-gray-800 font-medium">
                                { item.label }
                            </h4>
                            {
                                item.items.map(((el, idx) => (
                                    <li key={idx}>
                                        <a 
                                            href={el.href}
                                            className="hover:underline hover:text-indigo-600"
                                        
                                        >
                                            { el.name }
                                        </a>
                                    </li>
                                )))
                            }
                        </ul>
                    ))
                }
            </div>
        </div>
        <div className="mt-8 py-6 border-t border-gray-800 items-center justify-between sm:flex">
            <div className="mt-4 sm:mt-0">
                &copy; 2022 LifeLog All rights reserved.
            </div>
            <div className="mt-6 sm:mt-0">
                <ul className="flex items-center space-x-4">
                    <li className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center">
                        <a href="https://www.facebook.com/">
                            <Facebook className="w-6 h-6"/>
                        </a>
                    </li>

                    <li className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center">
                        <a href="https://x.com/i/flow/login">
                            <Twitter className="w-6 h-6"/>
                        </a>
                    </li>

                    <li className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center">
                        <a href="https://www.linkedin.com/signup">
                            <Inbox className="w-6 h-6"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)
}

export default Footer;
