function collapse(id, remove, add) {
  event.preventDefault();
  let element = document.getElementById(id);
  if (element.classList.contains(remove)) {
    element.classList.remove(remove);
    element.classList.add(add);
  } else {
    element.classList.remove(add);
    element.classList.add(remove);
  }
}
document.querySelector(".small_device").addEventListener("click", () => {
  animateNavItems();
});

// function responsiveAnimation(query, animations) {
//   if (window.matchMedia(query).matches) {
//     animations();
//   }
// }
// responsiveAnimation("(min-width: 768px)", () => {});

{
  //      animations in navbar

  gsap.from("nav li", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0,
    stagger: 0.5,
  });
  gsap.from("nav .logo", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
  });
}

{
  //      animations in top section

  {
    const bannerText = document.querySelector(".banner_p");
    const textContent = bannerText.textContent;
    bannerText.innerHTML = textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    gsap.fromTo(
      ".banner_p span",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }
  {
    const bannerText = document.querySelector(".banner_head");
    const textContent = bannerText.textContent;
    bannerText.innerHTML = textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    gsap.from(".banner_head span", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
    });
  }
  {
    const bannerText = document.querySelector(".banner_head_p");
    const textContent = bannerText.textContent;
    bannerText.innerHTML = textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    gsap.from(".banner_head_p span", {
      opacity: 0,
      y: 20,
      stagger: -0.1,
      duration: 0.5,
      ease: "power1.out",
    });
  }
}

{
  //      animations in holiday section

  gsap.fromTo(
    ".holiday_left",
    { opacity: 0, x: -500, duration: 1 },
    {
      x: 0,
      opacity: 1,
      duration: 2, // Slow fade-in duration
      ease: "power2.out",
      scrollTrigger: ".holiday_left ",
      delay: 0,
    }
  );

  gsap.from(".holiday_right", {
    x: 500,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: ".holiday_right ",
  });
  const title = document.querySelector(".holiday_title");
  const titleContent = title.textContent;
  title.innerHTML = titleContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  gsap.fromTo(
    ".holiday_title span",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: ".holiday_title span",
    }
  );
  const heading = document.querySelector(".holiday_heading");
  const headContent = heading.textContent;
  heading.innerHTML = headContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  gsap.from(".holiday_heading span", {
    opacity: 0,
    y: 0,
    stagger: 0.03,
    delay: 0.5,
    duration: 0.5,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: ".holiday_heading span",
  });
  const detail = document.querySelector(".holiday_detail");
  const detailContent = detail.textContent;
  detail.innerHTML = detailContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  gsap.from(".holiday_detail span", {
    opacity: 0,
    y: 20,
    stagger: -0.003,
    delay: 0.5,
    duration: 0.01,
    delay: 0.5,
    ease: "power1.out",
    scrollTrigger: ".holiday_detail span",
  });
  gsap.from(".holiday_a", {
    opacity: 0,
    delay: 1,
    duration: 1,
    delay: 1,
    scrollTrigger: ".holiday_a ",
  });
}

{
  //      animations in bromo section

  gsap.from(".bromo_text_animation", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.6,
    scrollTrigger: " .bromo_text_animation",
  });

  gsap.from("#bromo .container", {
    filter: "blur(7px)",
    delay: 0.5,
    scrollTrigger: " #bromo .container",
  });
}

{
  //      animations in culture section

  gsap.fromTo(
    ".culture_left",
    { opacity: 0, x: -500, duration: 1,
      delay: 1, rotate: 90 },
    {
      x: 0,
      rotate: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: ".culture_detail span ",
    }
  );

  gsap.from(".culture_right", {
    x: 500,
    duration: 1,
    delay: 1,
    rotate: 180,
    opacity: 0,
    scrollTrigger: ".culture_detail span ",
  });
  const title = document.querySelector(".culture_title");
  const titleContent = title.textContent;
  title.innerHTML = titleContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  gsap.fromTo(
    ".culture_title span",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: ".culture_detail span ",
    }
  );
  const heading = document.querySelector(".culture_heading");
  const headContent = heading.textContent;
  heading.innerHTML = headContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  gsap.from(".culture_heading span", {
    opacity: 0,
    y: 0,
    stagger: 0.03,
    delay: 0.5,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: ".culture_detail span ",
  });
  const detail = document.querySelector(".culture_detail");
  const detailContent = detail.textContent;
  detail.innerHTML = detailContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  gsap.from(".culture_detail span", {
    opacity: 0,
    y: 20,
    stagger: -0.003,
    delay: 0.5,
    duration: 0.01,
    ease: "power1.out",
    scrollTrigger: ".culture_detail span ",
  });
  gsap.from(".culture_a", {
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: ".culture_a ",
  });
}
{
  //      animations in footer

  gsap.from("#footer .footer_container_left h2", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 60%", // Animation starts when the footer is in view
    },
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.from("#footer .footer_container_left img", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 60%",
    },
    opacity: 0,
    y: -50,
    duration: 1.2,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from("#footer .footer_container_right ul", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 60%",
    },
    opacity: 0,
    x: 100,
    duration: 1.2,
    delay: 0.5,
    stagger: 0.3, // Animates each list section one after the other
    ease: "power2.out",
  });

  gsap.from("#footer .footer_btn", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 60%",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 1,
    ease: "power2.out",
  });

  gsap.from("#footer .Copyright_text", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 60%",
    },
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1.5,
    ease: "power2.out",
  });
  gsap.from("#footer ul li", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 2,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#footer",
      start: "top 60%",
    },
  });
}
