function getParibahanById() {
    const paribahan = document.getElementById("paribahan-section");
    if (paribahan) {
        paribahan.scrollIntoView({ behavior: "smooth" });
    }
}


const allBtn = document.getElementsByClassName('all-btn');

let seatLeft = 40;
//  for decrease the seat left
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        seatLeft--
        setInnerText('seat-left', seatLeft)
        btn.style.backgroundColor = '#1DD100';
    });
}


let grandPrice = 0;
let normalPrice = 0;
let totalSeat = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        // for increase the total seat count
        totalSeat = totalSeat + 1;
        setInnerText('total-seat', totalSeat);

        // appended the element of the table
        const newSeat = document.getElementById('bus-seat');
        const td1 = document.createElement('td');
        td1.innerText = btn.innerText;
        const tr1 = document.createElement('tr');
        tr1.appendChild(td1);
        newSeat.appendChild(tr1);

        const busClass = document.getElementById('bus-class');
        const td2 = document.createElement('td');
        const innerTextId = document.getElementById('business-class').innerText;
        td2.innerText = innerTextId;
        const tr2 = document.createElement('tr');
        tr2.appendChild(td2);
        busClass.appendChild(tr2);

        const busPrice = document.getElementById('bus-price');
        const td3 = document.createElement('td');
        td3.innerText = document.getElementById('ticket-price').innerText;
        const tr3 = document.createElement('tr');
        tr3.appendChild(td3);
        busPrice.appendChild(tr3);

        // total cost
        const totalTicketPrice = document.getElementById('ticket-price').innerText;
        const convertedTicketPrice = parseInt(totalTicketPrice);
        normalPrice += convertedTicketPrice;
        setInnerText('total-price', normalPrice);

    })
}

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        const grandTotalTicketPrice = document.getElementById('ticket-price').innerText;
        const convertedGrandTicketPrice = parseInt(grandTotalTicketPrice);
        grandPrice = grandPrice + convertedGrandTicketPrice;
        setInnerText('grand-total', grandPrice);
    })

}


function setInnerText(id, value) {
    const seatLeftId = document.getElementById(id);
    seatLeftId.innerText = value;
}



// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100]');
// }





