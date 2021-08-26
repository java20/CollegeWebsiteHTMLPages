const corousel = {
	box: document.querySelector("#customCorousel"),
	inner: document.querySelector("#customCorouselInner"),
	images: document.querySelectorAll(".custom-corousel__img"),
	iconLeft: document.querySelector(".custom-corousel-icon--left"),
	iconRight: document.querySelector(".custom-corousel-icon--right"),
	slideLeft: "slideLeft",
	slideRight: "slideRight",
	slideOut: "slideOut",
	slideIn: "slideIn",
	blurOut: "blurOut",
	blurIn: "blurIn",
	slide1: "slide-1",
	slide2: "slide-2",
	slide3: "slide-3",
	slideNone: "slide-none",
	opacity: "opacity",
	opacityNone: "opacity-none",
};
const customCorousel = () => {
	corousel.box = document.querySelector("#customCorousel");
	corousel.inner = document.querySelector("#customCorouselInner");
	corousel.images = document.querySelectorAll(".custom-corousel__img");
	corousel.iconLeft = document.querySelector(".custom-corousel-icon--left");
	corousel.iconRight = document.querySelector(".custom-corousel-icon--right");

	Array.from(corousel.images)
		.slice(0, corousel.images.length)
		.forEach((el) => {
			el.classList = "custom-corousel__img";
		});

	if (window.innerWidth > 768) {
		normalCorousel();
	} else if (window.innerWidth <= 768 && window.innerWidth > 577) {
		mediumCorousel();
	} else {
		smallCorousel();
	}
};

const smallCorousel = (
	customCorouselImages = corousel.images,
	customCorouselIconLeft = corousel.iconLeft,
	customCorouselIconRight = corousel.iconRight,
) => {
	const customCorouselImagesLength = customCorouselImages.length;
	let l;
	let oldL;
	oldL = l = 0;
	Array.from(customCorouselImages)
		.slice(1, customCorouselImages.length)
		.forEach((el) => {
			el.classList.add(corousel.opacityNone);
		});

	customCorouselImages[l].classList.add(corousel.opacity);

	// BUTTONS
	customCorouselIconLeft.onclick = () => {
		oldL = l;
		l = customCorouselImagesLength - 1 > l ? l + 1 : 0;

		customCorouselImages[oldL].classList.add(corousel.blurOut);
		customCorouselImages[oldL].onanimationend = () => {
			customCorouselImages[oldL].classList.remove(corousel.opacity);
			customCorouselImages[l].classList.add(corousel.blurIn);
			customCorouselImages[oldL].classList.add(corousel.opacityNone);
			customCorouselImages[oldL].classList.remove(corousel.blurOut);

			customCorouselImages[oldL].onanimationend = null;
		};

		customCorouselImages[l].onanimationend = () => {
			customCorouselImages[l].classList.remove(corousel.opacityNone);
			customCorouselImages[l].classList.add(corousel.opacity);
			customCorouselImages[l].classList.remove(corousel.blurIn);

			customCorouselImages[l].onanimationend = null;
		};
	};

	customCorouselIconRight.onclick = () => {
		oldL = l;
		l = l == 0 ? customCorouselImagesLength - 1 : l - 1;

		customCorouselImages[oldL].classList.add(corousel.blurOut);
		customCorouselImages[oldL].onanimationend = () => {
			customCorouselImages[l].classList.add(corousel.blurIn);
			customCorouselImages[oldL].classList.remove(corousel.opacity);
			customCorouselImages[oldL].classList.add(corousel.opacityNone);
			customCorouselImages[oldL].classList.remove(corousel.blurOut);

			customCorouselImages[oldL].onanimationend = null;
		};

		customCorouselImages[l].onanimationend = () => {
			customCorouselImages[l].classList.remove(corousel.opacityNone);
			customCorouselImages[l].classList.add(corousel.opacity);
			customCorouselImages[l].classList.remove(corousel.blurIn);

			customCorouselImages[l].onanimationend = null;
		};
	};
};

const mediumCorousel = (
	customCorouselImages = corousel.images,
	customCorouselIconLeft = corousel.iconLeft,
	customCorouselIconRight = corousel.iconRight,
) => {
	const customCorouselImagesLength = customCorouselImages.length;

	const slideLeft = "slideLeft";
	const slideRight = "slideRight";
	const slideOut = "slideOut";
	const slideIn = "slideIn";
	let l, r;
	let oldL, oldR;
	oldL = l = 0;
	oldR = r = customCorouselImagesLength - 1 > 1 ? 1 : customCorouselImagesLength - 1;

	customCorouselImages[l].classList.add(corousel.slide1);
	customCorouselImages[r].classList.add(corousel.slide2);

	// BUTTONS
	customCorouselIconLeft.onclick = () => {
		oldL = l;
		oldR = r;
		l = r;
		r = customCorouselImagesLength - 1 > r ? r + 1 : 0;

		customCorouselImages[oldL].classList.add(corousel.slideOut);
		customCorouselImages[oldL].onanimationend = () => {
			customCorouselImages[oldL].classList.remove(corousel.slide1);
			customCorouselImages[oldL].classList.add(corousel.slideNone);
			customCorouselImages[oldL].classList.remove(corousel.slideOut);

			customCorouselImages[oldL].onanimationend = null;
		};

		customCorouselImages[oldR].classList.add(corousel.slideRight);
		customCorouselImages[oldR].onanimationend = () => {
			customCorouselImages[r].style["display"] = "block";
			customCorouselImages[r].classList.add(corousel.slideIn);

			customCorouselImages[oldR].classList.remove(corousel.slide2);
			customCorouselImages[oldR].classList.add(corousel.slide1);

			customCorouselImages[oldR].classList.remove(corousel.slideRight);
			customCorouselImages[oldR].onanimationend = null;
		};

		customCorouselImages[r].onanimationend = () => {
			customCorouselImages[r].classList.remove(corousel.slideNone);
			customCorouselImages[r].classList.add(corousel.slide2);
			customCorouselImages[r].classList.remove(corousel.slideIn);
			customCorouselImages[r].style["display"] = "";
			console.log(l, r);
			customCorouselImages[r].onanimationend = null;
		};
	};

	customCorouselIconRight.onclick = () => {
		oldL = l;
		oldR = r;

		r = l;
		l = l == 0 ? customCorouselImagesLength - 1 : l - 1;

		customCorouselImages[oldR].classList.add(corousel.slideOut);
		customCorouselImages[oldR].onanimationend = () => {
			customCorouselImages[oldR].classList.remove(corousel.slide2);
			customCorouselImages[oldR].classList.add(corousel.slideNone);
			customCorouselImages[oldR].classList.remove(corousel.slideOut);
			customCorouselImages[oldR].onanimationend = null;
		};

		customCorouselImages[oldL].classList.add(corousel.slideLeft);
		customCorouselImages[oldL].onanimationend = () => {
			customCorouselImages[l].style["display"] = "block";
			customCorouselImages[l].classList.add(corousel.slideIn);

			customCorouselImages[oldL].classList.remove(corousel.slide1);
			customCorouselImages[oldL].classList.add(corousel.slide2);
			customCorouselImages[oldL].classList.remove(corousel.slideLeft);

			customCorouselImages[oldL].onanimationend = null;
		};

		customCorouselImages[l].onanimationend = () => {
			customCorouselImages[l].classList.remove(corousel.slideNone);
			customCorouselImages[l].classList.add(corousel.slide1);
			customCorouselImages[l].classList.remove(corousel.slideIn);
			customCorouselImages[l].style["display"] = "";
			customCorouselImages[l].onanimationend = null;
		};
	};
};

const normalCorousel = (
	customCorouselImages = corousel.images,
	customCorouselIconLeft = corousel.iconLeft,
	customCorouselIconRight = corousel.iconRight,
) => {
	const customCorouselImagesLength = customCorouselImages.length;
	let l, m, r;
	let oldL, oldM, oldR;
	oldL = l = 0;
	oldM = m = customCorouselImagesLength - 1 > 1 ? 1 : customCorouselImagesLength - 1;
	oldR = r = customCorouselImagesLength - 1 > 2 ? 2 : customCorouselImagesLength - 1;

	customCorouselImages[l].classList.add(corousel.slide1);
	customCorouselImages[m].classList.add(corousel.slide2);
	customCorouselImages[r].classList.add(corousel.slide3);

	// BUTTONS
	customCorouselIconLeft.onclick = () => {
		oldL = l;
		oldM = m;
		oldR = r;
		l = m;
		m = r;
		r = customCorouselImagesLength - 1 > m ? r + 1 : 0;

		customCorouselImages[oldL].classList.add(corousel.slideOut);
		customCorouselImages[oldL].onanimationend = () => {
			customCorouselImages[oldL].classList.remove(corousel.slide1);
			customCorouselImages[oldL].classList.add(corousel.slideNone);
			customCorouselImages[oldL].classList.remove(corousel.slideOut);
			customCorouselImages[oldL].onanimationend = null;
		};

		customCorouselImages[oldM].classList.add(corousel.slideRight);
		customCorouselImages[oldM].onanimationend = () => {
			customCorouselImages[oldM].classList.remove(corousel.slide2);
			customCorouselImages[oldM].classList.add(corousel.slide1);
			customCorouselImages[oldM].classList.remove(corousel.slideRight);
			customCorouselImages[oldM].onanimationend = null;
		};

		customCorouselImages[oldR].classList.add(corousel.slideRight);
		customCorouselImages[oldR].onanimationend = () => {
			customCorouselImages[r].style["display"] = "block";
			customCorouselImages[r].classList.add(corousel.slideIn);

			customCorouselImages[oldR].classList.remove(corousel.slide3);
			customCorouselImages[oldR].classList.add(corousel.slide2);
			customCorouselImages[oldR].classList.remove(corousel.slideRight);

			customCorouselImages[oldR].onanimationend = null;
		};

		customCorouselImages[r].onanimationend = () => {
			customCorouselImages[r].classList.remove(corousel.slideNone);
			customCorouselImages[r].classList.add(corousel.slide3);
			customCorouselImages[r].style["display"] = "";
			customCorouselImages[r].classList.remove(corousel.slideIn);
			customCorouselImages[r].onanimationend = null;
		};
	};

	customCorouselIconRight.onclick = () => {
		oldL = l;
		oldM = m;
		oldR = r;

		r = m;
		m = l;
		l = l == 0 ? customCorouselImagesLength - 1 : l - 1;

		customCorouselImages[oldR].classList.add(corousel.slideOut);
		customCorouselImages[oldR].onanimationend = () => {
			customCorouselImages[oldR].classList.remove(corousel.slide3);
			customCorouselImages[oldR].classList.add(corousel.slideNone);
			customCorouselImages[oldR].classList.remove(corousel.slideOut);
			customCorouselImages[oldR].onanimationend = null;
		};

		customCorouselImages[oldM].classList.add(corousel.slideLeft);
		customCorouselImages[oldM].onanimationend = () => {
			customCorouselImages[oldM].classList.remove(corousel.slide2);
			customCorouselImages[oldM].classList.add(corousel.slide3);
			customCorouselImages[oldM].classList.remove(corousel.slideLeft);
			customCorouselImages[oldM].onanimationend = null;
		};

		customCorouselImages[oldL].classList.add(corousel.slideLeft);
		customCorouselImages[oldL].onanimationend = () => {
			customCorouselImages[l].style["display"] = "block";
			customCorouselImages[l].classList.add(corousel.slideIn);

			customCorouselImages[oldL].classList.remove(corousel.slide1);
			customCorouselImages[oldL].classList.add(corousel.slide2);
			customCorouselImages[oldL].classList.remove(corousel.slideLeft);

			customCorouselImages[oldL].onanimationend = null;
		};

		customCorouselImages[l].onanimationend = () => {
			customCorouselImages[l].classList.remove(corousel.slideNone);
			customCorouselImages[l].classList.add(corousel.slide1);
			customCorouselImages[l].style["display"] = "";
			customCorouselImages[l].classList.remove(corousel.slideIn);
			console.log(l, m, r);
			customCorouselImages[l].onanimationend = null;
		};
	};
};

setInterval(() => {
	corousel.iconRight.click();
}, 5000);

window.addEventListener("DOMContentLoaded", customCorousel);

window.onresize = customCorousel;
