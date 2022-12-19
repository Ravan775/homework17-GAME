if (confirm("Oyuna Başlamaq İstəyirsiniz?") == true) {
} 
else {
    window.close() 
}
var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        if (confirm("Oyun Bitdi! Yenidən başlamaq istəyirsiniz?") == true) {
        } 
        else {
           window.close() 
        }
        block.style.animation = "block 1s infinite linear";
    }
}, 10);