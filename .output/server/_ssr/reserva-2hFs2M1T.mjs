import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reserva-2hFs2M1T.js
var $$splitComponentImporter = () => import("./reserva--q6yhtzZ.mjs");
var Route = createFileRoute("/reserva")({
	validateSearch: (search) => ({
		arena: typeof search["arena"] === "string" ? search["arena"] : void 0,
		date: typeof search["date"] === "string" ? search["date"] : void 0,
		time: typeof search["time"] === "string" ? search["time"] : void 0,
		campo: typeof search["campo"] === "string" ? search["campo"] : void 0,
		recorrente: typeof search["recorrente"] === "boolean" ? search["recorrente"] : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
