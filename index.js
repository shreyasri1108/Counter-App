const countValue = document.querySelector('#counter'); // taking out the value of the counter, jsiki id counter h (uska element nikal liya , hence div nikal gaya)

const increament = () =>
    {
       //fetching the value from UI
       let value = parseInt(countValue.innerText); //this is used to fetch or get the recent value in string form , yaha uss div ke andar ka tect nikala h
       //updating value
       value = value+1; // here let is used and not const because we are chaing the value hence const can't be used
       //updating the value
       countValue.innerText = value;
    };

const decreament = () =>
{
        //fetching the value from UI
        let value = parseInt(countValue.innerText); //this is used to fetch or get the recent value in string form
        //updating value
        value = value-1;
        //updating the value
        countValue.innerText = value;
};
// on reloading it will work