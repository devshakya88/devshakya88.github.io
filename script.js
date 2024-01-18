// Logo home
// document.querySelector("#logo").addEventListener("click", () => {
//   window.location.href = "index.html";
// });

// RESUME BUTTON
document.querySelector("#resume-link-1").addEventListener("click", () => {
    window.open(
      // location.assign(
      "https://drive.google.com/file/d/1Ueh9as0-ayRh0qdyrF0x7GATHnifAck_/view?usp=sharing",
      "_blank"
    );
  });
  
  
  document.querySelector("#resume-link-2").addEventListener("click", () => {
    window.open(
      // location.assign(
      "https://drive.google.com/file/d/1Ueh9as0-ayRh0qdyrF0x7GATHnifAck_/view?usp=sharing",
      "_blank"
    );
  });
  
  // GITHUB-CALENDAR
  GitHubCalendar(".react-activity-calendar", "devshakya88");
  // or enable responsive functionality:
  GitHubCalendar(".react-activity-calendar", "devshakya88", {
    responsive: true,
  });
  
  // HAMBURGER NAV
  document.querySelector("#hamburger").addEventListener("click", () => {
    let x = document.querySelector("#nav-menu>div:nth-child(2)");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  });
  
  
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  



  