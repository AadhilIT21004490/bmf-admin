module.exports = {

"[project]/components/charts/customers-statistics-chart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-apexcharts/dist/react-apexcharts.min.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const chartOptions = {
    colors: [
        '#FF9F29',
        '#487FFF'
    ],
    labels: [
        'Female',
        'Male'
    ],
    legend: {
        show: false
    },
    chart: {
        type: 'donut',
        height: 230,
        sparkline: {
            enabled: true // Remove whitespace
        }
    },
    stroke: {
        width: 0
    },
    dataLabels: {
        enabled: false
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    ]
};
const chartSeries = [
    30,
    25
];
const CustomersStatisticsChart = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Chart, {
        options: chartOptions,
        series: chartSeries,
        type: "donut",
        height: 230
    }, void 0, false, {
        fileName: "[project]/components/charts/customers-statistics-chart.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CustomersStatisticsChart;
}}),
"[project]/components/shared/custom-select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function CustomSelect({ placeholder = "Select", options, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "min-w-[88px] focus-visible:shadow-none focus-visible:ring-0 font-medium dark:bg-slate-700 text-neutral-900 dark:text-white border border-slate-300 dark:border-slate-500 data-[placeholder]:text-neutral-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: placeholder
                }, void 0, false, {
                    fileName: "[project]/components/shared/custom-select.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/custom-select.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: options.map((option)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: option,
                        children: option
                    }, option, false, {
                        fileName: "[project]/components/shared/custom-select.tsx",
                        lineNumber: 27,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/shared/custom-select.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/custom-select.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CustomSelect;
}}),
"[project]/components/charts/daily-sales-chart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-apexcharts/dist/react-apexcharts.min.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const DailySalesChart = ({ chartColor })=>{
    const chartOptions = {
        chart: {
            type: 'area',
            width: '100%',
            height: 360,
            sparkline: {
                enabled: false // Remove whitespace
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 4,
            colors: [
                chartColor
            ],
            lineCap: 'round'
        },
        grid: {
            show: true,
            borderColor: '#D1D5DB',
            strokeDashArray: 1,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            row: {
                colors: undefined,
                opacity: 0.5
            },
            column: {
                colors: undefined,
                opacity: 0.5
            },
            padding: {
                top: -30,
                right: 0,
                bottom: -10,
                left: 0
            }
        },
        fill: {
            type: 'gradient',
            colors: [
                chartColor
            ],
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: [
                    `${chartColor}00`
                ],
                inverseColors: false,
                opacityFrom: .6,
                opacityTo: 0.3,
                stops: [
                    0,
                    100
                ]
            }
        },
        markers: {
            colors: [
                chartColor
            ],
            strokeWidth: 3,
            size: 0,
            hover: {
                size: 10
            }
        },
        xaxis: {
            labels: {
                show: true
            },
            categories: [
                `Jan`,
                `Feb`,
                `Mar`,
                `Apr`,
                `May`,
                `Jun`,
                `Jul`,
                `Aug`,
                `Sep`,
                `Oct`,
                `Nov`,
                `Dec`
            ],
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };
    const chartSeries = [
        {
            name: 'This Day',
            data: [
                18,
                25,
                20,
                35,
                25,
                55,
                45,
                50,
                40
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Chart, {
        options: chartOptions,
        series: chartSeries,
        type: "area",
        height: 370
    }, void 0, false, {
        fileName: "[project]/components/charts/daily-sales-chart.tsx",
        lineNumber: 117,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = DailySalesChart;
}}),
"[project]/components/charts/world-map-chart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-simple-maps/dist/index.es.js [app-ssr] (ecmascript)");
"use client";
;
;
// GeoJSON source
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const WorldMapChart = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComposableMap"], {
            projection: "geoMercator",
            width: 800,
            height: 400,
            className: "w-full h-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Geographies"], {
                geography: geoUrl,
                children: ({ geographies })=>geographies.map((geo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Geography"], {
                            geography: geo,
                            style: {
                                default: {
                                    fill: "#E0E0E0",
                                    outline: "none"
                                },
                                hover: {
                                    fill: "#6366f1",
                                    outline: "none"
                                },
                                pressed: {
                                    fill: "#4f46e5",
                                    outline: "none"
                                }
                            }
                        }, geo.rsmKey, false, {
                            fileName: "[project]/components/charts/world-map-chart.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this))
            }, void 0, false, {
                fileName: "[project]/components/charts/world-map-chart.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/charts/world-map-chart.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/charts/world-map-chart.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = WorldMapChart;
}}),
"[project]/components/ui/table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/charts/generate-content-chart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-apexcharts/dist/react-apexcharts.min.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const GenerateContentChart = ()=>{
    const chartOptions = {
        series: [
            {
                name: 'Net Profit',
                data: [
                    20000,
                    16000,
                    14000,
                    25000,
                    45000,
                    18000,
                    28000,
                    11000,
                    26000,
                    48000,
                    18000,
                    22000
                ]
            },
            {
                name: 'Revenue',
                data: [
                    15000,
                    18000,
                    19000,
                    20000,
                    35000,
                    20000,
                    18000,
                    13000,
                    18000,
                    38000,
                    14000,
                    16000
                ]
            }
        ],
        chart: {
            type: 'bar',
            height: 250,
            toolbar: {
                show: false
            }
        },
        colors: [
            '#487FFF',
            '#FF9F29'
        ],
        legend: {
            show: false
        },
        grid: {
            show: true,
            borderColor: '#D1D5DB',
            strokeDashArray: 4,
            position: 'back'
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 10
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: [
                'transparent'
            ]
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        fill: {
            opacity: 1
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Chart, {
        options: chartOptions,
        series: chartOptions.series,
        type: "bar",
        height: 254
    }, void 0, false, {
        fileName: "[project]/components/charts/generate-content-chart.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = GenerateContentChart;
}}),
"[project]/public/assets/images/payment/payment1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/payment1.abcd5b8e.png");}}),
"[project]/public/assets/images/payment/payment1.png.mjs { IMAGE => \"[project]/public/assets/images/payment/payment1.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/payment/payment1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAdklEQVR42n2PvQ1AUBRG7xgWQNQ6RtArbKFU2EBiAAPYAYXYQGEBpc6bwHnN+0lQnLwv9zsvuVekXwOZ71AWFXnome6cMoMKSkiNZH+oRiZ1wUnuzNwRWsqDd4PxS1Cwk+s3oYGVnENiBX/JAmJ7jV5y+DmT7gHWtXt0pXvnRQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/payment/payment2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/payment2.92812395.png");}}),
"[project]/public/assets/images/payment/payment2.png.mjs { IMAGE => \"[project]/public/assets/images/payment/payment2.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/payment/payment2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAr0lEQVR42n2PvQ7BYBSGX3fRG+BL9Gs/2sZP4hosFiOGJsRoEYOkQlPBZjFJWCQSo5XV4iYsrkAs6qRpmtOlw7s8zzk57wFkX4Oa56EWhXSI6eSYbFBcSpdSjZhJjm15MGdfyOkHtr9FyRcRj6UgcERxHObkKETn9ER94/ABA1Zwh3v5YXJ7Y3jdwQ50PlBGbX2G93ihdejBWRrJ6bikIGihuW+jslKsF5XMelMOtD+FG0NfcMPCdAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/payment/payment3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/payment3.2d1d393a.png");}}),
"[project]/public/assets/images/payment/payment3.png.mjs { IMAGE => \"[project]/public/assets/images/payment/payment3.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/payment/payment3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAp0lEQVR42mWPMQrCMBhGc4xeoFYrCLo4iaMFrSBCk6WJp/ECrgoeQPASdasXcHBw8gQmoy/SSqDDI+T7Xn7yi1V2i8rCxlq6XojPlnSilP9yBGsjneScQ+Il0ZQDI+1hp+wL7ka5I1nqu1YYGmUvlG/OE1M0WT8UEtjyco/0QKq5T0MhpTxT1vBEuJKNG+H3ST9hBgVsYNJuIvKsirTsrqmLT5wvqugLUGp84gCJs0MAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/payment/payment4.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/payment4.3b70bfdd.png");}}),
"[project]/public/assets/images/payment/payment4.png.mjs { IMAGE => \"[project]/public/assets/images/payment/payment4.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/payment/payment4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxklEQVR42m2PMQ/BQBiG72c0WGmZFIMOYjIYxMqGpJNaTAY3S8TcVqXuGr/AZhEJ6XAikUhEIgY/QMLUWFxdheSaGL7lfZ68X15AYFSgWIr7jpTgjzpinMCIACgWQ/DlpMQzqpauqFwIGODhA+czeDKCdeO0PUxrlSALCa6tqnA8XzTN/ZrJMi9IPpYaT5R2dcvYDa2ZTtkrXij6KHnxUPammZvj0u60fq3gu0BhDT0Py92VrbXvWMl9ljAGyCD2fybLSF8U3q+Cge8SY7AIAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/components/shared/transaction-list.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/payment/payment1.png.mjs { IMAGE => "[project]/public/assets/images/payment/payment1.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/payment/payment2.png.mjs { IMAGE => "[project]/public/assets/images/payment/payment2.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/payment/payment3.png.mjs { IMAGE => "[project]/public/assets/images/payment/payment3.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/payment/payment4.png.mjs { IMAGE => "[project]/public/assets/images/payment/payment4.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
;
const transactions = [
    {
        id: 1,
        paymentMethod: "Paytm",
        description: "Starbucks",
        amount: "-$20",
        amountType: "debit",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: 2,
        paymentMethod: "PayPal",
        description: "Client Payment",
        amount: "+$800",
        amountType: "credit",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: 3,
        paymentMethod: "Stripe",
        description: "Ordered iPhone 14",
        amount: "-$300",
        amountType: "debit",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: 4,
        paymentMethod: "Razorpay",
        description: "Refund",
        amount: "+$400",
        amountType: "credit",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: 5,
        paymentMethod: "Paytm",
        description: "Starbucks",
        amount: "-$1400",
        amountType: "debit",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: 6,
        paymentMethod: "Stripe",
        description: "Ordered iPhone 14",
        amount: "+$800",
        amountType: "credit",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$payment$2f$payment2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
const TransactionList = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: transactions.map((transactionItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 mb-5 last:mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: transactionItem.image,
                                alt: transactionItem.paymentMethod,
                                width: 40,
                                height: 40,
                                className: "w-10 h-10 rounded-lg shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/transaction-list.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "text-base mb-0 font-normal",
                                        children: transactionItem.paymentMethod
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/transaction-list.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-secondary-light font-normal",
                                        children: transactionItem.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/transaction-list.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/transaction-list.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/transaction-list.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-base font-medium ${transactionItem.amountType === "credit" ? "text-green-600" : "text-red-600"}`,
                        children: transactionItem.amount
                    }, void 0, false, {
                        fileName: "[project]/components/shared/transaction-list.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, transactionItem.id, true, {
                fileName: "[project]/components/shared/transaction-list.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = TransactionList;
}}),

};

//# sourceMappingURL=_332b762e._.js.map