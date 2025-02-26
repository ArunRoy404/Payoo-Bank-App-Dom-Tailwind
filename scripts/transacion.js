function setTransaction(type, amount){
    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });   
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="flex items-center justify-between bg-white border-2 rounded-xl px-4 py-3">
            <div class="flex items-center">
                <div>
                    <img class="p-3 mr-2 bg-[#F4F5F7] rounded-full" src="assets/wallet1.png" alt="">
                </div>
                <div>
                    <h1>${type} <span class="text-[#08080880]">Time: ${currentTime}</span></h1>
                    <p>$${amount}</p>
                </div>
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
        </div>
    `
    document.getElementById('transaction').appendChild(div)
}