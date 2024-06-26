import React from "react"
import { Center } from "@yamada-ui/react"
import {
    Carousel,
    CarouselSlide,
    CarouselControlNext,
    CarouselControlPrev,
    CarouselIndicators,
} from "@yamada-ui/carousel"



export default function CarouselDemo() {
    return (
        <div className="container mx-auto">
            <Carousel autoplay delay={1000}>
                <CarouselSlide as={Center} bg="primary">
                    <img src="/photograph/pic1.jpg" alt="" />
                </CarouselSlide>
                <CarouselSlide as={Center} bg="secondary">
                    <img src="/photograph/pic2.jpg" alt="" />
                </CarouselSlide>
                <CarouselSlide as={Center} bg="warning">
                    <img src="/photograph/pic3.jpg" alt="" />
                </CarouselSlide>
                <CarouselSlide as={Center} bg="danger">
                    <img src="/photograph/pic4.jpg" alt="" />
                </CarouselSlide>
                <CarouselControlPrev />
                <CarouselControlNext />
                <CarouselIndicators />
            </Carousel>
        </div>
    )
}
