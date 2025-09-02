import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface NavigationArrowsProps {
  onNext: () => void;
  onPrev: () => void;
  page: number;
  isLastStep: boolean;
  isFirstStep?: boolean;
}

const ArrowButton = ({ children, ...props }: { children: React.ReactNode } & React.ComponentProps<"button">) => (
  <button
    {...props}
    className="z-50 flex items-center justify-center size-12 sm:size-14 text-black transition-all duration-200 bg-white border-4 border-black rounded-lg shadow-lg hover:scale-110 hover:-rotate-6 active:scale-100 active:rotate-0"
  >
    {children}
  </button>
);

export const NavigationArrows = ({
  onNext,
  onPrev,
  page,
  isLastStep,
  isFirstStep,
}: NavigationArrowsProps) => {
  const showPrevArrow = isFirstStep !== undefined ? !isFirstStep : page > 0;

  return (
    <>
      <AnimatePresence>
        {showPrevArrow && (
          <motion.div
            className="fixed z-50 top-[50lvh] left-1 sm:left-4 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <ArrowButton onClick={onPrev}>
              <ChevronLeftIcon strokeWidth={3} className="size-6 sm:size-8" />
            </ArrowButton>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLastStep && (
            <motion.div 
                className="fixed z-50 top-[50lvh] right-1 sm:right-4 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <ArrowButton onClick={onNext}>
                    <ChevronRightIcon strokeWidth={3} className="size-6 sm:size-8" />
                </ArrowButton>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};