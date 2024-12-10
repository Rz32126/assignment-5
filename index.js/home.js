const donateBtns = document.querySelectorAll('.btn-donate')

const updateNavBalance = (amountBalance) => {
    const navBalance = parseFloat(document.getElementById('current-bdt').innerText);
    
    const leftBalance = navBalance-amountBalance;
    document.getElementById("current-bdt").innerText = leftBalance.toFixed(2);
}

const addHistory = (amountBalance,cardTitle) => {
   const historySection = document.getElementById("history-show")

   const history = document.createElement("div");
   history.classList.add("border", "p-4", "mx-20");
   history.innerHTML= `
   <h1 class="font-semibold">TItle: ${cardTitle}</h1>
   <p>Donation Amount: ${amountBalance}</p>
   <p>Date: ${new Date().toLocaleString()}</p>
   
   `;

   historySection.appendChild(history);
}

const handleDonate = (button) => {
   const cardElement = button.closest(".card");
   const amountBalance = parseFloat(cardElement.querySelector('.input').value);

   const navBalance = parseFloat(document.getElementById('current-bdt').innerText);

   if(isNaN(amountBalance) || amountBalance <= 0 || navBalance < amountBalance) {
      alert("Invalid Donation Amount")
      return;
   }

   updateNavBalance(amountBalance);

   const cardBalance = parseFloat(cardElement.querySelector(".count-input").innerText);

   const newCardBalance = cardBalance + amountBalance
   cardElement.querySelector(".count-input").innerText = newCardBalance.toFixed(2);


   const cardTitle = cardElement.querySelector(".title").innerText;
   console.log(cardTitle)

   addHistory(amountBalance, cardTitle);

   cardElement.querySelector(".input").value = "";
 
};
donateBtns.forEach((btn) => {
   btn.addEventListener('click', (e)=> {
      handleDonate(e.target);
   });
});

document.getElementById("btn-history").addEventListener('click',() => {
   document.getElementById("btn-donation").classList.remove("active");
   document.getElementById("btn-history").classList.add("active");
   document.getElementById("body-card").classList.add("hidden");
   document.getElementById("history-show").classList.remove("hidden");


});

document.getElementById("btn-donation").addEventListener("click", () => {
   document.getElementById("btn-donation").classList.add("active");
   document.getElementById("btn-history").classList.remove("active");
   document.getElementById("body-card").classList.remove("hidden");
   document.getElementById("history-show").classList.add("hidden");
});


//  for (const element of donateBtns) {
//    console.log(element)
//  }
// // const donationTab = document.getElementById('btn-donation')

document.getElementById('btn-blog')
   .addEventListener('click', function(event){
   window.location.href = './home.html'
   });
// document.getElementById('btn-blog-one')
//   .addEventListener('click', function(event){
//    window.location.href = './index.html'
//   });

// donationTab.addEventListener('click', function(event){
//    document.getElementById('history-show').classList.add('hidden');
// })   

//    // history functionality

// const historyTab = document.getElementById('btn-history')
// historyTab.addEventListener('click', function(event){

//    historyTab.classList.add('bg-lime-300','w-40','h-14');

//    donationTab.classList.remove('bg-lime-300','w-40','h-14');
//    const getDonate = document.getElementById('input-donate').value;
//    const getDonateNumber = parseFloat(getDonate);
//    document.getElementById('input-donate').value = getDonateNumber;


//    const historyList = document.getElementById("div");
//    historyList.className = "bg-white border";
//      historyList.innerHTML=`
//       <p>${getDonateNumber}</p>
//       <p>${new Date().toLocaleTimeString()}</p>
     
//      `
//    const historyItem = document.getElementById('history-show');
   
//    historyItem.insertBefore(historyList, historyItem.firstChild);
//    document.getElementById('history-show').classList.remove('hidden');
//    document.getElementById('one-div').classList.add('hidden')

   
// });

//  document.getElementById('main-donate-button')
//    .addEventListener('click', function(event){

//    const getDonate = document.getElementById('input-donate').value;
//    const inputCount = document.getElementById('count-input').innerText;
//    const getDonateNumber = parseFloat(getDonate);
//    const inputCountNumber = parseFloat(inputCount);
//    const totalDonate = getDonateNumber + inputCountNumber;
   

//    document.getElementById('count-input').innerText = totalDonate;

//    const currentBalance = document.getElementById('current-bdt').innerText;
//    const currentBalanceNumber = parseFloat(currentBalance);

//    const newBalance = currentBalanceNumber - getDonateNumber;
   
//    document.getElementById('current-bdt').innerText = newBalance;


//    // if(getDonateNumber < 0 && getDonateNumber === 'string'){
//    //    return('Alert! put amount')
//    // }

//    });

