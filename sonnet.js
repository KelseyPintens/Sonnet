var poem = document.getElementById("sonnet").innerHTML;

    console.log(poem.indexOf("orphans"));
    console.log(poem.length);
    console.log(poem.replace("winter", "yultide"));
    console.log(poem.replace(/ the /gi, "a large"));

    document.body.innerHTML = document.body.innerHTML.replace("winter", "yuletide");
    document.body.innerHTML = document.body.innerHTML.replace(/ the /gi, " a large ");

