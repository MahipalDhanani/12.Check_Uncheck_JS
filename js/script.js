let all = document.getElementById("all");
let ch = document.getElementsByClassName("clk");

function allcheck(x) {
  for (let i = 0; i < ch.length; i++) {
    ch[i].checked = x.checked;
  }
}

for (let i = 0; i < ch.length; i++) {
  ch[i].addEventListener("change", () => {
    let sckil = document.querySelectorAll(".clk:checked");
    if (ch.length == sckil.length) {
      all.checked = true;
    } else {
      all.checked = false;
    }
  });
}

  // let one = document.getElementsByClassName('clk')
  // for(let i=0;i<one.length ;i++){
  //   one[i].addEventListener('change' , () => {
  //     let skl = document.querySelectorAll('.clk:checked');
  //     if(skl.length == one.length){
  //       all.checked = true;
  //     }
  //     else{
  //       all.checked = false;
  //     }
  //   })
  // }
