export default {
    namespaced: true,
    state: {
        sanpham: [{
            date: '28-7-2022',
            name: 'Quần Jeans Wash Scratch Simwood Denim 1579',
            inputmoney: '595,000₫',
            inputnumber:'3000',
            outputnumber:'2400',
            outputmoney:"900,000đ"
        },
        {
            date: '28-7-2022',
            name: 'Áo Thun Overspray Stencil Shapes 1568',
            inputmoney: '295,000₫',
            inputnumber:'3000',
            outputnumber:'2400',
            outputmoney:"900,000đ",
        },
        {
            date: '28-7-2022',
            name: 'Quần Shorts Light Blue Ripped Slimfit Simwood Denim 1547',
            inputmoney: '395,000₫ ',
            inputnumber:'3000',
            outputnumber:'2400',
            outputmoney:"900,000đ"
        },
        {
            date: '28-7-2022',
            name: 'Túi Xách 1137',
            inputmoney: '187,500₫',
            inputnumber:'3000',
            outputnumber:'2400',
            outputmoney:"900,000đ"
        }

    ],
    title:'Quản lý sản phẩm'
    },
    getters: {
      // Khai báo getters
    },
    mutations: {
        updatetitle(state){
            state.title='Đã thay đổi'
          }
    },
  }