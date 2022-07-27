window.addEventListener("scroll", function () {

    // const cont = document.getElementById("introduce");

    const txt_line = document.querySelector(".text_line");
    let win_top = window.scrollY;

    if (win_top > 100) {
        txt_line.style.opacity = "0";
    } else {
        txt_line.style.opacity = "1";
    }

    const guide_top = document.getElementById("introduce").offsetTop;
    const mov_letter = document.querySelectorAll(".guide_big_box > h2");


    for (let l = 0; l < mov_letter.length; l++) {
        if (win_top > guide_top / 2) {
                mov_letter[0].style.transform = `translateX(-100%)`;
                mov_letter[1].style.transform = `translateX(50%)`;
                mov_letter[2].style.transform = `translateX(100%)`;
        } else {
            mov_letter[l].style = "";
        }
    }

    const slide_wrap = document.getElementById("hotell_more");
    const slide = document.querySelector(".slide");
    const s_wid = slide.offsetWidth;
    const s_top = slide_wrap.offsetTop;
    const s_hei = slide_wrap.clientHeight;
    const s_li = slide.children;
    const room_top = document.querySelector("#room").offsetTop;


    let mov = 0;
    let win_wid = window.innerWidth;
    let s_move_max = (s_wid - win_wid) * -1;

    let ratio = s_wid / s_hei;
    //높이와 넓이의 비율


    //가로스크롤 생성
    if (win_top > s_top) {
        slide.classList.add("fix");

        let mov = -(win_top - s_top) * ratio;

        if (mov < s_move_max) {
            mov = s_move_max;
        }
        slide.style.transform = `translateX(${mov}px)`;
    } else {
        slide.classList.remove("fix");
        mov = 0;
        slide.style.transform = `translateX(${mov}px)`;
    }

    if (win_top >= room_top) {
        slide.classList.remove("fix");
    }


    const one_hei = document.querySelector("#main_view").clientHeight;
    const menu_txt = document.querySelectorAll(".menu_txt");

    for (let i = 0; i < menu_txt.length; i++) {
        if (win_top > one_hei) {
            menu_txt[i].classList.add("black");
        } else {
            menu_txt[i].classList.remove("black");
        }

        if (win_top > s_top) {
            menu_txt[i].classList.add("white");
        } else {
            menu_txt[i].classList.remove("white");
        }
    }

})