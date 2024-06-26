import React from "react";
// import CarouselDemo from "./components/carousel";
import type { Metadata } from "next";
import { Calendar } from "@yamada-ui/calendar";

export const metadata: Metadata = {
    title: 'About Services',
    description: "Generated by create next app",
};

export default function About() {
    return (
        <div className="container mx-auto space-y-5">
            <h1 className="font-bold text-2xl">About Page</h1>
            {/* <CarouselDemo/> */}
            <Calendar />
        </div>
    )
}
