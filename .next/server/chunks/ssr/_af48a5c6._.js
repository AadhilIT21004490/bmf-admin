module.exports = {

"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00149256e64808449f969ec4431dcc405c3ae5cf65":"doLogout"},"",""] */ __turbopack_context__.s({
    "doLogout": (()=>doLogout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function doLogout() {
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.delete("authjs.session-token");
        return {
            success: true
        };
    } catch (error) {
        console.error("Logout error:", error);
        return {
            error: "Logout failed. Please try again."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    doLogout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(doLogout, "00149256e64808449f969ec4431dcc405c3ae5cf65", null);
}}),
"[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00149256e64808449f969ec4431dcc405c3ae5cf65": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doLogout"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00149256e64808449f969ec4431dcc405c3ae5cf65": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00149256e64808449f969ec4431dcc405c3ae5cf65"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/nft/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(dashboard)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(dashboard)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(dashboard)/error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(dashboard)/error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/public/assets/images/nft/nft-gradient-bg.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-gradient-bg.3534573f.png");}}),
"[project]/public/assets/images/nft/nft-gradient-bg.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-gradient-bg.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$gradient$2d$bg$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-gradient-bg.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$gradient$2d$bg$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1064,
    height: 350,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AFao1/9xtNf/na3R/7mMv/+1XqH/lzmG/30Zc/98EnL/AFia1f99ntT/mYrG/4RXp/9fJIX/Tg1o/1QGX/9lBWf/AFOS0/9WjND/UXTG/0hQt/9EM6r/QBSI/0IBZv9JAF//tpo49Mfcbz8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/assets/images/nft/nf-card-img.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nf-card-img.3e0642f8.png");}}),
"[project]/public/assets/images/nft/nf-card-img.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nf-card-img.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nf$2d$card$2d$img$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nf-card-img.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nf$2d$card$2d$img$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 342,
    height: 293,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/AGdYapa1coX6inB//0BFZf9CRmr/inGT/5RjfPZMQEqLAJuDq/uMZIP/q3l2/4J8df+KjJL/q6K9/3JTdv9QRmn7AHOPqP9uXnz/qntq/39tSf+Ie1//iJqs/01fif9SQXH/AIKIlv93bIj/jlpb/5RqUv+Qh3T/co6k/2Ztk/9fT3//AFh2h/91a4v/ZUlz/2tIbv9UZY7/YpbB/21mjv9XVoT/AGuZnP+tk6T/Z16L/y8lV/8jMm7/c6nM/6yJo/93f6b/AHFxid26uMz8p7bU/09Rg/9KbKX/idnx/5emxPt5i6vce0SHzMyx7vsAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$gradient$2d$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$gradient$2d$bg$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-gradient-bg.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-gradient-bg.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nf$2d$card$2d$img$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nf$2d$card$2d$img$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nf-card-img.png.mjs { IMAGE => "[project]/public/assets/images/nft/nf-card-img.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const NftPromoBanner = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "nft-promo-card card border-0 rounded-xl overflow-hidden relative z-1 py-6 3xl:px-[76px] 2xl:px-[56px] xl:px-[40px] lg:px-[28px] px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$gradient$2d$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$gradient$2d$bg$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "NFT Background",
                className: "absolute start-0 top-0 w-full h-full z-[1] object-cover",
                priority: true
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nft-promo-card__inner flex sm:flex-row flex-col 3xl:gap-[80px] 2xl:gap-[48px] xl:gap-[32px] lg:gap-6 gap-5 items-center relative z-[2]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nft-promo-card__thumb w-full lg:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nf$2d$card$2d$img$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nf$2d$card$2d$img$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "NFT Card",
                            className: "w-full h-full object-cover",
                            width: 358,
                            height: 306,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-4 text-white",
                                children: "Discover The Largest NFTs Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-base",
                                children: "The largest NFT (Non-Fungible Token) marketplace is OpenSea. Established in 2017, OpenSea has grown to become the leading platform for buying, selling, and trading digital assets."
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center flex-wrap mt-6 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "btn rounded-full border border-white text-white px-[32px] py-[9px] hover:bg-white hover:text-neutral-900 duration-200",
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(`h-11 px-[28px] py-[11px] rounded-full`),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            children: "Create Now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = NftPromoBanner;
}}),
"[project]/components/ui/breadcrumb.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Breadcrumb": (()=>Breadcrumb),
    "BreadcrumbEllipsis": (()=>BreadcrumbEllipsis),
    "BreadcrumbItem": (()=>BreadcrumbItem),
    "BreadcrumbLink": (()=>BreadcrumbLink),
    "BreadcrumbList": (()=>BreadcrumbList),
    "BreadcrumbPage": (()=>BreadcrumbPage),
    "BreadcrumbSeparator": (()=>BreadcrumbSeparator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-rsc] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
function Breadcrumb({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
function BreadcrumbList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        "data-slot": "breadcrumb-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function BreadcrumbItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function BreadcrumbLink({ asChild, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "breadcrumb-link",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("hover:text-foreground transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function BreadcrumbPage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-normal", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function BreadcrumbSeparator({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[&>svg]:size-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
            fileName: "[project]/components/ui/breadcrumb.tsx",
            lineNumber: 78,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function BreadcrumbEllipsis({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-ellipsis",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex size-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/breadcrumb.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "More"
            }, void 0, false, {
                fileName: "[project]/components/ui/breadcrumb.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/layout/dashboard-breadcrumb.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/breadcrumb.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-rsc] (ecmascript) <export default as House>");
;
;
;
const DashboardBreadcrumb = ({ title, text })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-between gap-2 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                className: "text-2xl font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbList"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbLink"], {
                                href: "/",
                                className: "flex items-center gap-2 font-medium text-base text-neutral-600 hover:text-primary dark:text-white dark:hover:text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__["House"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                                        lineNumber: 26,
                                        columnNumber: 29
                                    }, this),
                                    "Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbSeparator"], {}, void 0, false, {
                            fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
                            className: "text-base",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbPage"], {
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/dashboard-breadcrumb.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = DashboardBreadcrumb;
}}),
"[project]/components/loading-skeleton.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function LoadingSkeleton({ height = "h-24", text = "Loading..." }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-lg bg-muted animate-pulse flex items-center justify-center ${height}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-muted-foreground",
            children: text
        }, void 0, false, {
            fileName: "[project]/components/loading-skeleton.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/loading-skeleton.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
}}),
"[project]/components/shared/custom-select.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/shared/custom-select.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/shared/custom-select.tsx <module evaluation>", "default");
}}),
"[project]/components/shared/custom-select.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/shared/custom-select.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/shared/custom-select.tsx", "default");
}}),
"[project]/components/shared/custom-select.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/shared/custom-select.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/shared/custom-select.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/charts/up-down-sharp-chart.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/up-down-sharp-chart.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/up-down-sharp-chart.tsx <module evaluation>", "default");
}}),
"[project]/components/charts/up-down-sharp-chart.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/up-down-sharp-chart.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/up-down-sharp-chart.tsx", "default");
}}),
"[project]/components/charts/up-down-sharp-chart.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$up$2d$down$2d$sharp$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/charts/up-down-sharp-chart.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$up$2d$down$2d$sharp$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/charts/up-down-sharp-chart.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$up$2d$down$2d$sharp$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/custom-select.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$up$2d$down$2d$sharp$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/up-down-sharp-chart.tsx [app-rsc] (ecmascript)");
;
;
;
;
const EthPriceCard = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
        className: "card h-full rounded-lg border-0 !p-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "card-body p-0 flex flex-col justify-between gap-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center flex-wrap gap-2 justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "font-bold text-lg mb-0",
                                    children: "ETH Price"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                                    lineNumber: 13,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    placeholder: "November",
                                    options: [
                                        "November",
                                        "December",
                                        "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June",
                                        "July",
                                        "August",
                                        "September",
                                        "October"
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "apexcharts-tooltip-style-1 yaxies-more label--20-px",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$up$2d$down$2d$sharp$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                                lineNumber: 22,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                            lineNumber: 21,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = EthPriceCard;
}}),
"[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx <module evaluation>", "default");
}}),
"[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx", "default");
}}),
"[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$featured$2d$creators$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$featured$2d$creators$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$featured$2d$creators$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/table/recent-bid-table.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/table/recent-bid-table.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/table/recent-bid-table.tsx <module evaluation>", "default");
}}),
"[project]/components/table/recent-bid-table.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/table/recent-bid-table.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/table/recent-bid-table.tsx", "default");
}}),
"[project]/components/table/recent-bid-table.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2f$recent$2d$bid$2d$table$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/table/recent-bid-table.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2f$recent$2d$bid$2d$table$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/table/recent-bid-table.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2f$recent$2d$bid$2d$table$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/custom-select.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2f$recent$2d$bid$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/table/recent-bid-table.tsx [app-rsc] (ecmascript)");
;
;
;
;
const RecentBidCard = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
            className: "card !p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center flex-wrap gap-2 justify-between mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "font-bold text-lg mb-0",
                                children: "Recent Bid"
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                placeholder: "All Items",
                                options: [
                                    "All Items",
                                    "New Item",
                                    "Trending Item",
                                    "Old Item"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx",
                                lineNumber: 13,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2f$recent$2d$bid$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = RecentBidCard;
}}),
"[project]/components/shared/common-link.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
const CommonLink = ({ href = "#", text = "View All" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "flex items-center gap-1 text-primary dark:text-primary hover:text-blue-400 text-sm",
        children: [
            text,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                width: 16,
                height: 16
            }, void 0, false, {
                fileName: "[project]/components/shared/common-link.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/common-link.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CommonLink;
}}),
"[project]/components/charts/card-small-chart-two.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/card-small-chart-two.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/card-small-chart-two.tsx <module evaluation>", "default");
}}),
"[project]/components/charts/card-small-chart-two.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/card-small-chart-two.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/card-small-chart-two.tsx", "default");
}}),
"[project]/components/charts/card-small-chart-two.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$card$2d$small$2d$chart$2d$two$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/charts/card-small-chart-two.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$card$2d$small$2d$chart$2d$two$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/charts/card-small-chart-two.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$card$2d$small$2d$chart$2d$two$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/charts/today-income-chart.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/today-income-chart.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/today-income-chart.tsx <module evaluation>", "default");
}}),
"[project]/components/charts/today-income-chart.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/today-income-chart.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/today-income-chart.tsx", "default");
}}),
"[project]/components/charts/today-income-chart.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$today$2d$income$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/charts/today-income-chart.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$today$2d$income$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/charts/today-income-chart.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$today$2d$income$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/common-link.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$card$2d$small$2d$chart$2d$two$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/card-small-chart-two.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$today$2d$income$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/today-income-chart.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const StatisticsCard = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
        className: "card h-full rounded-lg border-0 !p-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "card-body p-0 flex flex-col justify-between gap-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center flex-wrap gap-2 justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "font-bold text-lg mb-0",
                                    children: "Statistics"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                    lineNumber: 15,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 justify-between mb-[44px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-semibold mb-3",
                                                children: "145"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                                lineNumber: 21,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-secondary-light font-normal text-xl",
                                                children: "Total Art Sold"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                                lineNumber: 22,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$today$2d$income$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                        lineNumber: 24,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-semibold mb-3",
                                                children: "750 ETH"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                                lineNumber: 28,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-secondary-light font-normal text-xl",
                                                children: "Total Earnings"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                                lineNumber: 29,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                        lineNumber: 27,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "remove-tooltip-title rounded-tooltip-value remove-tooltip-marker",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$card$2d$small$2d$chart$2d$two$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            chartColor: "#ff9f29"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                        lineNumber: 31,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = StatisticsCard;
}}),
"[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx <module evaluation>", "default");
}}),
"[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx", "default");
}}),
"[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$top$2d$creators$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$top$2d$creators$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$top$2d$creators$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx <module evaluation>", "default");
}}),
"[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx", "default");
}}),
"[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$bid$2d$widgets$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$bid$2d$widgets$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$bid$2d$widgets$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/ui/tabs.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tabs() from the server but Tabs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx <module evaluation>", "Tabs");
const TabsContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsContent() from the server but TabsContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx <module evaluation>", "TabsContent");
const TabsList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsList() from the server but TabsList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx <module evaluation>", "TabsList");
const TabsTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsTrigger() from the server but TabsTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx <module evaluation>", "TabsTrigger");
}}),
"[project]/components/ui/tabs.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tabs() from the server but Tabs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx", "Tabs");
const TabsContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsContent() from the server but TabsContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx", "TabsContent");
const TabsList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsList() from the server but TabsList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx", "TabsList");
const TabsTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsTrigger() from the server but TabsTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/tabs.tsx", "TabsTrigger");
}}),
"[project]/components/ui/tabs.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/public/assets/images/nft/nft-img1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-img1.7418ce74.png");}}),
"[project]/public/assets/images/nft/nft-img1.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-img1.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-img1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 254,
    height: 200,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/ADYYN/dgIlj/cjRs/4x4ov+ikaz/TjJT/2Q8Xv8/JUH3AC0gO/9FH0P/dC1b/z1kaf9noKb/Z1SC/zkkQ/84HD3/ADs4Vf9wPmz/aiVN/yc8Wf8mZIf/RkZ2/0MwV/91Qnv/AEBlgf9wTX//USdO/z4xTv8hWHz/OzVX/zNHY/9YbYz/ADtIbf9vSHj/fkRz/zYaMP8fK0X/Skhq/z5nef9Fg4b/ACokQfdRKEr/VS9K/ygaKP8ZLD3/OENf/01vl/86Rmf3L7pcsBGx83cAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/public/assets/images/nft/nft-img2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-img2.274151cc.png");}}),
"[project]/public/assets/images/nft/nft-img2.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-img2.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-img2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 254,
    height: 200,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AKRUrPfWgL3/7ozA/+uErv/tc4v/4VqA/7JSoP+iUqz3AJNatv/EdLT/1n61/9Fznf/jXYf/5VN6/7tMif+TWLX/AHVduv9yXK3/t5S1/7KCrv+yVpj/tj2B/5NEjv92Xbr/AFpauP9LXbX/p4Wv/8GTr/+zY4z/hTNs/0pNpf9YW7j/AEZOqv85U6v/oZ26/9amt/+2YYj/UjqE/y1Nqv8/Tan/ADpCl/ctQpn/PVOa/6V6nv+yc5j/b1+c/0ZLmf80P5X35Ip70czRLRIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/public/assets/images/nft/nft-img3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-img3.f9f4e937.png");}}),
"[project]/public/assets/images/nft/nft-img3.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-img3.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-img3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 254,
    height: 200,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/ANWQlffVk5r/wH6H/5c+Z/+JNWP/rXiM/7ySqP+qh533AMSUqP+6gYb/o29h/6F4a/+heW3/n25i/3FOUP8oICf/AKuWuf+mfY3/kl1O/7ugh/+9oon/iFA8/zQUCf8CAAH/AJOXyv+MlMj/WmR6/6iMdP+minH/ISYj/wQBAv8CAQL/AHmY2v9vhrT/K2tw/yMvK/8iLSr/F09L/xgUEf8CAQL/AFuQ0fcxk4//GJqI/0hfQf9IYEL/GJmH/yB0Yv8EDAv3WzhqQ9YhbQ8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/public/assets/images/nft/nft-img4.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-img4.ebac90f5.png");}}),
"[project]/public/assets/images/nft/nft-img4.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-img4.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-img4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 254,
    height: 200,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/ACwxX/c0MVb/OiUw/zoeHf9KLCT/XixE/0YpW/8mLmD3AFU2V/9ILDD/QCYi/0dXVP9Ujon/TIqS/2dqhv9NOV//AJY0SP9PND3/RUFG/zZaYP9Kenv/MX2I/4Sprv+YQlb/AN1DN/+YQDr/dDAi/4U3JP+JQzH/pWdK/99sTP/hSzv/APlnK//qayb/kU4i/40xGv+ROR7/xYE2//igLf/6ky//APeWJff5qif/kJJe/2RSWf9QTFj/X4Nx/9/CP//1uCr3k2pmXPJPSrEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/public/assets/images/nft/nft-user-img1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-user-img1.b3519507.png");}}),
"[project]/public/assets/images/nft/nft-user-img1.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-user-img1.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-user-img1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAYGBwNLU1hCaaK/vGbU4Pao5dj1rMDAvFBVWkIGBgcDAFBXWkKvxtfZPJO7/jm1mv+C02v/092d/svX3tlQVlpCALnEyry4y93+RWd8/1h5U/+UmTX/3bBa/+Tq6v64xMu8AOHs8vXZ2t//nGlR/8ePQf/QvWH/27Zz/+vp5v/h7fT2AOPu9Pbn4eL/lXOW/41xjP+Ue4//rJeb/+zs5//k7vX1AL/Izrzr7vH+2Kyt/9OThv/Yq4v/38m1/+zy9P7Ayc69AFVaXULW3+XZ48zV/uKIhf/mnIH/5NnW/tjg5tlWWl1CAAYHBwNRVFhCg2yNvcVUePW6V1r2dmlxvFJVWEIGBwcDsWyo+QKGTFgAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/nft/nft-user-img2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-user-img2.cad28401.png");}}),
"[project]/public/assets/images/nft/nft-user-img2.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-user-img2.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-user-img2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAQHBwM8WmBChLbUvJuo9vaUjfH1eX/LvDc+XEIEBQcDADxaYEKV0+vZmnrq/okw2P+BKdD/fUnH/oWO3Nk3QF1CAIXC1byfw/f+dzmg/3FAgf9aHYD/XiN+/4yM1/59mdC8AJrW+/WRuej/XEVt/3NjYf9ELUP/X0Br/4+n3f+YyPn2AJbB+PaNtOj/Y2x//2VYXv9cUE//mpyl/5vT8v+b3fv1AHyUz7yTsPb+lrbm/5SZmv+coqT/n9/0/57q/f6Fx9W9ADc/XUKOo+XZpsLz/rm7wv+bmp3/mMzg/pTY5Nk8XGBCAAQFBwNHTl1Co5Oivbucp/Whi5f2hIqavDhGTUIEBwcDjYma6dTxbGkAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/nft/nft-user-img3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-user-img3.2dec90fc.png");}}),
"[project]/public/assets/images/nft/nft-user-img3.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-user-img3.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-user-img3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAQHAwM9SipCX0s5vEw8MPZqUz31i3U3vFU/H0IHBAMDAD1ZLUKBllnZMCQp/i4iMP8+MDj/PCwk/sZ0TtlbLCpCAJa1ZLybfFn+OyUx/5F3bP/TspX/fFlP/8ZmbP64XHy8ANWyc/XFiFT/VjAw/7uRff/WqpD/s3xx/75ni//pW4z2AOuhZfbvhWL/umdl/+eqkf/wsZf/14+K/9Zcmf/TZbL1AMR1Vrz2ZHf+4V9+/9mNf//kk4P/x2yL/75izf6QXLu9AF4hLELVRm7ZkDBS/ksvMf9mQD7/SShO/ntVvNk4KFhCAAcCAwMmDRRCDwcOvQQFCvUEBQr2BgULvBMNHEIEAwYDu75+EWb3rr4AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/nft/nft-user-img4.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nft-user-img4.f29797f1.png");}}),
"[project]/public/assets/images/nft/nft-user-img4.png.mjs { IMAGE => \"[project]/public/assets/images/nft/nft-user-img4.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/nft/nft-user-img4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAYDBAM+JTFCRy9QvEkwWvZCL0/1fFtWvFpEJkIHBgMDAFkrNkKCTmrZSi9c/kozW/9jQln/dFhT/tPHZtlaWytCAMxieLyOWWv+YT1q/4Bbf//Psaz/xJ+P/9Pldf6fw2G8APqJgvXno3H/v4SW/8mWpf/Qoqf/yZqa/6bShf+W05v2APytafb3zGn/6dKS//TEuP/zxLr/v768/4e70v9/rur1ANKnVrzs53H+q6N3/59/iP+ngo7/g4G1/4SX6v5xccW9AFlYKkK2pGTZdTlW/h8bOP8lGzn/j0Ff/pFnstk1LldCAAQGAwNDHiNCaEdHvR8iOvUhGTr2VTFGvEEkKEIEAwYDaMWKPdJ/jQUAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
// import React from "react";
// import NftImage1 from "@/public/assets/images/nft/nft-img1.png";
// import NftImage2 from "@/public/assets/images/nft/nft-img2.png";
// import NftImage3 from "@/public/assets/images/nft/nft-img3.png";
// import NftImage4 from "@/public/assets/images/nft/nft-img4.png";
// import UserImage1 from "@/public/assets/images/nft/nft-user-img1.png";
// import UserImage2 from "@/public/assets/images/nft/nft-user-img2.png";
// import UserImage3 from "@/public/assets/images/nft/nft-user-img3.png";
// import UserImage4 from "@/public/assets/images/nft/nft-user-img4.png";
// type NftCard = {
//     id: number;
//     title: string;
//     nftImage: StaticImageData;
//     userImage: StaticImageData;
//     userName: string;
//     priceEth: string;
//     priceUsd: string;
// };
// const nftCards: NftCard[] = [
//     {
//         id: 1,
//         title: "Fantastic Alien",
//         nftImage: NftImage1,
//         userImage: UserImage1,
//         userName: "Watson Kristin",
//         priceEth: "1.44 ETH",
//         priceUsd: "$4,224.96",
//     },
//     {
//         id: 2,
//         title: "New Figures",
//         nftImage: NftImage2,
//         userImage: UserImage2,
//         userName: "Watson Kristin",
//         priceEth: "1.44 ETH",
//         priceUsd: "$4,224.96",
//     },
//     {
//         id: 3,
//         title: "New Figures",
//         nftImage: NftImage3,
//         userImage: UserImage3,
//         userName: "Watson Kristin",
//         priceEth: "1.44 ETH",
//         priceUsd: "$4,224.96",
//     },
//     {
//         id: 4,
//         title: "New Figures",
//         nftImage: NftImage4,
//         userImage: UserImage4,
//         userName: "Watson Kristin",
//         priceEth: "1.44 ETH",
//         priceUsd: "$4,224.96",
//     },
// ];
// const TrendingNftWidgets: React.FC = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
//             {nftCards.map((card) => (
//                 <div
//                     key={card.id}
//                     className="nft-card bg-white dark:bg-slate-800 rounded overflow-hidden"
//                 >
//                     <div className="rounded overflow-hidden">
//                         <Image
//                             src={card.nftImage}
//                             alt={card.title}
//                             className="w-full h-full object-cover"
//                             width={250}
//                             height={196}
//                         />
//                     </div>
//                     <div className="p-2.5">
//                         <h6 className="text-base font-bold text-neutral-600 dark:text-white mb-1">
//                             {card.title}
//                         </h6>
//                         {/* User Info */}
//                         <div className="flex items-center gap-2">
//                             <Image
//                                 src={card.userImage}
//                                 className="w-7 h-7 rounded-full object-cover"
//                                 alt={card.userName}
//                                 width={28}
//                                 height={28}
//                             />
//                             <span className="text-sm text-secondary-light font-medium">
//                                 {card.userName}
//                             </span>
//                         </div>
//                         {/* Price Info */}
//                         <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
//                             <span className="text-sm text-secondary-light font-medium">
//                                 Price:{" "}
//                                 <span className="text-sm text-neutral-600 dark:text-white font-semibold">
//                                     {card.priceEth}
//                                 </span>
//                             </span>
//                             <span className="text-sm font-semibold text-primary-600">
//                                 {card.priceUsd}
//                             </span>
//                         </div>
//                         {/* Action Buttons */}
//                         <div className="flex items-center flex-wrap mt-3 gap-2">
//                             <Link
//                                 href="#"
//                                 className="btn rounded-full border text-neutral-500 dark:text-neutral-300 border-neutral-500 dark:border-neutral-300 px-3 py-1.5 hover:bg-neutral-500 dark:hover:bg-slate-600 hover:text-white flex-grow text-center duration-200"
//                             >
//                                 History
//                             </Link>
//                             <Button
//                                 className={cn(
//                                     "h-[39px] px-3 !py-1.5 flex-grow text-center rounded-full duration-200"
//                                 )}
//                             >
//                                 <Link href="#">Buy Now</Link>
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
// export default TrendingNftWidgets;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-img1.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-img1.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-img2.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-img2.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-img3.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-img3.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-img4.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-img4.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-user-img1.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-user-img1.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-user-img2.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-user-img2.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-user-img3.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-user-img3.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/nft/nft-user-img4.png.mjs { IMAGE => "[project]/public/assets/images/nft/nft-user-img4.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
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
;
;
const nftCards = [
    {
        id: 1,
        title: "Fantastic Alien",
        nftImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userName: "Watson Kristin",
        priceEth: "1.44 ETH",
        priceUsd: "$4,224.96",
        category: "art"
    },
    {
        id: 2,
        title: "New Figures",
        nftImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userName: "Watson Kristin",
        priceEth: "1.44 ETH",
        priceUsd: "$4,224.96",
        category: "music"
    },
    {
        id: 3,
        title: "New Figures",
        nftImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userName: "Watson Kristin",
        priceEth: "1.44 ETH",
        priceUsd: "$4,224.96",
        category: "utility"
    },
    {
        id: 4,
        title: "New Figures",
        nftImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$nft$2f$nft$2d$user$2d$img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        userName: "Watson Kristin",
        priceEth: "1.44 ETH",
        priceUsd: "$4,224.96",
        category: "fashion"
    }
];
function shuffleArray(array) {
    return [
        ...array
    ].sort(()=>Math.random() - 0.5);
}
const TrendingNftWidgets = ({ category })=>{
    let filtered = category === "all" ? nftCards : nftCards.filter((c)=>c.category === category);
    let shuffled = shuffleArray(filtered);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6",
        children: shuffled.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nft-card bg-white dark:bg-slate-800 rounded overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: card.nftImage,
                            alt: card.title,
                            className: "w-full h-full object-cover",
                            width: 250,
                            height: 196
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                            lineNumber: 233,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                        lineNumber: 232,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-base font-bold text-neutral-600 dark:text-white mb-1",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                lineNumber: 242,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: card.userImage,
                                        className: "w-7 h-7 rounded-full object-cover",
                                        alt: card.userName,
                                        width: 28,
                                        height: 28
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                        lineNumber: 248,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-secondary-light font-medium",
                                        children: card.userName
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                        lineNumber: 255,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                lineNumber: 247,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2.5 flex items-center justify-between gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-secondary-light font-medium",
                                        children: [
                                            "Price:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-neutral-600 dark:text-white font-semibold",
                                                children: card.priceEth
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                                lineNumber: 264,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                        lineNumber: 262,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-primary-600",
                                        children: card.priceUsd
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                        lineNumber: 268,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                lineNumber: 261,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center flex-wrap mt-3 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "btn rounded-full border text-neutral-500 dark:text-neutral-300 border-neutral-500 dark:border-neutral-300 px-3 py-1.5 hover:bg-neutral-500 dark:hover:bg-slate-600 hover:text-white flex-grow text-center duration-200",
                                        children: "History"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                        lineNumber: 275,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("h-[39px] px-3 !py-1.5 flex-grow text-center rounded-full duration-200"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            children: "Buy Now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                            lineNumber: 286,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                        lineNumber: 281,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                                lineNumber: 274,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                        lineNumber: 241,
                        columnNumber: 21
                    }, this)
                ]
            }, card.id, true, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
                lineNumber: 228,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx",
        lineNumber: 226,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = TrendingNftWidgets;
}}),
"[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/trending-nft-widgets.tsx [app-rsc] (ecmascript)");
;
;
;
;
const TrendingNftCard = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 mt-8 flx flex-wrap justify-between gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "all",
                className: "gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "mb-0",
                                children: "Trending NFTs"
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                lineNumber: 11,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "bg-transparent dark:bg-transparent rounded-none h-[50px] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "all",
                                        className: "font-semibold rounded-full px-5 py-0.5 h-[34px] border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:border-neutral-300 capitalize dark:text-white data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:border-primary dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                        lineNumber: 13,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "art",
                                        className: "font-semibold rounded-full px-5 py-0.5 h-[34px] border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:border-neutral-300 capitalize dark:text-white data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:border-primary dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white",
                                        children: "Art"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                        lineNumber: 16,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "music",
                                        className: "font-semibold rounded-full px-5 py-0.5 h-[34px] border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:border-neutral-300 capitalize dark:text-white data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:border-primary dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white",
                                        children: "music"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                        lineNumber: 19,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "utility",
                                        className: "font-semibold rounded-full px-5 py-0.5 h-[34px] border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:border-neutral-300 capitalize dark:text-white data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:border-primary dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white",
                                        children: "utility"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                        lineNumber: 22,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "fashion",
                                        className: "font-semibold rounded-full px-5 py-0.5 h-[34px] border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:border-neutral-300 capitalize dark:text-white data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:border-primary dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white",
                                        children: "fashion"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                        lineNumber: 10,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            className: "card !p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "px-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    category: "all"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                    lineNumber: 34,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                lineNumber: 33,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                            lineNumber: 32,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "art",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            className: "card !p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "px-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    category: "art"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                    lineNumber: 42,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                lineNumber: 41,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                            lineNumber: 40,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "music",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            className: "card !p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "px-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    category: "music"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                    lineNumber: 50,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                            lineNumber: 48,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "utility",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            className: "card !p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "px-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    category: "utility"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                    lineNumber: 58,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                lineNumber: 57,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                            lineNumber: 56,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "fashion",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            className: "card !p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "px-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    category: "fashion"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                                lineNumber: 65,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = TrendingNftCard;
}}),
"[project]/app/(dashboard)/(homes)/nft/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$nft$2d$promo$2d$banner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/nft-promo-banner.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$dashboard$2d$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/dashboard-breadcrumb.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/loading-skeleton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$eth$2d$price$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/eth-price-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$featured$2d$creators$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/featured-creators-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$recent$2d$bid$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/recent-bid-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$statistics$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/statistics-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$top$2d$creators$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/top-creators-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$bid$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/trending-bid-widgets.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/components/trending-nft-card.tsx [app-rsc] (ecmascript)");
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
;
const metadata = {
    title: "LMS Dashboard | WowDash Admin Panel",
    description: "Manage courses, track student progress, and analyze learning outcomes with the LMS Dashboard in WowDash Admin Template built using Next.js and Tailwind."
};
const InvestmentPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$dashboard$2d$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: "NFT & Gaming",
                text: "NFT & Gaming"
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gap-6 grid grid-cols-1 2xl:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 2xl:col-span-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gap-6 grid grid-cols-1 sm:grid-cols-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$nft$2d$promo$2d$banner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$bid$2d$widgets$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$trending$2d$nft$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$recent$2d$bid$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 2xl:col-span-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gap-6 grid grid-cols-1 sm:grid-cols-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 md:col-span-6 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$eth$2d$price$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 md:col-span-6 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$statistics$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 md:col-span-6 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$featured$2d$creators$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 md:col-span-6 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$nft$2f$components$2f$top$2d$creators$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/nft/page.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = InvestmentPage;
}}),
"[project]/app/(dashboard)/(homes)/nft/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(dashboard)/(homes)/nft/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_af48a5c6._.js.map