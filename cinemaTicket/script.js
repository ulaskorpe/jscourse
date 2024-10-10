const container = document.querySelector('#container');
 const count = document.querySelector('#count');
 const amount = document.querySelector('#amount');
 const select = document.querySelector('#movie');
 const seats = document.querySelectorAll('.seat:not(.reserved)');

    getFromLocaleStorage();
    calculateTotal();

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved') ){
        e.target.classList.toggle('selected');
        calculateTotal();
    }
    
});

select.addEventListener('change',calculateTotal);

function calculateTotal(){
    const selectedSeats=container.querySelectorAll('.seat.selected');

    const selectedSeatsArray = [];
    const seatsArray = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArray.push(seat);
    });
    seats.forEach(function(seat){
        seatsArray.push(seat);
    });

    let selectedSeatIndexes = selectedSeatsArray.map(function(seat){
        return seatsArray.indexOf(seat);
    })

    console.log(selectedSeatIndexes);
    let selectedSeatCount = selectedSeats.length;
    // console.log(selectedSeats);
    // console.log(seats);
    count.innerHTML  = selectedSeatCount;
    amount.innerHTML  = selectedSeatCount*select.value;

    saveToLocaleStroge(selectedSeatIndexes)
}
function getFromLocaleStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const selectedMovieIndex = JSON.parse(localStorage.getItem('selectedMovie'));

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }

    if(selectedSeats !=null && selectedSeats.length >0){
            seats.forEach(function(seat,index){
                    if(selectedSeats.indexOf(index) > -1){
                        seat.classList.add('selected');
                    }
            })
    }
}
function  saveToLocaleStroge(indexes){
 
        localStorage.setItem('selectedSeats',JSON.stringify(indexes));
        localStorage.setItem('selectedMovie',select.selectedIndex);
}


