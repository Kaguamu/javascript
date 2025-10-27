
// Custom Error hierarchy
class AppError extends Error {
  constructor(message){ super(message); this.name=this.constructor.name; }
}
class ValidationError extends AppError {}
class NetworkError extends AppError {}

// Tagged template for safe HTML escaping
function safeHTML(strings, ...values){
  const escape = s => String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  return strings.reduce((out,str,i)=> out+str+(i<values.length?escape(values[i]):''), '');
}

// Iterator example
class Counter {
  constructor(limit){ this.limit=limit; }
  [Symbol.iterator](){
    let i=0, limit=this.limit;
    return { next(){ return {value:i++, done:i>limit}; } };
  }
}

// Async iterator example
async function* asyncCounter(n, delay=200){
  for (let i=0;i<n;i++){
    await new Promise(r=>setTimeout(r, delay));
    yield i;
  }
}

// Using Reflect API
function assignWithValidation(target, source){
  for (const key of Object.keys(source)){
    if(!Reflect.set(target, key, source[key])){
      throw new ValidationError(`Cannot set ${key}`);
    }
  }
  return target;
}

// Symbols for hidden properties
const secret = Symbol('secret');
class HiddenStore {
  constructor(value){ this[secret]=value; }
  getSecret(){ return this[secret]; }
}

// WeakRef + FinalizationRegistry
const registry = new FinalizationRegistry((held)=>{
  console.log(`Object with token ${held} has been collected.`);
});
function trackObject(obj, token){
  registry.register(obj, token);
  return new WeakRef(obj);
}

// Dynamic import example
async function loadMath(){
  const math = await import('./math.js');
  return math;
}

// Proxy trap logging
function createLoggingProxy(target){
  return new Proxy(target, {
    get(obj, prop, rec){
      console.log(`get ${String(prop)}`);
      return Reflect.get(obj, prop, rec);
    },
    set(obj, prop, val, rec){
      console.log(`set ${String(prop)}=${val}`);
      return Reflect.set(obj, prop, val, rec);
    }
  });
}

// Pipe with async support
const asyncPipe = (...fns)=>x=>fns.reduce((p,f)=>Promise.resolve(p).then(f), x);

// Object.freeze deep
function deepFreeze(obj){
  Object.freeze(obj);
  for(const k of Object.getOwnPropertyNames(obj)){
    if(obj[k]!==null && (typeof obj[k]==='object'||typeof obj[k]==='function') && !Object.isFrozen(obj[k])){
      deepFreeze(obj[k]);
    }
  }
  return obj;
}

// Using Intl API
function formatCurrency(num, locale='en-US', currency='USD'){
  return new Intl.NumberFormat(locale, {style:'currency', currency}).format(num);
}

export {
  AppError, ValidationError, NetworkError,
  safeHTML, Counter, asyncCounter,
  assignWithValidation, HiddenStore,
  trackObject, loadMath, createLoggingProxy,
  asyncPipe, deepFreeze, formatCurrency
};

