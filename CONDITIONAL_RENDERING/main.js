const app = Vue.createApp({
    data() {
        return {
            product: "sunglasses",
            quantity: 120,
            sale: true,
        }

    },
    methods: {
    }
})


const mountedApp = app.mount("#app")