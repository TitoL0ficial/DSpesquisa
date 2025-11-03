import type { ApexOptions } from "apexcharts";

export const pieOptions: ApexOptions = {
    chart: {
        background: "transparent",
        foreColor: "blue",
    },
    colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ffd6a5"],
    legend: {
        show: false,
    },
    tooltip: {
        enabled: true,
    },
    dataLabels: {
        enabled: true,
        offsetX: 100,
        offsetY: 100,
        style: {
            colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ffd6a5"],
            fontSize: "20px",
            fontFamily: "Play, sans-serif",
            fontWeight: 700,
        },
    },
    plotOptions: {
        pie: {
        customScale: 0.7,
        expandOnClick: false,
            dataLabels: {
                offset: 60,
            },
        },
    },
};

export const barOptions: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    colors: ["#ED7947"],
    grid: {
        show: false,
    },
    plotOptions: {
        bar: {
            horizontal: true,
            borderRadius: 14,
            borderRadiusApplication: 'around',
            barHeight: "60%",
        },
    },
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: [
        {
            labels: {
                maxWidth: 360,
                style: {
                    colors: "#00D4FF",
                    fontSize: "18px",
                    fontFamily: "Play, sans-serif",
                    fontWeight: 700,
                },
            },
        },
    ],
};