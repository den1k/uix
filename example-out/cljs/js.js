// Compiled by ClojureScript 1.10.520 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21955 = arguments.length;
var i__4731__auto___21956 = (0);
while(true){
if((i__4731__auto___21956 < len__4730__auto___21955)){
args__4736__auto__.push((arguments[i__4731__auto___21956]));

var G__21957 = (i__4731__auto___21956 + (1));
i__4731__auto___21956 = G__21957;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__21953 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__21954 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21954;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21953;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq21952){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21952));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__21958 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__21959 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__21959;

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__21958;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__21960){
var map__21961 = p__21960;
var map__21961__$1 = (((((!((map__21961 == null))))?(((((map__21961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21961):map__21961);
var resource = map__21961__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21961__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__21964 = arguments.length;
switch (G__21964) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__21965 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__21965,((function (G__21965){
return (function (state){
});})(G__21965))
);

return G__21965;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__21966 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__21966,init);

return G__21966;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__21968){
var map__21969 = p__21968;
var map__21969__$1 = (((((!((map__21969 == null))))?(((((map__21969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21969):map__21969);
var opts = map__21969__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21969__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21969__$1,cljs.core.cst$kw$asset_DASH_path);
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21969__$1,cljs.core.cst$kw$source_DASH_map_DASH_timestamp);
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__21971 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__21971,".","/");
} else {
return G__21971;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4131__auto__ = output_dir;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__21972 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__21972__$1 = ((source_map_timestamp === true)?[G__21972,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__21972);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__21972__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__21972__$1;
}
})();
var file = (function (){var G__21973 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__21973__$1 = ((source_map_timestamp === true)?[G__21973,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__21973);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__21973__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__21973__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21979 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__21969,map__21969__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__21980){
var vec__21981 = p__21980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__21969,map__21969__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__21979);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21984){
var vec__21985 = p__21984;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21985,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs_ns,cljs.core.cst$kw$requires], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs_ns,cljs.core.cst$kw$require_DASH_macros], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__21988 = cljs.core.first(coll);
var G__21989 = ((function (G__21988){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_(res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var G__21990 = proc;
var G__21991 = cljs.core.rest(coll);
var G__21992 = break_QMARK_;
var G__21993 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__21990,G__21991,G__21992,G__21993) : cljs.js.run_async_BANG_(G__21990,G__21991,G__21992,G__21993));
}
});})(G__21988))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__21988,G__21989) : proc(G__21988,G__21989));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb(null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1);
}),names,cljs.core.cst$kw$error,cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$defs], null));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var fexpr__21994 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core$macros,"null",cljs.core.cst$sym$cljs$core,"null"], null), null);
return (fexpr__21994.cljs$core$IFn$_invoke$arity$1 ? fexpr__21994.cljs$core$IFn$_invoke$arity$1(name) : fexpr__21994(name));
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__21996 = arguments.length;
switch (G__21996) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__21997 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__21997);
} else {
return G__21997;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)," namespace"].join('')], 0));
} else {
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname)))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__22001 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name)], null);
var G__22002 = ((function (G__22001,env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__22003 = resource;
var map__22003__$1 = (((((!((map__22003 == null))))?(((((map__22003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22003):map__22003);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22003__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22003__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22003__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22003__$1,cljs.core.cst$kw$source_DASH_map);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22003__$1,cljs.core.cst$kw$file);
var pred__22005 = cljs.core.keyword_identical_QMARK_;
var expr__22006 = lang;
if(cljs.core.truth_((function (){var G__22008 = cljs.core.cst$kw$clj;
var G__22009 = expr__22006;
return (pred__22005.cljs$core$IFn$_invoke$arity$2 ? pred__22005.cljs$core$IFn$_invoke$arity$2(G__22008,G__22009) : pred__22005(G__22008,G__22009));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),((function (pred__22005,expr__22006,map__22003,map__22003__$1,lang,source,cache,source_map,file,G__22001,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__22010 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22010) : cb(G__22010));
}
});})(pred__22005,expr__22006,map__22003,map__22003__$1,lang,source,cache,source_map,file,G__22001,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__22011 = cljs.core.cst$kw$js;
var G__22012 = expr__22006;
return (pred__22005.cljs$core$IFn$_invoke$arity$2 ? pred__22005.cljs$core$IFn$_invoke$arity$2(G__22011,G__22012) : pred__22005(G__22011,G__22012));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__22005,expr__22006,map__22003,map__22003__$1,lang,source,cache,source_map,file,G__22001,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__22005,expr__22006,map__22003,map__22003__$1,lang,source,cache,source_map,file,G__22001,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var res__$2 = (function (){try{var fexpr__22014_22022 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__22014_22022.cljs$core$IFn$_invoke$arity$1 ? fexpr__22014_22022.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__22014_22022(resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e22013){var cause = e22013;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__22015 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22015) : cb(G__22015));
}
}
});})(pred__22005,expr__22006,map__22003,map__22003__$1,lang,source,cache,source_map,file,G__22001,env,bound_vars__$1,aname))
);
}
});})(pred__22005,expr__22006,map__22003,map__22003__$1,lang,source,cache,source_map,file,G__22001,env,bound_vars__$1,aname))
);
} else {
var G__22016 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22016) : cb(G__22016));
}
}
} else {
var G__22017 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__22018 = (cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns:cljs.core.cst$kw$undeclared_DASH_ns);
var G__22019 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__22018,G__22019) : cljs.analyzer.error_message(G__22018,G__22019));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22017) : cb(G__22017));
}
});})(G__22001,env,bound_vars__$1,aname))
;
var fexpr__22000 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__22000.cljs$core$IFn$_invoke$arity$2 ? fexpr__22000.cljs$core$IFn$_invoke$arity$2(G__22001,G__22002) : fexpr__22000(G__22001,G__22002));
}catch (e21998){var cause = e21998;
var G__21999 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__21999) : cb(G__21999));
}} else {
var G__22020 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22020) : cb(G__22020));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4120__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__22023){
var vec__22024 = p__22023;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22024,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22024,(1),null);
var entry = vec__22024;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(cljs.core.cst$kw$requires,true);

patch(cljs.core.cst$kw$require_DASH_macros,true);

patch(cljs.core.cst$kw$uses,false);

patch(cljs.core.cst$kw$use_DASH_macros,false);

patch_renames(cljs.core.cst$kw$renames);

return patch_renames(cljs.core.cst$kw$rename_DASH_macros);
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4120__auto__ = cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4120__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4120__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__22029 = arguments.length;
switch (G__22029) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__22030 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__22031 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?cljs.core.cst$sym$cljs$user:lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__22031;

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031){
return (function (p1__22027_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__22027_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031))
,deps)))){
var G__22032 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22032) : cb(G__22032));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns);
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
var G__22033 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22033) : cb(G__22033));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22030,_STAR_cljs_dep_set_STAR__temp_val__22031))
);
} else {
var G__22034 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22034) : cb(G__22034));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__22030;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__22038 = arguments.length;
switch (G__22038) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__22039 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__22040 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__22040;

try{var compiler = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040){
return (function (p1__22036_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__22036_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040))
,deps)))){
var G__22041 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22041) : cb(G__22041));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__22045 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null);
var G__22046 = ((function (G__22045,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not(resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5733__auto__,G__22045,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var G__22047 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22047) : cb(G__22047));
}
});})(cljs_dep,temp__5733__auto__,G__22045,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040))
);
} else {
var G__22048 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__22049 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__22050 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__22049,G__22050) : cljs.analyzer.error_message(G__22049,G__22050));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22048) : cb(G__22048));
}
} else {
var map__22051 = resource;
var map__22051__$1 = (((((!((map__22051 == null))))?(((((map__22051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22051):map__22051);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22051__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22051__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22051__$1,cljs.core.cst$kw$source);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22051__$1,cljs.core.cst$kw$file);
var pred__22053 = cljs.core.keyword_identical_QMARK_;
var expr__22054 = lang;
if(cljs.core.truth_((function (){var G__22056 = cljs.core.cst$kw$clj;
var G__22057 = expr__22054;
return (pred__22053.cljs$core$IFn$_invoke$arity$2 ? pred__22053.cljs$core$IFn$_invoke$arity$2(G__22056,G__22057) : pred__22053(G__22056,G__22057));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),((function (pred__22053,expr__22054,map__22051,map__22051__$1,name,lang,source,file,G__22045,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
}
});})(pred__22053,expr__22054,map__22051,map__22051__$1,name,lang,source,file,G__22045,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040))
);
} else {
if(cljs.core.truth_((function (){var G__22058 = cljs.core.cst$kw$js;
var G__22059 = expr__22054;
return (pred__22053.cljs$core$IFn$_invoke$arity$2 ? pred__22053.cljs$core$IFn$_invoke$arity$2(G__22058,G__22059) : pred__22053(G__22058,G__22059));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__22045,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22039,_STAR_cljs_dep_set_STAR__temp_val__22040))
;
var fexpr__22044 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__22044.cljs$core$IFn$_invoke$arity$2 ? fexpr__22044.cljs$core$IFn$_invoke$arity$2(G__22045,G__22046) : fexpr__22044(G__22045,G__22046));
}catch (e22042){var cause = e22042;
var G__22043 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22043) : cb(G__22043));
}} else {
var G__22060 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22060) : cb(G__22060));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__22039;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__4131__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload(k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.cst$kw$reload;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
var G__22062 = bound_vars;
var G__22063 = k__$1;
var G__22064 = cljs.core.next(macros);
var G__22065 = lib;
var G__22066 = reload;
var G__22067 = reloads;
var G__22068 = opts;
var G__22069 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__22062,G__22063,G__22064,G__22065,G__22066,G__22067,G__22068,G__22069) : cljs.js.load_macros(G__22062,G__22063,G__22064,G__22065,G__22066,G__22067,G__22068,G__22069));
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__22070 = bound_vars;
var G__22071 = k__$1;
var G__22072 = cljs.core.next(macros);
var G__22073 = lib;
var G__22074 = reload;
var G__22075 = reloads;
var G__22076 = opts;
var G__22077 = ((function (G__22070,G__22071,G__22072,G__22073,G__22074,G__22075,G__22076,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
var G__22078 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22078) : cb(G__22078));
}
});})(G__22070,G__22071,G__22072,G__22073,G__22074,G__22075,G__22076,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__22070,G__22071,G__22072,G__22073,G__22074,G__22075,G__22076,G__22077) : cljs.js.load_macros(G__22070,G__22071,G__22072,G__22073,G__22074,G__22075,G__22076,G__22077));
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__22079 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22079) : cb(G__22079));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__22083 = arguments.length;
switch (G__22083) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__22084 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22084,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22084,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22084,(2),null);
var rewrite_renames = ((function (vec__22084,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22084,uk,rk,renk){
return (function (acc,p__22087){
var vec__22088 = p__22087;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22088,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22088,(1),null);
var entry = vec__22088;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__22084,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__22084,uk,rk,renk))
;
var rewrite_deps = ((function (vec__22084,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__22084,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__22084,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__22084,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__22084,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__22080_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__22080_SHARP_);
});})(vec__22084,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__22084,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__22081_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__22081_SHARP_)], 0));
});})(vec__22084,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),cljs.core.cst$kw$deps,rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__22092,cenv){
var map__22093 = p__22092;
var map__22093__$1 = (((((!((map__22093 == null))))?(((((map__22093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22093):map__22093);
var ast = map__22093__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22093__$1,cljs.core.cst$kw$requires);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22093__$1,cljs.core.cst$kw$name);
var namespaces = cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__22093,map__22093__$1,ast,requires,name){
return (function (p__22095){
var vec__22096 = p__22095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,(1),null);
var map__22099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__22099__$1 = (((((!((map__22099 == null))))?(((((map__22099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22099):map__22099);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,cljs.core.cst$kw$require_DASH_macros);
var or__4131__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__22093,map__22093__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__22104 = arguments.length;
switch (G__22104) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__22105,opts,cb){
var map__22106 = p__22105;
var map__22106__$1 = (((((!((map__22106 == null))))?(((((map__22106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22106):map__22106);
var ast = map__22106__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22106__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__22108 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22108.cljs$core$IFn$_invoke$arity$1 ? fexpr__22108.cljs$core$IFn$_invoke$arity$1(op) : fexpr__22108(op));
})())){
var check_uses_and_load_macros = ((function (map__22106,map__22106__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__22130 = rewritten_ast;
var map__22130__$1 = (((((!((map__22130 == null))))?(((((map__22130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22130):map__22130);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22130__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22130__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22130__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22130__$1,cljs.core.cst$kw$reloads);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22130__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,name,reload,reloads,opts,((function (env,map__22130,map__22130__$1,uses,use_macros,reload,reloads,name,map__22106,map__22106__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var map__22132 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__22132__$1 = (((((!((map__22132 == null))))?(((((map__22132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22132):map__22132);
var rewritten_ast__$1 = map__22132__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22132__$1,cljs.core.cst$kw$require_DASH_macros);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,name,reload,reloads,opts,((function (map__22132,map__22132__$1,rewritten_ast__$1,require_macros,env,map__22130,map__22130__$1,uses,use_macros,reload,reloads,name,map__22106,map__22106__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb(res_SINGLEQUOTE_));
} else {
var map__22134 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__22134__$1 = (((((!((map__22134 == null))))?(((((map__22134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22134):map__22134);
var rewritten_ast__$2 = map__22134__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22134__$1,cljs.core.cst$kw$use_DASH_macros);
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__22137_22155 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__22138_22156 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__22139_22157 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__22140_22158 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__22139_22157;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22140_22158;

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22138_22156;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__22137_22155;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e22136){var cause = e22136;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb(res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__22143 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__22144 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__22145 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__22146 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__22145;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22146;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__22147 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22147) : cb(G__22147));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22144;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__22143;
}}catch (e22141){var cause = e22141;
var G__22142 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22142) : cb(G__22142));
}}
}
});})(map__22132,map__22132__$1,rewritten_ast__$1,require_macros,env,map__22130,map__22130__$1,uses,use_macros,reload,reloads,name,map__22106,map__22106__$1,ast,op))
);
}
});})(env,map__22130,map__22130__$1,uses,use_macros,reload,reloads,name,map__22106,map__22106__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(uses);
} else {
return and__4120__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__22150 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22150) : cb(G__22150));
}catch (e22148){var cause = e22148;
var G__22149 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22149) : cb(G__22149));
}}
}
});})(map__22106,map__22106__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = load;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})())){
var map__22151 = ast;
var map__22151__$1 = (((((!((map__22151 == null))))?(((((map__22151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22151):map__22151);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,cljs.core.cst$kw$reload);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,cljs.core.cst$kw$name);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,cljs.core.cst$kw$deps);
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4131__auto__ = cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__22151,map__22151__$1,reload,name,deps,map__22106,map__22106__$1,ast,op){
return (function (p1__22101_SHARP_){
return check_uses_and_load_macros(p1__22101_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__22101_SHARP_)));
});})(map__22151,map__22151__$1,reload,name,deps,map__22106,map__22106__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(load);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__22106,map__22106__$1,ast,op){
return (function (p1__22102_SHARP_){
return check_uses_and_load_macros(p1__22102_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__22102_SHARP_)));
});})(map__22106,map__22106__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),ast);

}
}
} else {
var G__22153 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22153) : cb(G__22153));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__22159_22179 = cljs.core.seq(deps);
var chunk__22160_22180 = null;
var count__22161_22181 = (0);
var i__22162_22182 = (0);
while(true){
if((i__22162_22182 < count__22161_22181)){
var dep_22183 = chunk__22160_22180.cljs$core$IIndexed$_nth$arity$2(null,i__22162_22182);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22171_22184 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22172_22185 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22173_22186 = true;
var _STAR_print_fn_STAR__temp_val__22174_22187 = ((function (seq__22159_22179,chunk__22160_22180,count__22161_22181,i__22162_22182,_STAR_print_newline_STAR__orig_val__22171_22184,_STAR_print_fn_STAR__orig_val__22172_22185,_STAR_print_newline_STAR__temp_val__22173_22186,sb__4661__auto__,dep_22183){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22159_22179,chunk__22160_22180,count__22161_22181,i__22162_22182,_STAR_print_newline_STAR__orig_val__22171_22184,_STAR_print_fn_STAR__orig_val__22172_22185,_STAR_print_newline_STAR__temp_val__22173_22186,sb__4661__auto__,dep_22183))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22173_22186;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22174_22187;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_22183)," = require('",dep_22183,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22172_22185;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22171_22184;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__22188 = seq__22159_22179;
var G__22189 = chunk__22160_22180;
var G__22190 = count__22161_22181;
var G__22191 = (i__22162_22182 + (1));
seq__22159_22179 = G__22188;
chunk__22160_22180 = G__22189;
count__22161_22181 = G__22190;
i__22162_22182 = G__22191;
continue;
} else {
var temp__5735__auto___22192 = cljs.core.seq(seq__22159_22179);
if(temp__5735__auto___22192){
var seq__22159_22193__$1 = temp__5735__auto___22192;
if(cljs.core.chunked_seq_QMARK_(seq__22159_22193__$1)){
var c__4550__auto___22194 = cljs.core.chunk_first(seq__22159_22193__$1);
var G__22195 = cljs.core.chunk_rest(seq__22159_22193__$1);
var G__22196 = c__4550__auto___22194;
var G__22197 = cljs.core.count(c__4550__auto___22194);
var G__22198 = (0);
seq__22159_22179 = G__22195;
chunk__22160_22180 = G__22196;
count__22161_22181 = G__22197;
i__22162_22182 = G__22198;
continue;
} else {
var dep_22199 = cljs.core.first(seq__22159_22193__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22175_22200 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22176_22201 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22177_22202 = true;
var _STAR_print_fn_STAR__temp_val__22178_22203 = ((function (seq__22159_22179,chunk__22160_22180,count__22161_22181,i__22162_22182,_STAR_print_newline_STAR__orig_val__22175_22200,_STAR_print_fn_STAR__orig_val__22176_22201,_STAR_print_newline_STAR__temp_val__22177_22202,sb__4661__auto__,dep_22199,seq__22159_22193__$1,temp__5735__auto___22192){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22159_22179,chunk__22160_22180,count__22161_22181,i__22162_22182,_STAR_print_newline_STAR__orig_val__22175_22200,_STAR_print_fn_STAR__orig_val__22176_22201,_STAR_print_newline_STAR__temp_val__22177_22202,sb__4661__auto__,dep_22199,seq__22159_22193__$1,temp__5735__auto___22192))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22177_22202;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22178_22203;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_22199)," = require('",dep_22199,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22176_22201;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22175_22200;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__22204 = cljs.core.next(seq__22159_22193__$1);
var G__22205 = null;
var G__22206 = (0);
var G__22207 = (0);
seq__22159_22179 = G__22204;
chunk__22160_22180 = G__22205;
count__22161_22181 = G__22206;
i__22162_22182 = G__22207;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__22208 = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__22208__$1 = (((((!((map__22208 == null))))?(((((map__22208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22208):map__22208);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var seq__22210_22238 = cljs.core.seq(deps);
var chunk__22211_22239 = null;
var count__22212_22240 = (0);
var i__22213_22241 = (0);
while(true){
if((i__22213_22241 < count__22212_22240)){
var dep_22242 = chunk__22211_22239.cljs$core$IIndexed$_nth$arity$2(null,i__22213_22241);
var map__22226_22243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_22242));
var map__22226_22244__$1 = (((((!((map__22226_22243 == null))))?(((((map__22226_22243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22226_22243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22226_22243):map__22226_22243);
var global_exports_22245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22226_22244__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22228_22246 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22229_22247 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22230_22248 = true;
var _STAR_print_fn_STAR__temp_val__22231_22249 = ((function (seq__22210_22238,chunk__22211_22239,count__22212_22240,i__22213_22241,_STAR_print_newline_STAR__orig_val__22228_22246,_STAR_print_fn_STAR__orig_val__22229_22247,_STAR_print_newline_STAR__temp_val__22230_22248,sb__4661__auto__,map__22226_22243,map__22226_22244__$1,global_exports_22245,dep_22242,map__22208,map__22208__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22210_22238,chunk__22211_22239,count__22212_22240,i__22213_22241,_STAR_print_newline_STAR__orig_val__22228_22246,_STAR_print_fn_STAR__orig_val__22229_22247,_STAR_print_newline_STAR__temp_val__22230_22248,sb__4661__auto__,map__22226_22243,map__22226_22244__$1,global_exports_22245,dep_22242,map__22208,map__22208__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22230_22248;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22231_22249;

try{cljs.compiler.emit_global_export(ns_name,global_exports_22245,dep_22242);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22229_22247;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22228_22246;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__22250 = seq__22210_22238;
var G__22251 = chunk__22211_22239;
var G__22252 = count__22212_22240;
var G__22253 = (i__22213_22241 + (1));
seq__22210_22238 = G__22250;
chunk__22211_22239 = G__22251;
count__22212_22240 = G__22252;
i__22213_22241 = G__22253;
continue;
} else {
var temp__5735__auto___22254 = cljs.core.seq(seq__22210_22238);
if(temp__5735__auto___22254){
var seq__22210_22255__$1 = temp__5735__auto___22254;
if(cljs.core.chunked_seq_QMARK_(seq__22210_22255__$1)){
var c__4550__auto___22256 = cljs.core.chunk_first(seq__22210_22255__$1);
var G__22257 = cljs.core.chunk_rest(seq__22210_22255__$1);
var G__22258 = c__4550__auto___22256;
var G__22259 = cljs.core.count(c__4550__auto___22256);
var G__22260 = (0);
seq__22210_22238 = G__22257;
chunk__22211_22239 = G__22258;
count__22212_22240 = G__22259;
i__22213_22241 = G__22260;
continue;
} else {
var dep_22261 = cljs.core.first(seq__22210_22255__$1);
var map__22232_22262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_22261));
var map__22232_22263__$1 = (((((!((map__22232_22262 == null))))?(((((map__22232_22262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22232_22262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22232_22262):map__22232_22262);
var global_exports_22264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232_22263__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22234_22265 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22235_22266 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22236_22267 = true;
var _STAR_print_fn_STAR__temp_val__22237_22268 = ((function (seq__22210_22238,chunk__22211_22239,count__22212_22240,i__22213_22241,_STAR_print_newline_STAR__orig_val__22234_22265,_STAR_print_fn_STAR__orig_val__22235_22266,_STAR_print_newline_STAR__temp_val__22236_22267,sb__4661__auto__,map__22232_22262,map__22232_22263__$1,global_exports_22264,dep_22261,seq__22210_22255__$1,temp__5735__auto___22254,map__22208,map__22208__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22210_22238,chunk__22211_22239,count__22212_22240,i__22213_22241,_STAR_print_newline_STAR__orig_val__22234_22265,_STAR_print_fn_STAR__orig_val__22235_22266,_STAR_print_newline_STAR__temp_val__22236_22267,sb__4661__auto__,map__22232_22262,map__22232_22263__$1,global_exports_22264,dep_22261,seq__22210_22255__$1,temp__5735__auto___22254,map__22208,map__22208__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22236_22267;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22237_22268;

try{cljs.compiler.emit_global_export(ns_name,global_exports_22264,dep_22261);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22235_22266;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22234_22265;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__22269 = cljs.core.next(seq__22210_22255__$1);
var G__22270 = null;
var G__22271 = (0);
var G__22272 = (0);
seq__22210_22238 = G__22269;
chunk__22211_22239 = G__22270;
count__22212_22240 = G__22271;
i__22213_22241 = G__22272;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22275 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22275,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22275;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__22276 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__22277 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__22278 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__22279 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__22280 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__22281 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__22282 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__22283 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__22284 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__22285 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__22286 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__22287 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__22288 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__22289 = ns;
var _STAR_checked_arrays_STAR__temp_val__22290 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__22291 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__22292 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__22293 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__22294 = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__22295 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__22296 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__22297 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__22298 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__22299 = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22288;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__22289;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__22290;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__22291;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__22292;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__22293;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__22294;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__22295;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__22296;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__22297;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__22298;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__22299;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e22300){var cause = e22300;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1(res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__22301 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22301__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22301,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22301);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22301__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22301__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22302){var cause = e22302;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1(res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__22304 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__22303 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22303.cljs$core$IFn$_invoke$arity$1 ? fexpr__22303.cljs$core$IFn$_invoke$arity$1(G__22304) : fexpr__22303(G__22304));
})())){
var G__22306 = bound_vars__$1;
var G__22307 = aenv__$1;
var G__22308 = ast;
var G__22309 = opts;
var G__22310 = ((function (G__22306,G__22307,G__22308,G__22309,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22276,_STAR_cljs_ns_STAR__orig_val__22277,_STAR_checked_arrays_STAR__orig_val__22278,_STAR_cljs_static_fns_STAR__orig_val__22279,_STAR_fn_invoke_direct_STAR__orig_val__22280,_STAR_ns_STAR__orig_val__22281,_STAR_passes_STAR__orig_val__22282,_STAR_alias_map_STAR__orig_val__22283,_STAR_data_readers_STAR__orig_val__22284,resolve_symbol_orig_val__22285,_STAR_source_map_data_STAR__orig_val__22286,_STAR_cljs_file_STAR__orig_val__22287,_STAR_compiler_STAR__temp_val__22288,_STAR_cljs_ns_STAR__temp_val__22289,_STAR_checked_arrays_STAR__temp_val__22290,_STAR_cljs_static_fns_STAR__temp_val__22291,_STAR_fn_invoke_direct_STAR__temp_val__22292,_STAR_ns_STAR__temp_val__22293,_STAR_passes_STAR__temp_val__22294,_STAR_alias_map_STAR__temp_val__22295,_STAR_data_readers_STAR__temp_val__22296,resolve_symbol_temp_val__22297,_STAR_source_map_data_STAR__temp_val__22298,_STAR_cljs_file_STAR__temp_val__22299,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1(res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});})(G__22306,G__22307,G__22308,G__22309,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22276,_STAR_cljs_ns_STAR__orig_val__22277,_STAR_checked_arrays_STAR__orig_val__22278,_STAR_cljs_static_fns_STAR__orig_val__22279,_STAR_fn_invoke_direct_STAR__orig_val__22280,_STAR_ns_STAR__orig_val__22281,_STAR_passes_STAR__orig_val__22282,_STAR_alias_map_STAR__orig_val__22283,_STAR_data_readers_STAR__orig_val__22284,resolve_symbol_orig_val__22285,_STAR_source_map_data_STAR__orig_val__22286,_STAR_cljs_file_STAR__orig_val__22287,_STAR_compiler_STAR__temp_val__22288,_STAR_cljs_ns_STAR__temp_val__22289,_STAR_checked_arrays_STAR__temp_val__22290,_STAR_cljs_static_fns_STAR__temp_val__22291,_STAR_fn_invoke_direct_STAR__temp_val__22292,_STAR_ns_STAR__temp_val__22293,_STAR_passes_STAR__temp_val__22294,_STAR_alias_map_STAR__temp_val__22295,_STAR_data_readers_STAR__temp_val__22296,resolve_symbol_temp_val__22297,_STAR_source_map_data_STAR__temp_val__22298,_STAR_cljs_file_STAR__temp_val__22299,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
;
var fexpr__22305 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__22305.cljs$core$IFn$_invoke$arity$5 ? fexpr__22305.cljs$core$IFn$_invoke$arity$5(G__22306,G__22307,G__22308,G__22309,G__22310) : fexpr__22305(G__22306,G__22307,G__22308,G__22309,G__22310));
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22276,_STAR_cljs_ns_STAR__orig_val__22277,_STAR_checked_arrays_STAR__orig_val__22278,_STAR_cljs_static_fns_STAR__orig_val__22279,_STAR_fn_invoke_direct_STAR__orig_val__22280,_STAR_ns_STAR__orig_val__22281,_STAR_passes_STAR__orig_val__22282,_STAR_alias_map_STAR__orig_val__22283,_STAR_data_readers_STAR__orig_val__22284,resolve_symbol_orig_val__22285,_STAR_source_map_data_STAR__orig_val__22286,_STAR_cljs_file_STAR__orig_val__22287,_STAR_compiler_STAR__temp_val__22288,_STAR_cljs_ns_STAR__temp_val__22289,_STAR_checked_arrays_STAR__temp_val__22290,_STAR_cljs_static_fns_STAR__temp_val__22291,_STAR_fn_invoke_direct_STAR__temp_val__22292,_STAR_ns_STAR__temp_val__22293,_STAR_passes_STAR__temp_val__22294,_STAR_alias_map_STAR__temp_val__22295,_STAR_data_readers_STAR__temp_val__22296,resolve_symbol_temp_val__22297,_STAR_source_map_data_STAR__temp_val__22298,_STAR_cljs_file_STAR__temp_val__22299,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22276,_STAR_cljs_ns_STAR__orig_val__22277,_STAR_checked_arrays_STAR__orig_val__22278,_STAR_cljs_static_fns_STAR__orig_val__22279,_STAR_fn_invoke_direct_STAR__orig_val__22280,_STAR_ns_STAR__orig_val__22281,_STAR_passes_STAR__orig_val__22282,_STAR_alias_map_STAR__orig_val__22283,_STAR_data_readers_STAR__orig_val__22284,resolve_symbol_orig_val__22285,_STAR_source_map_data_STAR__orig_val__22286,_STAR_cljs_file_STAR__orig_val__22287,_STAR_compiler_STAR__temp_val__22288,_STAR_cljs_ns_STAR__temp_val__22289,_STAR_checked_arrays_STAR__temp_val__22290,_STAR_cljs_static_fns_STAR__temp_val__22291,_STAR_fn_invoke_direct_STAR__temp_val__22292,_STAR_ns_STAR__temp_val__22293,_STAR_passes_STAR__temp_val__22294,_STAR_alias_map_STAR__temp_val__22295,_STAR_data_readers_STAR__temp_val__22296,resolve_symbol_temp_val__22297,_STAR_source_map_data_STAR__temp_val__22298,_STAR_cljs_file_STAR__temp_val__22299,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
var G__22311 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__22311) : cb__$1(G__22311));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__22287;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__22286;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__22285;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__22284;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__22283;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__22282;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__22281;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__22280;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__22279;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__22278;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__22277;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22276;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,the_ns], 0));
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__22313 = arguments.length;
switch (G__22313) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_passes_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22315 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22315,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22315;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__22316 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__22317 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__22318 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__22319 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__22320 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__22321 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__22322 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__22323 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__22324 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__22325 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__22326 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__22327 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__22328 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__22329 = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__22330 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__22331 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__22332 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__22333 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__22334 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__22335 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__22336 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__22337 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22327;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__22328;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__22329;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__22330;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__22331;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__22332;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__22333;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__22334;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__22335;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__22336;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__22337;

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__22338 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22338__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22338,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22338);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22338__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22338__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22339){var cause = e22339;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var vec__22340 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__22343 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__22343__$1 = (((((!((map__22343 == null))))?(((((map__22343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22343):map__22343);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22340,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22340,(1),null);
if(cljs.core.truth_((function (){var G__22346 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__22345 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22345.cljs$core$IFn$_invoke$arity$1 ? fexpr__22345.cljs$core$IFn$_invoke$arity$1(G__22346) : fexpr__22345(G__22346));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__22340,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22316,_STAR_eval_fn_STAR__orig_val__22317,_STAR_cljs_ns_STAR__orig_val__22318,_STAR_checked_arrays_STAR__orig_val__22319,_STAR_cljs_static_fns_STAR__orig_val__22320,_STAR_fn_invoke_direct_STAR__orig_val__22321,_STAR_ns_STAR__orig_val__22322,_STAR_alias_map_STAR__orig_val__22323,_STAR_data_readers_STAR__orig_val__22324,resolve_symbol_orig_val__22325,_STAR_source_map_data_STAR__orig_val__22326,_STAR_compiler_STAR__temp_val__22327,_STAR_eval_fn_STAR__temp_val__22328,_STAR_cljs_ns_STAR__temp_val__22329,_STAR_checked_arrays_STAR__temp_val__22330,_STAR_cljs_static_fns_STAR__temp_val__22331,_STAR_fn_invoke_direct_STAR__temp_val__22332,_STAR_ns_STAR__temp_val__22333,_STAR_alias_map_STAR__temp_val__22334,_STAR_data_readers_STAR__temp_val__22335,resolve_symbol_temp_val__22336,_STAR_source_map_data_STAR__temp_val__22337,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22347_22357 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22348_22358 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22349_22359 = true;
var _STAR_print_fn_STAR__temp_val__22350_22360 = ((function (_STAR_print_newline_STAR__orig_val__22347_22357,_STAR_print_fn_STAR__orig_val__22348_22358,_STAR_print_newline_STAR__temp_val__22349_22359,sb__4661__auto__,ns_name,sb,ast,vec__22340,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22316,_STAR_eval_fn_STAR__orig_val__22317,_STAR_cljs_ns_STAR__orig_val__22318,_STAR_checked_arrays_STAR__orig_val__22319,_STAR_cljs_static_fns_STAR__orig_val__22320,_STAR_fn_invoke_direct_STAR__orig_val__22321,_STAR_ns_STAR__orig_val__22322,_STAR_alias_map_STAR__orig_val__22323,_STAR_data_readers_STAR__orig_val__22324,resolve_symbol_orig_val__22325,_STAR_source_map_data_STAR__orig_val__22326,_STAR_compiler_STAR__temp_val__22327,_STAR_eval_fn_STAR__temp_val__22328,_STAR_cljs_ns_STAR__temp_val__22329,_STAR_checked_arrays_STAR__temp_val__22330,_STAR_cljs_static_fns_STAR__temp_val__22331,_STAR_fn_invoke_direct_STAR__temp_val__22332,_STAR_ns_STAR__temp_val__22333,_STAR_alias_map_STAR__temp_val__22334,_STAR_data_readers_STAR__temp_val__22335,resolve_symbol_temp_val__22336,_STAR_source_map_data_STAR__temp_val__22337,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22347_22357,_STAR_print_fn_STAR__orig_val__22348_22358,_STAR_print_newline_STAR__temp_val__22349_22359,sb__4661__auto__,ns_name,sb,ast,vec__22340,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22316,_STAR_eval_fn_STAR__orig_val__22317,_STAR_cljs_ns_STAR__orig_val__22318,_STAR_checked_arrays_STAR__orig_val__22319,_STAR_cljs_static_fns_STAR__orig_val__22320,_STAR_fn_invoke_direct_STAR__orig_val__22321,_STAR_ns_STAR__orig_val__22322,_STAR_alias_map_STAR__orig_val__22323,_STAR_data_readers_STAR__orig_val__22324,resolve_symbol_orig_val__22325,_STAR_source_map_data_STAR__orig_val__22326,_STAR_compiler_STAR__temp_val__22327,_STAR_eval_fn_STAR__temp_val__22328,_STAR_cljs_ns_STAR__temp_val__22329,_STAR_checked_arrays_STAR__temp_val__22330,_STAR_cljs_static_fns_STAR__temp_val__22331,_STAR_fn_invoke_direct_STAR__temp_val__22332,_STAR_ns_STAR__temp_val__22333,_STAR_alias_map_STAR__temp_val__22334,_STAR_data_readers_STAR__temp_val__22335,resolve_symbol_temp_val__22336,_STAR_source_map_data_STAR__temp_val__22337,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22349_22359;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22350_22360;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22348_22358;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22347_22357;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

var G__22351 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22351) : cb(G__22351));
}
});})(ast,vec__22340,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22316,_STAR_eval_fn_STAR__orig_val__22317,_STAR_cljs_ns_STAR__orig_val__22318,_STAR_checked_arrays_STAR__orig_val__22319,_STAR_cljs_static_fns_STAR__orig_val__22320,_STAR_fn_invoke_direct_STAR__orig_val__22321,_STAR_ns_STAR__orig_val__22322,_STAR_alias_map_STAR__orig_val__22323,_STAR_data_readers_STAR__orig_val__22324,resolve_symbol_orig_val__22325,_STAR_source_map_data_STAR__orig_val__22326,_STAR_compiler_STAR__temp_val__22327,_STAR_eval_fn_STAR__temp_val__22328,_STAR_cljs_ns_STAR__temp_val__22329,_STAR_checked_arrays_STAR__temp_val__22330,_STAR_cljs_static_fns_STAR__temp_val__22331,_STAR_fn_invoke_direct_STAR__temp_val__22332,_STAR_ns_STAR__temp_val__22333,_STAR_alias_map_STAR__temp_val__22334,_STAR_data_readers_STAR__temp_val__22335,resolve_symbol_temp_val__22336,_STAR_source_map_data_STAR__temp_val__22337,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22352_22361 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22353_22362 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22354_22363 = true;
var _STAR_print_fn_STAR__temp_val__22355_22364 = ((function (_STAR_print_newline_STAR__orig_val__22352_22361,_STAR_print_fn_STAR__orig_val__22353_22362,_STAR_print_newline_STAR__temp_val__22354_22363,sb__4661__auto__,ast,vec__22340,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22316,_STAR_eval_fn_STAR__orig_val__22317,_STAR_cljs_ns_STAR__orig_val__22318,_STAR_checked_arrays_STAR__orig_val__22319,_STAR_cljs_static_fns_STAR__orig_val__22320,_STAR_fn_invoke_direct_STAR__orig_val__22321,_STAR_ns_STAR__orig_val__22322,_STAR_alias_map_STAR__orig_val__22323,_STAR_data_readers_STAR__orig_val__22324,resolve_symbol_orig_val__22325,_STAR_source_map_data_STAR__orig_val__22326,_STAR_compiler_STAR__temp_val__22327,_STAR_eval_fn_STAR__temp_val__22328,_STAR_cljs_ns_STAR__temp_val__22329,_STAR_checked_arrays_STAR__temp_val__22330,_STAR_cljs_static_fns_STAR__temp_val__22331,_STAR_fn_invoke_direct_STAR__temp_val__22332,_STAR_ns_STAR__temp_val__22333,_STAR_alias_map_STAR__temp_val__22334,_STAR_data_readers_STAR__temp_val__22335,resolve_symbol_temp_val__22336,_STAR_source_map_data_STAR__temp_val__22337,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22352_22361,_STAR_print_fn_STAR__orig_val__22353_22362,_STAR_print_newline_STAR__temp_val__22354_22363,sb__4661__auto__,ast,vec__22340,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22316,_STAR_eval_fn_STAR__orig_val__22317,_STAR_cljs_ns_STAR__orig_val__22318,_STAR_checked_arrays_STAR__orig_val__22319,_STAR_cljs_static_fns_STAR__orig_val__22320,_STAR_fn_invoke_direct_STAR__orig_val__22321,_STAR_ns_STAR__orig_val__22322,_STAR_alias_map_STAR__orig_val__22323,_STAR_data_readers_STAR__orig_val__22324,resolve_symbol_orig_val__22325,_STAR_source_map_data_STAR__orig_val__22326,_STAR_compiler_STAR__temp_val__22327,_STAR_eval_fn_STAR__temp_val__22328,_STAR_cljs_ns_STAR__temp_val__22329,_STAR_checked_arrays_STAR__temp_val__22330,_STAR_cljs_static_fns_STAR__temp_val__22331,_STAR_fn_invoke_direct_STAR__temp_val__22332,_STAR_ns_STAR__temp_val__22333,_STAR_alias_map_STAR__temp_val__22334,_STAR_data_readers_STAR__temp_val__22335,resolve_symbol_temp_val__22336,_STAR_source_map_data_STAR__temp_val__22337,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22354_22363;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22355_22364;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22353_22362;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22352_22361;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var G__22356 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22356) : cb(G__22356));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__22326;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__22325;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__22324;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__22323;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__22322;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__22321;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__22320;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__22319;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__22318;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__22317;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22316;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__22366 = arguments.length;
switch (G__22366) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22370 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22370,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22370;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__22371 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__22372 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__22373 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__22374 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__22375 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__22376 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__22377 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__22378 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__22379 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__22380 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__22381 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__22382 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__22383 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__22384 = ns;
var _STAR_checked_arrays_STAR__temp_val__22385 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__22386 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__22387 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__22388 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__22389 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__22390 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__22391 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__22392 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22382;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__22383;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__22384;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__22385;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__22386;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__22387;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__22388;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__22389;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__22390;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__22391;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__22392;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e22393){var cause = e22393;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1(res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__22394 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22394__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22394,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22394);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22394__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22394__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22395){var cause = e22395;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1(res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__22396 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__22399 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__22399__$1 = (((((!((map__22399 == null))))?(((((map__22399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22399):map__22399);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22399__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22399__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22396,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22396,(1),null);
if(cljs.core.truth_((function (){var G__22402 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__22401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22401.cljs$core$IFn$_invoke$arity$1 ? fexpr__22401.cljs$core$IFn$_invoke$arity$1(G__22402) : fexpr__22401(G__22402));
})())){
var G__22404 = bound_vars__$1;
var G__22405 = aenv__$1;
var G__22406 = ast__$1;
var G__22407 = opts;
var G__22408 = ((function (G__22404,G__22405,G__22406,G__22407,ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1(res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22409_22418 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22410_22419 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22411_22420 = true;
var _STAR_print_fn_STAR__temp_val__22412_22421 = ((function (_STAR_print_newline_STAR__orig_val__22409_22418,_STAR_print_fn_STAR__orig_val__22410_22419,_STAR_print_newline_STAR__temp_val__22411_22420,sb__4661__auto__,ns_name,G__22404,G__22405,G__22406,G__22407,ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22409_22418,_STAR_print_fn_STAR__orig_val__22410_22419,_STAR_print_newline_STAR__temp_val__22411_22420,sb__4661__auto__,ns_name,G__22404,G__22405,G__22406,G__22407,ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22411_22420;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22412_22421;

try{cljs.compiler.emit(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22410_22419;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22409_22418;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});})(G__22404,G__22405,G__22406,G__22407,ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
var fexpr__22403 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__22403.cljs$core$IFn$_invoke$arity$5 ? fexpr__22403.cljs$core$IFn$_invoke$arity$5(G__22404,G__22405,G__22406,G__22407,G__22408) : fexpr__22403(G__22404,G__22405,G__22406,G__22407,G__22408));
} else {
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22413_22422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22414_22423 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22415_22424 = true;
var _STAR_print_fn_STAR__temp_val__22416_22425 = ((function (_STAR_print_newline_STAR__orig_val__22413_22422,_STAR_print_fn_STAR__orig_val__22414_22423,_STAR_print_newline_STAR__temp_val__22415_22424,sb__4661__auto__,ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22413_22422,_STAR_print_fn_STAR__orig_val__22414_22423,_STAR_print_newline_STAR__temp_val__22415_22424,sb__4661__auto__,ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22415_22424;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22416_22425;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22414_22423;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22413_22422;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

return ((function (ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
;})(ast,vec__22396,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22371,_STAR_eval_fn_STAR__orig_val__22372,_STAR_cljs_ns_STAR__orig_val__22373,_STAR_checked_arrays_STAR__orig_val__22374,_STAR_cljs_static_fns_STAR__orig_val__22375,_STAR_fn_invoke_direct_STAR__orig_val__22376,_STAR_ns_STAR__orig_val__22377,_STAR_alias_map_STAR__orig_val__22378,_STAR_data_readers_STAR__orig_val__22379,resolve_symbol_orig_val__22380,_STAR_source_map_data_STAR__orig_val__22381,_STAR_compiler_STAR__temp_val__22382,_STAR_eval_fn_STAR__temp_val__22383,_STAR_cljs_ns_STAR__temp_val__22384,_STAR_checked_arrays_STAR__temp_val__22385,_STAR_cljs_static_fns_STAR__temp_val__22386,_STAR_fn_invoke_direct_STAR__temp_val__22387,_STAR_ns_STAR__temp_val__22388,_STAR_alias_map_STAR__temp_val__22389,_STAR_data_readers_STAR__temp_val__22390,resolve_symbol_temp_val__22391,_STAR_source_map_data_STAR__temp_val__22392,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__22417 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__22417) : cb__$1(G__22417));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__22381;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__22380;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__22379;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__22378;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__22377;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__22376;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__22375;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__22374;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__22373;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__22372;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22371;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_ns], 0));
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__22427 = arguments.length;
switch (G__22427) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22431 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22431,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22431;
}
})();
var aname = (function (){var G__22432 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__22432);
} else {
return G__22432;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__22433 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__22434 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__22435 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__22436 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__22437 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__22438 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__22439 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__22440 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__22441 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__22442 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__22443 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__22444 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__22445 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__22446 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__22447 = ns;
var _STAR_checked_arrays_STAR__temp_val__22448 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__22449 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__22450 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__22451 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__22452 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__22453 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__22454 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__22455 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__22456 = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22445;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__22446;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__22447;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__22448;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__22449;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__22450;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__22451;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__22452;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__22453;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__22454;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__22455;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__22456;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e22457){var cause = e22457;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1(res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__22458 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__22458__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22458,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22458);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22458__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22458__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22459){var cause = e22459;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1(res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__22460 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__22463 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__22463__$1 = (((((!((map__22463 == null))))?(((((map__22463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22463):map__22463);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22463__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22463__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(1),null);
if(cljs.core.truth_((function (){var G__22466 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__22465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22465.cljs$core$IFn$_invoke$arity$1 ? fexpr__22465.cljs$core$IFn$_invoke$arity$1(G__22466) : fexpr__22465(G__22466));
})())){
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22467_22486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22468_22487 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22469_22488 = true;
var _STAR_print_fn_STAR__temp_val__22470_22489 = ((function (_STAR_print_newline_STAR__orig_val__22467_22486,_STAR_print_fn_STAR__orig_val__22468_22487,_STAR_print_newline_STAR__temp_val__22469_22488,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22467_22486,_STAR_print_fn_STAR__orig_val__22468_22487,_STAR_print_newline_STAR__temp_val__22469_22488,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22469_22488;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22470_22489;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22468_22487;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22467_22486;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

var G__22472 = true;
var G__22473 = bound_vars__$1;
var G__22474 = aenv__$1;
var G__22475 = ast__$1;
var G__22476 = opts;
var G__22477 = ((function (G__22472,G__22473,G__22474,G__22475,G__22476,ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1(res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$eval_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_SINGLEQUOTE_], 0));
}
});})(G__22472,G__22473,G__22474,G__22475,G__22476,ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var fexpr__22471 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__22471.cljs$core$IFn$_invoke$arity$6 ? fexpr__22471.cljs$core$IFn$_invoke$arity$6(G__22472,G__22473,G__22474,G__22475,G__22476,G__22477) : fexpr__22471(G__22472,G__22473,G__22474,G__22475,G__22476,G__22477));
} else {
var env__15276__auto___22490 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),cljs.core.cst$kw$options,opts);
var env__15276__auto___22491__$1 = ((cljs.core.map_QMARK_(env__15276__auto___22490))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__15276__auto___22490):(((((env__15276__auto___22490 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__15276__auto___22490)))))?env__15276__auto___22490:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__15276__auto___22490))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__22478_22492 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__22479_22493 = env__15276__auto___22491__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22479_22493;

try{sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22480_22494 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22481_22495 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22482_22496 = true;
var _STAR_print_fn_STAR__temp_val__22483_22497 = ((function (_STAR_print_newline_STAR__orig_val__22480_22494,_STAR_print_fn_STAR__orig_val__22481_22495,_STAR_print_newline_STAR__temp_val__22482_22496,sb__4661__auto__,_STAR_compiler_STAR__orig_val__22478_22492,_STAR_compiler_STAR__temp_val__22479_22493,env__15276__auto___22490,env__15276__auto___22491__$1,ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22480_22494,_STAR_print_fn_STAR__orig_val__22481_22495,_STAR_print_newline_STAR__temp_val__22482_22496,sb__4661__auto__,_STAR_compiler_STAR__orig_val__22478_22492,_STAR_compiler_STAR__temp_val__22479_22493,env__15276__auto___22490,env__15276__auto___22491__$1,ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22482_22496;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22483_22497;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22481_22495;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22480_22494;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22478_22492;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__22460,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$name,name,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1(res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_(evalm))], null);
}catch (e22484){var cause = e22484;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1(res__$2));
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__22433,_STAR_eval_fn_STAR__orig_val__22434,_STAR_cljs_ns_STAR__orig_val__22435,_STAR_checked_arrays_STAR__orig_val__22436,_STAR_cljs_static_fns_STAR__orig_val__22437,_STAR_fn_invoke_direct_STAR__orig_val__22438,_STAR_ns_STAR__orig_val__22439,_STAR_alias_map_STAR__orig_val__22440,_STAR_data_readers_STAR__orig_val__22441,resolve_symbol_orig_val__22442,_STAR_source_map_data_STAR__orig_val__22443,_STAR_cljs_file_STAR__orig_val__22444,_STAR_compiler_STAR__temp_val__22445,_STAR_eval_fn_STAR__temp_val__22446,_STAR_cljs_ns_STAR__temp_val__22447,_STAR_checked_arrays_STAR__temp_val__22448,_STAR_cljs_static_fns_STAR__temp_val__22449,_STAR_fn_invoke_direct_STAR__temp_val__22450,_STAR_ns_STAR__temp_val__22451,_STAR_alias_map_STAR__temp_val__22452,_STAR_data_readers_STAR__temp_val__22453,resolve_symbol_temp_val__22454,_STAR_source_map_data_STAR__temp_val__22455,_STAR_cljs_file_STAR__temp_val__22456,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5733__auto__ = cljs.core.cst$kw$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
var fexpr__22485 = cljs.js.trampoline_safe(f);
return (fexpr__22485.cljs$core$IFn$_invoke$arity$2 ? fexpr__22485.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__22485(evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__22444;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__22443;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__22442;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__22441;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__22440;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__22439;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__22438;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__22437;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__22436;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__22435;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__22434;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22433;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)], 0));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__22499 = arguments.length;
switch (G__22499) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_((0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_(cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.js.fn_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(cljs.js.fn_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
cljs.js.fn_refs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.js.fn_refs.cljs$core$IDeref$_deref$arity$1(null),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.js.get_fn(",cljs.js.put_fn(f),")"], 0));
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Function,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Var,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__22502 = arguments.length;
switch (G__22502) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2(form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var st_22507 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_22507,form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$context,cljs.core.cst$kw$expr,cljs.core.cst$kw$def_DASH_emits_DASH_var,true], null),((function (st_22507,result){
return (function (p__22503){
var map__22504 = p__22503;
var map__22504__$1 = (((((!((map__22504 == null))))?(((((map__22504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22504):map__22504);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22504__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22504__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
});})(st_22507,result))
);

return cljs.core.deref(result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;