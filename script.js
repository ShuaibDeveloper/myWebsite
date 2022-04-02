//  ===========================================
// Creating a Portfolio tabbed component
// ======================================= 

let p_btns = document.querySelector('.p-btns');
let p_btn = document.querySelectorAll('.p-btn');
let img_overlay = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    let clicked_button = e.target;

    p_btn.forEach((ele)=>{
        ele.classList.remove("p-btn-active");
    });

    clicked_button.classList.add("p-btn-active");

    let btn_num = clicked_button.dataset.btnNumber;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    img_overlay.forEach((ele)=>{
        ele.classList.add("p-image-not-active");
    });

    img_active.forEach((ele)=>{
        ele.classList.remove("p-image-not-active");
    });
    
});
