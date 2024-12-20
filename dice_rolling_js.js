function rollDice(){
    const entered = document.getElementById("myI").value;
    const result1 = document.getElementById("result");
    const imgresult = document.getElementById("resultimg");
    const val=[];
    const img=[];
    for(let i = 0;i<entered;i++){
        let x = Math.ceil(Math.random()*6);
        val.push(x);
        img.push(`<img src="dice_imgs/d${x}.png" alt="Dice ${x}" style="width:50px;height:50px;">`);
    }
    result1.textContent = `Dice: ${val.join(', ')}`;
    imgresult.innerHTML = img.join(`    `);
}