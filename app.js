const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand();}
let balance=2.37;
const owned=new Set([1]);
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.getElementById(b.dataset.target).classList.add("active")});
document.getElementById("close").onclick=()=>tg?.close();
document.querySelectorAll(".buy").forEach(b=>b.onclick=()=>{
 const id=+b.dataset.id,price=+b.dataset.price;
 if(owned.has(id))return;
 if(balance<price){b.textContent="INSUFFICIENT BALANCE";setTimeout(()=>b.textContent=`BUY • ₮ ${price.toFixed(2)}`,1500);tg?.HapticFeedback?.notificationOccurred("error");return}
 balance-=price;owned.add(id);b.classList.add("owned");b.textContent="OWNED • MINING ACTIVE";document.getElementById("balance").textContent=balance.toFixed(2);tg?.HapticFeedback?.notificationOccurred("success");
});
async function copy(id,btn){try{await navigator.clipboard.writeText(document.getElementById(id).value)}catch(e){}let t=btn.textContent;btn.textContent="COPIED";setTimeout(()=>btn.textContent=t,1000)}
