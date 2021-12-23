Vue.createApp({
    data() {
        return {
            users:[],
            totalPages:0,
            img:[],
            num:1,
            numSearch:'',
            loopImg:[],
        }
    },
    methods: {
        async getUser(e) {

            const API = `https://api.instantwebtools.net/v1/passenger?page=${e-1}&size=20`;
            await axios
                .get(API)
                .then((response) => {
                    // handle success
                    this.users = response.data.data;

                    //totalPages = totalPages + 1 because it start from index 0
                    this.totalPages = response.data.totalPages + 1;

                    //loopBackgroundPic
                    const myPix = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
                        "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg");

                    for (let i = 0; i <= 19; i++) {
                        let pic = Math.floor(Math.random() * myPix.length);
                        this.img[i] = myPix[pic];
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

        },
        //page 1 in index 0
        currentPage() {
            this.getUser(this.num);
        },


        //btn-page
        page(e) {
            this.getUser(e);
            this.num = e;
            this.numSearch ='';
        },


        //for search page
        search() {
            this.num = this.numSearch;
            this.getUser(this.num);
        },


        //btn-next
        nextPage() {
            let page = this.num + 1;
            if (page > 966) {
                page = 966;
            }
            this.getUser(page);
            this.num = page;
            this.numSearch ='';
        },


        //btn-prev
        prevPage() {
            let page = this.num - 1;
            if (page < 0) {
                page = 0;
            }
            this.num = page;
            this.getUser(page);
            this.numSearch ='';
        }

    },
    //display currentpage
    mounted() {
        this.currentPage();
    },
}).mount('#middle');




















// <------Test----->

//     changePage(num) {
    //         let getUser = (pagination) => {
    //             const API = `https://api.instantwebtools.net/v1/passenger?page= ${num} &size=20`;
    //         axios
    //             .get(API)
    //             .then((response) => {
    //                 // handle success
    //                 this.users = response.data.data;
    //                 // console.log(this.users[0].airline[0].name);
    //             })
    //             .catch(function (error) {
    //                 // handle error
    //                 console.log(error);
    //             });
    //     }
    //     getUser();
    // }

