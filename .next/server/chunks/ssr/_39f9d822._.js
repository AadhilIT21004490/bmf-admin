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
"[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00149256e64808449f969ec4431dcc405c3ae5cf65": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doLogout"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00149256e64808449f969ec4431dcc405c3ae5cf65": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00149256e64808449f969ec4431dcc405c3ae5cf65"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$auth$2f$actions$2f$logout$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/(homes)/medical/page/actions.js { ACTIONS_MODULE0 => "[project]/components/auth/actions/logout.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "statsCards": (()=>statsCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/medal.js [app-rsc] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-rsc] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-rsc] (ecmascript) <export default as Wallet>");
;
;
const statsCards = [
    {
        cardBg: 'from-cyan-600/10',
        iconBgColor: 'bg-cyan-600/25 text-cyan-600 dark:text-cyan-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"],
        statistics: '650',
        text: 'Doctors',
        amount: '4',
        amountColor: 'text-cyan-600 dark:text-cyan-500',
        description: 'Doctors joined this week'
    },
    {
        cardBg: 'from-violet-600/10',
        iconBgColor: 'bg-violet-600/25 text-violet-600 dark:text-violet-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"],
        statistics: '570',
        text: 'Staffs',
        amount: '8',
        amountColor: 'text-violet-600 dark:text-violet-500',
        description: 'Staffs on vacation'
    },
    {
        cardBg: 'from-blue-600/10',
        iconBgColor: 'bg-primary/25 text-primary dark:text-primary',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"],
        statistics: '15,750',
        text: 'Patients',
        amount: '170',
        amountColor: '17text-primary dark:text-primary',
        description: 'New patients admitted'
    },
    {
        cardBg: 'from-green-600/10',
        iconBgColor: 'bg-green-600/25 text-green-600 dark:text-green-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        statistics: '$42,400',
        text: 'Pharmacies',
        amount: '60,000',
        amountColor: '60,00text-green-600 dark:text-green-500',
        description: 'Medicine on reserve'
    }
];
const StatCards = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-12 gap-6",
            children: statsCards.map(({ cardBg, iconBgColor, icon: Icon, statistics, text, amount, description, amountColor }, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `card !border border-white dark:border-slate-600 p-4 shadow-[0_0.25rem_1.875rem_rgba(46,45,116,0.05)] rounded-lg h-full bg-gradient-to-l ${cardBg} to-bg-white`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-body p-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-1 mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-12 h-12 ${iconBgColor} flex-shrink-0 flex justify-center items-center rounded-full h6 mb-0`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                                lineNumber: 69,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                        className: "font-semibold mb-0.5",
                                                        children: statistics
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-gray-600 dark:text-neutral-100 text-sm",
                                                        children: text
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                                lineNumber: 72,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                        lineNumber: 68,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                    lineNumber: 67,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mb-0 text-gray-600 dark:text-neutral-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${amountColor}`,
                                            children: [
                                                amount,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                            lineNumber: 79,
                                            columnNumber: 45
                                        }, this),
                                        " ",
                                        description
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                                    lineNumber: 78,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                            lineNumber: 66,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                        lineNumber: 65,
                        columnNumber: 33
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
                    lineNumber: 64,
                    columnNumber: 29
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = StatCards;
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
"[project]/public/assets/images/home-eight/treatment-icon1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/treatment-icon1.4dea0766.png");}}),
"[project]/public/assets/images/home-eight/treatment-icon1.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/treatment-icon1.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/treatment-icon1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42k2Py4tBYRjGv5GJqTGjMU1zcpnMtTDOxDdn5qCEhQWyYEHut+NkdyxIigVRp2xs1PEHKDsrUkpZWSgb/4/vVcri+ep7n/fy/NCVTC57tsStLLcTXZXDEOTgdgNSo8FDj29+GqeWDZ2t9Kul0z6QkRVM9sS8Rjwr+vT1ub/cRrIEJd4cGFXNIUmQK9WKd3cr++HpFBBOLroao/fVgHnMpFd10lxXG1yUQkU92GKzNoIHPso7ncpR3rec5X376Sv8fa9l9GS4h8iaPKy7vtHc/kSnIoiOTHi2uB3D+VNICPTyL5jOIfWYtzOZdRM8BCgUQQK0C0wR0ME7AkiSTJnJKyDJAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/treatment-icon2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/treatment-icon2.6c5b3ac4.png");}}),
"[project]/public/assets/images/home-eight/treatment-icon2.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/treatment-icon2.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/treatment-icon2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 22,
    height: 24,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzUlEQVR42i1PMQuCYBC91qDSwcKICnRKQbFEg4agCBQMLMkhmhuUFhfja1ShhApqKML/2n3ldPfeO969B1ABqLYbrELssL9WF8rJChEzlIeayDW11CGTz7ZAcYPzrSVOXBO4FgwO0724M5b6xT12LMnUzy5BvJKjeQBIZqzE94y7dx0//Zdx83LEXdwzMB9+xsh8F8X8J+IRK/M9PXczkKNZQG3QgXRsyaD2Ar6h76Aucq1R6sQ0SBmoGCYOqQtcE8oqjIoV/lVsWoWl/BdEdjxIdfwSPgAAAABJRU5ErkJggg==",
    blurWidth: 7,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/treatment-icon3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/treatment-icon3.68f02c05.png");}}),
"[project]/public/assets/images/home-eight/treatment-icon3.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/treatment-icon3.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/treatment-icon3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 21,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/ACQMOyByKL6Cgy3akmEhoWFhIaJihC3akHMnvoIkDDsiAGoksH8+FmdCFQciFW4mtoFtJrWCFQciFD4WZ0BzJ76BAH8s1JAXCCUWQhZuOzUSWDAsEEgjAAAAABUHIhV7K8yQAIIs1452KsR8izDnrXgpyI54KsiRRhhzNEQXcUtdIJtrADMRVS9EF3FKVh6PT3EnvJJJGnpRPxVnNmkkr2oZCSoSAAAAAAAXCCYLcyi/d0YYdFM+FmdIRxl2PwkDEAUAAAAAAAAAAAAAAAAAIAs1EoEr1I2BL9SNIAw1EgAAAAAAAAAA7Vo+mS3EfBoAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/public/assets/images/home-eight/treatment-icon4.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/treatment-icon4.71af26e0.png");}}),
"[project]/public/assets/images/home-eight/treatment-icon4.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/treatment-icon4.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/treatment-icon4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 22,
    height: 22,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAABBKAoeiFUWS49ZFlSaXxhVhlMVRjkkCRoCAQABABsRBA2bYBhOfE4USBAKAgcHBQEEPicKGaVmG0tLLwwkAHNIEj1UNQ0oCgYBAxYNAwhFKwoZkVkXWqBkGViwbhxVAI9ZF1QaEAQKXToPNs1/IJ7tkyWj/J0o6c+BIaSbYRpOAJpgGVdtQxEq2IYihP+fKej9nijcn2MajDwlCixnQBBBAIZTFUZPMQ0ecUYSPd+LJLyraxuMIRQFExEKAwenaBtOADkkCRqiZRlLNCEIEysbBxEQCgIHHhMFEZFaFz98TRQwAAIBAAFLLwwjpWcaUoZTFEZkPg9Ar20bX7NvHGAXDgQFPMdCg6gKLvkAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/treatment-icon5.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/treatment-icon5.36e5fa6e.png");}}),
"[project]/public/assets/images/home-eight/treatment-icon5.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/treatment-icon5.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon5$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/treatment-icon5.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon5$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 22,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA3klEQVR42k2NvUsCYQCHH4USqsEi665OIqvrffErRdKrOyFNiKC4oKCCaIi2piCaqiHFVUUEBxWcXR39GMW/ytfNZ/zB83vY9rH6tIv8PuRi4vA4Pue+KLgpBDCWPHj4F+TVkO2lyJUk0aGF1Yhid05w0uvsMMjg/pnIbgL7xUBvxgi346TqEaxKmGtGZ7jKtltxhDITDzraaxDt10T8mOSxNtDLkqt+mttqhIxcw3+nE/w8IPZ1hMOcLR8rzwbHNdVWLwVXI/Sxz+n7HkkWSfrZnGZ5KwlylwFCy168M+FjKeXYEzc0AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/public/assets/images/home-eight/treatment-icon6.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/treatment-icon6.aaa2704f.png");}}),
"[project]/public/assets/images/home-eight/treatment-icon6.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/treatment-icon6.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon6$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/treatment-icon6.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon6$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 22,
    height: 24,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AAAAAAAFCRIINV69YhQjRiMHDRkMBgsXCAAAAQAAAAAAAAECAwEkQoQ3OmXMaDhixWw1X79ZER48GwAAAAAAAAAAAAkRIRI4Y8dsGCtXJB83bzQyWrVfAAAAAAAAAAAABAYNCDVevGspSpVAJ0eOP0Bx4n8AAQIFAQYKFQUGChQJN2HDazlmzXAgOXM4OWTKdwApSZJBO2jSZDFWrFM0W7deMVevUzVdumckP35GAEBw4mc5ZMlcMlixTTZgwVk6aNFmLlKkWAcLFwsAIz57Mj9v3nMcMmU0Gi1bIxYnTxwECA8FAAAAAMwNN0oyk4YGAAAAAElFTkSuQmCC",
    blurWidth: 7,
    blurHeight: 8
};
}}),
"[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/common-link.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
// Images
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/treatment-icon1.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/treatment-icon1.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/treatment-icon2.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/treatment-icon2.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/treatment-icon3.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/treatment-icon3.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/treatment-icon4.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/treatment-icon4.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/treatment-icon5.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/treatment-icon5.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/treatment-icon6.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/treatment-icon6.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
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
const treatments = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bgColor: "bg-cyan-600/10",
        title: "Psychiatry",
        doctors: "57 Doctors",
        time: "08:45 AM"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bgColor: "bg-green-600/10",
        title: "Orthopedic",
        doctors: "85 Doctors",
        time: "08:45 AM"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bgColor: "bg-violet-600/10",
        title: "Cardiology",
        doctors: "60 Doctors",
        time: "08:45 AM"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bgColor: "bg-yellow-600/10",
        title: "Pediatrics",
        doctors: "120 Doctors",
        time: "08:45 AM"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bgColor: "bg-red-600/10",
        title: "Neurology",
        doctors: "25 Doctors",
        time: "08:45 AM"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$treatment$2d$icon6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bgColor: "bg-primary/10",
        title: "Gastroenterology",
        doctors: "95 Doctors",
        time: "08:45 AM"
    }
];
const AvailableTreatmentsCard = ()=>{
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
                                    children: "Available Treatments"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: treatments.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-between gap-3 ${index === treatments.length - 1 ? "mb-0" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-10 h-10 rounded-full flex-shrink-0 ${item.bgColor} flex justify-center items-center`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        src: item.icon,
                                                        alt: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base mb-0 font-normal",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600 dark:text-neutral-100 font-normal",
                                                            children: item.doctors
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                            lineNumber: 89,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-neutral-100",
                                            children: item.time
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                            lineNumber: 106,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                                    lineNumber: 83,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = AvailableTreatmentsCard;
}}),
"[project]/public/assets/images/home-eight/doctor-img1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/doctor-img1.050cd6ff.png");}}),
"[project]/public/assets/images/home-eight/doctor-img1.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/doctor-img1.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/doctor-img1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR42iWPP0vDQADFD8kHy5Q/OMRv4yQ4KTgUN3GxFAcVTCA2S6GXQFoCpoTe5ZpoidImsTWIrrc+e+32eL8Hjx/RNO3INE3ddV36OOjLp/uB9DwvMgxDV4yoEIZhlSYTDHtnGF6f4zWZglJaKUZ834/yPEeWxPAuTjG+uQTLZlDdjlHCOZdCCMzSFP3eFZ7vbsEY2w8UI7sg1+sGQrxhni+RzkuU5RJFURwGQRDQ7aZD23b42vyg+f7Dx2eN1apWFxGxbVtnfFE1zRbvixJd9wseR8gmcWVZlk6UiuOc6OFoFGUvD7KtWzmlY+oc23vNf9imsmbHtDhgAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/doctor-img2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/doctor-img2.9dc1130e.png");}}),
"[project]/public/assets/images/home-eight/doctor-img2.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/doctor-img2.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/doctor-img2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42iWPQS/DYACGvzTt//oOpGWxiX/i7MAdBwkX/AKyZrFqbVl1CGIq0dm3btq1SXEZau3iW51eLYc3eZPneQ8vEUVRkBWFqmrNrB0f8aZxxk/qmiXLCi0YkZUF2r648lr6KarbG9hdW4VtP8BqX3qFRDRNt/ruEM7tNe4ONqFuraPrPIH1B6hruknywt3BM1iPwTjcQXV/D48OQzEqGMkLD8IIvh9hHIYIhyMwFsAfRf9Co9kyP+MpknSGNM3w/jFF9DL+i2E0LFIuL1PXDbxJkuXST54Mr28xOp2eVyotUSJJklCprNB7u2tNkhmPv765eX5jzs0v5jcl4ReWQLdvJXGutwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/doctor-img3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/doctor-img3.9a388541.png");}}),
"[project]/public/assets/images/home-eight/doctor-img3.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/doctor-img3.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/doctor-img3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42iWPXUvCUACGh+5f1C8JipOeSVf9iAihC4sgIVMo+oBQulKDgmYaQrk5bWuuaKddOAzPJlreBPsf5/bNj9v3eS7eR5JlOUaTCqmWb1nh8ECUTvOi2Wh6lCpkziSFpojT+4xq1QrUQgb32V04HQPOuxtRJUUkTe96QfgD3zbBH0owLo/ATBPzraV3mMT5WIThL3jfh13MQz3JYNAfLIThjEk8mIghn8D58NC4OEYuvQO9bSEcTZdC23hj38EUV88mzsoq0uc3qD3pGI3/oOmvnpSkW6Tn+tH2XR2kWMF1y4Rlf6FrsSiRnJ2Mx+XY2iYlq3v73ko2JzTXF4/1F7a+kVhk/gN08Z9DB746xQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/doctor-img4.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/doctor-img4.e0c3b174.png");}}),
"[project]/public/assets/images/home-eight/doctor-img4.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/doctor-img4.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/doctor-img4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+0lEQVR42h2LS06DUABFSQP7enOe1FQX4QqMO3ARDhzYWA0rEMqnOqliGytFEAqlFKgVSzFpXnR0fXVwk5OccwVRFFsypUTT+0ave8XU3jXjaMkyJXsnUHpAnOdxFAbvUM9PcXF2At/z8OSMIsqPgmkPrGxZYB4nuNd1XHZv8eZOschymKZtCBzYPoiTDM50BtUYYuIGSBc535L9Bx+fW/hhhiyvUJY1nJcIs6TEPOWBPXgw6oZhtWH42jLUzQ/ckMusgta3LUFR2sQP0+i12GHz/YtkvcOdV2HkxpFM20QQRanV6RyTR2dirdYNGwcFu9GGhnJ4RCRJav0BQE660RYprAgAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/doctor-img5.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/doctor-img5.3b06bd46.png");}}),
"[project]/public/assets/images/home-eight/doctor-img5.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/doctor-img5.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img5$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/doctor-img5.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img5$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42kWPPU/CUABFX0j5Xy8SF2qwo5OLiwmjAwmDi8bEj6iDm11IjDF+BKIlRemjVTQFSo2QV2x8JA0lbqDbWy8pA8znJPceoihKSlXXaNWoMqNclo5Vl47zZudy6zRhJIGdTlfcX5Wwu7WBve1NfHMOzgdC0zRKLKthj0ZjfNYNePoR7vYLEEGAyeQP7bbHSBRFMo7HCFtN1A6L0At5RGE4F6bTf7kQBv0ebg6KON7JY/gzXAqMNVgy4fs91G6vcXl6gpdnC3H8C9dt2SR52/W+hOv6MA0TlYcKnh5NOK8fIptVKUkr6VQms0p1vWTzfiCbzrs8P7tglK7MM2fPsK6uEeY7uAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/assets/images/home-eight/doctor-img6.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/doctor-img6.050cd6ff.png");}}),
"[project]/public/assets/images/home-eight/doctor-img6.png.mjs { IMAGE => \"[project]/public/assets/images/home-eight/doctor-img6.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img6$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/home-eight/doctor-img6.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img6$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR42iWPP0vDQADFD8kHy5Q/OMRv4yQ4KTgUN3GxFAcVTCA2S6GXQFoCpoTe5ZpoidImsTWIrrc+e+32eL8Hjx/RNO3INE3ddV36OOjLp/uB9DwvMgxDV4yoEIZhlSYTDHtnGF6f4zWZglJaKUZ834/yPEeWxPAuTjG+uQTLZlDdjlHCOZdCCMzSFP3eFZ7vbsEY2w8UI7sg1+sGQrxhni+RzkuU5RJFURwGQRDQ7aZD23b42vyg+f7Dx2eN1apWFxGxbVtnfFE1zRbvixJd9wseR8gmcWVZlk6UiuOc6OFoFGUvD7KtWzmlY+oc23vNf9imsmbHtDhgAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/common-link.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/doctor-img1.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/doctor-img1.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/doctor-img2.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/doctor-img2.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/doctor-img3.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/doctor-img3.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/doctor-img4.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/doctor-img4.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/doctor-img5.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/doctor-img5.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/home-eight/doctor-img6.png.mjs { IMAGE => "[project]/public/assets/images/home-eight/doctor-img6.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
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
const DoctorListCard = ()=>{
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
                                    children: "Doctors List"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 18,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 19,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                            lineNumber: 17,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "",
                                                    className: "w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base mb-0",
                                                            children: "Dr. Davis"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600 dark:text-neutral-100 font-medium",
                                                            children: "Cardiology"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 25,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-500/15 text-green-500 dark:text-green-500 px-2.5 py-1 rounded-lg font-medium text-sm",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "",
                                                    className: "w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base mb-0",
                                                            children: "Dr. Riead"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600 dark:text-neutral-100 font-medium",
                                                            children: "Orthopedics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 35,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-500/15 text-green-500 dark:text-green-500 px-2.5 py-1 rounded-lg font-medium text-sm",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 42,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "",
                                                    className: "w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base mb-0",
                                                            children: "Albert Flores"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600 dark:text-neutral-100 font-medium",
                                                            children: "Ophthalmology"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 45,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-red-500/15 text-red-600 dark:text-red-600 px-2.5 py-1 rounded-lg font-medium text-sm",
                                            children: "Not Available"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "",
                                                    className: "w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base mb-0",
                                                            children: "Dr. Smith"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600 dark:text-neutral-100 font-medium",
                                                            children: "Cardiology"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-500/15 text-green-500 dark:text-green-500 px-2.5 py-1 rounded-lg font-medium text-sm",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "",
                                                    className: "w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base mb-0",
                                                            children: "Dr. Johnson"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600 dark:text-neutral-100 font-medium",
                                                            children: "Cardiology"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 65,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-red-500/15 text-red-600 dark:text-red-600 px-2.5 py-1 rounded-lg font-medium text-sm",
                                            children: "Not Available"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 72,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 64,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$home$2d$eight$2f$doctor$2d$img5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "",
                                                    className: "w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-base mb-0",
                                                            children: "Dr. Martinez"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600 dark:text-neutral-100 font-medium",
                                                            children: "Cardiology"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-500/15 text-green-500 dark:text-green-500 px-2.5 py-1 rounded-lg font-medium text-sm",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                            lineNumber: 82,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                            lineNumber: 23,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = DoctorListCard;
}}),
"[project]/components/charts/double-line-chart.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/double-line-chart.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/double-line-chart.tsx <module evaluation>", "default");
}}),
"[project]/components/charts/double-line-chart.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/double-line-chart.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/double-line-chart.tsx", "default");
}}),
"[project]/components/charts/double-line-chart.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$double$2d$line$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/charts/double-line-chart.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$double$2d$line$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/charts/double-line-chart.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$double$2d$line$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__);
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
"[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$double$2d$line$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/double-line-chart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/custom-select.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
;
;
;
;
const EarningStatisticCard = ()=>{
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
                                    children: "Earning Statistic"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                    lineNumber: 12,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    placeholder: "This Month",
                                    options: [
                                        "This Month",
                                        "This Week",
                                        "This Year"
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                    lineNumber: 13,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                            lineNumber: 11,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                        lineNumber: 10,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-wrap items-center justify-center my-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-2 rounded-[50rem] bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                                lineNumber: 22,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-neutral-200 text-sm font-semibold",
                                                children: [
                                                    "New Patient:",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-900 dark:text-white font-bold",
                                                        children: "50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                                        lineNumber: 25,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                                lineNumber: 23,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                        lineNumber: 21,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-2 rounded-[50rem] bg-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                                lineNumber: 29,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-neutral-200 text-sm font-semibold",
                                                children: [
                                                    "Old Patient:",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-900 dark:text-white font-bold",
                                                        children: " 500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                                lineNumber: 30,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$double$2d$line$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                colors: [
                                    "#487FFF",
                                    "#FF9F29"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = EarningStatisticCard;
}}),
"[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx <module evaluation>", "default");
}}),
"[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx", "default");
}}),
"[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$health$2d$reports$2d$document$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$health$2d$reports$2d$document$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$health$2d$reports$2d$document$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/ui/table.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "Table");
const TableBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableBody() from the server but TableBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "TableBody");
const TableCaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCaption() from the server but TableCaption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "TableCaption");
const TableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCell() from the server but TableCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "TableCell");
const TableFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFooter() from the server but TableFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "TableFooter");
const TableHead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHead() from the server but TableHead is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "TableHead");
const TableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHeader() from the server but TableHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "TableHeader");
const TableRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableRow() from the server but TableRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx <module evaluation>", "TableRow");
}}),
"[project]/components/ui/table.tsx (client reference/proxy)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "Table");
const TableBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableBody() from the server but TableBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "TableBody");
const TableCaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCaption() from the server but TableCaption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "TableCaption");
const TableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCell() from the server but TableCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "TableCell");
const TableFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFooter() from the server but TableFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "TableFooter");
const TableHead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHead() from the server but TableHead is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "TableHead");
const TableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHeader() from the server but TableHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "TableHeader");
const TableRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableRow() from the server but TableRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/table.tsx", "TableRow");
}}),
"[project]/components/ui/table.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ui/table.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/table/latest-appointments-table.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-rsc] (ecmascript)");
;
;
const latestAppointmentContents = [
    {
        name: "General Checkup",
        id: "#63254",
        date: "27 Mar 2024",
        status: {
            label: "Completed",
            type: "success"
        }
    },
    {
        name: "Blood test results",
        id: "3.053 ETH",
        date: "2h 5m 40s",
        status: {
            label: "Canceled",
            type: "danger"
        }
    },
    {
        name: "Heart Checkup",
        id: "3.053 ETH",
        date: "2h 5m 40s",
        status: {
            label: "Completed",
            type: "success"
        }
    },
    {
        name: "Vaccination",
        id: "3.053 ETH",
        date: "2h 5m 40s",
        status: {
            label: "Canceled",
            type: "danger"
        }
    },
    {
        name: "Dental Cleanup",
        id: "3.053 ETH",
        date: "2h 5m 40s",
        status: {
            label: "Completed",
            type: "success"
        }
    },
    {
        name: "Follow up Appointment",
        id: "3.053 ETH",
        date: "2h 5m 40s",
        status: {
            label: "Canceled",
            type: "danger"
        }
    },
    {
        name: "General Checkup",
        id: "#63254",
        date: "27 Mar 2024",
        status: {
            label: "Completed",
            type: "success"
        }
    }
];
const LatestAppointmentsTable = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
        className: "table-auto border-spacing-0 border-separate",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                    className: "border-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                            className: "bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-start rounded-tl-lg",
                            children: "Name"
                        }, void 0, false, {
                            fileName: "[project]/components/table/latest-appointments-table.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                            className: "bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-center",
                            children: "ID"
                        }, void 0, false, {
                            fileName: "[project]/components/table/latest-appointments-table.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                            className: "bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-center",
                            children: "Date"
                        }, void 0, false, {
                            fileName: "[project]/components/table/latest-appointments-table.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                            className: "bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-center text-center rounded-tr-lg",
                            children: "Status"
                        }, void 0, false, {
                            fileName: "[project]/components/table/latest-appointments-table.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/table/latest-appointments-table.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/table/latest-appointments-table.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableBody"], {
                children: latestAppointmentContents.map((coursesContent, index)=>{
                    const isLast = index === latestAppointmentContents.length - 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `py-3 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-start ${isLast ? "rounded-bl-lg" : ""}`,
                                children: coursesContent.name
                            }, void 0, false, {
                                fileName: "[project]/components/table/latest-appointments-table.tsx",
                                lineNumber: 109,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `py-3 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center ${isLast ? "rounded-bl-lg" : ""}`,
                                children: coursesContent.id
                            }, void 0, false, {
                                fileName: "[project]/components/table/latest-appointments-table.tsx",
                                lineNumber: 115,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `py-3 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center ${isLast ? "rounded-bl-lg" : ""}`,
                                children: coursesContent.date
                            }, void 0, false, {
                                fileName: "[project]/components/table/latest-appointments-table.tsx",
                                lineNumber: 121,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `py-3 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center ${isLast ? "rounded-bl-lg" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-neutral-600 dark:text-neutral-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2.5 py-1 rounded-lg font-medium text-sm ${coursesContent.status.type === "success" ? "bg-green-500/15 text-green-600 dark:text-green-600" : "bg-red-500/15 text-red-600 dark:text-red-600"}`,
                                        children: coursesContent.status.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/table/latest-appointments-table.tsx",
                                        lineNumber: 133,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/table/latest-appointments-table.tsx",
                                    lineNumber: 132,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/table/latest-appointments-table.tsx",
                                lineNumber: 128,
                                columnNumber: 29
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/table/latest-appointments-table.tsx",
                        lineNumber: 108,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/table/latest-appointments-table.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/table/latest-appointments-table.tsx",
        lineNumber: 87,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = LatestAppointmentsTable;
}}),
"[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/common-link.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2f$latest$2d$appointments$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/table/latest-appointments-table.tsx [app-rsc] (ecmascript)");
;
;
;
;
const LatestAppointmentsCard = ()=>{
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
                                    children: "Latest Appointments"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
                                    lineNumber: 13,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$common$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2f$latest$2d$appointments$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
                            lineNumber: 18,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = LatestAppointmentsCard;
}}),
"[project]/components/charts/radial-multiple-bar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/radial-multiple-bar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/radial-multiple-bar.tsx <module evaluation>", "default");
}}),
"[project]/components/charts/radial-multiple-bar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/radial-multiple-bar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/radial-multiple-bar.tsx", "default");
}}),
"[project]/components/charts/radial-multiple-bar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$radial$2d$multiple$2d$bar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/charts/radial-multiple-bar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$radial$2d$multiple$2d$bar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/charts/radial-multiple-bar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$radial$2d$multiple$2d$bar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$radial$2d$multiple$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/radial-multiple-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
;
;
;
const PatientVisitedDepartment = ()=>{
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "font-bold text-lg mb-0",
                                children: "Patient Visited by Department"
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                lineNumber: 11,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                            lineNumber: 10,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                        lineNumber: 9,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$radial$2d$multiple$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                    lineNumber: 16,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                lineNumber: 15,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: [
                                                "Cardiology: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary dark:text-primary font-semibold",
                                                    children: "80%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 71
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                            lineNumber: 20,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                        lineNumber: 19,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: [
                                                "Psychiatry: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-500 dark:text-yellow-500 font-semibold",
                                                    children: "40%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 71
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                            lineNumber: 23,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                        lineNumber: 22,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: [
                                                "Pediatrics: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-500 dark:text-green-500 font-semibold",
                                                    children: "10%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 71
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                            lineNumber: 26,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                        lineNumber: 14,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
                lineNumber: 8,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = PatientVisitedDepartment;
}}),
"[project]/components/charts/courses-activity-chart.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/courses-activity-chart.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/courses-activity-chart.tsx <module evaluation>", "default");
}}),
"[project]/components/charts/courses-activity-chart.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/courses-activity-chart.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/courses-activity-chart.tsx", "default");
}}),
"[project]/components/charts/courses-activity-chart.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$courses$2d$activity$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/charts/courses-activity-chart.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$courses$2d$activity$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/charts/courses-activity-chart.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$courses$2d$activity$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/custom-select.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$courses$2d$activity$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/courses-activity-chart.tsx [app-rsc] (ecmascript)");
;
;
;
;
const PatientVisitedGender = ()=>{
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
                                    children: "Patient Visited by Gender"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                    lineNumber: 13,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    placeholder: "This Month",
                                    options: [
                                        "This Month",
                                        "This Week",
                                        "This Year"
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body py-4 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-wrap items-center justify-center my-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-2 rounded-[50rem] bg-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                                lineNumber: 23,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-neutral-200 text-sm font-semibold",
                                                children: [
                                                    "Male:",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-900 dark:text-white font-bold",
                                                        children: "200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                                lineNumber: 24,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                        lineNumber: 22,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-2 rounded-[50rem] bg-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                                lineNumber: 30,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-neutral-200 text-sm font-semibold",
                                                children: [
                                                    "Female:",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-900 dark:text-white font-bold",
                                                        children: " 450"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                                lineNumber: 31,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                lineNumber: 21,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "margin-16-minus y-value-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$courses$2d$activity$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    height: 250
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                    lineNumber: 38,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = PatientVisitedGender;
}}),
"[project]/components/charts/customers-statistics-chart.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/customers-statistics-chart.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/customers-statistics-chart.tsx <module evaluation>", "default");
}}),
"[project]/components/charts/customers-statistics-chart.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/charts/customers-statistics-chart.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/charts/customers-statistics-chart.tsx", "default");
}}),
"[project]/components/charts/customers-statistics-chart.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$customers$2d$statistics$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/charts/customers-statistics-chart.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$customers$2d$statistics$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/charts/customers-statistics-chart.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$customers$2d$statistics$2d$chart$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/custom-select.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$customers$2d$statistics$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/charts/customers-statistics-chart.tsx [app-rsc] (ecmascript)");
;
;
;
;
const TotalIncomeCard = ()=>{
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
                                    children: "Total Income"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$custom$2d$select$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    placeholder: "This Month",
                                    options: [
                                        "This Month",
                                        "This Week",
                                        "This Year"
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                    lineNumber: 15,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body pb-4 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-9 grow apexcharts-tooltip-z-none title-style circle-none relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$charts$2f$customers$2d$statistics$2d$chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                            lineNumber: 24,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600 dark:text-neutral-100",
                                                    children: "Income"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "",
                                                    children: "$28,500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                            lineNumber: 25,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "grid grid-cols-2 gap-6 mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3 h-2 rounded-[50rem] bg-yellow-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600 dark:text-neutral-100 text-sm font-normal",
                                                            children: "Net Income"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "text-gray-900 dark:text-white font-bold mb-0",
                                                    children: "$50,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                            lineNumber: 31,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3 h-2 rounded-[50rem] bg-[#487fff]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600 dark:text-neutral-100 text-sm font-normal",
                                                            children: "Commission "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "text-gray-900 dark:text-white font-bold mb-0",
                                                    children: "$20,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                            lineNumber: 38,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = TotalIncomeCard;
}}),
"[project]/app/(dashboard)/(homes)/medical/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$stat$2d$cards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/stat-cards.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$dashboard$2d$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/dashboard-breadcrumb.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/loading-skeleton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$available$2d$treatments$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/available-treatments-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$doctor$2d$list$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/doctor-list-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$earning$2d$statistic$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/earning-statistic-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$health$2d$reports$2d$document$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/health-reports-document-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$latest$2d$appointments$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/latest-appointments-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$patient$2d$visited$2d$department$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/patient-visited-department.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$patient$2d$visited$2d$gender$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/patient-visited-gender.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$total$2d$income$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/components/total-income-card.tsx [app-rsc] (ecmascript)");
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
const metadata = {
    title: "Medical Dashboard | WowDash Admin Panel",
    description: "Monitor patient data, manage appointments, and analyze healthcare metrics with the Medical Dashboard in WowDash Admin Template built using Next.js, Tailwind, and Shadcn UI."
};
const MedicalPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$dashboard$2d$breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: "Medical",
                text: "Medical"
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 2xl:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 2xl:col-span-9",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-12 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$stat$2d$cards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$earning$2d$statistic$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 lg:col-span-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$patient$2d$visited$2d$department$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 lg:col-span-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$patient$2d$visited$2d$gender$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 2xl:col-span-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$doctor$2d$list$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 2xl:col-span-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$latest$2d$appointments$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 2xl:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-12 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$total$2d$income$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$available$2d$treatments$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            height: "h-64",
                                            text: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$dashboard$292f28$homes$292f$medical$2f$components$2f$health$2d$reports$2d$document$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/(homes)/medical/page.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = MedicalPage;
}}),
"[project]/app/(dashboard)/(homes)/medical/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(dashboard)/(homes)/medical/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_39f9d822._.js.map