'use client'

import { useCallback, useMemo, useState } from "react";
import { SectionContainer } from "../../SectionContainer";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { SelectServerAndGame } from "./SelectServerAndGame";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { Icon } from "@/app/styles/Icon";
import { useFormik } from "formik";
import { PremiumPageSteps } from "./PremiumPageSteps";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { ChooseTier } from "./ChooseTier";

enum STEPS {
  chooseServer = 1,
  chooseTier = 2,
  payment = 3,
}

export const PurchasePremiumSlider = () => {
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.chooseServer);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "left"
  );

  const formik = useFormik({
    initialValues: {
      game: null,
      server: null,
      tier:null,
    },
    onSubmit: (value) => {},
  });

  const handleNextStep = useCallback(() => {
    const nextStep =
      activeStep !== STEPS.payment ? activeStep + 1 : activeStep;
      window.scrollY = 0
    setSlideDirection("right");
    setTimeout(() => setActiveStep(nextStep), 250); 
  }, [activeStep, setActiveStep]);

  const handlePrevStep = useCallback(() => {
    const nextStep =
      activeStep !== STEPS.chooseServer ? activeStep - 1 : activeStep;
    setSlideDirection("left");
    setTimeout(() => setActiveStep(nextStep), 250); 
  }, [activeStep, setActiveStep]);

  const nextButtonLabel = useMemo(() => {
    if (activeStep === STEPS.payment) {
      return "Pay"
    }else{
      return "Next";
    }
  }, [activeStep]);
    
  return (
    <SectionContainer className="max-w-[1224px] mx-auto flex flex-col gap-[22px]">
      <PremiumPageSteps activeStep={activeStep} STEPS={STEPS} />

      {activeStep === STEPS.chooseServer && (
        <motion.div
          transition={{ duration: 0.25 }}>
            <SelectServerAndGame
              handleNextPage={() => handleNextStep()}
              values={formik.values}
              onChange={(comp, val) => formik.setFieldValue(comp, val)}
            />
        </motion.div>
        )}

      {activeStep === STEPS.chooseTier && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.25 }}
          className="text-white">
         <ChooseTier
               handleNextPage={() => handleNextStep()}
               values={formik.values}
               onChange={(comp, val) => formik.setFieldValue(comp, val)}
         />
        </motion.div>
      )}
      {activeStep === STEPS.payment && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.25 }}
          className="text-white"
        >dsada
        </motion.div>
      )}
       {(formik.values.game && formik.values.server) && activeStep !== STEPS.chooseTier && <PrimaryButton onClick={handleNextStep} className="w-fit ml-auto text-[14px]">{nextButtonLabel}</PrimaryButton>}
    </SectionContainer>
  );
};
