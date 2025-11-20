"use client";

import { useState, useEffect } from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const data = [30, 65, 55, 30, 80, 40, 50];
const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function TinyBarChart() {
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check Tailwind dark mode
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkDark();

    // Observe for theme changes
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!isClient) {
    return (
      <div
        style={{
          width: 410,
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    );
  }

  return (
    <ChartContainer
      key={isDark ? "dark" : "light"} // Force re-render on theme change
      width={400}
      height={220}
      series={[
        {
          data,
          type: "bar",
          color: "#7C63F1",
        },
      ]}
      xAxis={[
        {
          scaleType: "band",
          data: labels,
        },
      ]}
      sx={{
        // Day label color dynamically based on theme
        [`.${axisClasses.bottom} .${axisClasses.label}`]: {
          fill: isDark ? "#FFFFFF" : "#8A8A8A",
          fontSize: 13,
          fontWeight: 500,
        },

        // Remove axis line
        [`.${axisClasses.bottom} .${axisClasses.line}`]: {
          display: "none",
        },

        // Remove ticks
        [`.${axisClasses.bottom} .${axisClasses.tick}`]: {
          display: "none",
        },

        // Rounded bars
        "& .MuiBarElement-root": {
          rx: 6,
          opacity: 0.25,
        },

        // Highlight Friday
        "& .MuiBarElement-root:nth-of-type(5)": {
          opacity: 1,
        },
      }}
    >
      <ChartsXAxis />
      <BarPlot />
    </ChartContainer>
  );
}

export default TinyBarChart;
