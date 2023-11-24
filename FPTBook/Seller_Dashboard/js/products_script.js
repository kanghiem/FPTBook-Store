const select_categoryBtn=document.querySelector(".select-category-btn"),
      select_quantityBtn = document.querySelector(".select-quantity-btn"),
      select_priceBtn = document.querySelector(".select-price-btn"),
      items = document.querySelectorAll(".item");

      console.log(select_categoryBtn,select_quantityBtn,select_priceBtn,items);
select_categoryBtn.addEventListener("click",()=>{
    select_categoryBtn.classList.toggle("open");

});

select_quantityBtn.addEventListener("click",()=>{
    select_quantityBtn.classList.toggle("open");

});
select_priceBtn.addEventListener("click",()=>{
    select_priceBtn.classList.toggle("open");

});
items.forEach(item=>{
    item.addEventListener("click",()=>{
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
              btnText= document.querySelector(".btn-text");

              if(checked && checked.length > 0){
                console.log("valid")
              }else{
                console.log("invalid")
              }
    })
});



