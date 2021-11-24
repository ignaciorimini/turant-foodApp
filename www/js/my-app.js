var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    { path: '/index/', url: 'index.html', },
    { path: '/about/', url: 'about.html', },
    { path: '/login/', url: 'login.html', },
    { path: '/registro/', url: 'registro.html', },
    { path: '/locales/', url: 'locales.html', },
    { path: '/registrolocal/', url: 'registrolocal.html', },
    { path: '/index-local/', url: 'index-local.html', },
    { path: '/localesmenu/', url: 'localesmenu.html', },
  ]
  // ... other parameters
});

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on("page:init", function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
  $$("#colapso").removeClass("notoy");
  $$("#colapso").removeClass("toy");
  $$("#colapso").addClass("inicial");
  $$("#textonavbar").removeClass("toytexto");
  $$("#textonavbar").removeClass("notoytexto");

  segurocolapso = 0;
});

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
})

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);

  $$("#log-out").on('click', fnLogOut);

})

$$(document).on('page:init', '.page[data-name="localesmenu"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  for (i = locales.length; i > 0; i--) {
    comidanombre.pop();
    comidadescripcion.pop();
    comidaimagen.pop();
    comidaprecio.pop();
  }
  console.log(e);

  // $$('.topping').css('left', '100px');
})

$$(document).on('page:init', '.page[data-name="login"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#lButton").on('click', fnLogin);

  fallo = 3;
  guardador = "";
  console.log(e);

  $$("#lEmail").on("click", function () {
    if (fallo == 1) {
      $$("#lEmail").val(guardador);
    }
  });

  var random = Math.floor(Math.random() * 5);

  setTimeout(function () {
    $$("#titulito" + random).removeClass("inicial");
    $$("#titulito" + random).addClass("animate__animated");
    $$("#titulito" + random).addClass("animate__fadeInUpBig");
  }, 200);

  setTimeout(function () {
    $$("#email").removeClass("inicial");
    $$("#email").addClass("animate__animated");
    $$("#email").addClass("animate__fadeInLeftBig");
  }, 700);

  setTimeout(function () {
    $$("#contraseña").removeClass("inicial");
    $$("#contraseña").addClass("animate__animated");
    $$("#contraseña").addClass("animate__fadeInLeftBig");
  }, 800);

  setTimeout(function () {
    $$("#boton").removeClass("inicial");
    $$("#boton").addClass("animate__animated");
    $$("#boton").addClass("animate__fadeInUp");
  }, 1700);

  setTimeout(function () {
    $$("#boton2").removeClass("inicial");
    $$("#boton2").addClass("animate__animated");
    $$("#boton2").addClass("animate__fadeInUp");
  }, 1800);

  $$("#colapso").addClass("toy");
  $$("#colapso").addClass("toy");

});

$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#rButton").on('click', fnRegistro);

  fallo = 3;
  guardador = "";
  console.log(e);

  $$("#rEmail").on("click", function () {
    if (fallo == 1) {
      $$("#rEmail").val(guardador);
    }
  });

  $$("#rName").on("click", function () {
    if (fallo == 0) {
      $$("#rName").val(guardador);
    }
  });

  var random = Math.floor(Math.random() * 5);

  setTimeout(function () {
    $$("#titulito" + random).removeClass("inicial");
    $$("#titulito" + random).addClass("animate__animated");
    $$("#titulito" + random).addClass("animate__fadeInUpBig");
  }, 200);

  setTimeout(function () {
    $$("#nombre").removeClass("inicial");
    $$("#nombre").addClass("animate__animated");
    $$("#nombre").addClass("animate__fadeInLeftBig");
  }, 700);

  setTimeout(function () {
    $$("#email").removeClass("inicial");
    $$("#email").addClass("animate__animated");
    $$("#email").addClass("animate__fadeInLeftBig");
  }, 800);

  setTimeout(function () {
    $$("#contraseña").removeClass("inicial");
    $$("#contraseña").addClass("animate__animated");
    $$("#contraseña").addClass("animate__fadeInLeftBig");
  }, 900);

  setTimeout(function () {
    $$("#boton").removeClass("inicial");
    $$("#boton").addClass("animate__animated");
    $$("#boton").addClass("animate__fadeInUp");
  }, 1700);

  setTimeout(function () {
    $$("#boton2").removeClass("inicial");
    $$("#boton2").addClass("animate__animated");
    $$("#boton2").addClass("animate__fadeInUp");
  }, 1800);

  $$("#colapso").addClass("toy");
  $$("#colapso").addClass("toy");
});

$$(document).on('page:init', '.page[data-name="registrolocal"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);


  if (nombreCliente == undefined) {
    $$("#desaparezco").addClass("inicial");
    $$("#noregistrado").removeClass("inicial");
  } else {
    $$("#localButton").on("click", fnLocalRegistro);
    fallo = 3;
    guardador = "";
    console.log(e);
    var modal = 0;

    $$("body").on("click", function () {
      if (modal == 1) {
        $$("#modal").removeClass("dudaon");
        $$("#modal").addClass("dudaoff");
        modal = 2;
        setTimeout(function () {
          $$("#modal").removeClass("dudaoff");
          $$("#modal").addClass("inicial");
          modal = 0;
        }, 200);
      }
    });

    $$("#toco").on("click", function () {
      if (modal == 0) {
        $$("#modal").removeClass("inicial");
        $$("#modal").addClass("dudaon");
        modal = 2;
        setTimeout(function () {
          modal = 1;
        }, 200);
      }
    });

    $$("#localObservaciones").on("click", function () {
      if (fallo == 0) {
        $$("#localObservaciones").val(guardador);
      }
    });

    $$("#localName").on("click", function () {
      if (fallo == 1) {
        $$("#localName").val(guardador);
      }
    });

    $$("#localUbi").on("click", function () {
      if (fallo == 2) {
        $$("#localUbi").val(guardador);
      }
    });

    var random = Math.floor(Math.random() * 5);

    setTimeout(function () {
      $$("#titulito" + random).removeClass("inicial");
      $$("#titulito" + random).addClass("animate__animated");
      $$("#titulito" + random).addClass("animate__fadeInUpBig");
    }, 200);

    setTimeout(function () {
      $$("#nombre").removeClass("inicial");
      $$("#nombre").addClass("animate__animated");
      $$("#nombre").addClass("animate__fadeInLeftBig");
    }, 700);

    setTimeout(function () {
      $$("#ubi").removeClass("inicial");
      $$("#ubi").addClass("animate__animated");
      $$("#ubi").addClass("animate__fadeInLeftBig");
    }, 800);

    setTimeout(function () {
      $$("#sucursal").removeClass("inicial");
      $$("#sucursal").addClass("animate__animated");
      $$("#sucursal").addClass("animate__fadeInLeftBig");
    }, 900);

    setTimeout(function () {
      $$("#observaciones").removeClass("inicial");
      $$("#observaciones").addClass("animate__animated");
      $$("#observaciones").addClass("animate__fadeInLeftBig");
    }, 1000);

    setTimeout(function () {
      $$("#boton").removeClass("inicial");
      $$("#boton").addClass("animate__animated");
      $$("#boton").addClass("animate__fadeInUp");
    }, 1800);

    $$("#colapso").addClass("toy");
    $$("#colapso").addClass("toy");
  }

});

$$(document).on('page:init', '.page[data-name="index-local"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  for (i = nombrerestaurante.length; i > 0; i--) {
    nombrerestaurante.pop();
    imagenrestaurante.pop();
  }

  $$("#submitLogo").on('click', fnSubirImagenes);

  db.collection("Locales").where("emailDelUser", "==", nombreCliente)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().nombre);
        nombrerestaurante.push(doc.data().nombre);
        imagenrestaurante.push(doc.data().imagen);
        
      });
    })

    .then(() => {
      var c = "";
      for (i = 0; i < nombrerestaurante.length; i++) {
       
        c += `<div class="campo-locales cards-locales">
              <img src="`+imagenrestaurante[i]+`">
              <div class="texto-locales">
                  <h4 id="localNombre" class="cards-local-nombre">`+ nombrerestaurante[i] + `</h4>
                  <p id="local-puntuacion"> <i class="f7-icons">star_fill</i> 5.0
                      Mesas disponibles</p>
              </div>
          </div>
          `;
      }

      $$(".cartitaperso").html(c);
      c = null;
      i = 0;

    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });


});

$$(document).on('page:init', '.page[data-name="locales"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  for (i = locales.length; i > 0; i--) {
    locales.pop();
  }


  db.collection("Locales").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        locales.push(doc.data().nombre);
        localesLogos.push(doc.data().imagen);
        locales.sort();

      });
    })
    .then(() => {
      var i = 0;
      var a = "";
      
      for (i = 0; i < locales.length; i++) {

        a += `<a onclick="fnLocales(` + i + `)" href="/localesmenu/" data-view=".page-content" id="` + locales[i] + `">
        <div class="campo-locales cards-locales">
           <div class="imagendelcampo">
              <img src="` + localesLogos[i] + `" id="logo-local">
              </div>
              <div class="texto-locales">
                  <h4 id="localNombre" class="cards-local-nombre">`+ locales[i] + `</h4>
                  <p id="local-puntuacion"> <i class="f7-icons">star_fill</i> 5.0
                      Mesas disponibles</p>
              </div>
          </div>
          </a>
          `;
          console.log(localesLogos[i]);
      }

      $$(".block").html(a);
      a = null;
      i = 0;

    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
});

//VARIABLES GLOBALES
var storage = firebase.storage();
var nombreCliente;
var db = firebase.firestore();
var cUsuarios = db.collection("Usuarios");
var seguroInicio = 0;
var fallo = 3;
var locales = [];
var localesLogos = [];
var guardador;
var redirigir = 1;
var segurocolapso = 0;
var identificacion;
var comidanombre = [];
var comidadescripcion = [];
var comidaimagen = [];
var comidaprecio = [];
var nombrerestaurante = [];
var imagenrestaurante = [];

$$("#rayitas").on("click", fnCambio);


function fnLogin() {
  var emailDelUser = $$("#lEmail").val();
  var passDelUser = $$("#lPass").val();
  $$("#entradaemail").removeClass("rojo");
  $$("#lEmail").removeClass("rojazo");
  $$("#lPass").removeClass("rojazo");
  $$("#entradacontraseña").removeClass("rojo");

  firebase
    .auth()
    .signInWithEmailAndPassword(emailDelUser, passDelUser)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Bienvenid@!!! " + emailDelUser);

      var idUsuarios = emailDelUser;
      var docRef = cUsuarios.doc(idUsuarios);

      nombreCliente = idUsuarios;
      seguroInicio = 1;
      $$("#logueo").text(nombreCliente);

      setTimeout(function () {
        $$(".trigger").toggleClass("drawn");
      }, 700);

      setTimeout(function () {
        $$("#ticardo").removeClass("inicial");
        $$("#tiquito").removeClass("inicial");
        $$("#desaparezco").addClass("inicial");
        $$("#desaparezco").removeClass("inicialpro");
      }, 500);

      setTimeout(function () {
        redirigir = 1;
        if (redirigir == 1) {
          db.collection("Locales").where("emailDelUser", "==", nombreCliente)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                mainView.router.navigate('/index-local/');
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
        }
      }, 2500);

      $$("#desaparezco").addClass("inicialpro");

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());

            console.log(doc.data().nombre);
            console.log(doc.data().rol);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);

      if (errorCode == "auth/email-already-in-use") {
        $$("#entradaemail").addClass("rojo");
        $$("#lEmail").addClass("rojazo");
        guardador = $$("#lEmail").val();
        $$("#lEmail").val("Email ya en uso");
        fallo = 1;
      }

      if (errorCode == "auth/invalid-email") {
        $$("#entradaemail").addClass("rojo");
        $$("#lEmail").addClass("rojazo");
        console.log($$("#lEmail").val() + "hola");
        guardador = $$("#lEmail").val();
        $$("#lEmail").val("Email inválido");
        fallo = 1;
      }

      if (errorCode == "auth/wrong-password") {
        $$("#entradacontraseña").addClass("rojo");
        $$("#lPass").addClass("rojazo");
      }

      if (errorCode == "auth/user-not-found") {
        guardador = $$("#lEmail").val();
        $$("#lEmail").val("Email inexistente");
        $$("#entradaemail").addClass("rojo");
        $$("#lEmail").addClass("rojazo");
        fallo = 1;
      }
    });

}

function fnRegistro() {

  var emailDelUser = $$("#rEmail").val();
  var passDelUser = $$("#rPass").val();
  var nombreUser = $$("#rName").val();

  $$("#entradaemail").removeClass("rojo");
  $$("#rEmail").removeClass("rojazo");
  $$("#rPass").removeClass("rojazo");
  $$("#entradacontraseña").removeClass("rojo");
  $$("#rName").removeClass("rojazo");
  $$("#entradanombre").removeClass("rojo");

  if (emailDelUser.length >= 27) {
    $$("#rEmail").addClass("rojazo");
    $$("#entradaemail").addClass("rojo");
    guardador = $$("#rEmail").val();
    $$("#rEmail").val("Máximo 26 caracteres");
    fallo = 1;
  } else {
    if (nombreUser.length <= 2) {
      $$("#rName").addClass("rojazo");
      $$("#entradanombre").addClass("rojo");
      guardador = $$("#rName").val();
      $$("#rName").val("Mínimo 3 caracteres");
      fallo = 0;
    } else if (nombreUser.length >= 27) {
      $$("#rName").addClass("rojazo");
      $$("#entradanombre").addClass("rojo");
      guardador = $$("#rName").val();
      $$("#rName").val("Máximo 26 caracteres");
      fallo = 0;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailDelUser, passDelUser)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("Bienvenid@!!! " + emailDelUser);
          // ...
          // mainView.router.navigate('/siguientePantallaDeUsuarioOK/');

          var idUsuarios = emailDelUser;

          nombre = $$("#rName").val();
          setTimeout(function () {
            $$(".trigger").toggleClass("drawn");
          }, 700);

          setTimeout(function () {
            $$("#ticardo").removeClass("inicial");
            $$("#tiquito").removeClass("inicial");
            $$("#desaparezco").addClass("inicial");
            $$("#desaparezco").removeClass("inicialpro");
          }, 500);

          setTimeout(function () {
            redirigir = 1;
            if (redirigir == 1) {
              let targetURL = "/registrolocal/";
              let newURL = document.createElement("a");
              newURL.href = targetURL;
              document.body.appendChild(newURL);
              newURL.click();
            }
          }, 2500);

          $$("#desaparezco").addClass("inicialpro");

          datos = {
            nombre: nombre,
            rol: "usuario",
          };

          cUsuarios.doc(idUsuarios).set(datos);
          nombreCliente = idUsuarios;
          $$("#logueo").text(nombreCliente);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.error(errorCode);
          console.error(errorMessage);

          if (errorCode == "auth/email-already-in-use") {
            $$("#entradaemail").addClass("rojo");
            $$("#rEmail").addClass("rojazo");
            guardador = $$("#rEmail").val();
            $$("#rEmail").val("Email ya en uso");
            fallo = 1;
          }

          if (errorCode == "auth/invalid-email") {
            $$("#entradaemail").addClass("rojo");
            $$("#rEmail").addClass("rojazo");
            guardador = $$("#rEmail").val();
            $$("#rEmail").val("Email inválido");
            fallo = 1;
          }

          if (errorCode == "auth/weak-password") {
            $$("#entradacontraseña").addClass("rojo");
            $$("#rPass").addClass("rojazo");
          }


        });
    }
  };
}

function fnLocalRegistro() {
  var nombre = $$("#localName").val();
  var ubicacion = $$("#localUbi").val();
  var sucursal = $$("#localSucursal").val();
  var observacion = $$("#localObservaciones").val();
  var documento;

  $$("#entradanombre").removeClass("rojo");
  $$("#localName").removeClass("rojazo");
  $$("#localUbi").removeClass("rojazo");
  $$("#entradaubi").removeClass("rojo");
  $$("#localObservaciones").removeClass("rojazo");
  $$("#entradaobservaciones").removeClass("rojo");

  if (nombre.length <= 2) {
    $$("#entradanombre").addClass("rojo");
    $$("#localName").addClass("rojazo");
    guardador = $$("#localName").val();
    $$("#localName").val("Mínimo 3 caracteres");
    fallo = 1;
  } else if (nombre.length >= 20) {
    $$("#entradanombre").addClass("rojo");
    $$("#localName").addClass("rojazo");
    guardador = $$("#localName").val();
    $$("#localName").val("Máximo 19 caracteres");
    fallo = 1;
  } else if (ubicacion.length <= 3 || ubicacion.length >= 27) {
    $$("#entradaubi").addClass("rojo");
    $$("#localUbi").addClass("rojazo");
    guardador = $$("#localUbi").val();
    $$("#localUbi").val("Ubicación invalida");
    fallo = 2;
  } else if (observacion.length >= 51) {
    $$("#entradaobservaciones").addClass("rojo");
    $$("#localObservaciones").addClass("rojazo");
    guardador = $$("#localObservaciones").val();
    $$("#localObservaciones").val("Máximo 200 caracteres");
    fallo = 0;
  } else {
    documento = db
      .collection("Locales")
      .doc(nombreCliente + "-" + nombre)
      .get()
      .then((doc) => {
        if (doc.exists) {
          $$("#entradanombre").addClass("rojo");
          $$("#localName").addClass("rojazo");
          guardador = $$("#localName").val();
          $$("#localName").val("El local ya existe");
          fallo = 1;
        } else {
          nombre = nombre[0].toUpperCase() + nombre.slice(1);
          ubicacion = ubicacion[0].toUpperCase() + ubicacion.slice(1);
          db.collection("Locales")
            .doc(nombreCliente + "-" + nombre)
            .set({
              emailDelUser: nombreCliente,
              nombre: nombre,
              ubicacion: ubicacion,
              sucursal: sucursal,
              observacion: observacion,
              imagen: null
            })

            .then(() => {
              $$("#logueo").text(nombreCliente);

              setTimeout(function () {
                $$(".trigger").toggleClass("drawn");
              }, 700);

              setTimeout(function () {
                $$("#ticardo").removeClass("inicial");
                $$("#tiquito").removeClass("inicial");
                $$("#desaparezco").addClass("inicial");
                $$("#desaparezco").removeClass("inicialpro");
              }, 500);
              $$("#desaparezco").addClass("inicialpro");

              setTimeout(function () {
                redirigir = 1;
                if (redirigir == 1) {
                  let targetURL = "/index-local/";
                  let newURL = document.createElement("a");
                  newURL.href = targetURL;
                  document.body.appendChild(newURL);
                  newURL.click();
                }
              }, 2500);

            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

}

function fnLogOut() {
  firebase.auth().signOut().then(() => {
    console.log("Sign-out successful.");
    nombreCliente = null;
    $$("#logueo").text("Login");

  }).catch((error) => {
    // An error happened.
  });
}

function fnCambio() {

  if (segurocolapso == 0) {
    $$("#colapso").removeClass("inicial");
    $$("#colapso").removeClass("notoy");
    $$("#colapso").addClass("toy");
    $$("#textonavbar").removeClass("notoytexto");
    $$("#textonavbar").addClass("toytexto");
    segurocolapso = 1;
  } else {
    $$("#colapso").addClass("notoy");
    $$("#colapso").removeClass("toy");
    $$("#textonavbar").removeClass("toytexto");
    $$("#textonavbar").addClass("notoytexto");
    segurocolapso = 0;
  }
}

function fnLocales(identificador){
  var ubi;
  console.log("Entre");
  console.log(locales[identificador]);
  db.collection("Locales").where("nombre", "==", locales[identificador]).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        ubi = doc.data().ubicacion;


        db.collection("Locales").doc(doc.id).collection("Comidas")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots


              console.log(doc.id, " => ", doc.data());
              comidanombre.push(doc.data().nombre);
              comidadescripcion.push(doc.data().descripcion);
              comidaimagen.push(doc.data().imagen);
              comidaprecio.push(doc.data().precio);


            });

          })
          .then(() => {
            var ab = "";

            $$("#textotopping").text(ubi);
            for (i = 0; i < comidanombre.length; i++) {

              ab += `<div class="contenedorcomidas">
                  <div class="foto">
                  <img class="imagencomida" src="`+ comidaimagen[i] + `">
                  </div>
                  <div class="texto-locales">
                      <h1 id="localNombre" class="cards-local-nombre">`+ comidanombre[i] + `</h1>
                      <p id="comidadescripcion">`+ comidadescripcion[i] + `</p>
                      <p id="comidaprecio"><b>`+ comidaprecio[i] + `$</b></p>
                  </div>
              </div>
              </a>
              `;
            }
            setTimeout(function () {
              $$("#todo").html(ab)

            }, 500);
          })

          .catch((error) => {
            console.log("Error getting documents: ", error);
          });

      })
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

}

function fnSubirImagenes() {

  var logo = document.querySelector('#logo').files[0];

  console.log(logo);

  if (!logo) {

  } else {
    // var archivoName = nombreCliente + logo.name;
    // archivoName.toString();

    var storageRef = storage.ref('/localesLogos/' + nombreCliente);

    var upload = storageRef.put(logo);

    upload.on('state_changed', function (snapshot) {

    }, function (error) {
      console.log(error);
    }, function () {
      console.log("Archivo subido a Firebase");
    });


    storageRef.getDownloadURL().then(function (url) {
      // `url` is the download URL for 'images/stars.jpg'

      console.log("URL" + url);

      db.collection("Locales").where("emailDelUser", "==", nombreCliente)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            db.collection("Locales").doc(doc.id).update({
              imagen: url
            });

          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      console.log(doc.data());


    }).catch(function (error) {
      // Handle any errors
    });



  }
}
