// 节流
export function throttle(fn, wait = 500) {
  let lastTime = 0;
  return function (...args) {
    let now = new Date();
    if (now - lastTime > wait) {
      lastTime = now;
      fn(...args);
    }
  };
}

// 防抖
export function debounce(fn, wait = 500) {
  let timer = 0;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg);
    }, wait);
  };
}
