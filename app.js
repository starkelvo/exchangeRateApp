new Vue ({
    el: '#app',
    data() {
        return {
          currency: {},
          base: null
        }
      },
    created () {
        axios.get('https://api.exchangeratesapi.io/latest')
        .then((res) => {
            this.currency = res.data.rates
            this.base = res.data
        })
    }
})
