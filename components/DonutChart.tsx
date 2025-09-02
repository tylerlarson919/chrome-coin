"use client";
import { motion, Variants } from "framer-motion";

// Helper functions (unchanged)
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
};

const describeDonutSlice = (x: number, y: number, outerRadius: number, innerRadius: number, startAngle: number, endAngle: number) => {
    const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
    const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
    const startInner = polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = polarToCartesian(x, y, innerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [ "M", startOuter.x, startOuter.y, "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y, "L", endInner.x, endInner.y, "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y, "Z" ].join(" ");
};


// Animation Variants for the new entrance effect
const chartVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger the animation of each slice
        },
    },
};

const sliceVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
    },
};


interface DonutChartProps {
    data: { name: string; value: number; color: string }[];
    activeIndex: number;
    onHover: (index: number) => void;
    onTap: (index: number) => void;
}

export const DonutChart = ({ data, activeIndex, onHover, onTap }: DonutChartProps) => {
    const size = 350;
    const outerRadius = size / 2.2;
    const innerRadius = size / 4;
    const center = size / 2;

    const total = data.reduce((acc, slice) => acc + slice.value, 0);
    let cumulativeAngle = 0;

    return (
        <motion.svg
            viewBox={`0 0 ${size} ${size}`}
            width="100%"
            height="100%"
        >
            <motion.g
                variants={chartVariants}
                initial="hidden"
                animate="visible"
            >
                {data.map((slice, index) => {
                    const startAngle = cumulativeAngle;
                    const sliceAngle = (slice.value / total) * 360;
                    const endAngle = cumulativeAngle + sliceAngle;
                    const midAngle = startAngle + sliceAngle / 2;
                    const pathData = describeDonutSlice(center, center, outerRadius, innerRadius, startAngle, endAngle);
                    const labelRadius = innerRadius + (outerRadius - innerRadius) / 2;
                    const labelPos = polarToCartesian(center, center, labelRadius, midAngle);
                    cumulativeAngle = endAngle;

                    return (
                        <motion.g
                            key={slice.name}
                            variants={sliceVariants} // Apply the new slice animation
                            onHoverStart={() => onHover(index)}
                            onHoverEnd={() => onHover(-1)}
                            onTap={() => onTap(index)}
                            animate={{ scale: activeIndex === index ? 1.05 : 1 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            {/* Donut Slice path no longer needs its own animation */}
                            <motion.path
                                d={pathData}
                                fill={slice.color}
                                stroke="#000000"
                                strokeWidth={4}
                                className="cursor-pointer focus:outline-none"
                            />

                            {/* Percentage Label with faster fade-in */}
                            <motion.text
                                x={labelPos.x}
                                y={labelPos.y}
                                fill="white"
                                textAnchor="middle"
                                dominantBaseline="central"
                                className="font-luckiest text-xl pointer-events-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: [0, 1.15, 1] }}
                                transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.4 + index * 0.1,
                                }}
                            >
                                {`${((slice.value / total) * 100).toFixed(0)}%`}
                            </motion.text>
                        </motion.g>
                    );
                })}
            </motion.g>
        </motion.svg>
    );
};