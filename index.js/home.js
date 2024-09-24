const donationTab = document.getElementById('btn-donation')

document.getElementById('btn-blog')
   .addEventListener('click', function(event){
   window.location.href = '/home.html'
   });

donationTab.addEventListener('click', function(event){
   document.getElementById('history-show').classList.add('hidden');
})   

   // history functionality

const historyTab = document.getElementById('btn-history')
historyTab.addEventListener('click', function(event){

   historyTab.classList.add('bg-lime-300','w-40','h-14');

   donationTab.classList.remove('bg-lime-300','w-40','h-14');
   const getDonate = document.getElementById('input-donate').value;
   const getDonateNumber = parseFloat(getDonate);
   document.getElementById('input-donate').value = getDonateNumber;


   const historyList = document.getElementById("div");
   historyList.className = "bg-white border";
     historyList.innerHTML=`
      <p>${getDonateNumber}</p>
      <p>${new Date().toLocaleTimeString()}</p>
     
     `
   const historyItem = document.getElementById('history-show');
   
   historyItem.insertBefore(historyList, historyItem.firstChild);
   document.getElementById('history-show').classList.remove('hidden');
   document.getElementById('one-div').classList.add('hidden')

   
});

 document.getElementById('main-donate-button')
   .addEventListener('click', function(event){

   const getDonate = document.getElementById('input-donate').value;
   const inputCount = document.getElementById('count-input').innerText;
   const getDonateNumber = parseFloat(getDonate);
   const inputCountNumber = parseFloat(inputCount);
   const totalDonate = getDonateNumber + inputCountNumber;
   

   document.getElementById('count-input').innerText = totalDonate;

   const currentBalance = document.getElementById('current-bdt').innerText;
   const currentBalanceNumber = parseFloat(currentBalance);

   const newBalance = currentBalanceNumber - getDonateNumber;
   
   document.getElementById('current-bdt').innerText = newBalance;


   // if(getDonateNumber < 0 && getDonateNumber === 'string'){
   //    return('Alert! put amount')
   // }

   });

