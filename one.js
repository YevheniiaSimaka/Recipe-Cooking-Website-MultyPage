var pages = document.querySelector(".pages")
var next = document.querySelectorAll(".next")
var back = document.querySelectorAll(".back")
var double = document.querySelector(".double")
var howMany = document.querySelectorAll(".howMany")

for (var i = 0; i < next.length; i++) {

    next[i].addEventListener("click", function () {

        if (this.classList.contains("first")) {

            pages.classList.add("page1")

            if (double.value == "single") {

            } else if (double.value == "double") {

                for (var i = 0; i < howMany.length; i++) {
                    var original = howMany[i].innerHTML
                    original = original * 2
                    howMany[i].innerHTML = original
                }

            } else if (double.value == "triple") {

                for (var i = 0; i < howMany.length; i++) {

                    var original = howMany[i].innerHTML
                    original = original * 3
                    howMany[i].innerHTML = original
                }

            } else if (double.value == "four") {

                for (var i = 0; i < howMany.length; i++) {

                    var original = howMany[i].innerHTML
                    original = original * 4
                    howMany[i].innerHTML = original
                }

            } else if (double.value == "five") {

                for (var i = 0; i < howMany.length; i++) {

                    var original = howMany[i].innerHTML
                    original = original * 5
                    howMany[i].innerHTML = original

                }

            } else {
                alert("error")
            }

        } else if (this.classList.contains("second")) {
            pages.classList.add("page2")
        } else if (this.classList.contains("third")) {
            pages.classList.add("page3")
        } else if (this.classList.contains("fourth")) {
            pages.classList.add("page4")
        } else if (this.classList.contains("fifth")) {
            pages.classList.add("page5")
        } else if (this.classList.contains("sixth")) {
            pages.classList.add("page6")
        }

    })

}

for (var i = 0; i < back.length; i++) {

    back[i].addEventListener("click", function () {

        if (this.classList.contains("second")) {
            pages.classList.remove("page1")
        } else if (this.classList.contains("third")) {
            pages.classList.remove("page2")
        } else if (this.classList.contains("fourth")) {
            pages.classList.remove("page3")
        } else if (this.classList.contains("fifth")) {
            pages.classList.remove("page4")
        } else if (this.classList.contains("sixth")) {
            pages.classList.remove("page5")
        } else if (this.classList.contains("seventh")) {
            pages.classList.remove("page6")
        }

    })

}
