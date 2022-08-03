function feedbackReaction_k(id_value){
    if (id_value === "star5" || id_value === "star4") {
        window.open("https://www.google.com/maps/place/SmarterGerman/@51.1758057,10.4541194,6z/data=!4m7!3m6!1s0x47a84fb5cd16c013:0x851b4d86e1dc4c02!8m2!3d52.4923234!4d13.4277132!9m1!1b1");
        var form_iframe = document.getElementById("feedbackForm-konstantin");
        form_iframe.classList.add("hide-konstantin");
    }
    else {
        var form_iframe = document.getElementById("feedbackForm-konstantin");
        form_iframe.classList.remove("hide-konstantin");
    }
}