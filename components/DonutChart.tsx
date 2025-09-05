"use client";
import { motion, Variants } from "framer-motion";
import React, { useMemo } from "react";

// Animation Variants for the entrance effect (unchanged)
const chartVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// Helper component to render the pixels for a single slice
const PixelSlice = React.memo(
  ({
    size,
    pixelSize,
    center,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    color,
  }: {
    size: number;
    pixelSize: number;
    center: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    color: string;
  }) => {
    const pixels = useMemo(() => {
      const pixelCoords = [];
      for (let y = 0; y < size; y += pixelSize) {
        for (let x = 0; x < size; x += pixelSize) {
          const pxCenter = x + pixelSize / 2;
          const pyCenter = y + pixelSize / 2;

          const deltaX = pxCenter - center;
          const deltaY = pyCenter - center;

          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          if (distance >= innerRadius && distance <= outerRadius) {
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
            if (angle < 0) angle += 360; // Normalize angle to 0-360

            const isAfterStart = angle >= startAngle;
            const isBeforeEnd = angle < endAngle;

            // Handle slices that cross the 0/360 degree boundary
            if (
              (startAngle < endAngle && isAfterStart && isBeforeEnd) ||
              (startAngle > endAngle && (isAfterStart || isBeforeEnd))
            ) {
              pixelCoords.push({ x, y });
            }
          }
        }
      }
      return pixelCoords;
    }, [size, pixelSize, center, innerRadius, outerRadius, startAngle, endAngle]);

    return (
      <g>
        {pixels.map((p, i) => (
          <rect
            key={i}
            x={p.x}
            y={p.y}
            width={pixelSize}
            height={pixelSize}
            fill={color}
            stroke="#ffffff2c"
            strokeWidth={0.5}
          />
        ))}
      </g>
    );
  }
);

PixelSlice.displayName = "PixelSlice";

interface DonutChartProps {
  data: { name: string; value: number; color: string }[];
  activeIndex: number;
  onHover: (index: number) => void;
  onTap: (index: number) => void;
}

export const DonutChart = ({
  data,
  activeIndex,
  onHover,
  onTap,
}: DonutChartProps) => {
  const size = 400;
  const pixelSize = 12; // Adjust for more or less pixelation
  const outerRadius = size / 2.2;
  const innerRadius = size / 3;
  const center = size / 2;

  const total = data.reduce((acc, slice) => acc + slice.value, 0);
  let cumulativeAngle = 0;

  // Helper function to calculate label position
  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
    <motion.svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
      <motion.g variants={chartVariants} initial="hidden" animate="visible">
        {data.map((slice, index) => {
          const startAngle = cumulativeAngle;
          const sliceAngle = (slice.value / total) * 360;
          const endAngle = cumulativeAngle + sliceAngle;
          const midAngle = startAngle + sliceAngle / 2;

          // Calculate label position
          const labelRadius = innerRadius + (outerRadius - innerRadius) / 2;
          const labelPos = polarToCartesian(center, center, labelRadius, midAngle);

          cumulativeAngle = endAngle;

          return (
            <motion.g
              key={slice.name}
              variants={sliceVariants}
              onHoverStart={() => onHover(index)}
              onHoverEnd={() => onHover(-1)}
              onTap={() => onTap(index)}
              animate={{ scale: activeIndex === index ? 1.05 : 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="cursor-pointer focus:outline-none"
            >
              <PixelSlice
                size={size}
                pixelSize={pixelSize}
                center={center}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                color={slice.color}
              />

              {/* Percentage Label */}
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