function getParibahanById() {
    const paribahan = document.getElementById("paribahan-section");
    if (paribahan) {
        paribahan.scrollIntoView({ behavior: "smooth" });
    }
}

let selectedSeats = 0;
const allBtn = document.getElementsByClassName('all-btn');
let seatLeft = 40;
//  for decrease the seat left
for (const btn of allBtn) {
    btn.addEventListener('click', function handleClick(e) {
        if (!btn.disabled) {
            seatLeft--
            setInnerText('seat-left', seatLeft);

            setButtonBackgroundColor(btn, '#1DD100');

            selectedSeats++;

            btn.disabled = true;

            if (selectedSeats === 4) {
                disableRemainingButtons();
            }
        }
    });
}


let grandPrice = 0;
let normalPrice = 0;
let totalSeat = 0;

// increse the total seat sount
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        if (totalSeat < 4) {
            totalSeat = totalSeat + 1;
            setInnerText('total-seat', totalSeat);
        }
        else {
            return totalSeat;
        }
    })
}

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {

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


// grand total 
for (const btn of allBtn) {
    btn.addEventListener('click', function grandTotalCost(e) {
        const grandTotalTicketPrice = document.getElementById('ticket-price').innerText;
        const convertedGrandTicketPrice = parseInt(grandTotalTicketPrice);
        grandPrice = grandPrice + convertedGrandTicketPrice;
        setInnerText('grand-total', grandPrice);

    })

}


// grand total validatoin 
function grandTotalCost() {
    const grandTotalTicketPrice = document.getElementById('ticket-price').innerText;
    let grandPrice = parseInt(grandTotalTicketPrice);
    const couponInput = document.getElementById('coupon-input').value;
    const couponBtn = document.getElementById('coupon-btn');

    grandPrice = grandPrice * selectedSeats;
    // NEW15--
    if (couponInput === "NEW15") {
        grandPrice = grandPrice * (85 / 100);
    }
    // couple 20 --
    if (couponInput === "Couple 20") {
        grandPrice = grandPrice * (80 / 100);
    }

    if(couponInput === "NEW15" || couponInput === "Couple 20"){
        document.getElementById('coupon-input').classList.add('hidden');
        couponBtn.classList.add('hidden');
    }
    else{
        alert('wrong input');
    }

    // Set the grand total
    setInnerText('grand-total', grandPrice);
}



function applyCoupon() {
    grandTotalCost();
}




function setInnerText(id, value) {
    const seatLeftId = document.getElementById(id);
    seatLeftId.innerText = value;
}


function setButtonBackgroundColor(button, color) {
    button.style.backgroundColor = color;
}

function disableRemainingButtons() {
    for (const btn of allBtn) {
        if (!btn.disabled) {
            btn.disabled = true;
        }
    }
}












