const pickNumberBtn=document.getElementById("pickNumberBtn")
const lotterySheetContainer=document.getElementById("lotterySheetContainer")
const resultBtn=document.getElementById("result")
const tick=new Audio("sound.wav")
const congrats=new Audio("sound2.wav")
const gifts=[
    "₹100 cash",
    "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
]
pickNumberBtn.addEventListener("click",function(){
  for(let i=1;i<50;i++) {
    document.getElementById(i).classList.remove("winningBox")
  }
  resultBtn.textContent="Please Wait..."
  /*setTimeout(function() {
    let randomNum=Math.random()*50
    let drawNumber=Math.floor(randomNum)+1 
    const gift=gifts[drawNumber-1]
    resultBtn.textContent=`You got number ${drawNumber}!Congratulations, you just won ${gift}.`
    document.getElementById(drawNumber).classList.add("winningBox")
  },5000)*/
  let secondsCount =0
  const intervalId= setInterval(function() {
    tick.pause()
    tick.currentTime = 0
    tick.play()
    secondsCount=secondsCount +1
  const randomBox=Math.floor(Math.random() *50)+1
  console.log(randomBox)
  for(let i = 1;i <= 50;i++) {
    if(i === randomBox){
      document.getElementById(i).classList.add("highlightedBox")
    }else{
      document.getElementById(i).classList.remove("highlightedBox")
    }
  }

  if(secondsCount === 5) {
    let randomNum=Math.random()*50
    let drawNumber=Math.floor(randomNum)+1 
    const gift=gifts[drawNumber-1]
    resultBtn.textContent=`You got number ${drawNumber}!Congratulations, you just won ${gift}.`
    document.getElementById(randomBox).classList.remove("highlightedBox")
    document.getElementById(drawNumber).classList.add("winningBox")
    congrats.pause()
    congrats.currentTime = 0
    congrats.play()
    clearInterval(intervalId) 
  }
},1000)
})


gifts.forEach(function(value,i){
  //<div class="box">1.100 cash</div>
  const boxElement=`<div class="box" id=${i+1}>${i+1}.${value}</div>`
  console.log(boxElement)
  lotterySheetContainer.insertAdjacentHTML(("beforeend"),boxElement)
})