export default () => {
    if (typeof window !== 'undefined') {
        window.replainSettings = {
            id: '12cf97f9-909e-440d-9409-b8918c34eb1d'
        }

        let script = document.createElement('script')
        script.src = 'https://widget.replain.cc/dist/client.js'
        script.async = true
        document.head.appendChild(script)
    }
}

