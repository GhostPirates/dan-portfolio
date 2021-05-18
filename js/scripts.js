let cached = null;

const pictureID = [
  "s51",
  "s52",
  "s53",
  "s54",
  "s55",
  "s56",
  "s57",
  "s58",
  "s59",
];

function loadDoc() {
  window.event.preventDefault();
  const contactForm = document.getElementById("contact-form");
  const sub = document.getElementById("sub");
  const sent = document.getElementById("sent");
  const formData = new FormData(contactForm);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      contactForm.reset();
      sub.style.display = "none";
      sent.style.display = "block";
      sent.innerHTML = this.responseText;
      setTimeout(function () {
        sent.style.display = "none";
        sent.innerHTML = "";
        sub.style.display = "block";
      }, 5000);
    }
  };
  xhttp.open("POST", "cont.php", true);
  xhttp.send(formData);
}

function none(a) {
  for (let x in pictureID) {
    const obj = document.getElementById(pictureID[x]);
    if (obj.id === a) {
      if (window.getComputedStyle(obj).getPropertyValue("display") === "none") {
        obj.style.display = "block";
        if (obj.id !== "s51") {
          obj.classList.add("an");
          setTimeout(function () {
            obj.classList.remove("an");
          }, 750);
        } else {
          obj.classList.add("ani0");
          setTimeout(function () {
            obj.classList.remove("ani0");
          }, 1500);
        }
      }
    } else {
      obj.style.display = "none";
    }
  }
}

function high() {
  const a = document.getElementById("ob0").scrollHeight;
  const b = document.getElementById("ob0").clientHeight;
  const c = document.getElementById("cand").offsetTop;
  const d = document.getElementById("wp").offsetTop;
  const e = document.getElementById("dig").offsetTop;
  const f = document.getElementById("pff").offsetTop;
  const g = document.getElementById("link").offsetTop;
  const h = document.getElementById("rec").offsetTop;
  const i = document.getElementById("store").offsetTop;
  const j = document.getElementById("acc").offsetHeight;
  let scroll_pos = document.getElementById("ob0").scrollTop;
  // a - b - last obj
  const botCalc = a - b - j;
  if (scroll_pos < c) {
    none(pictureID[0]);
  }
  if (scroll_pos > c && scroll_pos < d) {
    none(pictureID[1]);
  }
  if (scroll_pos > d && scroll_pos < e) {
    none(pictureID[2]);
  }
  if (scroll_pos > e && scroll_pos < f) {
    none(pictureID[3]);
  }
  if (scroll_pos > f && scroll_pos < g) {
    none(pictureID[4]);
  }
  if (scroll_pos > g && scroll_pos < h) {
    none(pictureID[5]);
  }
  if (scroll_pos > h && scroll_pos < i) {
    none(pictureID[6]);
  }
  if (scroll_pos > i && scroll_pos < botCalc) {
    none(pictureID[7]);
  }
  if (scroll_pos > botCalc) {
    none(pictureID[8]);
  }
}

function check() {
  if (window.screen.width <= 992) {
    if (document.querySelector(".template-img-cont")) {
      const imgCont = document.querySelector(".template-img-cont");
      imgCont.classList.add("vis1");
      imgCont.classList.add("ani4");
    }
    if (document.querySelector(".template-p")) {
      const tempP = document.querySelector(".template-p");
      tempP.classList.add("vis1");
      tempP.classList.add("ani2");
    }
  }
  if (window.screen.width >= 992) {
    if (document.querySelector(".template-img-cont")) {
      document.querySelector(".template-img-cont").classList.add("vis1");
    }
    if (document.querySelector(".template-div")) {
      document.querySelector(".template-div").classList.add("vis1");
    }
    if (document.querySelector(".template-p")) {
      document.querySelector(".template-p").classList.add("vis1");
    }
    if (document.querySelector(".template-img-0")) {
      document.querySelector(".template-img-0").classList.add("vis1");
    }
    if (document.getElementById("ob0")) {
      document.getElementById("ob0").classList.add("vis1");
    }
    if (document.getElementById("s5")) {
      document.getElementById("s5").classList.add("vis1");
    }
    if (document.getElementById("s51")) {
      const s51 = document.getElementById("s51");
      s51.classList.add("ani0");
      setTimeout(function () {
        s51.classList.remove("ani0");
      }, 1500);
    }
  }
}

function sani() {
  if (window.screen.width <= 992) {
    let scroll_pos = window.scrollY + window.innerHeight / 1.5;
    if (document.getElementById("home-div")) {
      const homeD = document.getElementById("home-div");
      if (scroll_pos > homeD.offsetTop) {
        homeD.classList.add("ani5");
      }
    }
    if (document.querySelector(".template-div")) {
      const tempDiv = document.querySelector(".template-div");
      const style = window
        .getComputedStyle(tempDiv)
        .getPropertyValue("visibility");
      if (scroll_pos > tempDiv.offsetTop && style === "hidden") {
        tempDiv.classList.add("vis1");
        tempDiv.classList.add("ani3");
      }
    }
    if (document.querySelector(".template-img-0")) {
      const tempImg0 = document.querySelector(".template-img-0");
      const style = window
        .getComputedStyle(tempImg0)
        .getPropertyValue("visibility");
      if (scroll_pos > tempImg0.offsetTop && style === "hidden") {
        tempImg0.classList.add("vis1");
        tempImg0.classList.add("ani2");
      }
    }
    if (document.getElementById("s4")) {
      const ob0 = document.getElementById("ob0");
      const style = window
      .getComputedStyle(ob0)
      .getPropertyValue("visibility");
      if (
        scroll_pos > document.getElementById("s4").offsetTop &&
        style === "hidden"
      ) {
        ob0.classList.add("vis1");
        ob0.classList.add("ani2");
      }
    }
    if (document.getElementById("s5")) {
      const s5 = document.getElementById("s5");
      const s51 = document.getElementById("s51");
      const style = window
      .getComputedStyle(s5)
      .getPropertyValue("visibility");
      if (scroll_pos > s5.offsetTop && style === "hidden") {
        s5.classList.add("vis1");
        s5.classList.add("ani2");
        s51.classList.add("ani0");
        setTimeout(function () {
          s51.classList.remove("ani0");
        }, 1500);
      }
    }
  }
}

function close() {
  for (let x in pictureID) {
    if (x > 0) {
      const obj = document.getElementById(pictureID[x]);
      obj.style.display = "none";
    }
  }
  document.getElementById(pictureID[0]).style.display = "block";
  document.getElementById("ob0").scrollTop = 0;
}

function tog() {
  document.getElementsByClassName("click")[0].classList.toggle("ani");
  document.getElementsByClassName("menu0")[0].classList.toggle("disp");
  document.getElementsByClassName("menu1")[0].classList.toggle("ani1");
}

function eventListner(obj, type, callback, opt) {
  if (obj) {
    obj.addEventListener(type, callback, opt);
  }
}

window.onload = function () {
  check();
  eventListner(
    window,
    "scroll",
    function (event) {
      if (!cached) {
        setTimeout(function () {
          sani();
          cached = null;
        }, 300);
      }
      cached = event;
    },
    { passive: true }
  );
  eventListner(
    document.getElementsByClassName("click")[0],
    "click",
    tog,
    false
  );
  eventListner(
    document.getElementById("close"), 
    "click", 
    close, 
    false
  );
  eventListner(
    document.getElementById("ob0"),
    "scroll",
    function (event) {
      if (!cached) {
        setTimeout(function () {
          high();
          cached = null;
        }, 300);
      }
      cached = event;
    },
    { passive: true }
  );
  eventListner(
    document.getElementById("contact-form"),
    "submit",
    loadDoc,
    false
  );
  new Vivus("my-svg", { duration: 800 });
};
