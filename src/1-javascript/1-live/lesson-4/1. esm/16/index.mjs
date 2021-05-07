(async () => {
    const a = await import('./math-constants.mjs');

    // const a = await import('./Login.mjs'); // /login
    // const a = await import('./Dashboard.mjs');
    // const a = await import('./Profile.mjs');

    console.log(a);
})();
