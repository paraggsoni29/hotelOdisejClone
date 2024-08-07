var tl = gsap.timeline();
tl.from("#page1 svg", {
  y: -40,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
})
  .from("#page1 img", {
    scale: 0.5,
    delay: -0.1,
    duration: 1.2,
    // ease:Power4,
    ease: Power4.easeOut,
    borderRadius: "10px",
  })
  .from("#nav", {
    y: -50,
    opacity: 0,
    delay: -0.4,
    duration: 0.5,
  });

var h2data = document.querySelectorAll("#page2 h2");
h2data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page2 h2 span", {
  color: "#e3e3c4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    scroller: "body",
    start: "top 55%",
    end: "top -5%",
    scrub: 2,
  },
});


gsap.to("#page2 #svg2,#page2 #svg3",{
  left:'-100vw',
  scrollTrigger:{
    trigger:"#page2 #svg2",
    scroller:"body",
    // markers:true,
    scrub:3,
  }
})
var h2data = document.querySelectorAll("#page3 h2");
h2data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page3 h2 span", {
  color: "#535c40",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page3 h2 span",
    scroller: "body",
    start: "top 55%",
    end: "top -5%",
    scrub: 2,
  },
});
gsap.to("#photu",{
  y:-50,
  stagger:0.3,
  scrollTrigger: {
    trigger: "#page3 #photu",
    scroller: "body",
    start: "top 55%",
    end: "top -5%",
    scrub: 2,
  },
}
)


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    type:"fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


gsap.to("#page6 #pehla","#page6 #dusra",{
 left:"-40vw",
  scrollTrigger:{
    trigger:"#pehla",
    scroller:"body",
    markers:true,
    // scrub:3,

  }
})

var h3data = document.querySelectorAll("#page6 h3");
h3data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page6 h3 span", {
  color: "#e3e3c4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page6 h3 span",
    scroller: "body",
    start: "top 55%",
    end: "top -5%",
    scrub: 2,
  },
});