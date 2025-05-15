module.exports = {

"[project]/components/ui/tech-card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TechCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative rounded-lg border-2 p-6 group overflow-hidden h-full w-full flex flex-col",
        style: {
            borderColor: `${color}50`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20 z-0",
                style: {
                    backgroundColor: color
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/tech-card.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onRemove(id),
                className: "absolute top-2 right-2 p-1 bg-red-500/50 hover:bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20",
                "aria-label": "Supprimer la technologie",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-grow items-start h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-center ${isActuallyExpanded ? "w-10 h-10" : "w-12 h-12"} transition-all`,
                                    children: icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/tech-card.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full",
                                            style: {
                                                backgroundColor: color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/tech-card.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        isActuallyExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-400 mt-2 flex-grow flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "leading-tight",
                                    children: [
                                        "Technologie : ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}}),
"[project]/components/ui/context-menu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-context-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ContextMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "context-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function ContextMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "context-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function ContextMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "context-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function ContextMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "context-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function ContextMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "context-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
function ContextMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "context-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function ContextMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "context-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
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
function ContextMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "context-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function ContextMenuContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "context-menu-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
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
function ContextMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "context-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
function ContextMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "context-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
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
function ContextMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "context-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
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
function ContextMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "context-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
function ContextMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "context-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
function ContextMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "context-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/context-menu.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/tech-stack/tech-stack-grid.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TechStackGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tech$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tech-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/context-menu.tsx [app-ssr] (ecmascript)");
;
;
;
function TechStackGrid({ technologies, onRemoveTech, onUpdateTech }) {
    const handleUpdateGridSpan = (techId, span)=>{
        console.log(`Mise à jour de la grille pour tech ${techId}:`, span);
        if (onUpdateTech) {
            onUpdateTech(techId, {
                gridSpan: span
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-6",
        children: technologies.map((tech)=>{
            const colSpanToApply = tech.gridSpan?.cols || 1;
            const rowSpanToApply = tech.gridSpan?.rows || 1;
            // Déterminer la classe col-span basée sur la valeur de colSpanToApply
            const colSpanClass = colSpanToApply === 3 ? "col-span-3" : colSpanToApply === 2 ? "col-span-2" : "col-span-1";
            // Déterminer la classe row-span basée sur la valeur de rowSpanToApply
            const rowSpanClass = rowSpanToApply === 2 ? "row-span-2" : "row-span-1";
            return(// Applique les classes de span directement au conteneur du ContextMenu
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${colSpanClass} ${rowSpanClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenu"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuTrigger"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative transition-all duration-300 ease-in-out h-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tech$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    id: tech.id,
                                    name: tech.name,
                                    color: tech.color,
                                    icon: tech.icon,
                                    gridSpan: tech.gridSpan
                                }, void 0, false, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 76,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                            lineNumber: 73,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                                    variant: "destructive",
                                    onClick: ()=>onRemoveTech && onRemoveTech(tech.id),
                                    children: "Supprimer"
                                }, void 0, false, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSeparator"], {}, void 0, false, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSub"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubTrigger"], {
                                            children: "Taille en colonnes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuRadioGroup"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "1",
                                                        children: "1 colonne"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "2",
                                                        children: "2 colonnes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "3",
                                                        children: "Pleine largeur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSub"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubTrigger"], {
                                            children: "Taille en lignes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuRadioGroup"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "1",
                                                        children: "1 ligne"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuRadioItem"], {
                                                        value: "2",
                                                        children: "2 lignes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                }, this)
            }, tech.id, false, {
                fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, this));
        })
    }, void 0, false, {
        fileName: "[project]/components/tech-stack/tech-stack-grid.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/logo-card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Angular": (()=>Angular),
    "Expo": (()=>Expo),
    "Expressjs": (()=>Expressjs),
    "Firebase": (()=>Firebase),
    "Flutter": (()=>Flutter),
    "GraphQL": (()=>GraphQL),
    "Ionic": (()=>Ionic),
    "JavaScript": (()=>JavaScript),
    "Kotlin": (()=>Kotlin),
    "NextJS": (()=>NextJS),
    "Node": (()=>Node),
    "Nuxt": (()=>Nuxt),
    "Redux": (()=>Redux),
    "Svelte": (()=>Svelte),
    "Swift": (()=>Swift),
    "TailwindCSS": (()=>TailwindCSS),
    "TypeScript": (()=>TypeScript),
    "Vue": (()=>Vue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TypeScript = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 256 256",
        width: "50",
        height: "50",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z",
                fill: "#3178C6"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const Vue = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "50",
        height: "50",
        viewBox: "0 0 256 221",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z",
                fill: "#41B883"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z",
                fill: "#41B883"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const NextJS = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "50",
        height: "50",
        viewBox: "0 0 180 180",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                id: "mask0_408_139",
                style: {
                    maskType: "alpha"
                },
                maskUnits: "userSpaceOnUse",
                x: 0,
                y: 0,
                width: 180,
                height: 180,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#mask0_408_139)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
                        fill: "url(#paint0_linear_408_139)"
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 75,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_408_139",
                        x1: 109,
                        y1: 116.5,
                        x2: 144.5,
                        y2: 160.5,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "white"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 96,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint1_linear_408_139",
                        x1: 121,
                        y1: 54,
                        x2: 120.799,
                        y2: 106.875,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "white"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 107,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
const Node = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "50",
        height: "50",
        viewBox: "0 0 256 289",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const Flutter = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "50",
        height: "50",
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const Kotlin = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 256 256",
        width: "50",
        height: "50",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    x1: "99.991%",
                    y1: "-.011%",
                    x2: ".01%",
                    y2: "100.01%",
                    id: "a",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#E44857",
                            offset: ".344%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 155,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#C711E1",
                            offset: "46.89%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 156,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const Swift = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 256",
        width: "50",
        height: "50",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "a",
                gradientUnits: "userSpaceOnUse",
                x1: -1845.5,
                y1: 1255.6,
                x2: -1797.1,
                y2: 981.3,
                gradientTransform: "rotate(180 -846.6 623.3)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: 0,
                        style: {
                            stopColor: "#faae42"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 182,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#a)",
                d: "M56.9 0h141.8a56.5 56.5 0 0 1 57.4 59.1V197.4a56.6 56.6 0 0 1-57.5 58.6l-144.2-.1a57 57 0 0 1-54-56.8V56.9A56.8 56.8 0 0 1 53.7.2c1-.2 2.1-.2 3.2-.2z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 195,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "b",
                gradientUnits: "userSpaceOnUse",
                x1: 130.6,
                y1: 4.1,
                x2: 95.2,
                y2: 204.9,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: 0,
                        style: {
                            stopColor: "#e39f3a"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 207,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#b)",
                d: "M216 209.4a39 39 0 0 0-11.6-11.9c-4-2.7-8.7-4.4-13.5-4.6-3.4-.2-6.8.4-10 1.6a65.2 65.2 0 0 0-9.3 4.3c-3.5 1.8-7 3.6-10.7 5.1-4.4 1.8-9 3.2-13.7 4.2a89 89 0 0 1-17.8 1.4 120.3 120.3 0 0 1-77.2-30 145.4 145.4 0 0 1-22.8-25.1 46.6 46.6 0 0 1-3-4.7L0 121.2V56.7A56.6 56.6 0 0 1 56.6 0h50.5l37.4 38c84.4 57.4 57.1 120.7 57.1 120.7s24 27 14.4 50.7z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 220,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const TailwindCSS = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 54 33",
        width: "50",
        height: "50",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "a",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const Expo = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 231",
        width: "50",
        height: "50",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const Firebase = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        fill: "none",
        viewBox: "0 0 600 600",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FF9100",
                d: "M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 281,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FFC400",
                d: "M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 285,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FF9100",
                d: "M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 289,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const JavaScript = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        viewBox: "0 0 1052 1052",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#f0db4f",
                d: "M0 0h1052v1052H0z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 308,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z",
                fill: "#323330"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 309,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 301,
        columnNumber: 3
    }, this);
const Angular = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 242 256",
        width: "50",
        height: "50",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#a)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "b",
                        width: 242,
                        height: 256,
                        x: 0,
                        y: 0,
                        maskUnits: "userSpaceOnUse",
                        style: {
                            maskType: "luminance"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "#fff",
                            d: "M0 0h242v256H0V0Z"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 337,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 326,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        mask: "url(#b)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "url(#c)",
                                d: "m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 340,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "url(#d)",
                                d: "m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 344,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 339,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 325,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "c",
                        x1: 53.2,
                        x2: 245,
                        y1: 231.9,
                        y2: 140.7,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#E40035"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 359,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.2,
                                stopColor: "#F60A48"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 360,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.4,
                                stopColor: "#F20755"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 361,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.5,
                                stopColor: "#DC087D"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 362,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 0.7,
                                stopColor: "#9717E7"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 363,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: "#6C00F5"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 364,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 351,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "d",
                        x1: 44.5,
                        x2: 170,
                        y1: 30.7,
                        y2: 174,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#FF31D9"
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 374,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: 1,
                                stopColor: "#FF5BE1",
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/components/logo-card.tsx",
                                lineNumber: 375,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 366,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "a",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "#fff",
                            d: "M0 0h242v256H0z"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 378,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/logo-card.tsx",
                        lineNumber: 377,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 350,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 317,
        columnNumber: 3
    }, this);
const Ionic = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 317",
        width: "50",
        height: "50",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    x1: "4%",
                    y1: "27%",
                    x2: "75.9%",
                    y2: "52.9%",
                    id: "a",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 395,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopOpacity: 0,
                            offset: "100%"
                        }, void 0, false, {
                            fileName: "[project]/components/logo-card.tsx",
                            lineNumber: 396,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/logo-card.tsx",
                    lineNumber: 394,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 393,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#47C5FB",
                d: "M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 399,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#00569E",
                d: "m121 280 37 37h97l-85-86z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 403,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#00B5F8",
                d: "m72 230 48-48 50 49-49 49z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 404,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillOpacity: 0.8,
                fill: "url(#a)",
                d: "m121 280 41-14 4-31z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 405,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 385,
        columnNumber: 3
    }, this);
const Svelte = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 256 308",
        width: "50",
        height: "50",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244",
                fill: "#FF3E00"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 418,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398",
                fill: "#FFF"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 422,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 410,
        columnNumber: 3
    }, this);
const Nuxt = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 256 168",
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "#00DC82",
            d: "M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115 16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113 17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975A16.302 16.302 0 0 0 0 150.325c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115 17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983 15.618-26.215 46.874 78.742h-62.492l-15.628 26.214Zm-67.64-26.24-41.688-.01L96.782 35.796l31.181 52.492-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z"
        }, void 0, false, {
            fileName: "[project]/components/logo-card.tsx",
            lineNumber: 438,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 430,
        columnNumber: 3
    }, this);
const Redux = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "50",
        height: "50",
        viewBox: "0 -6 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z",
            fill: "#764ABC"
        }, void 0, false, {
            fileName: "[project]/components/logo-card.tsx",
            lineNumber: 454,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 446,
        columnNumber: 3
    }, this);
const Expressjs = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        width: "1em",
        height: "1em",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "#fff",
            d: "M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
        }, void 0, false, {
            fileName: "[project]/components/logo-card.tsx",
            lineNumber: 469,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 462,
        columnNumber: 3
    }, this);
const GraphQL = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        fill: "#e10098",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "svg{fill:color(display-p3 0.8824 0 0.5961);}"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 485,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M50 6.90308L87.323 28.4515V71.5484L50 93.0968L12.677 71.5484V28.4515L50 6.90308ZM16.8647 30.8693V62.5251L44.2795 15.0414L16.8647 30.8693ZM50 13.5086L18.3975 68.2457H81.6025L50 13.5086ZM77.4148 72.4334H22.5852L50 88.2613L77.4148 72.4334ZM83.1353 62.5251L55.7205 15.0414L83.1353 30.8693V62.5251Z"
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 486,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 50,
                cy: 9.3209,
                r: 8.82
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 491,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 85.2292,
                cy: 29.6605,
                r: 8.82
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 492,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 85.2292,
                cy: 70.3396,
                r: 8.82
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 493,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 50,
                cy: 90.6791,
                r: 8.82
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 494,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 14.7659,
                cy: 70.3396,
                r: 8.82
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 495,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 14.7659,
                cy: 29.6605,
                r: 8.82
            }, void 0, false, {
                fileName: "[project]/components/logo-card.tsx",
                lineNumber: 496,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo-card.tsx",
        lineNumber: 477,
        columnNumber: 3
    }, this);
}}),
"[project]/components/tech-stack/tech-data.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "allTechnologies": (()=>allTechnologies),
    "availableColors": (()=>availableColors),
    "techsByCategory": (()=>techsByCategory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/logo-card.tsx [app-ssr] (ecmascript)");
;
;
const techsByCategory = {
    Frontend: [
        {
            id: "typescript",
            name: "TypeScript",
            color: "#3178C6",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeScript"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "javascript",
            name: "JavaScript",
            color: "#F7DF1E",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavaScript"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "vue",
            name: "Vue.js",
            color: "#41B883",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vue"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "angular",
            name: "Angular",
            color: "#DD0031",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Angular"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "svelte",
            name: "Svelte",
            color: "#FF3E00",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Svelte"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "nextjs",
            name: "Next.js",
            color: "#191919",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NextJS"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "nuxt",
            name: "Nuxt.js",
            color: "#00DC82",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Nuxt"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "tailwind",
            name: "Tailwind CSS",
            color: "#38B2AC",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TailwindCSS"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "styled",
            name: "Styled Components",
            color: "#DB7093",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "💅"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            category: "Frontend"
        },
        {
            id: "redux",
            name: "Redux",
            color: "#764ABC",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Redux"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            category: "Frontend"
        }
    ],
    Backend: [
        {
            id: "nodejs",
            name: "Node.js",
            color: "#539E43",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "expressjs",
            name: "Express.js",
            color: "#000000",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Expressjs"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "nestjs",
            name: "NestJS",
            color: "#E0234E",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "N"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "graphql",
            name: "GraphQL",
            color: "#E535AB",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GraphQL"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "prisma",
            name: "Prisma",
            color: "#2D3748",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "P"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "django",
            name: "Django",
            color: "#092E20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "D"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "laravel",
            name: "Laravel",
            color: "#FF2D20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "L"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "spring",
            name: "Spring",
            color: "#6DB33F",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "S"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "flask",
            name: "Flask",
            color: "#000000",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "F"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, this),
            category: "Backend"
        },
        {
            id: "fastapi",
            name: "FastAPI",
            color: "#009688",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "F"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this),
            category: "Backend"
        }
    ],
    Mobile: [
        {
            id: "flutter",
            name: "Flutter",
            color: "#02569B",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ionic"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            category: "Mobile"
        },
        {
            id: "kotlin",
            name: "Kotlin",
            color: "#7F52FF",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kotlin"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            category: "Mobile"
        },
        {
            id: "swift",
            name: "Swift",
            color: "#F05138",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swift"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this),
            category: "Mobile"
        },
        {
            id: "expo",
            name: "Expo",
            color: "#000020",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Expo"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this),
            category: "Mobile"
        }
    ],
    "Base de données": [
        {
            id: "mongodb",
            name: "MongoDB",
            color: "#47A248",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "M"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 204,
                columnNumber: 13
            }, this),
            category: "Base de données"
        },
        {
            id: "postgresql",
            name: "PostgreSQL",
            color: "#336791",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "P"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, this),
            category: "Base de données"
        },
        {
            id: "mysql",
            name: "MySQL",
            color: "#4479A1",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "M"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 218,
                columnNumber: 13
            }, this),
            category: "Base de données"
        },
        {
            id: "redis",
            name: "Redis",
            color: "#DC382D",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "R"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, this),
            category: "Base de données"
        },
        {
            id: "firebase",
            name: "Firebase",
            color: "#FFCA28",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Firebase"], {}, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, this),
            category: "Base de données"
        },
        {
            id: "supabase",
            name: "Supabase",
            color: "#3ECF8E",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "S"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, this),
            category: "Base de données"
        },
        {
            id: "dynamodb",
            name: "DynamoDB",
            color: "#4053D6",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "D"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, this),
            category: "Base de données"
        }
    ],
    "DevOps & Cloud": [
        {
            id: "docker",
            name: "Docker",
            color: "#2496ED",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "🐳"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "kubernetes",
            name: "Kubernetes",
            color: "#326CE5",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "K"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 262,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "aws",
            name: "AWS",
            color: "#FF9900",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "A"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "gcp",
            name: "Google Cloud",
            color: "#4285F4",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "G"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 276,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "azure",
            name: "Azure",
            color: "#0078D4",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "A"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 283,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "vercel",
            name: "Vercel",
            color: "#000000",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "V"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 290,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "netlify",
            name: "Netlify",
            color: "#00C7B7",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "N"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 297,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "github",
            name: "GitHub Actions",
            color: "#2088FF",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "G"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 304,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "gitlab",
            name: "GitLab CI",
            color: "#FC6D26",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "G"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 311,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        },
        {
            id: "terraform",
            name: "Terraform",
            color: "#7B42BC",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "T"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 318,
                columnNumber: 13
            }, this),
            category: "DevOps & Cloud"
        }
    ],
    "Tests & Outils": [
        {
            id: "jest",
            name: "Jest",
            color: "#C21325",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "J"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 327,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "cypress",
            name: "Cypress",
            color: "#17202C",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "C"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 334,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "playwright",
            name: "Playwright",
            color: "#2EAD33",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "P"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 341,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "storybook",
            name: "Storybook",
            color: "#FF4785",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "S"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 348,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "webpack",
            name: "Webpack",
            color: "#8DD6F9",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "W"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 355,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "vite",
            name: "Vite",
            color: "#646CFF",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "V"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 362,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "eslint",
            name: "ESLint",
            color: "#4B32C3",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "E"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 369,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "prettier",
            name: "Prettier",
            color: "#F7B93E",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "P"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 376,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        },
        {
            id: "git",
            name: "Git",
            color: "#F05032",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "G"
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/tech-data.tsx",
                lineNumber: 383,
                columnNumber: 13
            }, this),
            category: "Tests & Outils"
        }
    ]
};
const allTechnologies = Object.entries(techsByCategory).flatMap(([category, techsInCat])=>techsInCat.map((tech)=>({
            ...tech,
            category
        })));
const availableColors = [
    "#3178C6",
    "#61DAFB",
    "#41B883",
    "#000000",
    "#38B2AC",
    "#539E43",
    "#FF3E00",
    "#DD0031",
    "#764ABC",
    "#F7DF1E",
    "#E535AB",
    "#3ECF8E",
    "#2496ED",
    "#FF9900",
    "#4285F4",
    "#00C7B7"
];
}}),
"[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md p-1 text-gray-400", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this));
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, this));
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}}),
"[project]/components/tech-stack/add-tech-form.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddTechForm": (()=>AddTechForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tech-stack/tech-data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function AddTechForm({ onAddTech }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [techName, setTechName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [techColor, setTechColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#3b82f6");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Frontend");
    // Filtrer les technologies par la recherche
    const filteredTechs = search ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allTechnologies"].filter((tech)=>tech.name.toLowerCase().includes(search.toLowerCase())) : [];
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!techName.trim()) return;
        // Créer un nouvel identifiant unique
        const newId = Math.random().toString(36).substring(2, 11);
        // Ajouter la nouvelle technologie
        onAddTech({
            id: newId,
            name: techName,
            color: techColor,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: techName.charAt(0)
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            technologyId: techName.toLowerCase().replace(/\s+/g, "-"),
            category: "Custom"
        });
        // Réinitialiser le formulaire
        setTechName("");
        setTechColor("#3b82f6");
        setSearch("");
        // Fermer le dialogue
        setOpen(false);
    };
    const handleTechSelect = (tech)=>{
        // S'assurer que le technologyId est correctement défini
        onAddTech({
            ...tech,
            technologyId: tech.id
        });
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    className: "bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        "Ajouter"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "w-[95%] max-w-[500px] max-h-[90vh] overflow-hidden bg-zinc-900 border border-zinc-800 text-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-xl font-bold text-white",
                                children: "Ajouter une technologie"
                            }, void 0, false, {
                                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                className: "text-gray-400 text-center mx-auto",
                                children: "Choisissez une technologie parmi les catégories ou créez-en une personnalisée."
                            }, void 0, false, {
                                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden flex flex-col max-h-[60vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                            defaultValue: "Frontend",
                            value: activeCategory,
                            onValueChange: setActiveCategory,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "bg-zinc-900 border-b border-zinc-800 w-full justify-start overflow-x-auto",
                                    children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["techsByCategory"]).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: category,
                                            className: "px-2 py-1",
                                            children: category
                                        }, category, false, {
                                            fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["techsByCategory"]).map(([category, techs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: category,
                                        className: "mt-2 overflow-y-auto",
                                        style: {
                                            maxHeight: "40vh"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: techs.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 p-2 rounded hover:bg-zinc-800 cursor-pointer border border-zinc-800",
                                                    onClick: ()=>handleTechSelect(tech),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center h-6 w-6",
                                                            children: tech.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: tech.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-1 rounded-full",
                                                                    style: {
                                                                        backgroundColor: tech.color
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, tech.id, true, {
                                                    fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    }, category, false, {
                                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-zinc-800 mt-3 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-400 mb-2",
                                children: "Ou créer une technologie personnalisée"
                            }, void 0, false, {
                                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "techName",
                                                        className: "text-gray-300",
                                                        children: "Nom"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "techName",
                                                        value: techName,
                                                        onChange: (e)=>setTechName(e.target.value),
                                                        placeholder: "ex: React, Angular, etc.",
                                                        className: "bg-zinc-900 border-zinc-700 text-white h-8",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-gray-300",
                                                        children: "Couleur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-8 gap-1 mt-1",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["availableColors"].slice(0, 8).map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: `w-5 h-5 rounded-full border-2 transition-transform ${techColor === color ? "border-white scale-110" : "border-transparent"}`,
                                                                style: {
                                                                    backgroundColor: color
                                                                },
                                                                onClick: ()=>setTechColor(color)
                                                            }, color, false, {
                                                                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full bg-zinc-800 hover:bg-zinc-700 text-white py-1.5",
                                        children: "Ajouter à ma stack"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tech-stack/add-tech-form.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tech-stack/add-tech-form.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/profile/tag-manager.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TagManager": (()=>TagManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
"use client";
;
;
;
;
;
;
function TagManager({ userId }) {
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTagName, setNewTagName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Charger les tags à l'initialisation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTags();
    }, []);
    const fetchTags = async ()=>{
        try {
            setIsLoading(true);
            const response = await fetch("/api/user/tag");
            if (!response.ok) {
                throw new Error("Erreur lors du chargement des tags");
            }
            const data = await response.json();
            setTags(data);
        } catch (error) {
            console.error("Erreur:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Impossible de charger vos tags");
        } finally{
            setIsLoading(false);
        }
    };
    const handleAddTag = async ()=>{
        if (!newTagName.trim()) return;
        try {
            setIsAdding(true);
            const response = await fetch("/api/user/tag", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: newTagName.trim()
                })
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Erreur lors de l'ajout du tag");
            }
            const newTag = await response.json();
            setTags([
                ...tags,
                newTag
            ]);
            setNewTagName("");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Tag ajouté avec succès");
        } catch (error) {
            console.error("Erreur:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Impossible d'ajouter le tag");
        } finally{
            setIsAdding(false);
        }
    };
    const handleDeleteTag = async (tagId)=>{
        try {
            const response = await fetch(`/api/user/tag?id=${tagId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Erreur lors de la suppression du tag");
            }
            setTags(tags.filter((tag)=>tag.id !== tagId));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Tag supprimé avec succès");
        } catch (error) {
            console.error("Erreur:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Impossible de supprimer le tag");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-md font-semibold text-[var(--card-foreground)] mb-2",
                children: "Mes tags"
            }, void 0, false, {
                fileName: "[project]/components/profile/tag-manager.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1 mb-3",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[var(--muted-foreground)]",
                    children: "Chargement..."
                }, void 0, false, {
                    fileName: "[project]/components/profile/tag-manager.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this) : tags.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[var(--muted-foreground)] italic",
                    children: "Aucun tag pour le moment."
                }, void 0, false, {
                    fileName: "[project]/components/profile/tag-manager.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this) : tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center rounded-full px-3 py-1 text-sm",
                        style: {
                            backgroundColor: tag.color,
                            color: "#fff"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tag.name
                            }, void 0, false, {
                                fileName: "[project]/components/profile/tag-manager.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleDeleteTag(tag.id),
                                className: "ml-1 hover:text-gray-200 focus:outline-none",
                                "aria-label": `Supprimer le tag ${tag.name}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/profile/tag-manager.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/profile/tag-manager.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tag.id, true, {
                        fileName: "[project]/components/profile/tag-manager.tsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/profile/tag-manager.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        type: "text",
                        value: newTagName,
                        onChange: (e)=>setNewTagName(e.target.value),
                        placeholder: "Nouveau tag...",
                        className: "flex-grow text-sm bg-[var(--input)] border-[var(--border)]",
                        disabled: isAdding
                    }, void 0, false, {
                        fileName: "[project]/components/profile/tag-manager.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        onClick: handleAddTag,
                        disabled: !newTagName.trim() || isAdding,
                        className: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16,
                                className: "mr-1"
                            }, void 0, false, {
                                fileName: "[project]/components/profile/tag-manager.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            "Ajouter"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profile/tag-manager.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profile/tag-manager.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profile/tag-manager.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/dashboard/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Dashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$stack$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tech-stack/tech-stack-grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$add$2d$tech$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tech-stack/add-tech-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tech-stack/tech-data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/context-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profile$2f$tag$2d$manager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profile/tag-manager.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
// Créer un mapping des icônes à partir de allTechnologies pour un accès facile
const iconMap = {};
__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allTechnologies"].forEach((tech)=>{
    iconMap[tech.id.toLowerCase()] = tech.icon;
});
// Fonction pour obtenir l'icône par défaut si non trouvée dans le map
const getDefaultIcon = (name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center justify-center w-full h-full text-sm font-bold bg-[var(--muted)] text-[var(--muted-foreground)] rounded-sm",
        children: name.charAt(0).toUpperCase()
    }, void 0, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
function Dashboard() {
    const { data: sessionData, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    // Remplacer l'état unique par un tableau de stacks
    const [userStacks, setUserStacks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // ID de la stack actuellement sélectionnée pour édition
    const [activeStackId, setActiveStackId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingInitialData, setIsLoadingInitialData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userProfileDescription, setUserProfileDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newStackName, setNewStackName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // États pour l'édition du profil
    const [isEditingProfile, setIsEditingProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingDescription, setEditingDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Dériver la stack active à partir de userStacks et activeStackId
    const activeStack = userStacks.find((stack)=>stack.id === activeStackId);
    // Dériver les technologies de la stack active
    const technologies = activeStack?.technologies || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (sessionData?.user) {
            // @ts-ignore
            const currentDesc = sessionData.user.description || "";
            setUserProfileDescription(currentDesc);
            setEditingDescription(currentDesc); // Initialiser aussi la description en édition
        }
    }, [
        sessionData
    ]);
    const hydrateTechnologies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rawTechs)=>{
        console.log("Données brutes des technologies pour hydratation:", rawTechs);
        if (!rawTechs) return []; // Vérifier si rawTechs est undefined ou null
        return rawTechs.map((rawTech)=>{
            const techIdToLookup = rawTech.technologyId ? rawTech.technologyId.toLowerCase() : "";
            const icon = iconMap[techIdToLookup] || getDefaultIcon(rawTech.name);
            const gridCols = parseInt(rawTech.gridCols || "1", 10);
            const gridRows = parseInt(rawTech.gridRows || "1", 10);
            const gridSpan = gridCols > 1 || gridRows > 1 ? {
                cols: gridCols,
                rows: gridRows
            } : undefined;
            return {
                id: rawTech.id.toString(),
                name: rawTech.name,
                color: rawTech.color,
                icon: icon,
                technologyId: rawTech.technologyId,
                category: rawTech.category,
                gridSpan: gridSpan
            };
        });
    }, []);
    // Modifié pour sauvegarder la stack active
    const saveActiveStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (stackToSave)=>{
        if (!sessionData?.user?.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Vous devez être connecté pour sauvegarder.");
            return;
        }
        if (!stackToSave) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Aucune stack active à sauvegarder.");
            return;
        }
        try {
            const technologiesToSave = stackToSave.technologies.map((tech)=>({
                    id: tech.id,
                    name: tech.name,
                    color: tech.color,
                    technologyId: tech.technologyId || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allTechnologies"].find((t)=>t.id.toLowerCase() === tech.id.toLowerCase())?.id || tech.id,
                    category: tech.category || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allTechnologies"].find((t)=>t.id.toLowerCase() === tech.id.toLowerCase())?.category || "Custom",
                    gridCols: tech.gridSpan?.cols || 1,
                    gridRows: tech.gridSpan?.rows || 1
                }));
            const response = await fetch("/api/tech/stack", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: stackToSave.id,
                    name: stackToSave.name,
                    technologies: technologiesToSave
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de la sauvegarde de la stack");
            }
            const savedStackData = await response.json();
            // Mettre à jour la stack dans l'état userStacks
            setUserStacks((prevStacks)=>prevStacks.map((s)=>s.id === savedStackData.id ? {
                        ...savedStackData,
                        technologies: hydrateTechnologies(savedStackData.technologies || [])
                    } : s));
            if (activeStackId === null && savedStackData.id) {
                setActiveStackId(savedStackData.id);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Stack '${savedStackData.name}' sauvegardée avec succès!`);
        } catch (error) {
            console.error("Erreur sauvegarde stack:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Impossible de sauvegarder la stack.");
        }
    }, [
        sessionData,
        hydrateTechnologies,
        activeStackId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUserStacks = async ()=>{
            if (sessionData?.user?.id) {
                setIsLoadingInitialData(true);
                try {
                    const response = await fetch("/api/tech/stack");
                    if (!response.ok) throw new Error("Erreur réseau ou serveur");
                    const stacksData = await response.json();
                    const hydratedStacks = stacksData.map((stack)=>({
                            ...stack,
                            technologies: hydrateTechnologies(stack.technologies || [])
                        }));
                    setUserStacks(hydratedStacks);
                    if (activeStackId === null && hydratedStacks.length > 0) {
                        setActiveStackId(hydratedStacks[0].id);
                    } else if (hydratedStacks.length === 0) {
                        setActiveStackId(null);
                    }
                } catch (error) {
                    console.error("Erreur chargement des stacks:", error);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Impossible de charger vos stacks.");
                    setUserStacks([]);
                    setActiveStackId(null);
                } finally{
                    setIsLoadingInitialData(false);
                }
            } else if (!isPending && !sessionData) {
                setIsLoadingInitialData(false);
                setUserStacks([]);
                setActiveStackId(null);
            }
        };
        if (!isPending) {
            fetchUserStacks();
        }
    }, [
        isPending,
        sessionData,
        hydrateTechnologies
    ]);
    const handleCreateNewStack = async (stackName)=>{
        if (!sessionData?.user?.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Vous devez être connecté pour créer une stack.");
            return;
        }
        try {
            const response = await fetch("/api/tech/stack", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: stackName,
                    technologies: []
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de la création de la stack");
            }
            const newStackData = await response.json();
            const hydratedNewStack = {
                ...newStackData,
                technologies: hydrateTechnologies(newStackData.technologies || [])
            };
            setUserStacks((prevStacks)=>[
                    ...prevStacks,
                    hydratedNewStack
                ]);
            setActiveStackId(hydratedNewStack.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Stack '${hydratedNewStack.name}' créée avec succès!`);
        } catch (error) {
            console.error("Erreur création stack:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Impossible de créer la stack.");
        }
    };
    const handleDeleteStack = async (stackId)=>{
        if (!sessionData?.user?.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Vous devez être connecté pour supprimer une stack.");
            return;
        }
        if (!confirm("Êtes-vous sûr de vouloir supprimer cette stack? Cette action est irréversible.")) {
            return;
        }
        try {
            const response = await fetch(`/api/tech/stack?id=${stackId}&stackId=true`, {
                method: "DELETE"
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de la suppression de la stack");
            }
            // Mettre à jour l'état local
            const updatedStacks = userStacks.filter((stack)=>stack.id !== stackId);
            setUserStacks(updatedStacks);
            // Si la stack supprimée était la stack active, on sélectionne la première stack disponible ou null
            if (activeStackId === stackId) {
                setActiveStackId(updatedStacks.length > 0 ? updatedStacks[0].id : null);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Stack supprimée avec succès!");
        } catch (error) {
            console.error("Erreur suppression stack:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Impossible de supprimer la stack.");
        }
    };
    const handleAddTech = (newTechFromForm)=>{
        if (!activeStack) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Veuillez sélectionner une stack pour y ajouter une technologie.");
            return;
        }
        const updatedTechnologies = [
            ...activeStack.technologies,
            newTechFromForm
        ];
        const updatedStack = {
            ...activeStack,
            technologies: updatedTechnologies
        };
        setUserStacks((prevStacks)=>prevStacks.map((s)=>s.id === activeStackId ? updatedStack : s));
        saveActiveStack(updatedStack); // Sauvegarder la stack active modifiée
    };
    const handleRemoveTech = async (stackTechnologyItemId)=>{
        if (!activeStack) return;
        // La suppression se fait via API qui utilise l'ID de stackTechnologyItem
        try {
            const response = await fetch(`/api/tech/stack?id=${stackTechnologyItemId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de la suppression");
            }
            const updatedTechnologies = activeStack.technologies.filter((tech)=>tech.id !== stackTechnologyItemId);
            const updatedStack = {
                ...activeStack,
                technologies: updatedTechnologies
            };
            setUserStacks((prevStacks)=>prevStacks.map((s)=>s.id === activeStackId ? updatedStack : s));
            // Pas besoin de saveActiveStack ici si l'API a déjà fait la modif persistante et que la suppression affecte globalement stackTechnologyItem
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Technologie supprimée de la stack active!");
        } catch (error) {
            console.error("Erreur suppression tech:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Impossible de supprimer la technologie.");
        }
    };
    // Gère les changements de nom de la stack ACTIVE
    const handleActiveStackNameChange = (newName)=>{
        if (!activeStack) return;
        const updatedStack = {
            ...activeStack,
            name: newName
        };
        setUserStacks((prevStacks)=>prevStacks.map((s)=>s.id === activeStackId ? updatedStack : s));
        saveActiveStack(updatedStack);
    };
    const handleProfileDescriptionChange = async (newDescription)=>{
        // Mise à jour optimiste de l'UI principale
        setUserProfileDescription(newDescription);
        // Quitter le mode édition après sauvegarde
        setIsEditingProfile(false);
        if (!sessionData?.user?.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Vous devez être connecté pour sauvegarder votre description.");
            return;
        }
        try {
            const response = await fetch("/api/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    description: newDescription
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de la sauvegarde de la description.");
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Description du profil sauvegardée !");
        // Optionnel: rafraîchir les données de session si la description y est stockée et que useSession ne le fait pas automatiquement
        // Par exemple: refetchSession(); ou une logique similaire si votre hook useSession le permet
        } catch (error) {
            console.error("Erreur sauvegarde description profil:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Impossible de sauvegarder la description.");
        // Rollback optimiste si nécessaire, ou re-fetch des données utilisateur
        }
    };
    const handleUpdateTech = (id, updates)=>{
        if (!activeStack) return;
        const updatedTechnologies = activeStack.technologies.map((tech)=>tech.id === id ? {
                ...tech,
                ...updates
            } : tech);
        const updatedStack = {
            ...activeStack,
            technologies: updatedTechnologies
        };
        setUserStacks((prevStacks)=>prevStacks.map((s)=>s.id === activeStackId ? updatedStack : s));
        saveActiveStack(updatedStack);
    };
    if (isPending || isLoadingInitialData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)]",
            children: "Chargement de votre dashboard..."
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 418,
            columnNumber: 7
        }, this);
    }
    if (!sessionData?.user?.id) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl mb-4",
                    children: "Veuillez vous connecter pour accéder à votre dashboard."
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>window.location.href = "/auth/signin",
                    className: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
                    children: "Se connecter"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-20 mx-auto max-w-7xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col gap-1 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-[var(--foreground)] text-center",
                                children: [
                                    "Tableau de Bord de ",
                                    sessionData.user.name || "Développeur"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[var(--muted-foreground)] text-lg text-center",
                                children: "Gérez votre profil et votre stack technologique ici."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1 bg-[var(--card)] p-6 rounded-lg shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold mb-4 text-[var(--card-foreground)]",
                                        children: "Mon Profil"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this),
                                    sessionData?.user?.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 relative w-32 h-32 mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: sessionData.user.image,
                                            alt: sessionData.user.name || "Avatar de l'utilisateur",
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-medium text-center text-[var(--card-foreground)] mb-1",
                                        children: sessionData?.user?.name || "Utilisateur Anonyme"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--muted-foreground)] text-center mb-4",
                                        children: sessionData?.user?.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: !isEditingProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-md font-semibold text-[var(--card-foreground)] mb-1",
                                                    children: "Ma description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm text-[var(--muted-foreground)] whitespace-pre-wrap min-h-[60px] ${!userProfileDescription && "italic"}`,
                                                    children: userProfileDescription || "Aucune description pour le moment."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "mt-2 text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
                                                    onClick: ()=>{
                                                        setEditingDescription(userProfileDescription); // Synchroniser avant d'éditer
                                                        setIsEditingProfile(true);
                                                    },
                                                    children: "Modifier la description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "profileDescriptionTextarea",
                                                    className: "block text-sm font-medium text-[var(--muted-foreground)] mb-1",
                                                    children: "Modifier ma description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "profileDescriptionTextarea",
                                                    value: editingDescription,
                                                    onChange: (e)=>setEditingDescription(e.target.value),
                                                    rows: 4,
                                                    className: "w-full p-2 rounded bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]",
                                                    placeholder: "Présentez-vous en quelques mots..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            onClick: ()=>handleProfileDescriptionChange(editingDescription),
                                                            className: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
                                                            children: "Enregistrer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: ()=>setIsEditingProfile(false),
                                                            className: "text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
                                                            children: "Annuler"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 15
                                    }, this),
                                    !isEditingProfile && sessionData?.user?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profile$2f$tag$2d$manager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TagManager"], {
                                        userId: sessionData.user.id
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 544,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 flex flex-col gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[var(--card)] p-4 rounded-lg shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-3 text-[var(--card-foreground)]",
                                                children: "Mes Stacks"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 550,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-4",
                                                children: userStacks.map((stack)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenu"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuTrigger"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: activeStackId === stack.id ? "default" : "outline",
                                                                        onClick: ()=>setActiveStackId(stack.id),
                                                                        className: activeStackId !== stack.id ? "text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]" : "",
                                                                        children: stack.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuContent"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                                                                            variant: "destructive",
                                                                            onClick: ()=>handleDeleteStack(stack.id),
                                                                            children: "Supprimer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 573,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSeparator"], {}, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 579,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                                                                            onClick: ()=>{
                                                                                // Ouvrir un prompt pour renommer la stack
                                                                                const newName = prompt("Nouveau nom pour cette stack:", stack.name);
                                                                                if (newName && newName.trim() && newName !== stack.name) {
                                                                                    const updatedStack = {
                                                                                        ...stack,
                                                                                        name: newName
                                                                                    };
                                                                                    setUserStacks((prevStacks)=>prevStacks.map((s)=>s.id === stack.id ? updatedStack : s));
                                                                                    saveActiveStack(updatedStack);
                                                                                }
                                                                            },
                                                                            children: "Renommer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 580,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 572,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 556,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, stack.id, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newStackName,
                                                        onChange: (e)=>setNewStackName(e.target.value),
                                                        placeholder: "Nom de la nouvelle stack...",
                                                        className: "flex-grow p-2 rounded bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>{
                                                            if (newStackName.trim()) {
                                                                handleCreateNewStack(newStackName.trim());
                                                                setNewStackName("");
                                                            }
                                                        },
                                                        className: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
                                                        children: "Créer Stack"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this),
                                            userStacks.length === 0 && !isLoadingInitialData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[var(--muted-foreground)] mt-2 text-sm",
                                                children: "Aucune stack pour le moment. Créez-en une !"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 633,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this),
                                    activeStack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-[var(--foreground)]",
                                                        children: "Votre Stack Technologique"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$add$2d$tech$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddTechForm"], {
                                                        onAddTech: handleAddTech
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, this),
                                            technologies.length === 0 && !isLoadingInitialData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12 bg-[var(--card)] rounded-lg shadow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[var(--muted-foreground)]",
                                                        children: [
                                                            'Aucune technologie dans la stack "',
                                                            activeStack.name,
                                                            '".'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[var(--muted-foreground)]",
                                                        children: 'Cliquez sur "Ajouter" pour commencer.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 21
                                            }, this),
                                            technologies.length > 0 && !isLoadingInitialData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-[var(--card)] p-4 rounded-lg shadow",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tech$2d$stack$2f$tech$2d$stack$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    technologies: technologies,
                                                    onRemoveTech: handleRemoveTech,
                                                    onUpdateTech: handleUpdateTech
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 661,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    !activeStack && !isLoadingInitialData && userStacks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-12 bg-[var(--card)] rounded-lg shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[var(--muted-foreground)]",
                                            children: "Veuillez sélectionner une stack pour voir ses technologies."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 675,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 453,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 443,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 442,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 441,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_30359e3c._.js.map