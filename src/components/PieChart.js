import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: "Traffic",
                        data: data.traffic,
                        backgroundColor: data.colors,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data]);

    return (
        <div className="mx-auto w-3/5 overflow-hidden">
            <canvas ref={chartRef} />
        </div>
    );
};

export default PieChart;
