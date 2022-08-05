window.addEventListener("scroll", function () {

    // const cont = document.getElementById("introduce");

    //main_view text 사라지는 효과
    const txt_line = document.querySelector(".text_line");
    let win_top = window.scrollY;

    if (win_top > 0) {
        txt_line.style.opacity = "0";
    } else {
        txt_line.style.opacity = "1";
    }

    const guide_top = document.getElementById("introduce").offsetTop;
    const mov_letter = document.querySelectorAll(".guide_big_box > h2");
    // const main_view = document.querySelector("#main_view");


    // if (win_top > guide_top/2){
    //     main_view.style.width = "200%";
    // }else{
    //     main_view.style= "";
    // }

    for (let l = 0; l < mov_letter.length; l++) {
        if (win_top > guide_top / 2) {
                mov_letter[0].style.transform = `translateX(-125%)`;
                mov_letter[1].style.transform = `translateX(50%)`;
                mov_letter[2].style.transform = `translateX(100%)`;
        } else {
            mov_letter[l].style = "";
        }
    }

    const guide_txt = document.querySelectorAll(".guide span");
    for(let s = 0; s < guide_txt.length; s++){
        if(win_top >= guide_top){
            guide_txt[s].style.transform= "translateY(0)";
        }else{
            guide_txt[s].style.transform= "translateY(120%)";
        }
    }


    const guide_img1 = document.querySelector(".guide_img1").offsetTop;
    const guide_img1_top = guide_img1 + guide_top;
    const guide_img_box1 = document.querySelector(".guide_img1 > div");
    const guide_over_1 = document.querySelector(".guide_over_1");

    const guide_img2 = document.querySelector(".guide_img2").offsetTop;
    const guide_img2_top = guide_img2 + guide_top;
    const guide_img_box2 = document.querySelector(".guide_img2 > div");
    const guide_over_2 = document.querySelector(".guide_over_2");

    if(win_top > guide_img1_top * 0.75){
        guide_img_box1.classList.remove("op_2");
        guide_over_1.style.transform = "translateY(-100%)";
    }else{
        guide_img_box1.classList.add("op_2");
        guide_over_1.style.transform = "translateY(0%)";
    }

    if(win_top > guide_img2_top * 0.85){
        guide_img_box2.classList.remove("op_2");
        guide_over_2.style.transform = "translateY(-100%)";
    }else{
        guide_img_box2.classList.add("op_2");
        guide_over_2.style.transform = "translateY(0%)";
    }


    const slide_wrap = document.getElementById("hotell_more");
    const slide = document.querySelector(".slide");
    const s_wid = slide.offsetWidth;
    const s_top = slide_wrap.offsetTop;
    const s_hei = slide_wrap.clientHeight;
    const s_li = slide.querySelectorAll("li");
    const s_li_he = s_li[0].clientHeight;
    const art_top = document.querySelector("#art").offsetTop;


    let mov = 0;
    let win_wid = window.innerWidth;
    let s_move_max = (s_wid - win_wid) * -1;

    let ratio = s_wid / s_hei;
    //높이와 넓이의 비율

    const color_ch = document.querySelectorAll(".color_ch");


    //가로스크롤 생성
    if (win_top > s_top) {
        for(let c = 0; c < color_ch.length; c++){
            color_ch[c].classList.add("white")
        }
        slide.classList.add("fix");
        slide_wrap.style.background = "black";

        let mov = -(win_top - s_top) * ratio;

        if (mov < s_move_max) {
            mov = s_move_max;
        }
        slide.style.transform = `translateX(${mov}px)`;
    } else {
        for(let c = 0; c < color_ch.length; c++){
            color_ch[c].classList.remove("white");
        }
        slide.classList.remove("fix");
        slide_wrap.style.background = "white";
        mov = 0;
        slide.style.transform = `translateX(${mov}px)`;
    }

    if (win_top >= art_top) {
        slide.classList.remove("fix");
    }

    const third_txt = document.querySelectorAll(".third_txt span");

    for(let t = 0; t < third_txt.length; t++){
        if(win_top >= s_top + (s_li_he * 2.75)){
            third_txt[t].style.top = "0";
            third_txt[t].style.opacity = "1";
            third_txt[t].style.transition = `${t}s` ;
        }else{
            third_txt[t].style = "";
            third_txt[t].style.transition = `${t}s` ;
        }
    }

    const fourth_txt = document.querySelectorAll(".fourth_txt span");
    const four_img = document.querySelector(".four_img");
    const four_over = document.querySelector(".four_over");

    for( let f = 0; f < fourth_txt.length; f++){
        if(win_top >= s_top + (s_li_he * 4.75)){
            fourth_txt[f].style.marginBottom = "0";
            four_img.style.opacity = "1";
            four_over.style.width = "0";
        }else{
            fourth_txt[f].style = " ";
            four_img.style.opacity = "0.3";
            four_over.style.width = "100%";
        }
    }

    const fifth_txt = document.querySelectorAll(".fifth_txt span");

    for( let i = 0; i < fifth_txt.length; i++){
        if(win_top >= s_top + (s_li_he * 6)){
            fifth_txt[i].style.top = "0";
            fifth_txt[i].style.opacity = "1";
            fifth_txt[i].style.transition = `${i}s` ;
        }else{
            fifth_txt[i].style = "";
            fifth_txt[i].style.transition = `${i}s` ;
        }
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

        if(win_top > art_top){
            menu_txt[i].classList.remove("white");
        }
    }

})