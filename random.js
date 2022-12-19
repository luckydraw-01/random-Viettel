
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start, end) {
    let myArray = [];
    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

function runRandom() {
    let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1)
    return randomNumber;
}

function showNums() {
    btn.disabled = true;
    let a = runRandom();
    let num = [];
    let numrd = [];
    num.push(a);
    while (a != 0) {
        let num = Math.floor(a % 10);
        a = Math.floor(a / 10);
        numrd.push(num);
    }
    numrd.sort(() => -1);

    console.log(num);
    console.log(numrd);
    // start loading
    let i = 0, j = 0, k = 0;
    let action = setInterval(function () {
        output1.innerHTML = i++;
        output2.innerHTML = j++;
        output3.innerHTML = k++;
    }, 100);
    
    setTimeout(function () {
        clearInterval(action);
        let i = 9, j = 9, k = 9;
        let action1 = setInterval(function () {
            output1.innerHTML = i--;
            output2.innerHTML = j--;
            output3.innerHTML = k--;
        }, 100);

        setTimeout(function () {
            clearInterval(action1);
            let j = 0, k = 0;
            let action2 = setInterval(function () {
                output2.innerHTML = j++;
                output3.innerHTML = k++;
            }, 100);

            setTimeout(function () {
                clearInterval(action2);
                let j = 9, k = 9;
                let action3 = setInterval(function () {
                    output2.innerHTML = j--;
                    output3.innerHTML = k--;
                }, 100);

                setTimeout(function () {
                    clearInterval(action3);
                    let k = 0;
                    let action4 = setInterval(function () {
                        output3.innerHTML = k++;
                    }, 100);

                    setTimeout(function () {
                        clearInterval(action4);
                        let k = 9;
                        let action5 = setInterval(function () {
                            output3.innerHTML = k--;
                        }, 100);
                        setTimeout(function () {
                            clearInterval(action5);
                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000)

        }, 1000);

    }, 1000);
    //end loading
      

    if (numrd.length === 3) {
        setTimeout(function () {
            output1.innerHTML = numrd[0];
        }, 2100);
        setTimeout(function () {
            output2.innerHTML = numrd[1];
        }, 4100);
        setTimeout(function () {
            output3.innerHTML = numrd[2];
        }, 6100);
    }
    if (numrd.length === 2) {
        setTimeout(function () {
            output1.innerHTML = 0;
        }, 2100);
        setTimeout(function () {
            output2.innerHTML = numrd[0];
        }, 4100);
        setTimeout(function () {
            output3.innerHTML = numrd[1];
        }, 6100);
    }
    if (numrd.length === 1) {
        setTimeout(function () {
            output1.innerHTML = 0;
        }, 2100);
        setTimeout(function () {
            output2.innerHTML = 0;
        }, 4100);
        setTimeout(function () {
            output3.innerHTML = numrd[0];
        }, 6100);
    }

    function sss() {
        count += 1;
        console.log(count);
        const popup = document.querySelector(".popup");
        const showLucky = document.querySelector(".showLucky");
        showLucky.style.visibility = 'visible';
        popup.style.visibility = 'hidden';
        document.getElementById("showNum").innerHTML = num;
        // if (count === 1) {
        //     document.querySelector(".title-lucky").innerHTML = "GIẢI BA";

        // }
        // if (count === 2) {
        //     document.querySelector(".title-lucky").innerHTML = "GIẢI NHÌ";
        // }
        // if (count === 3) {
        //     document.querySelector(".title-lucky").innerHTML = "GIẢI NHẤT";
        // }
        if (numrd.length === 1) {
            document.querySelector("#showNum").innerHTML = "0" + numrd[0];
        }
        back.addEventListener("click", function () {
            if (count === 20) {     // Thiet lap so lan quay
                location.reload();
            }
            if (count < 20) {
                showLucky.style.visibility = 'hidden';
                popup.style.visibility = 'visible';
            }
        });
        output1.innerHTML = 0;
        output2.innerHTML = 0;
        output3.innerHTML = 0;
    }
    setTimeout(sss, 6500);      // Thiet lap thoi gian hien thi giai
    setTimeout(function(){
        btn.disabled = false;
    }, 6510);
}

let output1 = document.getElementById("num-1");
let output2 = document.getElementById("num-2");
let output3 = document.getElementById("num-3");
let btn = document.querySelector(".bt-play");
let back = document.querySelector(".body");
let count = 0;
let numbersArray = createArrayOfNumbers(1, 100);    // Thiet lap luong so quay
btn.addEventListener("click", showNums);





  
