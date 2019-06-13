export const wait = timout => new Promise(((resolve) => {
    window.setTimeout(resolve, timout || 1000);
}));
