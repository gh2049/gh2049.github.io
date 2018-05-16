(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{50:function(n,e,r){"use strict";r.r(e);var t=r(0),o=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"content"},[e("p",[this._v("co 是一个 generator执行器（遍历器），是TJ大婶发布的一个包，理解 co 帮助我们更好的理解 generator生成器 的概念")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n/**\n * slice() reference.\n */\n\nvar slice = Array.prototype.slice;\n\n/**\n * Expose `co`.\n */\n\nmodule.exports = co['default'] = co.co = co;\n\n/**\n * Wrap the given generator `fn` into a\n * function that returns a promise.\n * This is a separate function so that\n * every `co()` call doesn't create a new,\n * unnecessary closure.\n *\n * @param {GeneratorFunction} fn\n * @return {Function}\n * @api public\n */\n\nco.wrap = function (fn) {\n  createPromise.__generatorFunction__ = fn;\n  return createPromise;\n  function createPromise() {\n    return co.call(this, fn.apply(this, arguments));\n  }\n};\n\n/**\n * Execute the generator function or a generator\n * and return a promise.\n *\n * @param {Function} fn\n * @return {Promise}\n * @api public\n */\n\nfunction co(gen) {\n  var ctx = this;\n  var args = slice.call(arguments, 1)\n\n  // we wrap everything in a promise to avoid promise chaining,\n  // which leads to memory leak errors.\n  // see https://github.com/tj/co/issues/180\n  return new Promise(function(resolve, reject) {\n    if (typeof gen === 'function') gen = gen.apply(ctx, args);\n    if (!gen || typeof gen.next !== 'function') return resolve(gen);\n\n    onFulfilled();\n\n    /**\n     * @param {Mixed} res\n     * @return {Promise}\n     * @api private\n     */\n\n    function onFulfilled(res) {\n      var ret;\n      try {\n        ret = gen.next(res);\n      } catch (e) {\n        return reject(e);\n      }\n      next(ret);\n    }\n\n    /**\n     * @param {Error} err\n     * @return {Promise}\n     * @api private\n     */\n\n    function onRejected(err) {\n      var ret;\n      try {\n        ret = gen.throw(err);\n      } catch (e) {\n        return reject(e);\n      }\n      next(ret);\n    }\n\n    /**\n     * Get the next value in the generator,\n     * return a promise.\n     *\n     * @param {Object} ret\n     * @return {Promise}\n     * @api private\n     */\n\n    function next(ret) {\n      if (ret.done) return resolve(ret.value);\n      var value = toPromise.call(ctx, ret.value);\n      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);\n      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '\n        + 'but the following object was passed: \"' + String(ret.value) + '\"'));\n    }\n  });\n}\n\n/**\n * Convert a `yield`ed value into a promise.\n *\n * @param {Mixed} obj\n * @return {Promise}\n * @api private\n */\n\nfunction toPromise(obj) {\n  if (!obj) return obj;\n  if (isPromise(obj)) return obj;\n  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);\n  if ('function' == typeof obj) return thunkToPromise.call(this, obj);\n  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);\n  if (isObject(obj)) return objectToPromise.call(this, obj);\n  return obj;\n}\n\n/**\n * Convert a thunk to a promise.\n *\n * @param {Function}\n * @return {Promise}\n * @api private\n */\n\nfunction thunkToPromise(fn) {\n  var ctx = this;\n  return new Promise(function (resolve, reject) {\n    fn.call(ctx, function (err, res) {\n      if (err) return reject(err);\n      if (arguments.length > 2) res = slice.call(arguments, 1);\n      resolve(res);\n    });\n  });\n}\n\n/**\n * Convert an array of \"yieldables\" to a promise.\n * Uses `Promise.all()` internally.\n *\n * @param {Array} obj\n * @return {Promise}\n * @api private\n */\n\nfunction arrayToPromise(obj) {\n  return Promise.all(obj.map(toPromise, this));\n}\n\n/**\n * Convert an object of \"yieldables\" to a promise.\n * Uses `Promise.all()` internally.\n *\n * @param {Object} obj\n * @return {Promise}\n * @api private\n */\n\nfunction objectToPromise(obj){\n  var results = new obj.constructor();\n  var keys = Object.keys(obj);\n  var promises = [];\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    var promise = toPromise.call(this, obj[key]);\n    if (promise && isPromise(promise)) defer(promise, key);\n    else results[key] = obj[key];\n  }\n  return Promise.all(promises).then(function () {\n    return results;\n  });\n\n  function defer(promise, key) {\n    // predefine the key in the result\n    results[key] = undefined;\n    promises.push(promise.then(function (res) {\n      results[key] = res;\n    }));\n  }\n}\n\n/**\n * Check if `obj` is a promise.\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\n\nfunction isPromise(obj) {\n  return 'function' == typeof obj.then;\n}\n\n/**\n * Check if `obj` is a generator.\n *\n * @param {Mixed} obj\n * @return {Boolean}\n * @api private\n */\n\nfunction isGenerator(obj) {\n  return 'function' == typeof obj.next && 'function' == typeof obj.throw;\n}\n\n/**\n * Check if `obj` is a generator function.\n *\n * @param {Mixed} obj\n * @return {Boolean}\n * @api private\n */\nfunction isGeneratorFunction(obj) {\n  var constructor = obj.constructor;\n  if (!constructor) return false;\n  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;\n  return isGenerator(constructor.prototype);\n}\n\n/**\n * Check for plain object.\n *\n * @param {Mixed} val\n * @return {Boolean}\n * @api private\n */\n\nfunction isObject(val) {\n  return Object == val.constructor;\n}\n")])])])}],!1,null,null,null);e.default=o.exports}}]);