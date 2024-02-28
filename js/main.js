const img1 = document.querySelectorAll('.img11');
const img2 = document.querySelectorAll('.img22');
const img3 = document.querySelectorAll('.img33');


$('.marquee_header').marquee({
  duration: 25000,
  gap: 10,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});

$('.marquee_home').marquee({
  duration: 20000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});

$('.marquee_banner').marquee({
  duration: 20000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});


setTimeout(() => {
  document.querySelector("section.menuMovil").style.opacity = "1";
  document.querySelector("section.carritoView").style.opacity = "1";
}, 1000);


document.addEventListener("click", function (e) {
  if (e.target.closest("header .navigation ul li ul li a") || e.target.closest("section.line_Productos .content .card .part .title h3") || e.target.closest("section.menuMovil .menu ul ul li a")) {
    var categoriaLink = e.target.textContent
    localStorage.setItem('CatNovedad1', `${categoriaLink}`);
  } else if (e.target.closest("section.line_Productos .content .card a") || e.target.closest("section.producto .container .part1 a")) {
    var categoriaLink = e.target.getAttribute("data-category")
    localStorage.setItem('CatNovedad1', `${categoriaLink}`);
  } else {
    localStorage.setItem('CatNovedad1', `none`);
  }
  if (e.target.closest(".checkbox-box .labelPoliticas")) {
    document.querySelector(".labelPoliticas").classList.toggle("activo");
  }
  if (e.target.closest(".checkbox-box .recordarPassword")) {
    document.querySelector(".recordarPassword").classList.toggle("activo");
  }
  if (e.target.closest("ul li button.buscador") || e.target.closest("section.buscador .top") || e.target.closest(".menumovilbottom button")) {
    document.querySelector("section.buscador").classList.toggle("open");
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function addClassToVisibleElements(elements, className) {
      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add(className);
        }
      });
    }

    const elements = document.querySelectorAll(".oculto");

    addClassToVisibleElements(elements, "visible");

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elements, "visible");
    })
  }

  if (e.target.closest("section.buscador .top")) {
    document.querySelector("section.buscador .textAnimation").classList.remove("visible");
  }

  if (e.target.closest("li button.carrito") || e.target.closest("section.carritoView .title button") || e.target.closest("section.producto .container .part2 button") || e.target.closest("section.datosCuenta .content .part1 .listaPedidos .item .listaArticulos .item .info .buttonAmarillo") || e.target.closest("section.carritoView .buttonAmarillo.seguirComprando")) {
    document.querySelector("section.carritoView").classList.toggle("open");
    document.querySelector("section.filtro").classList.toggle("open");
  }
  var formespacioselect = document.querySelectorAll('.formulario form select');

  if (e.target.closest(".formulario form select")) {
    e.target.parentElement.classList.toggle("active");
  }
  else {
    formespacioselect.forEach(function (shinyItem2) {
      shinyItem2.parentElement.classList.remove("active")
    });
  }
  if (e.target.closest("li.menuMovil button")) {
    document.querySelector("section.menuMovil").classList.toggle("open");
  }
  if (e.target.closest("section.menuMovil .menu ul li.fex button")) {
    document.querySelector("section.menuMovil .menu ul li.fex").classList.toggle("open")
  }
})

const mq2 = window.matchMedia("(max-width: 1025px)");

if (mq2.matches) {
  var content = document.querySelector("footer .waves");
  var waveFooter = gsap.timeline({
    scrollTrigger: {
      trigger: content,
      start: '-180% 80%',
      end: '80% 100%',
      scrub: 1,
    },
  });
  waveFooter.to(content, { top: -47, duration: 10000, ease: "none" })
} else {
  var content = document.querySelector("footer .waves");
  var waveFooter = gsap.timeline({
    scrollTrigger: {
      trigger: content,
      //markers: true,
      start: '-180% 80%',
      end: '80% 100%',
      scrub: 1,
    },
  });
  waveFooter.to(content, { top: -80, duration: 10000, ease: "none" })
}


if ($('header').length > 0) {


  $("header .navigation li").not(`[class="fex"]`).hover(
    function () {
      document.querySelector(".filtroMenu").classList.remove("open")
      document.querySelector("header").classList.remove("open")
    }
  )

  $("header .navigation li.fex").hover(
    function () {
      document.querySelector(".filtroMenu").classList.add("open")
      document.querySelector("header").classList.add("open")
    }
  )

  $("header .navigation li.fex ul li").hover(
    function () {
      document.querySelector(".filtroMenu").classList.add("open")
      document.querySelector("header").classList.add("open")
    }
  )


  $("main").hover(function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMenu").classList.remove("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMenu").classList.remove("open")
  };
  $("footer").hover(function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMenu").classList.remove("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMenu").classList.remove("open")
  };
}



MyApp = {
  loading: {
    init: function () {
      var circuloAmarillo = document.querySelector(".loading .amarillo");
      var circuloVerde = document.querySelector(".loading .verde");
      var Pageloading = document.querySelector(".loading");
      var Count = document.querySelector(".loading .contador span");
      var Circulocount = document.querySelector(".loading .contador");

      setTimeout(() => {
        circuloAmarillo.classList.add("abrir");
      }, 500);

      setTimeout(() => {
        circuloVerde.classList.add("abrir");
      }, 1200);

      setTimeout(() => {
        Pageloading.classList.add("close");
      }, 1900);

      setTimeout(() => {
        Count.innerHTML = "64%"
      }, 425);
      setTimeout(() => {
        Count.innerHTML = "100%"
      }, 850);
      setTimeout(() => {
        Circulocount.classList.add("ocultar");
      }, 1000);
    }
  },
  loading2: {
    init: function () {
      var Pageloading2 = document.querySelector(".loading2");
      setTimeout(() => {
        Pageloading2.classList.add("close");
      }, 0);
    }
  },
  header: {
    init: function () {
      window.addEventListener("scroll", function () {
        if (this.pageYOffset > 60) {
          document.querySelector("header").classList.add("sticky");
        }
        else {
          document.querySelector("header").classList.remove("sticky");
        }
      });
    }
  },
  lineaProductos: {
    init: function () {
      var listaLinea = document.querySelectorAll(".line_Productos .card .producto");

      for (let i = 0; i < listaLinea.length; i++) {
        if (i % 2 === 0) {
          listaLinea[i].classList.add('left');
        } else {
          listaLinea[i].classList.add('right');
        }
      }
      var content = document.querySelectorAll(".line_Productos .producto.left");
      for (let i = 0; i < content.length; i++) {
        var tl = gsap.timeline({
          scrollTrigger: {
            //markers: true,
            trigger: content[i],
            start: '-50% 60%',
            end: '100% 100%',
            scrub: 1,
          },
        });
        tl.to(content[i], { right: 0, left: "initial", duration: 10000, ease: "none" })
      }

      var content2 = document.querySelectorAll(".line_Productos .producto.right");
      for (let i = 0; i < content2.length; i++) {
        var tl = gsap.timeline({
          scrollTrigger: {
            //markers: true,
            trigger: content2[i],
            start: '-50% 60%',
            end: '100% 100%',
            scrub: 1,
          },
        });
        tl.to(content2[i], { left: 0, right: "initial", duration: 10000, ease: "none" })
      }
    }
  },
  changeImage: {
    init: function () {
      document.querySelector("section.beneficios ul li").classList.add("select");
      document.querySelector("section.beneficios .part2 img").classList.add("select");

      const elementos = document.querySelectorAll('section.beneficios ul li');
      const imgs = document.querySelectorAll('section.beneficios .part2 img');
      var ultimoElementoHover = null;

      var contenttextAnimation = document.querySelectorAll("section.beneficios .textAnimation");
      var delay = 0

      elementos.forEach((elemento) => {
        elemento.addEventListener('mouseover', () => {
          if (ultimoElementoHover) {
            ultimoElementoHover.classList.remove('select');
          }
          elemento.classList.add('select');
          ultimoElementoHover = elemento;

          var categoria = elemento.getAttribute('data-category')

          for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove('select');
            imgs[i].classList.remove('shadow-drop-2-center');
            if (categoria == imgs[i].getAttribute('data-category')) {
              imgs[i].classList.add('select');
              imgs[i].classList.add('shadow-drop-2-center');
            }
          }

        });
      });
      var swiper = new Swiper(".sliderBeneficios", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
    }
  },
  productosHome: {
    init: function () {
      document.querySelector("section.productosHome .datos ul li").classList.add("select");


      var swiper4 = new Swiper(".sliderCentro", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".productosHome .datos .swiper-button-next",
          prevEl: ".productosHome .datos .swiper-button-prev",
        },
        pagination: {
          el: ".sliderCentro .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1050: {
            slidesPerView: 3,
          },
          617: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }
      })

      document.addEventListener("click", function (e) {
        if (e.target.closest(".itemProducto a .buttonAmarillo")) {
          e.preventDefault();
        }
      })

      /******************************************** */
      let listaTitle = [];

      const enlaces = document.querySelectorAll('section.productosHome .datos ul li');
      var sliders = document.querySelectorAll('.productosHome .sliderCentro');

      var cat = document.querySelector('section.productosHome .datos ul li.select').textContent;

      for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].getAttribute("data-category") !== cat) {
          sliders[i].classList.add("hidden");
        }
      }

      for (let i = 0; i < enlaces.length; i++) {
        textoitem = enlaces[i].textContent;
        listaTitle.push(textoitem);
      }

      enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          enlaces.forEach((enlace) => enlace.classList.remove('select'));
          evento.target.classList.add('select');
          var categoria = evento.target.innerHTML;
          for (let i = 0; i < sliders.length; i++) {
            const element = sliders[i].getAttribute("data-category");
            if (element == categoria) {
              sliders[i].classList.add("mostrar");
              sliders[i].classList.remove("hidden");
            } else {
              sliders[i].classList.remove("mostrar");
              sliders[i].classList.add("hidden");
            }
          }
          AOS.init();
        })
      })
    }
  },
  categorias: {
    init: function () {
      const enlaces2 = document.querySelectorAll('section.productosPage .menus ul li');
      const enlaces3 = document.querySelectorAll('section.productosPage .menus .submenuCategory');
      const enlaces4 = document.querySelectorAll('section.productosPage .menus .submenuCategory button');
      var categoriaClicK = localStorage.getItem("CatNovedad1");

      if (categoriaClicK == "none") {
        document.querySelector("section.productosPage .menus ul li").classList.add("select");
      }

      let listaTitle = [];

      for (let i = 0; i < enlaces2.length; i++) {
        textoitem = enlaces2[i].getAttribute("data-category");
        listaTitle.push(textoitem);
      }

      if (listaTitle.includes(categoriaClicK)) {
        for (let y = 0; y < enlaces2.length; y++) {
          if (categoriaClicK === enlaces2[y].getAttribute("data-category")) {
            document.querySelector("section.productosPage .menus ul li").classList.remove("select");
            enlaces2[y].classList.add('select')
          } else {
          }
        }
      }
      var select = document.getElementById("categoriaPrincipal");
      var options = select.options;

      for (var i = 0; i < options.length; i++) {
        if (options[i].value === categoriaClicK) {
          options[i].setAttribute("selected", "selected");

          $(`.opcionSubCategory`).addClass("open");
          $(`.opcionSubCategory #${categoriaClicK}`).addClass("select");
          $(`.opcionSubCategory select`).not(`[id="${categoriaClicK}"]`).removeClass("select")

          waveFooter.kill();
          var content2 = document.querySelector("footer .waves");
          var waveFooter2 = gsap.timeline({
            scrollTrigger: {
              //markers: true,
              trigger: content2,
              start: '-180% 80%',
              end: '80% 100%',
              scrub: 1,
            },
          });

          waveFooter2.to(content, { top: -47, duration: 10000, ease: "none" })

          break;
        }
      }


      $('.itemProducto').hide();

      var categoryMain = document.querySelector('section.productosPage .menus ul li.select').getAttribute("data-category");

      if (categoryMain === "Todos") {
        $(`.itemProducto`).show(0);
      } else {
        $(`.itemProducto[data-category="${categoryMain}"]`).show();
        var cat1 = document.querySelector('section.productosPage .menus ul li.select').getAttribute("data-category");
        for (let i = 0; i < enlaces3.length; i++) {
          if (enlaces3[i].getAttribute("data-category") == cat1) {
            $(`.submenuCategory[data-category="${cat1}"]`).show();
            $(`.submenuCategory`).not(`[data-category="${cat1}"]`).hide();
          }
        }
      }

      enlaces2.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          enlaces2.forEach((enlace2) => enlace2.classList.remove('select'));
          evento.target.classList.add('select');
          var categoria = evento.target.getAttribute("data-category");
          $(`.itemProducto`).not(`[data-category="${categoria}"]`).hide();
          $(`.itemProducto[data-category="${categoria}"]`).show();
          if (categoria === "Todos") {
            $(`.itemProducto`).show();
            $(`.submenuCategory`).hide();
          }

          var categoria2 = evento.target.getAttribute("data-category");

          for (let i = 0; i < enlaces3.length; i++) {
            if (enlaces3[i].getAttribute("data-category") == categoria2) {
              $(`.submenuCategory[data-category="${categoria2}"]`).show();
              $(`.submenuCategory`).not(`[data-category="${categoria2}"]`).hide();
            }
          }
          for (let i = 0; i < enlaces4.length; i++) {
            enlaces4[i].classList.remove("select")
          }

          AOS.init();

          waveFooter.kill();

          var content1 = document.querySelector("footer .waves");
          var waveFooter1 = gsap.timeline({
            scrollTrigger: {
              trigger: content1,
              start: '-180% 80%',
              end: '80% 100%',
              scrub: 1,
            },
          });
          waveFooter1.to(content, { top: -80, duration: 10000, ease: "none" })

        })
      })

      enlaces4.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          enlaces4.forEach((enlaces4) => enlaces4.classList.remove('select'));
          evento.target.classList.add('select');
          var categoria4 = evento.target.getAttribute("data-subcategory");
          $(`.itemProducto`).not(`[data-subcategory="${categoria4}"]`).hide();
          $(`.itemProducto[data-subcategory="${categoria4}"]`).show();
          AOS.init();

          waveFooter.kill();

          var content2 = document.querySelector("footer .waves");
          var waveFooter2 = gsap.timeline({
            scrollTrigger: {
              trigger: content2,
              start: '-180% 80%',
              end: '80% 100%',
              scrub: 1,
            },
          });
          waveFooter2.to(content, { top: -80, duration: 10000, ease: "none" })
        })
      })
    }
  },
  tabs: {
    init: function () {
      document.querySelector("section.producto .tabs ul li").classList.add("select");
      const enlacesProducto = document.querySelectorAll('section.producto .tabs ul li');
      const parrafoProducto = document.querySelectorAll('section.producto .tabs .descripcion p');

      var texto = ''
      for (let i = 0; i < enlacesProducto.length; i++) {
        if (enlacesProducto[i].classList.contains("select")) {
          texto = enlacesProducto[i].textContent
          $(`.tabs .descripcion p`).not(`[data-category="${texto}"]`).hide();
          $(`.tabs .descripcion p[data-category="${texto}"]`).show();
        }
      }

      enlacesProducto.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          enlacesProducto.forEach((enlacesProducto) => enlacesProducto.classList.remove('select'));
          evento.target.classList.add('select');
          var categoria = evento.target.textContent;
          $(`.tabs .descripcion p`).not(`[data-category="${categoria}"]`).hide();
          $(`.tabs .descripcion p[data-category="${categoria}"]`).show();
        })
      })
    }
  },
  relacionados: {
    init: function () {
      var swiper3 = new Swiper(".productosRelacionados", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".relacionados .swiper-button-next",
          prevEl: ".relacionados .swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1050: {
            slidesPerView: 3,
          },
          617: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
        }
      })
    }
  },
  tabs2: {
    init: function () {
      document.querySelector("section.bannerInterna .part1 ul li").classList.add("select");
      const enlacesProducto2 = document.querySelectorAll('section.bannerInterna .part1 ul li');

      var texto = ''
      for (let i = 0; i < enlacesProducto2.length; i++) {
        if (enlacesProducto2[i].classList.contains("select")) {
          texto = enlacesProducto2[i].textContent
          $(`section.bannerInterna .part2 .container .contentInfo`).not(`[data-category="${texto}"]`).hide();
          $(`section.bannerInterna .part2 .container .contentInfo[data-category="${texto}"]`).show();
        }
      }

      enlacesProducto2.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          enlacesProducto2.forEach((enlacesProducto2) => enlacesProducto2.classList.remove('select'));
          evento.target.classList.add('select');
          var categoria = evento.target.textContent;
          $(`section.bannerInterna .part2 .container .contentInfo`).not(`[data-category="${categoria}"]`).hide();
          $(`section.bannerInterna .part2 .container .contentInfo[data-category="${categoria}"]`).show();
        })
      })
    }
  },
  acordeon: {
    init: function () {
      let collapsible = document.querySelectorAll(".faq-collapsible");
      collapsible.forEach((element) => {
        element.addEventListener("click", (element) => {
          if (!element.target.parentElement.classList.contains('open')) {
            for (let i = 0; i < collapsible.length; i++) {
              collapsible[i].parentElement.classList.remove("open");
            }
            element.target.parentElement.classList.add("open");
          } else {
            element.target.parentElement.classList.remove("open");
          }
        });
      });
    }
  },
  validate: {
    init: function () {
      var formespacio = document.querySelectorAll(".form-group");
      var formespacioinput = document.querySelectorAll(".form-input.required");
      var formespacioinput2 = document.querySelectorAll(".form-input");
      var formespacioselect = document.querySelectorAll("form select");
      var formespacioselect = document.querySelectorAll(
        ".formulario select.form-input"
      );

      if (document.querySelector('input[name="name"]')) {
        var inputRestringido = document.querySelector('input[name="name"]');

        inputRestringido.addEventListener('keypress', function (event) {
          if (event.which >= 48 && event.which <= 57) { // Validar si se presiona una tecla numérica
            event.preventDefault(); // Prevenir la entrada del número
          }
        });
      }

      $(document).on("wheel", "input[type=number]", function (e) {
        $(this).blur();
      });

      function inputcheck() {
        for (let i = 0; i < formespacioinput2.length; i++) {
          if (!formespacioinput2[i].value) {
            formespacioinput2[i].parentElement.parentElement.classList.remove(
              "ok"
            );
          } else {
            formespacioinput2[i].parentElement.parentElement.classList.add(
              "ok"
            );
          }
        }
      }

      function validateInput(e) {
        for (let y = 0; y < formespacioinput.length; y++) {
          if (!formespacioinput[y].value) {
            formespacioinput[y].parentElement.parentElement.classList.add(
              "error"
            );
            e.preventDefault();
          } else {
            formespacioinput[y].parentElement.parentElement.classList.remove(
              "error"
            );
          }
        }
      }

      function validateSelect(e) {
        for (let i = 0; i < formespacioselect.length; i++) {
          if (formespacioselect[i].classList.contains("default")) {
          } else {
            if (formespacioselect[i].value == "") {
              formespacioselect[i].parentElement.parentElement.classList.add("error");
              e.preventDefault();
            } else {
              formespacioselect[i].parentElement.parentElement.classList.remove("error");
            }
          }
        }
      }

      function validatecheckbox(e) {
        if (document.querySelector('input[name="motivo"]:checked')) {
          if (!document.querySelector('input[name="motivo"]:checked')) {
            document
              .querySelector(".texto-check-motivo")
              .classList.add("error");
            // e.preventDefault();
          } else {
            document
              .querySelector(".texto-check-motivo")
              .classList.remove("error");
          }
        }
      }

      $(".form-input").on("change", () => {
        formespacioinput.forEach((element) => {
          if (!element.value == "") {
            element.parentElement.parentElement.classList.add("ok");
          } else {
            element.parentElement.parentElement.classList.remove("ok");
          }
        });
      });

      function validateCheck(e) {
        formespaciocheck = document.querySelectorAll(
          ".formulario input.required[type='checkbox']"
        );

        for (let i = 0; i < formespaciocheck.length; i++) {
          if (formespaciocheck[i].checked) {
            formespaciocheck[i].parentElement.parentElement.classList.remove(
              "error"
            );
          } else {
            formespaciocheck[i].parentElement.parentElement.classList.add(
              "error"
            );
          }
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest(".form-input")) {
          formespacio.forEach(function (shinyItem) {
            shinyItem.classList.remove("focusin");
          });

          e.target.parentElement.parentElement.classList.add("focusin");
        } else {
          formespacio.forEach(function (shinyItem) {
            shinyItem.classList.remove("focusin");
          });
        }

        inputcheck();

        if (e.target.closest(".formulario form button")) {
          validateInput(e);
          validateSelect(e);
          validatecheckbox(e);
          validateCheck(e);
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.keyCode == 9) {
          for (let i = 0; i < formespacioinput2.length; i++) {
            formespacioinput2[i].addEventListener("focusin", (event) => {
              formespacioinput2[i].parentElement.parentElement.classList.add(
                "focusin"
              );
            });

            formespacioinput2[i].addEventListener("focusout", (event) => {
              formespacioinput2[i].parentElement.parentElement.classList.remove(
                "focusin"
              );

              if (formespacioinput2[i].value) {
                formespacioinput2[i].parentElement.parentElement.classList.add(
                  "ok"
                );
              }
            });
          }
        }
      });
    },
  },
  inputRadio: {
    init: function () {
      const radios2 = document.querySelectorAll('input[name="voucher"]');
      const radios = document.querySelectorAll('input[name="metodo"]');
      const radios3 = document.querySelectorAll('input[name="metodoEntrega"]');

      radios2.forEach(radio => {
        radios2[0].checked = true;
        if (radio.checked) {
          radio.parentNode.classList.add('activo');
          radio.checked = true;
        } else {
          radio.parentNode.classList.remove('activo');
          radio.checked = false;
        }
        radio.addEventListener('click', () => {
          for (let i = 0; i < radios2.length; i++) {
            radios2[i].parentNode.classList.remove('activo');
          }
          if (radio.checked) {
            radio.parentNode.classList.add('activo');
          } else {
            radio.parentNode.classList.remove('activo');
          }
        });
      });

      radios.forEach(radio => {
        radios[0].checked = true;

        if (radio.checked) {
          radio.parentNode.classList.add('activo');
          radio.checked = true;
        } else {
          radio.parentNode.classList.remove('activo');
          radio.checked = false;
        }
        radio.addEventListener('click', () => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          for (let i = 0; i < radios.length; i++) {
            radios[i].parentNode.classList.remove('activo');
            //radio.checked = true;
          }
          if (radio.checked) {
            radio.parentNode.classList.add('activo');
            //radio.checked = true;
          } else {
            radio.parentNode.classList.remove('activo');
            //radio.checked = false;
          }
        });
      });

      radios3.forEach(radio => {
        radios3[0].checked = true;
        if (radio.checked) {
          radio.parentNode.classList.add('activo');
          radio.checked = true;
        } else {
          radio.parentNode.classList.remove('activo');
          radio.checked = false;
        }
        radio.addEventListener('click', () => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          for (let i = 0; i < radios3.length; i++) {
            radios3[i].parentNode.classList.remove('activo');
          }
          if (radio.checked) {
            radio.parentNode.classList.add('activo');
            radio.checked = true;
          } else {
            radio.parentNode.classList.remove('activo');
            radio.checked = false;
          }
        });
      });

    }
  },
  inputTrans: {
    init: function () {
      const dateInput = document.getElementById('expaño');

      dateInput.addEventListener('input', function (event) {
        const input = event.target.value;
        if (input.length === 2) {
          event.target.value = input + ' / ';
        } else if (input.length > 7) {
          event.target.value = input.slice(0, 7);
        }
      });

      dateInput.addEventListener('keydown', function (event) {
        const key = event.key;
        const input2 = event.target.value;
        if (key === 'Backspace' && input2.length === 5) {
          event.target.value = input2.slice(0, 1);
          event.preventDefault();
        }
      });

      const input = document.getElementById('cvv');

      input.addEventListener('input', function () {
        if (this.value.length > 3) {
          this.value = this.value.slice(0, 3);
        }
      });
    }
  },
  productSelect: {
    init: function () {
      var catPrincipal = document.querySelector("#categoriaPrincipal")
      var catsubPrincipal = document.querySelectorAll(".opcionSubCategory select")

      catPrincipal.addEventListener('change', (event) => {
        var catPrincipalValue = event.target.value;
        $(`.itemProducto`).not(`[data-category="${catPrincipalValue}"]`).hide();
        $(`.itemProducto`).not(`[data-category="${catPrincipalValue}"]`).addClass("aos-animate")
        $(`.itemProducto[data-category="${catPrincipalValue}"]`).show();
        $(`.itemProducto[data-category="${catPrincipalValue}"]`).addClass("aos-animate");
        $(`.opcionSubCategory`).addClass("open");
        $(`.opcionSubCategory #${catPrincipalValue}`).addClass("select");
        $(`.opcionSubCategory select`).not(`[id="${catPrincipalValue}"]`).removeClass("select")
        if (catPrincipalValue === "Todos") {
          $(`.itemProducto`).show();
          $(`.itemProducto`).addClass("aos-animate");
          $(`.opcionSubCategory`).removeClass("open");
        }

        AOS.init();

        waveFooter.kill();
        var content2 = document.querySelector("footer .waves");
        var waveFooter2 = gsap.timeline({
          scrollTrigger: {
            trigger: content2,
            start: '-180% 80%',
            end: '80% 100%',
            scrub: 1,
          },
        });

        waveFooter2.to(content, { top: -47, duration: 10000, ease: "none" })
      });

      catsubPrincipal.forEach(select => {
        select.addEventListener('change', (event) => {
          const selectId = event.target.id;
          var catsubPrincipalValue = event.target.value;
          $(`.itemProducto[data-category="${selectId}"]`).not(`[data-subcategory="${catsubPrincipalValue}"]`).hide();
          $(`.itemProducto[data-category="${selectId}"][data-subcategory="${catsubPrincipalValue}"]`).show();


          if (catsubPrincipalValue === "Todos") {
            var valorMayor = document.querySelector("section.productosPage .menus select").value
            $(`.itemProducto[data-category="${valorMayor}"]`).show();
          }
          AOS.init();
          waveFooter.kill();
          var content2 = document.querySelector("footer .waves");
          var waveFooter2 = gsap.timeline({
            scrollTrigger: {
              trigger: content2,
              start: '-180% 80%',
              end: '80% 100%',
              scrub: 1,
            },
          });

          waveFooter2.to(content, { top: -47, duration: 10000, ease: "none" })
        });
      });
    }
  },
  selectEnlace: {
    init: function () {
      var selectElement = document.querySelector('.selectEnlace #selectEnlace');
      selectElement.selectedIndex = 0;
      selectElement.addEventListener('change', (event) => {
        var selectedValue = selectElement.value;
        if (selectedValue !== '') {
          window.location.href = selectedValue;
        }
      })
    }
  },
  contadorCarrito: {
    init: function () {
      const lista = document.querySelectorAll('.lista');
      function incrementarContador(contador) {
        contador.textContent = parseInt(contador.textContent) + 1;
      }
      function decrementarContador(contador) {
        const valorActual = parseInt(contador.textContent);
        if (valorActual > 1) {
          contador.textContent = valorActual - 1;
        }
      }
      lista.forEach(lista => {
        lista.addEventListener('click', function (event) {
          const target = event.target;
          if (target.classList.contains('incrementar')) {
            var contador = target.parentElement.querySelector('.contador');
            incrementarContador(contador);
          }
          if (target.classList.contains('decrementar')) {
            var contador = target.parentElement.querySelector('.contador');
            decrementarContador(contador);
          }
        });
      });
    }
  },
  verificarMetodoPago: {
    init: function () {
      const radiosMetodo = document.querySelectorAll('input[name="metodo"]');
      radiosMetodo.forEach(radio => {
        radiosMetodo[0].checked = true;
        document.querySelector("section.pageEtapa1 .content .part2 .info .contentEnlace").style.display = "none";
        radio.addEventListener('click', () => {
          if (radio.checked) {
            if (radio.value == "tarjeta") {
              document.querySelector("section.pageEtapa1 .content .part2 .info .contentEnlace").style.display = "none";
            } else {
              document.querySelector("section.pageEtapa1 .content .part2 .info .contentEnlace").style.display = "block";
            }
            //radio.checked = true;
          }
        });
      });

      var inputRestringido = document.querySelector('input[name="expaño"]');

      inputRestringido.addEventListener('input', function (event) {
        const valorInput = event.target.value;
        const soloNumeros = valorInput.replace(/[^0-9/ ]/g, '');
        event.target.value = soloNumeros;
      });

    }
  },
  listaEnvios: {
    init: function () {
      document.addEventListener("click", function (e) {
        if (e.target.closest(".terminosPage .buttonAmarillo")) {
          document.querySelector(".terminosPage .lista").classList.toggle("open")
          document.querySelector(".terminosPage .buttonAmarillo").classList.toggle("ok")
        }
      })
    }
  }
}

if ($('.eleccion.metodoPagoSelect').length > 0) {
  MyApp.verificarMetodoPago.init();
}

if ($('.loading').length > 0) {
  MyApp.loading.init();
}
if ($('.loading2').length > 0) {
  MyApp.loading2.init();
}

if ($('.line_Productos').length > 0) {
  MyApp.lineaProductos.init();
}

if ($('header').length > 0) {
  MyApp.header.init();
}

if ($('.beneficios').length > 0) {
  MyApp.changeImage.init();
}

if ($('.productosHome').length > 0) {
  MyApp.productosHome.init();
}

if ($('.productosPage .menus').length > 0) {
  MyApp.categorias.init();
}

if ($('section.producto .part2 .tabs').length > 0) {
  MyApp.tabs.init();
}

if ($('section.relacionados').length > 0) {
  MyApp.relacionados.init();
}

if ($('section.bannerInterna ul li').length > 0) {
  MyApp.tabs2.init();
}

if ($('.faq-content').length > 0) {
  MyApp.acordeon.init();
}

if ($('.formulario').length > 0) {
  MyApp.validate.init();
}

if ($('.faq-content input').length > 0) {
  MyApp.inputRadio.init();
}

if ($('.faq-answer .formulario').length > 0) {
  MyApp.inputTrans.init();
}

if ($('.productosPage .select').length > 0) {
  MyApp.productSelect.init();
}

if ($('.datosCuenta .selectEnlace').length > 0) {
  MyApp.selectEnlace.init();
}

if ($('.carritoView').length > 0) {
  MyApp.contadorCarrito.init();
}

if ($('.terminosPage .lista').length > 0) {
  MyApp.listaEnvios.init();
}

/***************************************** */
function hoverStyle(unidbtnFollow) {

  unidbtnFollow.addEventListener('mouseleave', function (e) {
    TweenMax.to(unidbtnFollow, 0.3, { scale: 1, x: 0, y: 0 });
  });

  unidbtnFollow.addEventListener('mousemove', function (e) {
    callParallax2(e);
  });

  function callParallax2(e) {
    parallaxIt2(e, unidbtnFollow, 15);
  }

  function parallaxIt2(e, target, movement) {
    var $this = $(unidbtnFollow);
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 0.3, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement,
      ease: Power2.easeOut
    });
  }
}

var btnFollow = document.querySelectorAll('.followProducto');

btnFollow.forEach(function (unidbtnFollow) {
  hoverStyle(unidbtnFollow);
});

/* efectos de entrada */

if (document.querySelector("body").classList.contains("page-home")) {
  setTimeout(() => {
    if ($('header').length > 0) {
      document.querySelector("header").classList.add("ok")
    }
    AOS.init();
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function isInViewport2(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || (document.documentElement.clientHeight / 25)) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function addClassToVisibleElements(elements, className) {
      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add(className);
        }
      });
    }

    function addClassToVisibleElements2(elements, className) {
      elements.forEach(element => {
        if (isInViewport2(element)) {
          element.classList.add(className);
        }
      });
    }

    const elements = document.querySelectorAll(".oculto");
    const elementsSlider = document.querySelectorAll(".productosHome .container");
    const elementsSlider2 = document.querySelectorAll(".relacionados .productosRelacionados");
    const elementsPageProduct = document.querySelectorAll(".productosPage .itemProducto");
    const elementsPageProduct2 = document.querySelectorAll(".presentaciones .itemProducto");
    //const elementsPageProduct3 = document.querySelectorAll(".relacionados .itemProducto");

    addClassToVisibleElements(elements, "visible");
    //addClassToVisibleElements(elementsSlider, "show");
    //addClassToVisibleElements(elementsSlider2, "show");
    //addClassToVisibleElements2(elementsPageProduct, "show");
    //addClassToVisibleElements2(elementsPageProduct2, "show");
    //addClassToVisibleElements2(elementsPageProduct3, "show");

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elements, "visible");
      //addClassToVisibleElements(elementsSlider, "show");
      //addClassToVisibleElements(elementsSlider2, "show");
      //addClassToVisibleElements2(elementsPageProduct, "show");
      //addClassToVisibleElements2(elementsPageProduct2, "show");
      //addClassToVisibleElements2(elementsPageProduct3, "show");
    })
  }, 2000);
} else {
  setTimeout(() => {
    if ($('header').length > 0) {
      document.querySelector("header").classList.add("ok")
    }
    AOS.init();
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function isInViewport2(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || (document.documentElement.clientHeight / 25)) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function addClassToVisibleElements(elements, className) {
      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add(className);
        }
      });
    }

    function addClassToVisibleElements2(elements, className) {
      elements.forEach(element => {
        if (isInViewport2(element)) {
          element.classList.add(className);
        }
      });
    }

    const elements = document.querySelectorAll(".oculto");
    //const elementsSlider = document.querySelectorAll(".productosHome .container");
    //const elementsSlider2 = document.querySelectorAll(".relacionados .productosRelacionados");
    //const elementsPageProduct = document.querySelectorAll(".productosPage .itemProducto");
    //const elementsPageProduct2 = document.querySelectorAll(".presentaciones .itemProducto");
    //const elementsPageProduct3 = document.querySelectorAll(".relacionados .itemProducto");

    addClassToVisibleElements(elements, "visible");
    //addClassToVisibleElements(elementsSlider, "show");
    //addClassToVisibleElements(elementsSlider2, "show");
    //addClassToVisibleElements2(elementsPageProduct, "show");
    //addClassToVisibleElements2(elementsPageProduct2, "show");
    //addClassToVisibleElements2(elementsPageProduct3, "show");

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elements, "visible");
      //addClassToVisibleElements(elementsSlider, "show");
      //addClassToVisibleElements(elementsSlider2, "show");
      //addClassToVisibleElements2(elementsPageProduct, "show");
      //addClassToVisibleElements2(elementsPageProduct2, "show");
      //addClassToVisibleElements2(elementsPageProduct3, "show");
    })
  }, 500);
}


/****************************** Orientación table **************************************** */



// Función que se ejecutará cuando cambie la orientación
function handleResize() {
  const mq3 = window.matchMedia("(max-width: 1025px)");

  if (mq3.matches) {
    var content = document.querySelector("footer .waves");
    var waveFooter = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: '-180% 80%',
        end: '80% 100%',
        scrub: 1,
      },
    });
    waveFooter.to(content, { top: -47, duration: 10000, ease: "none" })
  } else {
    var content = document.querySelector("footer .waves");
    var waveFooter = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: '-180% 80%',
        end: '80% 100%',
        scrub: 1,
      },
    });
    waveFooter.to(content, { top: -80, duration: 10000, ease: "none" })
  }

}

// Registrar el evento resize
window.addEventListener("resize", handleResize);


const contenedor = document.querySelector("header .anuncio");
const contenedorHeader = document.querySelector("header");


contenedorHeader.style.top = "";

let alturaAnterior = contenedor.offsetHeight;
function detectarCambioDeAltura() {
  const alturaActual = contenedor.offsetHeight;

  if (alturaActual !== alturaAnterior) {
    alturaAnterior = alturaActual;
    contenedorHeader.style.top = alturaActual;
  }
}

setInterval(detectarCambioDeAltura, 1000);








