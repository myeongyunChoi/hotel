if (window.matchMedia("(min-width: 1300px)").matches) {
    window.onload = function () {
        const main_clip = document.querySelector(".main_overlay");
        const txt_line = document.querySelector(".text_line");
        const over_txt = document.querySelector(".over_txt");
        const menu_txt = document.querySelectorAll(".menu_txt");

        txt_line.style.opacity = `0`;

        for (let i = 0; i < menu_txt.length; i++) {
            menu_txt[i].classList.add("black");
        }

        setTimeout(function () {
            over_txt.style.opacity = `1`;
        }, 750);

        setTimeout(function () {
            over_txt.style.opacity = `0`;
            main_clip.style.width = `100%`;
            main_clip.style.height = `100%`;
            main_clip.style.clipPath = `polygon(0 0, 100% 0%, 100% 100%, 0% 100%)`;
        }, 2700);

        setTimeout(function () {
            txt_line.style.opacity = `1`;
            for (let i = 0; i < menu_txt.length; i++) {
                menu_txt[i].classList.remove("black");
            }
        }, 3700);
    }
}