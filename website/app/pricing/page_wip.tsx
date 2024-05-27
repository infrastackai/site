'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from 'react';
import { usePathname, useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter();
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => setIsToggled(!isToggled);

    const PricingBox = ({ title, price, subtitle, text, features, highlighted, enterprise }) => {
        return (
            <div className={`${highlighted ? 'bg-indigo-800 text-white' : 'bg-black text-gray-300'} rounded-3xl p-6 w-64 flex flex-col shadow-lg border-4 border-indigo-500 vertical-align`}>
                <h3 className="text-2xl font-semibold my-2">{title}</h3>
                <p className={`${enterprise ? 'text-2xl font-bold my-3' : 'text-4xl font-bold my-3'} content-between h-12`}>{price}</p>
                <p className="text-sm text-gray-300">{subtitle}</p>
                <p className="text-left my-2">{text}</p>
                <ul className="flex-grow" style={{minHeight: '120px'}}>
                    {features.map((feature, index) => (
                        <li key={index} className="text-left my-2">{feature}</li>
                    ))}
                </ul>
                <Button onClick={() => {
                    router.push('https://app.infrastack.ai/api/auth/login')
                }} className={`font-semibold w-45 mt-4 px-6 py-2 rounded-lg border-2 ${highlighted ? 'bg-zinc-200 text-indigo-800 border-indigo-500' : 'bg-indigo-500 text-white border-indigo-700 hover:bg-indigo-400'}`}>
                    {highlighted ? 'GET STARTED' : enterprise? 'CONTACT SALES' : 'GET STARTED'}
                </Button>
            </div>
        );
    };
    
    const plans = [
        {
            title: "Developer",
            price: "$0",
            subtitle: "Best for low-traffic application observability",
            text: "",
            features: ["1 Developer", "100K Events Ingestion / month", 
                "Email Notifications", "Community Support"],
            highlighted: false,
            enterprise: false
        },
        {
            title: "Startup",
            price: "$19/mo",
            subtitle: "Best for growing teams and multiple environments",
            text: "",
            features: ["2 Developers", "500K Events Ingestion / month", "Slack & Email Notifications",
                "Priority Support", "Copilots"],
            highlighted: true,
            enterprise: false
        },
        {
            title: "Professional",
            price: "Talk to us!",
            subtitle: "Best for unique requirements that need to scale",
            text: "Everything in Startup ",
            features: [
                "Dedicated Engineering Support", "Advance Copilots", "AI Agents"],
            highlighted: false,
            enterprise: true
        }
    ];


    return (
    <div className="container mx-full mt-20 flex flex-col items-center">
    <div className="text-center">
        <h1 className="text-5xl md:text-6xl text-zinc-200 font-bold">Flexible and Transparent Pricing</h1>

        <h2 className="mt-1.5 text-2xl md:text-3xl text-gray-400" style={{ letterSpacing: '0.225em' }}>That supports every developers needs</h2>

        <div className="flex items-center justify-center mt-8">
                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                    {/* Actual toggle */}
                    <div className="relative">
                        {/* Hidden input */}
                        <input
                            id="toggle"
                            type="checkbox"
                            className="sr-only"
                            checked={isToggled}
                            onChange={handleToggle}
                        />
                        {/* Switch */}
                        <div className="block bg-indigo-500 w-14 h-8 rounded-full"></div>
                        {/* Dot */}
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isToggled ? 'translate-x-full' : 'translate-x-0'}`}></div>
                    </div>
                    {/* Label */}
                    <div className="ml-3 text-zinc-200 font-medium">
                        {isToggled ? 'Annually' : 'Monthly'}
                    </div>
                </label>
            </div>

            <div className="flex items-stretch justify-center space-x-10 mt-8">
                    {plans.map(plan => <PricingBox key={plan.title} {...plan} />)}
                </div>

    </div>
</div>
)
}