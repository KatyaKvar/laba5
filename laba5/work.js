const select = document.getElementById("select");
const controls = document.getElementById("controls");
const image = document.getElementById("image");
const image2 = document.getElementById("page2");
const input = document.getElementById("input");

select.addEventListener("change", function () {
  image.className = "sel_image";
  const selOption = select.options[select.selectedIndex].text;
  switch (selOption) {
    case "num1": {
      image.src =
        "https://i.pinimg.com/564x/f8/df/ab/f8dfabcf3d1b78695acbbef795b67f2a.jpg";
      break;
    }
    case "num2": {
      image.src =
        "https://i.pinimg.com/564x/6b/2a/23/6b2a237d810f0def80f6b170a3c373c6.jpg";
      break;
    }
    case "num3": {
      image.src =
        "https://i.pinimg.com/564x/6b/ac/8c/6bac8c346342de5fc69e9550e1e48900.jpg";
      break;
    }
    case "num4": {
      image.src =
        "https://i.pinimg.com/564x/a0/7a/76/a07a76209f0378fde7e872ab03324f6f.jpg";
      break;
    }
    default: {
      image.src =
        "https://i.pinimg.com/564x/85/4a/b9/854ab9f9dd0820f1b2d35bdd304bdd59.jpg";
      break;
    }
  }
});

controls.addEventListener("click", (e) => {
  const currentOption = e.target.innerText;

  switch (currentOption) {
    case "Show all": {
      break;
    }
    case "Add new jewerly": {
      const newOption = new Option(input.value);
      select.prepend(newOption);
      break;
    }
  }
});
