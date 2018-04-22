export default ({ app: { router } }) => {
    let ready = false;

    router.onReady(() => {
        // Mark when the router has completed the initial navigation.
        ready = true
    });

    if (process.browser && process.env.NODE_ENV !== 'development') {
        try {
            window.yandexCounter = new Ya.Metrika({
                id: 48605600,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            });
        } catch (e) {}

        router.afterEach((to, from) => {
            if (!ready) {
                return
            }
            try {
                window.yandexCounter.hit(to.fullPath, {
                    referer: from.fullPath
                })
            } catch (e) {}
        });
    }
}
