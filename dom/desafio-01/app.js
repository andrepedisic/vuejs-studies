new Vue({
    el: '#desafio',
    data: {
        name: 'André',
        age: 25,
        googleImage: 'https://cdn1-www.dogtime.com/assets/uploads/2018/06/sheep-ball-haircut-grooming-dog-japan-1.jpg'
    },
    methods: {
        multiplyAge(num) {
            return this.age * num
        },
        randomNum() {
            return Math.random()
        }

    }
})