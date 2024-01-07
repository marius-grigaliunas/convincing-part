const summer = document.getElementById("summer");
const autumn = document.getElementById("autumn");
const winter = document.getElementById("winter");

const deadline = document.getElementById("date-deadline");
const begin = document.getElementById("date-begin");
const finish = document.getElementById("date-finish");

const dates = [
    {
        last: "05 May",
        start: "03 June",
        end : "23 August",
    },
    {
        last: "04 August",
        start: "02 September",
        end : "22 November",
    },
    {
        last: "03 November",
        start: "02 December",
        end : "21 February 2025",
    }
];


summer.addEventListener("click", () => {
    summer.classList.add("selected");
    autumn.classList.remove("selected");
    winter.classList.remove("selected");
    updateText(summer.id);
});

autumn.addEventListener("click", () => {
    summer.classList.remove("selected");
    autumn.classList.add("selected");
    winter.classList.remove("selected");
    updateText(autumn.id);
});

winter.addEventListener("click", () => {
    summer.classList.remove("selected");
    autumn.classList.remove("selected");
    winter.classList.add("selected");
    updateText(winter.id);
});


const updateText = (id) => {

    switch(id) {
        case 'summer':
            var {last, start, end} = dates[0];
            deadline.textContent = last;
            begin.textContent = start;
            finish.textContent = end;
            break;
        case 'autumn':
            var {last, start, end} = dates[1];
            deadline.textContent = last;
            begin.textContent = start;
            finish.textContent = end;
            break;
        case 'winter':
            var {last, start, end} = dates[2];
            deadline.textContent = last;
            begin.textContent = start;
            finish.textContent = end;
            break;
    }
};