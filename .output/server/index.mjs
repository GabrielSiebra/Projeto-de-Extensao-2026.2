globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/agenda-CGAwC7oW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19af-6Piz6cNjcHvwIi53YBAnqYgI0JQ\"",
		"mtime": "2026-09-23T02:38:59.548Z",
		"size": 6575,
		"path": "../public/assets/agenda-CGAwC7oW.js"
	},
	"/assets/arena._arenaId-DDE-0C-x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2932-9mBJ1m7hRZEj+vlfWWIQ6S9+mCQ\"",
		"mtime": "2026-09-23T02:38:59.548Z",
		"size": 10546,
		"path": "../public/assets/arena._arenaId-DDE-0C-x.js"
	},
	"/assets/areninha-BUgIqWdc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1826-LoaUjGscr0zPCznV69dkk3L1BEY\"",
		"mtime": "2026-09-23T02:38:59.548Z",
		"size": 6182,
		"path": "../public/assets/areninha-BUgIqWdc.js"
	},
	"/assets/arrow-left-Bxos4C_s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-XblEsckLAclB3BDwjj5OMiRQ5Rc\"",
		"mtime": "2026-09-23T02:38:59.549Z",
		"size": 150,
		"path": "../public/assets/arrow-left-Bxos4C_s.js"
	},
	"/assets/avaliacoes-CbpYUnLU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8d-C4xDEnTvRl63CH3LlJboaN9Edig\"",
		"mtime": "2026-09-23T02:38:59.549Z",
		"size": 2957,
		"path": "../public/assets/avaliacoes-CbpYUnLU.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-23T01:29:49.027Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/buscar-L58np4P8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2761-Rx0SI523JdcjhtacOuy4AZ06Xvc\"",
		"mtime": "2026-09-23T02:38:59.550Z",
		"size": 10081,
		"path": "../public/assets/buscar-L58np4P8.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-23T01:29:49.033Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/campos-U5qQb77q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d01-Z7yiwix5jYK5sdW8Vpt9gIVX0tY\"",
		"mtime": "2026-09-23T02:38:59.552Z",
		"size": 3329,
		"path": "../public/assets/campos-U5qQb77q.js"
	},
	"/assets/check-DSLfgA3J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d-IIDUl72d+CxAtFPqO7cWVQWzErE\"",
		"mtime": "2026-09-23T02:38:59.552Z",
		"size": 109,
		"path": "../public/assets/check-DSLfgA3J.js"
	},
	"/assets/cadastrar-wv_pgqj0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27bb-qI0SRz86yD6mieZ98/+vHn216xA\"",
		"mtime": "2026-09-23T02:38:59.551Z",
		"size": 10171,
		"path": "../public/assets/cadastrar-wv_pgqj0.js"
	},
	"/assets/chevron-left-q4M2mEh_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73-B+t8E/E+9zSXTdfDSlhnQAqVqg8\"",
		"mtime": "2026-09-23T02:38:59.552Z",
		"size": 115,
		"path": "../public/assets/chevron-left-q4M2mEh_.js"
	},
	"/assets/circle-check-JFpMPYem.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-5LadV7iDtyWs+tXqtGhtd17xfGk\"",
		"mtime": "2026-09-23T02:38:59.553Z",
		"size": 163,
		"path": "../public/assets/circle-check-JFpMPYem.js"
	},
	"/assets/clientes-CfbLulqy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db9-mw/UiEvIYcTjaRh2iRWS9GjMtak\"",
		"mtime": "2026-09-23T02:38:59.553Z",
		"size": 3513,
		"path": "../public/assets/clientes-CfbLulqy.js"
	},
	"/assets/circle-dollar-sign-CwSkwRZG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-z+s7Pbmu3pkXJtx7p1Lc19SBrWE\"",
		"mtime": "2026-09-23T02:38:59.553Z",
		"size": 233,
		"path": "../public/assets/circle-dollar-sign-CwSkwRZG.js"
	},
	"/assets/BarChart-BOXxfHXT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59f76-Ek+xcPCUnto2XINCKcC7QU4tQYM\"",
		"mtime": "2026-09-23T02:38:59.546Z",
		"size": 368502,
		"path": "../public/assets/BarChart-BOXxfHXT.js"
	},
	"/assets/configuracoes-B2ryFrcQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1065-K6DTs9ImGO+6m/dExhcJrvyruog\"",
		"mtime": "2026-09-23T02:38:59.554Z",
		"size": 4197,
		"path": "../public/assets/configuracoes-B2ryFrcQ.js"
	},
	"/assets/financeiro-IS_BuX7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4406-6QWYZbo+aXuynISzemrEm4JyQVk\"",
		"mtime": "2026-09-23T02:38:59.556Z",
		"size": 17414,
		"path": "../public/assets/financeiro-IS_BuX7y.js"
	},
	"/assets/notificacoes-B8M_8Fft.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"890-Lk4TcDVVttwhBxfngmQNXRKByMQ\"",
		"mtime": "2026-09-23T02:38:59.558Z",
		"size": 2192,
		"path": "../public/assets/notificacoes-B8M_8Fft.js"
	},
	"/assets/loader-circle-CtCY3RGx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"81-cPxk+bNMhqIMiR3rWRv3zSDUoGE\"",
		"mtime": "2026-09-23T02:38:59.557Z",
		"size": 129,
		"path": "../public/assets/loader-circle-CtCY3RGx.js"
	},
	"/assets/perfil-BhObMrj0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"123e-O9M9i/j4xJBVitIal56mhFnS048\"",
		"mtime": "2026-09-23T02:38:59.558Z",
		"size": 4670,
		"path": "../public/assets/perfil-BhObMrj0.js"
	},
	"/assets/promocoes-tmM2qqsK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"147a-o1et6ElmNX03Dpi6ci5Yjs0AY4I\"",
		"mtime": "2026-09-23T02:38:59.559Z",
		"size": 5242,
		"path": "../public/assets/promocoes-tmM2qqsK.js"
	},
	"/assets/relatorios-i63Vy2wz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b81-DqOnVP9lTBVrjoAEii9QsD15/04\"",
		"mtime": "2026-09-23T02:38:59.561Z",
		"size": 15233,
		"path": "../public/assets/relatorios-i63Vy2wz.js"
	},
	"/assets/proprietario-C_77b4Co.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"187a-yHQzes/eb/Q12QbzMlXHTyk+y/c\"",
		"mtime": "2026-09-23T02:38:59.560Z",
		"size": 6266,
		"path": "../public/assets/proprietario-C_77b4Co.js"
	},
	"/assets/index-MKhrFjXn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e503-TGCQFnDd2B9y/4kU5p0j/Yw2WUI\"",
		"mtime": "2026-09-23T02:38:59.546Z",
		"size": 582915,
		"path": "../public/assets/index-MKhrFjXn.js"
	},
	"/assets/reserva-BFkvqxz5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"479b-P1iCEl3GwaUeZwAZiji1lqDZ628\"",
		"mtime": "2026-09-23T02:38:59.561Z",
		"size": 18331,
		"path": "../public/assets/reserva-BFkvqxz5.js"
	},
	"/assets/reservas-BGQduP-p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1471-tebD91JxzsxHB43SG7a87K3rdkw\"",
		"mtime": "2026-09-23T02:38:59.562Z",
		"size": 5233,
		"path": "../public/assets/reservas-BGQduP-p.js"
	},
	"/assets/routes-D1jYr--W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3702-FyV+OUpSyKeHPfqaMQJ9S5hQpPw\"",
		"mtime": "2026-09-23T02:38:59.578Z",
		"size": 14082,
		"path": "../public/assets/routes-D1jYr--W.js"
	},
	"/assets/save-CwROPbnm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"138-heH3dY0CI4T1yOHBn6zAZYJpe3w\"",
		"mtime": "2026-09-23T02:38:59.578Z",
		"size": 312,
		"path": "../public/assets/save-CwROPbnm.js"
	},
	"/assets/SlotPicker-Bf1XA7hi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f8-aUCrocUakqxGlfp6ikpDTq5GT8k\"",
		"mtime": "2026-09-23T02:38:59.547Z",
		"size": 2552,
		"path": "../public/assets/SlotPicker-Bf1XA7hi.js"
	},
	"/assets/tag-vh0b9MjP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"137-XArLg490vrZvhOajdF1Wnyb3O1E\"",
		"mtime": "2026-09-23T02:38:59.579Z",
		"size": 311,
		"path": "../public/assets/tag-vh0b9MjP.js"
	},
	"/assets/times-Be9WkWKw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c22-ybsoJm+qeJmr7i6lJLuzA1a/QJ8\"",
		"mtime": "2026-09-23T02:38:59.579Z",
		"size": 3106,
		"path": "../public/assets/times-Be9WkWKw.js"
	},
	"/assets/x-D14zmD-d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93ff-vgLCUNMBaXFNm/H6PgKr9te/nKc\"",
		"mtime": "2026-09-23T02:38:59.580Z",
		"size": 37887,
		"path": "../public/assets/x-D14zmD-d.js"
	},
	"/assets/styles-r61UxjU4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"6e1d8-D+IjKYI/fTk2PVu8H7nqVMMIVYI\"",
		"mtime": "2026-09-23T02:38:59.580Z",
		"size": 451032,
		"path": "../public/assets/styles-r61UxjU4.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_UUhaKH = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_UUhaKH
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
