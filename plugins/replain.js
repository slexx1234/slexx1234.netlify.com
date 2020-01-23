export default () => {
    if (typeof window !== 'undefined') {
        window.replainSettings = {
            id: 'fdac243b-ebcc-492d-a50f-1810f8c60273'
        }

        let script = document.createElement('script')
        script.src = 'https://widget.replain.cc/dist/client.js'
        script.async = true
        document.head.appendChild(script)
    }
}

