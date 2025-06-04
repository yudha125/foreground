document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.textContent = `
     
  `;
    document.head.appendChild(style);

    const slideItems = document.querySelectorAll(".item.slides");
    slideItems.forEach(function (item) {
        const img = item.querySelector("img");
        if (img) {
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            wrapper.style.display = "inline-block";
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            const frame = document.createElement("img");
            frame.src = "aaaaaaaa.png";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "0";
            frame.style.width = "100%";
            frame.style.height = "100%";
            frame.style.pointerEvents = "none";
            wrapper.appendChild(frame);
        }
    });

    const navItem = document.querySelectorAll(".navbar-fixed-top .container");
    navItem.forEach(function (item) {
        const navhead = item.querySelector(".navbar-header");
        const navhead2 = item.querySelector(".navbar-collapse.collapse");
        if (navhead && navhead2) {
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            wrapper.style.display = "block";
            item.appendChild(wrapper);
            wrapper.appendChild(navhead);
            wrapper.appendChild(navhead2);
            const frame = document.createElement("img");
            frame.id = "frame";
            frame.src = "frame3.png";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "50%";
            frame.style.transform = "translateX(-50%)";
            frame.style.width = "119%";
            frame.style.height = "120px";
            frame.style.pointerEvents = "none";
            frame.style.zIndex = "-1";
            frame.classList.add("skrollable");

            wrapper.appendChild(frame);
        }
    });



    const slideCarousel = document.querySelectorAll(".slider .item");
    slideCarousel.forEach(function (item) {
        const img = item.querySelector("img");
        if (img) {
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            wrapper.style.display = "inline-block";

            // Pindahkan gambar ke dalam wrapper
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            const frame = document.createElement("img");
            frame.src = "frame5.png";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "0";
            frame.style.width = "100%";
            frame.style.height = "100%";
            frame.style.pointerEvents = "none";
            wrapper.appendChild(frame);
        }
    });

    const latestResults = document.getElementById("latest-results");
    if (latestResults) {
        // Buat elemen frame atas
        const topFrame = document.createElement("div");
        topFrame.className = "container-img";
        topFrame.innerHTML = `<img src="border.png" alt="" style="width: 100%; height: 20px;">`;
        const bottomFrame = topFrame.cloneNode(true);
        latestResults.parentNode.insertBefore(topFrame, latestResults);
        latestResults.parentNode.insertBefore(bottomFrame, latestResults.nextSibling);
    }
    // const sectionTop = document.querySelectorAll("section.margin-top");
    // const kontainerTambahan = document.createElement("div");
    // kontainerTambahan.className = "container container-plus-1";
    // kontainerTambahan.style.margin = "0 auto";
    // kontainerTambahan.style.background = " rgba(0, 0, 0, 0.85)";
    // kontainerTambahan.style.padding = "0 20px 15px 20px";
    // kontainerTambahan.innerHTML = `
    //     <div class="row">
    //     <div class="col-md-12" style="

    //     ">
    //         <h2>Tambahan</h2>
    //         <p>Ini adalah konten tambahan yang ditambahkan ke halaman.</p>
    //     </div>
    // </div>
    // `;

    // sectionTop.forEach(function (section) {
    //     section.appendChild(kontainerTambahan);
    // });
});

window.addEventListener("scroll", function () {
    const y = window.scrollY;
    const frame = document.querySelector("img#frame");

    if (!frame) return;

    if (y < 300) {
        frame.style.height = (120 - (y * 0.133)) + "px"; // dari 120 ke 80
        frame.style.top = (-3 * (y / 300)) + "px"; // dari 0 ke -40
    } else {
        frame.style.height = "80px";
        frame.style.top = "-3px";
    }
});
