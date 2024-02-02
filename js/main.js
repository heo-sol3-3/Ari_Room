const wrap = document.querySelector("#wrap");
const contents = document.querySelectorAll("#container>section");
const headerWrap =document.querySelector(".header_wrap");
const lis = document.querySelectorAll(".gnb li");
const bts = document.querySelectorAll(".footer_btn>li");
const topBt = document.querySelector(".footer_btn>li.top");
const con2lis = document.querySelectorAll(".content2>ul>li");
const email = document.querySelector(".email");


let devHeight;
devHeight = window.innerHeight;
console.log(devHeight);

window.addEventListener('resize',()=>{
  devHeight = window.innerHeight;
});

for(let i=0; i<contents.length; i++){
  contents[i].style.height = `${devHeight}px`;
  contents[i].addEventListener("wheel",e=>{
    if(e.deltaY<0){
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      window.scroll({
        top:prev,
        left:0,
        behavior:"smooth"
      });
    }else if(e.deltaY>0){
      let next = e.currentTarget.nextElementSibling.offsetTop;
      window.scroll({
        top:next,
        left:0,
        behavior:"smooth"
      });
    }
  })
}

lis.forEach((li,i)=>{
  li.addEventListener("click",e=>{
    e.preventDefault();
    activation(i,lis);
    window.scroll({
      top:(i*devHeight),
      left:0,
      behavior:"smooth"
    });
  });
  window.addEventListener("scroll",e=>{
    let scrolls =document.querySelector("html").scrollTop;
    if(scrolls>=(i*devHeight) && scrolls<(i+1)*devHeight){
      activation(i,lis);
    }
    bts.forEach((bt,j)=>{
      if(scrolls<=150){
        wrap.classList.remove("black");
        headerWrap.classList.remove("on");
        headerWrap.classList.remove("black");
        contents[i].classList.remove("black");
        bt.classList.remove("on");
      }else{
        wrap.classList.add("black")
        headerWrap.classList.add("on");
        headerWrap.classList.add("black");
        contents[i].classList.add("black");
        bt.classList.add("on");
      }
    })
  })
})

topBt.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

for(let i=0;i<con2lis.length;i++){
  con2lis[i].style.background = `url("images/bg${i}.jpg") no-repeat`;
  con2lis[i].style.backgroundSize = `cover`;
}

email.addEventListener("click",e=>{
  e.preventDefault();
  navigator.clipboard.writeText("diarysamz3@gmail.com").then(()=>{
    alert("COPY OK!");
  })
})




function activation(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}