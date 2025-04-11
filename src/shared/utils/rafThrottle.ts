export const rafThrottle = function <T extends (...args: any[]) => void>(fn: T) {
    let isRunning = false;

    return function(this: any, ...args: Parameters<T>) {
        if (isRunning) return;

        isRunning = true;

        requestAnimationFrame(() => {
            fn.apply(this, args);
            isRunning = false;
        });
    };
};