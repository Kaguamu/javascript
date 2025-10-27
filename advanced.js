class Toolkit {
  constructor() { this._cache = new WeakMap(); }

  // fetch with retry + AbortController
  async fetchWithRetry(url, {retries=3, delay=300, signal=null} = {}){
    const controller = new AbortController();
    if (signal) signal.addEventListener('abort', () => controller.abort());
    for (let i=0;i<retries;i++){
      try{
        const res = await fetch(url, {signal: controller.signal});
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      }catch(e){
        if (controller.signal.aborted) throw new Error('aborted');
        if (i===retries-1) throw e;
        await new Promise(r=>setTimeout(r, delay*(i+1)));
      }
    }
  }

  // async generator that yields paged APIs
  async *paged(apiFn, params={page:1}){
    let p = {...params};
    while (true){
      const {items, next} = await apiFn(p);
      for (const it of items) yield it;
      if (!next) break;
      p = next;
    }
  }

  // simple memoize using WeakMap for objects
  memoize(fn){
    const cache = this._cache;
    return function key(obj){
      if (typeof obj !== 'object' || obj === null) return fn(obj);
      if (cache.has(obj)) return cache.get(obj);
      const v = fn(obj); cache.set(obj, v); return v;
    };
  }

  // Observable via Proxy
  makeObservable(target, onChange){
    return new Proxy(target, {
      set(obj, prop, val){
        const prev = obj[prop]; obj[prop]=val; onChange(prop, val, prev); return true;
      }
    });
  }

  // small functional helpers
  compose(...fns){ return x => fns.reduceRight((v,f)=>f(v), x); }
  pipe(...fns){ return x => fns.reduce((v,f)=>f(v), x); }
  curry(fn){ return (...a)=> a.length>=fn.length ? fn(...a) : (...b)=>fn(...a,...b); }

  // Event Bus
  createEventBus(){
    const listeners = new Map();
    return {
      on(evt, fn){
        if (!listeners.has(evt)) listeners.set(evt, new Set());
        listeners.get(evt).add(fn);
      },
      off(evt, fn){
        listeners.get(evt)?.delete(fn);
      },
      emit(evt, ...args){
        listeners.get(evt)?.forEach(fn=>fn(...args));
      }
    };
  }

  // Debounce and Throttle
  debounce(fn, wait=200){
    let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), wait); };
  }
  throttle(fn, wait=200){
    let t=0; return (...a)=>{ const now=Date.now(); if (now-t>=wait){ t=now; fn(...a);} };
  }

  // Decorators
  once(fn){ let called=false, val; return (...a)=>{ if (!called){called=true; val=fn(...a);} return val; }; }
  log(fn){ return (...a)=>{ console.log(`Calling ${fn.name}`, a); return fn(...a); }; }

  // Deep Clone
  deepClone(obj, hash=new WeakMap()){
    if (Object(obj)!==obj) return obj;
    if (hash.has(obj)) return hash.get(obj);
    const res = Array.isArray(obj)? [] : obj.constructor?.prototype ? Object.create(Object.getPrototypeOf(obj)) : {};
    hash.set(obj, res);
    for (const k of Reflect.ownKeys(obj)) res[k] = this.deepClone(obj[k], hash);
    return res;
  }

  // Worker helper (inline)
  createWorker(fn){
    const blob = new Blob([`onmessage=${fn.toString()}`],{type:'text/javascript'});
    const worker = new Worker(URL.createObjectURL(blob));
    return worker;
  }

  // Timeout with Promise
  timeout(ms, val=null){
    return new Promise((res,rej)=>{
      const id=setTimeout(()=>res(val),ms);
      if (val instanceof Error) setTimeout(()=>rej(val), ms);
    });
  }

  // Async queue
  asyncQueue(){
    const q=[]; let running=false;
    const run=async()=>{
      if (running) return; running=true;
      while(q.length){ const {task,resolve,reject}=q.shift(); try{resolve(await task());}catch(e){reject(e);} }
      running=false;
    };
    return fn=>new Promise((resolve,reject)=>{ q.push({task:fn,resolve,reject}); run(); });
  }

  // Range generator
  *range(start,end,step=1){ for(let i=start;i<end;i+=step) yield i; }

  // Flatten array
  flatten(arr){ return arr.reduce((a,v)=>a.concat(Array.isArray(v)?this.flatten(v):v),[]); }

  // Unique by key
  uniqueBy(arr, key){ const seen=new Set(); return arr.filter(x=>{const k=key(x); if(seen.has(k)) return false; seen.add(k); return true;}); }
}

export default new Toolkit();

