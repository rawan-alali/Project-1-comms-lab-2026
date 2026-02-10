const enterBtn = document.getElementById("enterBtn");
const doors = document.getElementById("doors");
const exitDoors = document.getElementById("exitDoors");
const shaft = document.getElementById("shaft");

const watchBtn = document.getElementById("watchBtn");
const trailer = document.getElementById("trailer");

const floorIndicator = document.getElementById("floorIndicator");
const floors = document.querySelectorAll(".floor");

/* Enter elevator */
enterBtn.addEventListener("click", () => {
  doors.classList.add("open");

  setTimeout(() => {
    doors.style.display = "none";
    shaft.classList.remove("hidden");
    document.body.style.overflow = "auto";
  }, 1200);
});

/* Floor indicator */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      floorIndicator.textContent = entry.target.dataset.floor;
    }
  });
},{ threshold:0.6 });

floors.forEach(f => observer.observe(f));

/* Watch video exit */
watchBtn.addEventListener("click", () => {
  exitDoors.classList.remove("hidden");
  exitDoors.classList.add("open");

  setTimeout(() => {
    exitDoors.style.display = "none";
    trailer.style.display = "block";
    watchBtn.style.display = "none";
  }, 1200);
});
