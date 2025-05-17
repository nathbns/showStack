(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ui/glowing-effect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GlowingEffect": (()=>GlowingEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const GlowingEffect = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ blur = 0, inactiveZone = 0.7, proximity = 0, spread = 20, variant = "default", glow = true, className, movementDuration = 0.5, borderWidth = 1, disabled = false })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlowingEffect.useCallback[handleMove]": (e)=>{
            if (!containerRef.current) return;
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            animationFrameRef.current = requestAnimationFrame({
                "GlowingEffect.useCallback[handleMove]": ()=>{
                    const element = containerRef.current;
                    if (!element) return;
                    const { left, top, width, height } = element.getBoundingClientRect();
                    const mouseX = e?.x ?? lastPosition.current.x;
                    const mouseY = e?.y ?? lastPosition.current.y;
                    if (e) {
                        lastPosition.current = {
                            x: mouseX,
                            y: mouseY
                        };
                    }
                    const center = [
                        left + width * 0.5,
                        top + height * 0.5
                    ];
                    const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
                    const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;
                    if (distanceFromCenter < inactiveRadius) {
                        element.style.setProperty("--active", "0");
                        return;
                    }
                    const isActive = mouseX > left - proximity && mouseX < left + width + proximity && mouseY > top - proximity && mouseY < top + height + proximity;
                    element.style.setProperty("--active", isActive ? "1" : "0");
                    if (!isActive) return;
                    const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
                    let targetAngle = 180 * Math.atan2(mouseY - center[1], mouseX - center[0]) / Math.PI + 90;
                    const angleDiff = (targetAngle - currentAngle + 180) % 360 - 180;
                    const newAngle = currentAngle + angleDiff;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(currentAngle, newAngle, {
                        duration: movementDuration,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ],
                        onUpdate: {
                            "GlowingEffect.useCallback[handleMove]": (value)=>{
                                element.style.setProperty("--start", String(value));
                            }
                        }["GlowingEffect.useCallback[handleMove]"]
                    });
                }
            }["GlowingEffect.useCallback[handleMove]"]);
        }
    }["GlowingEffect.useCallback[handleMove]"], [
        inactiveZone,
        proximity,
        movementDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlowingEffect.useEffect": ()=>{
            if (disabled) return;
            const handleScroll = {
                "GlowingEffect.useEffect.handleScroll": ()=>handleMove()
            }["GlowingEffect.useEffect.handleScroll"];
            const handlePointerMove = {
                "GlowingEffect.useEffect.handlePointerMove": (e)=>handleMove(e)
            }["GlowingEffect.useEffect.handlePointerMove"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            document.body.addEventListener("pointermove", handlePointerMove, {
                passive: true
            });
            return ({
                "GlowingEffect.useEffect": ()=>{
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    window.removeEventListener("scroll", handleScroll);
                    document.body.removeEventListener("pointermove", handlePointerMove);
                }
            })["GlowingEffect.useEffect"];
        }
    }["GlowingEffect.useEffect"], [
        handleMove,
        disabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity", glow && "opacity-100", variant === "white" && "border-white", disabled && "!block")
            }, void 0, false, {
                fileName: "[project]/components/ui/glowing-effect.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    "--blur": `${blur}px`,
                    "--spread": spread,
                    "--start": "0",
                    "--active": "0",
                    "--glowingeffect-border-width": `${borderWidth}px`,
                    "--repeating-conic-gradient-times": "5",
                    "--gradient": variant === "white" ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )` : `radial-gradient(circle, #3d0707 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #686868 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #666666 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #9f9f9f 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #676767 0%,
                  #8b8b8b calc(25% / var(--repeating-conic-gradient-times)),
                  #676767 calc(50% / var(--repeating-conic-gradient-times)), 
                  #a1a0a0 calc(75% / var(--repeating-conic-gradient-times)),
                  #676767 calc(100% / var(--repeating-conic-gradient-times))
                )`
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity", glow && "opacity-100", blur > 0 && "blur-[var(--blur)] ", className, disabled && "!hidden"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glow", "rounded-[inherit]", "after:content-[''] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]", "after:[border:var(--glowingeffect-border-width)_dashed_transparent]", "after:[background:var(--gradient)] after:[background-attachment:fixed]", "after:opacity-[var(--active)] after:transition-opacity after:duration-300", "after:[mask-clip:padding-box,border-box]", "after:[mask-composite:intersect]", "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]")
                }, void 0, false, {
                    fileName: "[project]/components/ui/glowing-effect.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/glowing-effect.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}, "tERVUNWxVOPcH1N2beg6aNg2/Ko=")), "tERVUNWxVOPcH1N2beg6aNg2/Ko=");
_c1 = GlowingEffect;
GlowingEffect.displayName = "GlowingEffect";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlowingEffect$memo");
__turbopack_context__.k.register(_c1, "GlowingEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_ui_glowing-effect_tsx_29f80fc1._.js.map