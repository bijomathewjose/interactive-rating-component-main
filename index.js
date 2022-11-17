let currentId = null, rate;
rating = (id, val) => {
    if (currentId != id) {
        rate = val;
        console.log(rate);
        x = document.getElementById(id).classList;
        x.remove('starInitial');
        x.add('starOnClick')
        if (currentId != null) {
            y = document.getElementById(currentId).classList;
            y.remove('starOnClick');
            y.add('starInitial');
        }
    }
    currentId = id;
}
display = () => {

    if (rate == null) {
        alert("not rated");
    }
    else {
        document.getElementById("ratedVaue").innerHTML = "You selected " + rate + " out of 5"
        x = document.getElementById("first").classList;
        x.add('displayContainer')
        y = document.getElementById("second").classList;
        y.remove('displayContainer')
    }
}