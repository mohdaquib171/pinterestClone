const grids = document.querySelectorAll(".grid");
const headings = document.querySelectorAll(".heading .wrapper .text");

function enterScreen(index) {
  const grid = grids[index];
  const heading = headings[index];
  const gridColumns = grid.querySelectorAll(".column");

  grid.classList.add("active");

  gridColumns.forEach((element) => {
    element.classList.remove("animate-before", "animate-after");
  });

  heading.classList.remove("animate-before", "animate-after");
}

function exitScreen(index, exitDelay) {
  const grid = grids[index];
  const heading = headings[index];
  const gridColumns = grid.querySelectorAll(".column");

  gridColumns.forEach((element) => {
    element.classList.add("animate-after");
  });

  heading.classList.add("animate-after");

  setTimeout(() => {
    grid.classList.remove("active");
  }, exitDelay);
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
  //Delay time plus end animation time for all columns
  const cycleTime = timePerScreen + exitDelay;

  let nextIndex = 0;

  function nextCicle() {
    const currentIndex = nextIndex;

    enterScreen(currentIndex);

    setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

    nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
  }

  nextCicle();

  setInterval(nextCicle, cycleTime);
}

setupAnimationCycle({
  timePerScreen: 4000,
  exitDelay: 200 * 7,
});

// Number of images
const numImages = 140;

// Loop through each image and update the corresponding item element
for (let i = 1; i <= numImages; i++) {
  const imagePath = `./images/homeimg/image_${i}.jpg`;
  const itemIndex = (i - 1) % 5; // 5 items per column
  const columnIndex = Math.floor((i - 1) / 5) + 1; // Calculate the column index

  // Update the background image of the item element
  const itemElement = document.querySelector(
    `#column${columnIndex} .item:nth-child(${itemIndex + 1})`
  );
  itemElement.style.backgroundImage = `url(${imagePath})`;
}

// JS to toggle modals
document.addEventListener("DOMContentLoaded", function () {
  // login
  const openModalButton = document.getElementById("openModalButton");
  const closeModalButton = document.getElementById("closeModalButton");
  const loginModal = document.getElementById("loginModal");
  const loginModalOverlay = document.getElementById("loginModalOverlay");
  const switchToRegisterLink = document.getElementById("switchToRegister");

  // register
  const openRegisterModalButton = document.getElementById(
    "openRegisterModalButton"
  );
  const closeRegisterModalButton = document.getElementById(
    "closeRegisterModalButton"
  );
  const registerModal = document.getElementById("registerModal");
  const registerModalOverlay = document.getElementById("registerModalOverlay");
  const switchToLoginLink = document.getElementById("switchToLogin");

  // login event listeners
  openModalButton.addEventListener("click", function () {
    loginModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  });
  closeModalButton.addEventListener("click", function () {
    loginModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  });

  // register event listeners
  openRegisterModalButton.addEventListener("click", function () {
    registerModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  });
  closeRegisterModalButton.addEventListener("click", function () {
    registerModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  });

  // switch modals event listeners
  switchToRegisterLink.addEventListener("click", function () {
    loginModal.classList.add("hidden");
    registerModal.classList.remove("hidden");
  });
  switchToLoginLink.addEventListener("click", function () {
    registerModal.classList.add("hidden");
    loginModal.classList.remove("hidden");
  });

  // close modals when clicking outside of them
  loginModalOverlay.addEventListener("click", function (event) {
    if (event.target === loginModalOverlay) {
      loginModal.classList.add("hidden");
    }
  });

  registerModalOverlay.addEventListener("click", function (event) {
    if (event.target === registerModalOverlay) {
      registerModal.classList.add("hidden");
    }
  });
});

// short code for the above JS to toggle modals
// document.addEventListener("DOMContentLoaded", function () {
//   const modals = {
//     login: {
//       openButton: "openModalButton",
//       closeButton: "closeModalButton",
//       modal: "loginModal",
//       overlay: "loginModalOverlay",
//       switchButton: "switchToRegister",
//       switchModal: "registerModal",
//     },
//     register: {
//       openButton: "openRegisterModalButton",
//       closeButton: "closeRegisterModalButton",
//       modal: "registerModal",
//       overlay: "registerModalOverlay",
//       switchButton: "switchToLogin",
//       switchModal: "loginModal",
//     },
//   };

//   Object.values(modals).forEach(
//     ({
//       openButton,
//       closeButton,
//       modal,
//       overlay,
//       switchButton,
//       switchModal,
//     }) => {
//       document
//         .getElementById(openButton)
//         .addEventListener("click", function () {
//           document.getElementById(modal).classList.remove("hidden");
//           document.body.classList.add("modal-open");
//         });

//       document
//         .getElementById(closeButton)
//         .addEventListener("click", function () {
//           document.getElementById(modal).classList.add("hidden");
//           document.body.classList.remove("modal-open");
//         });

//       document
//         .getElementById(overlay)
//         .addEventListener("click", function (event) {
//           if (event.target.id === overlay) {
//             document.getElementById(modal).classList.add("hidden");
//             document.body.classList.remove("modal-open");
//           }
//         });

//       if (switchButton) {
//         document
//           .getElementById(switchButton)
//           .addEventListener("click", function () {
//             document.getElementById(modal).classList.add("hidden");
//             document.getElementById(switchModal).classList.remove("hidden");
//           });
//       }
//     }
//   );
// });

// JS to upload profile image
// document.getElementById("uploadicon").addEventListener("click", function () {
//   document.getElementById("uploadform input").click();
// });
// 