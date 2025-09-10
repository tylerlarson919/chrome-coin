import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface NavigationArrowsProps {
  onNext: () => void;
  onPrev: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export const NavigationArrows = ({
  onNext,
  onPrev,
  canScrollPrev,
  canScrollNext,
}: NavigationArrowsProps) => {
  const arrowBaseClasses =
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center size-10 sm:size-12 bg-zinc-900/70 text-white border-2 border-zinc-700 rounded-lg backdrop-blur-sm transition-all hover:border-purple-500 hover:bg-zinc-800 disabled:opacity-0 disabled:cursor-not-allowed";

  return (
    <>
      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        aria-label="Previous products"
        className={`${arrowBaseClasses} left-6 sm:left-4`}
      >
        <ChevronLeftIcon strokeWidth={2.5} className="size-6" />
      </button>
      <button
        onClick={onNext}
        disabled={!canScrollNext}
        aria-label="Next products"
        className={`${arrowBaseClasses} right-6 sm:right-4`}
      >
        <ChevronRightIcon strokeWidth={2.5} className="size-6" />
      </button>
    </>
  );
};