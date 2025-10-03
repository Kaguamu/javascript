
// advanced.js — ~50 lines of advanced JavaScript utilities
// Features: async retry, async generator, Proxy observable, memoize (WeakMap), pipeline, curry

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
}

export default new Toolkit();
