// import React from "react"
// import {
//     Stepper,
//     Step,
//     StepTitle,
//     StepDescription,
//     StepSeparator,
//     StepStatus,
//     useSteps,
//     VStack,
//     HStack,
//     Button,
//     Steps,
// } from "@yamada-ui/react"

// const steps: Steps = [
//     { title: "孫悟空少年編", description: "レッドリボン軍" },
//     { title: "ピッコロ大魔王編", description: "ピッコロ大魔王" },
//     { title: "サイヤ人編", description: "ベジータ・ナッパ" },
// ]
//     const { activeStep, onStepNext, onStepPrev } = useSteps({
//         index: 1,
//         count: steps.length,
//     })

// export default function StepperDemo() {

      
//       return (
//         <VStack>
//           <Stepper index={activeStep} steps={steps} orientation="horizontal" />
      
//           <Stepper index={activeStep} steps={steps} orientation="vertical" h="sm" />
      
//           <HStack>
//             <Button onClick={onStepPrev}>Prev</Button>
//             <Button onClick={onStepNext}>Next</Button>
//           </HStack>
//         </VStack>
//       )
// }
