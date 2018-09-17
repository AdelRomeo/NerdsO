			var radios = document.querySelector(".radios");
			var bat1 = radios.querySelector("#b1");
			var bat2 = radios.querySelector("#b2");
			var bat3 = radios.querySelector("#b3");
			var section1 = document.querySelector(".main-section-1");
			var section2 = document.querySelector(".main-section-2");
			var section3 = document.querySelector(".main-section-3");

			bat1.addEventListener("click", function () {
				section1.classList.remove("js-disp-none");
				section1.classList.add("js-disp-block");
				section2.classList.add("js-disp-none");
				section3.classList.add("js-disp-none");
			});

			bat2.addEventListener("click", function () {
				section2.classList.remove("js-disp-none");
				section1.classList.add("js-disp-none");
				section2.classList.add("js-disp-block");
				section3.classList.add("js-disp-none");
			});

			bat3.addEventListener("click", function () {
				section3.classList.remove("js-disp-none");
				section1.classList.add("js-disp-none");
				section2.classList.add("js-disp-none");
				section3.classList.add("js-disp-block");
			});