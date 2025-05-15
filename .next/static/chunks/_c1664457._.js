(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ui/tech-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TechCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
;
;
function TechCard({ id, name, color, icon, gridSpan, onRemove }) {
    const isExpandedCols = gridSpan?.cols && gridSpan.cols > 1;
    const isExpandedRows = gridSpan?.rows && gridSpan.rows > 1;
    const isActuallyExpanded = isExpandedCols || isExpandedRows;
    // Calcule la hauteur minimale en fonction du nombre de lignes
    // Chaque ligne fait au moins 150px (de gridAutoRows) + le gap
    const styleProps = {};
    if (isExpandedRows && gridSpan?.rows) {
        styleProps.minHeight = `calc(${gridSpan.rows} * 150px + (${gridSpan.rows - 1} * 1.5rem))`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative rounded-lg border-2 border-[var(--border)] p-6 group overflow-hidden h-full w-full flex flex-col",
        style: styleProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 blur-sm opacity-20 z-0",
                style: {
                    backgroundColor: color
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/tech-card.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onRemove(id),
                className: "absolute top-2 right-2 p-1 bg-red-500/50 hover:bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20",
                "aria-label": "Supprimer la technologie",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/components/ui/tech-card.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/tech-card.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-grow items-start h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-center ${isActuallyExpanded ? "w-10 h-10" : "w-12 h-12"} transition-all`,
                                    children: icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/tech-card.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full",
                                            style: {
                                                backgroundColor: color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/tech-card.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm font-medium ${isActuallyExpanded ? "md:text-base" : ""}`,
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/tech-card.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/tech-card.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/tech-card.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        isActuallyExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-400 mt-2 flex-grow flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "leading-tight",
                                    children: [
                                        "Technologie : ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/tech-card.tsx",
                                            lineNumber: 85,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/tech-card.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 leading-tight",
                                    children: gridSpan?.cols === 3 ? "Occupe toute la largeur, idéal pour les éléments phares." : gridSpan?.cols === 2 ? "S'étend sur deux colonnes pour plus d'impact." : gridSpan?.rows === 2 ? "Plus de hauteur pour des détails supplémentaires." : "Description par défaut."
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/tech-card.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/tech-card.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/tech-card.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/tech-card.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/tech-card.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = TechCard;
var _c;
__turbopack_context__.k.register(_c, "TechCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/logo-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Angular": (()=>Angular),
    "Expo": (()=>Expo),
    "Firebase": (()=>Firebase),
    "Flutter": (()=>Flutter),
    "Ionic": (()=>Ionic),
    "JavaScript": (()=>JavaScript),
    "Kotlin": (()=>Kotlin),
    "NextJS": (()=>NextJS),
    "Node": (()=>Node),
    "Swift": (()=>Swift),
    "TailwindCSS": (()=>TailwindCSS),
    "TypeScript": (()=>TypeScript),
    "Vue": (()=>Vue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TypeScript = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 256 256",
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z",
                fill: "#3178C6"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z",
                fill: "#FFF"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, this);
_c = TypeScript;
const Vue = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 256 221",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z",
                fill: "#41B883"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z",
                fill: "#41B883"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z",
                fill: "#35495E"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this);
_c1 = Vue;
const NextJS = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 180 180",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                id: "mask0_408_139",
                style: {
                    maskType: "alpha"
                },
                maskUnits: "userSpaceOnUse",
                x: 0,
                y: 0,
                width: 180,
                height: 180,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: 90,
                    cy: 90,
                    r: 90,
                    fill: "black"
                }, void 0, false, {
                    fileName: "[project]/components/logo-card.tsx",
                    lineNumber: 64,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#mask0_408_139)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 90,
                        cy: 90,
                        r: 87,
                        fill: "black",
                        stroke: "white",
                        strokeWidth: 6
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
                        fill: "url(#paint0_linear_408_139)"
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 75,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 115,
                        y: 54,
                        width: 12,
                        height: 72,
                        fill: "url(#paint1_linear_408_139)"
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 79,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 66,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_408_139",
                        x1: 109,
                        y1: 116.5,
                        x2: 144.5,
                        y2: 160.5,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "white"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 96,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: "white",
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 97,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 88,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint1_linear_408_139",
                        x1: 121,
                        y1: 54,
                        x2: 120.799,
                        y2: 106.875,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "white"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 107,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: "white",
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 108,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 99,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 87,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this);
_c2 = NextJS;
const Node = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 256 289",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "#539E43",
            d: "M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915v-122.17c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.868c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.913c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v121.376c0 20.935-11.396 33.126-31.271 33.126-6.096 0-10.866 0-24.38-6.625l-27.826-15.9C4.24 220.885 0 213.465 0 205.515V83.348c0-7.95 4.24-15.372 11.13-19.347L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 63.735C251.76 67.71 256 75.132 256 83.082v122.168c0 7.95-4.24 15.371-11.13 19.346l-105.74 61.218c-3.445 1.59-7.42 2.385-11.13 2.385zm32.276-84.01c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.89-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.541 0-21.466 18.021-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.651-1.06-2.916-2.385-3.18-14.575-11.13-19.346-33.126-19.346-24.38 0-27.296 8.48-27.296 14.841 0 7.685 3.445 10.07 36.306 14.31 32.541 4.24 47.967 10.336 47.967 33.338-.265 23.321-19.347 36.571-53.002 36.571z"
        }, void 0, false, {
            fileName: "[project]/components/logo-card.tsx",
            lineNumber: 122,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 115,
        columnNumber: 3
    }, this);
_c3 = Node;
const Flutter = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "#0273D4",
            d: "M128 256c70.692 0 128-57.308 128-128S198.692 0 128 0 0 57.308 0 128s57.308 128 128 128zm0-224c53.911 0 96 42.089 96 96s-42.089 96-96 96-96-42.089-96-96 42.089-96 96-96z"
        }, void 0, false, {
            fileName: "[project]/components/logo-card.tsx",
            lineNumber: 137,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 130,
        columnNumber: 3
    }, this);
_c4 = Flutter;
const Kotlin = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 256 256",
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    x1: "99.991%",
                    y1: "-.011%",
                    x2: ".01%",
                    y2: "100.01%",
                    id: "a",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#E44857",
                            offset: ".344%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 155,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#C711E1",
                            offset: "46.89%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 156,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#7F52FF",
                            offset: "100%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 157,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/logo-card.tsx",
                    lineNumber: 154,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 153,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#a)",
                d: "M256 256H0V0h256L128 127.949z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, this);
_c5 = Kotlin;
const Swift = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 256",
        width: "24",
        height: "24",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "a",
                gradientUnits: "userSpaceOnUse",
                x1: -1845.5,
                y1: 1255.6,
                x2: -1797.1,
                y2: 981.3,
                gradientTransform: "rotate(180 -846.6 623.3)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: 0,
                        style: {
                            stopColor: "#faae42"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 182,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: 1,
                        style: {
                            stopColor: "#ef3e31"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 188,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 173,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#a)",
                d: "M56.9 0h141.8a56.5 56.5 0 0 1 57.4 59.1V197.4a56.6 56.6 0 0 1-57.5 58.6l-144.2-.1a57 57 0 0 1-54-56.8V56.9A56.8 56.8 0 0 1 53.7.2c1-.2 2.1-.2 3.2-.2z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 195,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "b",
                gradientUnits: "userSpaceOnUse",
                x1: 130.6,
                y1: 4.1,
                x2: 95.2,
                y2: 204.9,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: 0,
                        style: {
                            stopColor: "#e39f3a"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 207,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: 1,
                        style: {
                            stopColor: "#d33929"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 199,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#b)",
                d: "M216 209.4a39 39 0 0 0-11.6-11.9c-4-2.7-8.7-4.4-13.5-4.6-3.4-.2-6.8.4-10 1.6a65.2 65.2 0 0 0-9.3 4.3c-3.5 1.8-7 3.6-10.7 5.1-4.4 1.8-9 3.2-13.7 4.2a89 89 0 0 1-17.8 1.4 120.3 120.3 0 0 1-77.2-30 145.4 145.4 0 0 1-22.8-25.1 46.6 46.6 0 0 1-3-4.7L0 121.2V56.7A56.6 56.6 0 0 1 56.6 0h50.5l37.4 38c84.4 57.4 57.1 120.7 57.1 120.7s24 27 14.4 50.7z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 220,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FFF",
                d: "M144.7 38c84.4 57.4 57.1 120.7 57.1 120.7s24 27.1 14.3 50.8c0 0-9.9-16.6-26.5-16.6-16 0-25.4 16.6-57.6 16.6-71.7 0-105.6-59.9-105.6-59.9C91 192.1 135.1 162 135.1 162c-29.1-16.9-91-97.7-91-97.7 53.9 45.9 77.2 58 77.2 58-13.9-11.5-52.9-67.7-52.9-67.7 31.2 31.6 93.2 75.7 93.2 75.7C179.2 81.5 144.7 38 144.7 38z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 224,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 165,
        columnNumber: 3
    }, this);
_c6 = Swift;
const TailwindCSS = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 54 33",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#38bdf8",
                    fillRule: "evenodd",
                    d: "M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/components/logo-card.tsx",
                    lineNumber: 241,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 240,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "a",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#fff",
                        d: "M0 0h54v32.4H0z"
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/logo-card.tsx",
                    lineNumber: 249,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 248,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 232,
        columnNumber: 3
    }, this);
_c7 = TailwindCSS;
const Expo = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 231",
        width: "24",
        height: "24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M121 85c2-3 5-4 7-4 1 0 5 1 7 4 16 22 43 67 63 101l26 40c7 8 18 3 24-6s8-15 8-22c0-4-88-168-97-182-9-13-11-16-26-16h-11c-14 0-16 3-25 16C88 30 0 194 0 198c0 7 2 13 8 22s17 14 24 6l26-40c20-34 47-79 63-101Z",
            fill: "#000020"
        }, void 0, false, {
            fileName: "[project]/components/logo-card.tsx",
            lineNumber: 265,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 257,
        columnNumber: 3
    }, this);
_c8 = Expo;
const Firebase = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 600 600",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FF9100",
                d: "M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 281,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FFC400",
                d: "M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 285,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FF9100",
                d: "M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 289,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#DD2C00",
                d: "M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 293,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 273,
        columnNumber: 3
    }, this);
_c9 = Firebase;
const JavaScript = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "#F7DF1E",
            d: "M0 0h256v256H0V0Z"
        }, void 0, false, {
            fileName: "[project]/components/logo-card.tsx",
            lineNumber: 308,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 301,
        columnNumber: 3
    }, this);
_c10 = JavaScript;
const Angular = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 242 256",
        width: "24",
        height: "24",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#a)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "b",
                        width: 242,
                        height: 256,
                        x: 0,
                        y: 0,
                        maskUnits: "userSpaceOnUse",
                        style: {
                            maskType: "luminance"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "#fff",
                            d: "M0 0h242v256H0V0Z"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 333,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 322,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        mask: "url(#b)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "url(#c)",
                                d: "m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 336,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "url(#d)",
                                d: "m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 340,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 335,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 321,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "c",
                        x1: 53.2,
                        x2: 245,
                        y1: 231.9,
                        y2: 140.7,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#E40035"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 355,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.2,
                                stopColor: "#F60A48"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 356,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.4,
                                stopColor: "#F20755"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 357,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.5,
                                stopColor: "#DC087D"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 358,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.7,
                                stopColor: "#9717E7"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 359,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: "#6C00F5"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 360,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 347,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "d",
                        x1: 44.5,
                        x2: 170,
                        y1: 30.7,
                        y2: 174,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#FF31D9"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 370,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: "#FF5BE1",
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 371,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 362,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "a",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "#fff",
                            d: "M0 0h242v256H0z"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 374,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 373,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 346,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 313,
        columnNumber: 3
    }, this);
_c11 = Angular;
const Ionic = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 317",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    x1: "4%",
                    y1: "27%",
                    x2: "75.9%",
                    y2: "52.9%",
                    id: "a",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 391,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopOpacity: 0,
                            offset: "100%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 392,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/logo-card.tsx",
                    lineNumber: 390,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 389,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#47C5FB",
                d: "M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 395,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#00569E",
                d: "m121 280 37 37h97l-85-86z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 399,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#00B5F8",
                d: "m72 230 48-48 50 49-49 49z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 400,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillOpacity: 0.8,
                fill: "url(#a)",
                d: "m121 280 41-14 4-31z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 401,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 381,
        columnNumber: 3
    }, this);
_c12 = Ionic;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "TypeScript");
__turbopack_context__.k.register(_c1, "Vue");
__turbopack_context__.k.register(_c2, "NextJS");
__turbopack_context__.k.register(_c3, "Node");
__turbopack_context__.k.register(_c4, "Flutter");
__turbopack_context__.k.register(_c5, "Kotlin");
__turbopack_context__.k.register(_c6, "Swift");
__turbopack_context__.k.register(_c7, "TailwindCSS");
__turbopack_context__.k.register(_c8, "Expo");
__turbopack_context__.k.register(_c9, "Firebase");
__turbopack_context__.k.register(_c10, "JavaScript");
__turbopack_context__.k.register(_c11, "Angular");
__turbopack_context__.k.register(_c12, "Ionic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/context-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ContextMenu": (()=>ContextMenu),
    "ContextMenuCheckboxItem": (()=>ContextMenuCheckboxItem),
    "ContextMenuContent": (()=>ContextMenuContent),
    "ContextMenuGroup": (()=>ContextMenuGroup),
    "ContextMenuItem": (()=>ContextMenuItem),
    "ContextMenuLabel": (()=>ContextMenuLabel),
    "ContextMenuPortal": (()=>ContextMenuPortal),
    "ContextMenuRadioGroup": (()=>ContextMenuRadioGroup),
    "ContextMenuRadioItem": (()=>ContextMenuRadioItem),
    "ContextMenuSeparator": (()=>ContextMenuSeparator),
    "ContextMenuShortcut": (()=>ContextMenuShortcut),
    "ContextMenuSub": (()=>ContextMenuSub),
    "ContextMenuSubContent": (()=>ContextMenuSubContent),
    "ContextMenuSubTrigger": (()=>ContextMenuSubTrigger),
    "ContextMenuTrigger": (()=>ContextMenuTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-context-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ContextMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "context-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = ContextMenu;
function ContextMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "context-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = ContextMenuTrigger;
function ContextMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "context-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = ContextMenuGroup;
function ContextMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "context-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c3 = ContextMenuPortal;
function ContextMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "context-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_c4 = ContextMenuSub;
function ContextMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "context-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c5 = ContextMenuRadioGroup;
function ContextMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "context-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/components/ui/context-menu.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c6 = ContextMenuSubTrigger;
function ContextMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "context-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c7 = ContextMenuSubContent;
function ContextMenuContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "context-menu-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/context-menu.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c8 = ContextMenuContent;
function ContextMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "context-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = ContextMenuItem;
function ContextMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "context-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/context-menu.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/context-menu.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/context-menu.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c10 = ContextMenuCheckboxItem;
function ContextMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "context-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/context-menu.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/context-menu.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/context-menu.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c11 = ContextMenuRadioItem;
function ContextMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "context-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_c12 = ContextMenuLabel;
function ContextMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "context-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_c13 = ContextMenuSeparator;
function ContextMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "context-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_c14 = ContextMenuShortcut;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "ContextMenu");
__turbopack_context__.k.register(_c1, "ContextMenuTrigger");
__turbopack_context__.k.register(_c2, "ContextMenuGroup");
__turbopack_context__.k.register(_c3, "ContextMenuPortal");
__turbopack_context__.k.register(_c4, "ContextMenuSub");
__turbopack_context__.k.register(_c5, "ContextMenuRadioGroup");
__turbopack_context__.k.register(_c6, "ContextMenuSubTrigger");
__turbopack_context__.k.register(_c7, "ContextMenuSubContent");
__turbopack_context__.k.register(_c8, "ContextMenuContent");
__turbopack_context__.k.register(_c9, "ContextMenuItem");
__turbopack_context__.k.register(_c10, "ContextMenuCheckboxItem");
__turbopack_context__.k.register(_c11, "ContextMenuRadioItem");
__turbopack_context__.k.register(_c12, "ContextMenuLabel");
__turbopack_context__.k.register(_c13, "ContextMenuSeparator");
__turbopack_context__.k.register(_c14, "ContextMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/tech-stack/tech-stack-grid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TechStackGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tech$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tech-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/logo-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/context-menu.tsx [app-client] (ecmascript)");
;
;
;
;
// Technologies par défaut
const defaultTechs = [
    {
        id: "1",
        name: "TypeScript",
        color: "#3178C6",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeScript"], {}, void 0, false, {
            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
            lineNumber: 40,
            columnNumber: 58
        }, this)
    },
    {
        id: "2",
        name: "Vue.js",
        color: "#41B883",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vue"], {}, void 0, false, {
            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
            lineNumber: 41,
            columnNumber: 54
        }, this)
    },
    {
        id: "3",
        name: "Next.js",
        color: "#000000",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextJS"], {}, void 0, false, {
            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
            lineNumber: 42,
            columnNumber: 55
        }, this)
    },
    {
        id: "4",
        name: "Tailwind CSS",
        color: "#38B2AC",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TailwindCSS"], {}, void 0, false, {
            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
            lineNumber: 43,
            columnNumber: 60
        }, this)
    },
    {
        id: "5",
        name: "Node.js",
        color: "#539E43",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"], {}, void 0, false, {
            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
            lineNumber: 44,
            columnNumber: 55
        }, this)
    }
];
function TechStackGrid({ technologies = defaultTechs, onRemoveTech, onUpdateTech }) {
    const handleUpdateGridSpan = (techId, span)=>{
        console.log(`Mise à jour de la grille pour tech ${techId}:`, span);
        if (onUpdateTech) {
            onUpdateTech(techId, {
                gridSpan: span
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-6",
        children: technologies.map((tech)=>{
            const colSpanToApply = tech.gridSpan?.cols || 1;
            const rowSpanToApply = tech.gridSpan?.rows || 1;
            // Déterminer la classe col-span basée sur la valeur de colSpanToApply
            const colSpanClass = colSpanToApply === 3 ? "col-span-3" : colSpanToApply === 2 ? "col-span-2" : "col-span-1";
            // Déterminer la classe row-span basée sur la valeur de rowSpanToApply
            const rowSpanClass = rowSpanToApply === 2 ? "row-span-2" : "row-span-1";
            return(// Applique les classes de span directement au conteneur du ContextMenu
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${colSpanClass} ${rowSpanClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenu"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuTrigger"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative transition-all duration-300 ease-in-out h-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tech$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: tech.id,
                                    name: tech.name,
                                    color: tech.color,
                                    icon: tech.icon,
                                    gridSpan: tech.gridSpan
                                }, void 0, false, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 86,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                                    variant: "destructive",
                                    onClick: ()=>onRemoveTech && onRemoveTech(tech.id),
                                    children: "Supprimer"
                                }, void 0, false, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuSeparator"], {}, void 0, false, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuSub"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuSubTrigger"], {
                                            children: "Taille en colonnes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuSubContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuRadioGroup"], {
                                                value: String(tech.gridSpan?.cols || 1),
                                                onValueChange: (value)=>{
                                                    console.log(`Changement de colonnes: ${value}`);
                                                    const numValue = parseInt(value, 10);
                                                    handleUpdateGridSpan(tech.id, {
                                                        cols: numValue,
                                                        rows: tech.gridSpan?.rows || 1
                                                    });
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "1",
                                                        children: "1 colonne"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "2",
                                                        children: "2 colonnes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "3",
                                                        children: "Pleine largeur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuSub"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuSubTrigger"], {
                                            children: "Taille en lignes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuSubContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuRadioGroup"], {
                                                value: String(tech.gridSpan?.rows || 1),
                                                onValueChange: (value)=>{
                                                    console.log(`Changement de lignes: ${value}`);
                                                    const numValue = parseInt(value, 10);
                                                    handleUpdateGridSpan(tech.id, {
                                                        cols: tech.gridSpan?.cols || 1,
                                                        rows: numValue
                                                    });
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "1",
                                                        children: "1 ligne"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "2",
                                                        children: "2 lignes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                    lineNumber: 82,
                    columnNumber: 13
                }, this)
            }, tech.id, false, {
                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                lineNumber: 81,
                columnNumber: 11
            }, this));
        })
    }, void 0, false, {
        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c = TechStackGrid;
var _c;
__turbopack_context__.k.register(_c, "TechStackGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/profile/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProfilePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$stack$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tech-stack/tech-stack-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/logo-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Technologies par défaut pour l'exemple
const defaultTechs = [
    {
        id: "1",
        name: "TypeScript",
        color: "#3178C6",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeScript"], {}, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 24,
            columnNumber: 11
        }, this),
        gridSpan: {
            cols: 2,
            rows: 2
        }
    },
    {
        id: "2",
        name: "Vue.js",
        color: "#41B883",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vue"], {}, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 27,
            columnNumber: 54
        }, this)
    },
    {
        id: "3",
        name: "Next.js",
        color: "#000000",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextJS"], {}, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 32,
            columnNumber: 11
        }, this),
        gridSpan: {
            cols: 3,
            rows: 1
        }
    },
    {
        id: "4",
        name: "Tailwind CSS",
        color: "#38B2AC",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TailwindCSS"], {}, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 35,
            columnNumber: 60
        }, this)
    },
    {
        id: "5",
        name: "Node.js",
        color: "#539E43",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"], {}, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 36,
            columnNumber: 55
        }, this)
    }
];
function ProfilePage() {
    _s();
    const { data: session, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            if (!isPending && !session?.user) {
                router.push("/auth/signin");
            }
        }
    }["ProfilePage.useEffect"], [
        session,
        isPending,
        router
    ]);
    // Afficher un chargement si la session est en cours de chargement
    if (isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
            }, void 0, false, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    // Rediriger si non connecté
    if (!session?.user) {
        return null; // Le useEffect ci-dessus va rediriger
    }
    // Récupérer les informations de l'utilisateur depuis la session
    const user = session.user;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full aspect-square mb-4 overflow-hidden rounded-full border-4 border-gray-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: user.image || "https://avatars.githubusercontent.com/u/583231?v=4",
                                            alt: "Photo de profil",
                                            width: 300,
                                            height: 300,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-white",
                                    children: user.name || "Utilisateur"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-lg mb-4",
                                    children: user.email?.split("@")[0] || "utilisateur"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-6",
                                    children: "Développeur et passionné de technologies."
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-1.5 px-3 mb-4 border border-gray-700 rounded-md bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors",
                                    children: "Modifier le profil"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    size: 16,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-gray-300",
                                                            children: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/profile/page.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this),
                                                        " follower ·",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-gray-300",
                                                            children: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/profile/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this),
                                                        " following"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 16,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "France"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 16,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: user.email || "email@exemple.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                    size: 16,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-blue-400 text-sm hover:underline",
                                                    children: "https://exemple.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-white mb-3",
                                            children: "Highlights"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800/50 backdrop-blur-sm rounded-md p-3 border border-gray-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-300",
                                                children: "PRO"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white mb-6",
                                    children: "Votre Stack Technologique"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$stack$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    technologies: defaultTechs
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-white mb-4",
                                    children: "Activité de contribution"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 mb-6",
                                    children: "41 contributions dans l'année dernière"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-24 bg-gray-800/70 rounded-md mb-6 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-52 gap-1 p-2 h-full",
                                        children: Array(52).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-rows-7 gap-1",
                                                children: Array(7).fill(0).map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-full rounded-sm ${Math.random() > 0.85 ? "bg-green-700/70" : Math.random() > 0.9 ? "bg-green-600/60" : Math.random() > 0.95 ? "bg-green-500/50" : "bg-gray-700/50"}`
                                                    }, j, false, {
                                                        fileName: "[project]/app/profile/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 27
                                                    }, this))
                                            }, i, false, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-800 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-white mb-3",
                                            children: "Mai 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-blue-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 16 16",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/profile/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Created 16 commits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/profile/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this),
                                                            " in 5 repositories"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/profile/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "pL6Q3mYsT/CsVx6928apK8uwnLI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c1664457._.js.map