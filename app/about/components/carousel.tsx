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
        <div>
            <Carousel autoplay delay={1000}>
                <CarouselSlide as={Center} bg="primary">
                    1
                </CarouselSlide>
                <CarouselSlide as={Center} bg="secondary">
                    2
                </CarouselSlide>
                <CarouselSlide as={Center} bg="warning">
                    3
                </CarouselSlide>
                <CarouselSlide as={Center} bg="danger">
                    4
                </CarouselSlide>
            </Carousel>
        </div>
    )
}
