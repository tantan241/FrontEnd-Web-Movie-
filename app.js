const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
function start() {
    const menuBtn = $('.content-menu')
    const appNavBtn = $('.app__nav')
    const overlay =$('.overlay')
    
    menuBtn.onclick = function() {
        appNavBtn.classList.add('appear')
        appNavBtn.style.display = 'block'
        overlay.style.display = 'block'
    }
    overlay.onclick = function() {
        appNavBtn.style.display = 'none'
        overlay.style.display = 'none'
    }
    showFilm()
}
function showFilm() {
    const listFilm = [{
        id: 1,
        name:'Spiderman Homecoming',
        yearProduction: 2020,
        rate: 7.4,
        pathImg: "https://play-lh.googleusercontent.com/dMTAGitXfQg2MRdBSzrB4H8xyUStxBTAtotAN8OOR7DH-Pk3ZZtQ8uuBdIfiDic5E4O0"

    },
    {
        id: 2,
        name:'Dragon Ball – 7 viên ngọc rồng',
        yearProduction: 2001,
        rate: 9,
        pathImg: "https://anhdepfree.com/wp-content/uploads/2019/07/hinh-anh-7-vien-ngoc-rong-dep-nhat-3.jpg"
    },
    {
        id: 3,
        name:'Dorenmon',
        yearProduction: 2020,
        rate: 10,
        pathImg: "https://msmobile.com.vn/upload_images/images/tai-hinh-nen-doremon-cho-may-tinh-5.jpg"
    },
    {
        id: 4,
        name:'Phù thủy tối thượng trong Đa Vũ trụ hổn loạn',
        yearProduction: 2022,
        rate: 10,
        pathImg: "https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/d/r/dr-strange-payoff-poster_1_.jpg"
    }
    ]
    const listFilmElement= $('.content-main__content-row')
    const html = listFilm.map(function(value) {
        return `<div class="col l-3 m-6 c-12 sm-gutter">
        <div class="content-main__item">
            <div class="content-main__img">
                <img src="${value.pathImg}" alt="">
                <div class="content-main__btn-add btn-add">
                    <i class="content-main__btn-add-icon btn-add-icon fa-solid fa-plus"></i>
                </div>
            </div>                             
            <h4 class="content-main__heading">${value.name}</h4>
            <div class="content-main__year-rate">
                <div class="content-main__year">${value.yearProduction}</div>
                <div class="content-main__rate">
                    <div class="content-main__rate-number">${value.rate}</div>
                    <i class="content-main__rate-icon fa-solid fa-star"></i>
                </div>
            </div>
            <div class="content-main__btn btn">
                Watch now 
                <i class="btn-icon fa-solid fa-circle-play"></i>
            </div>
        </div>                          
    </div> `
    })
    listFilmElement.innerHTML = html.join('')
}
start()