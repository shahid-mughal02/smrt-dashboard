let toggleBtn = document.querySelector('.toggle');
let collapseBtn = document.querySelector('.collapse-btn');
let sidebar = document.querySelector('#sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.remove("collapse-sidebar")
    setTimeout(() => {
        sidebar.classList.remove("show-menu-text")
    }, 250);
})
collapseBtn.addEventListener('click', () => {
    sidebar.classList.add("collapse-sidebar")
    sidebar.classList.add("show-menu-text")
})
var options = {
    series: [{
        name: '',
        data: [100, 1500, 428, 1251, 942, 1809, 120]
    }, {
        name: '',
        data: [200, 1700, 1300, 500, 700, 1200, 100]
    }],
    colors : ["#f00baf", "#4c8fc4"],
    chart: {
        height: 250,
        type: 'area'
    },
    markers: {
        colors : '#fff',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'month',
        categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"]
    },
    yaxis: {
        min: 0,
        max: 2000,
        tickAmount: 4,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};


var chart = new ApexCharts(document.querySelector("#chart-fill-lines"), options);
chart.render();
var options = {
    series: [{
        name: 'VIDE-1',
        data: [45, 23, 13, 33, 46, 15, 0]
    }, {
        name: 'VIDE-2',
        data: [5, 30, 25, 15, 35, 45, 0]
    }],
    colors : ["#f00baf", "#4c8fc4"],
    chart: {
        height: 200,
        type: 'line'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'day',
        categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    },
    yaxis: {
        min: 0,
        max: 50,
        tickAmount: 5,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};
var chart = new ApexCharts(document.querySelector("#chart-lines"), options);
chart.render();