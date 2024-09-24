document.getElementById('btn-blog')
   .addEventListener('click', function(event){
   window.location.href = '/home.html'
   });

   // history functionality

const historyTab = document.getElementById('btn-history')
const donationTab = document.getElementById('btn-donation')
historyTab.addEventListener('click', function(event){
// donationTab.addEventListener('click');
   historyTab.classList.add('bg-lime-300','w-40','h-14');

   donationTab.classList.remove('bg-lime-300','w-40','h-14');


   });