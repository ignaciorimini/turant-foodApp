// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: "#app",
  // App Name
  name: "My App",
  // App id
  id: "com.myapp.test",
  // Enable swipe panel
  panel: {
    swipe: "left",
  },
  // Add default routes
  routes: [
    { path: "/index/", url: "index.html" },
    { path: "/about/", url: "about.html" },
    { path: "/registro/", url: "registro.html" },
    { path: "/registrolocal/", url: "registrolocal.html" },
  ],
  // ... other parameters
});

var mainView = app.views.create(".view-main");

// Handle Cordova Device Ready Event
$$(document).on("deviceready", function () {
  console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on("page:init", function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
  $$("#colapso").removeClass("notoy");
  $$("#colapso").removeClass("toy");
  $$("#colapso").addClass("inicial");
  segurocolapso = 0;
});

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on("page:init", '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
});

$$(document).on("page:init", '.page[data-name="index"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#lButton").on("click", fnLogin);
});

$$(document).on("page:init", '.page[data-name="registro"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#rButton").on("click", fnRegistro);

  $$("#titulito").removeClass("inicial");
  $$("#titulito").addClass("animate__animated");
  $$("#titulito").addClass("animate__fadeInUpBig");

  setTimeout(function () {
    $$("#nombre").removeClass("inicial");
    $$("#nombre").addClass("animate__animated");
    $$("#nombre").addClass("animate__fadeInLeftBig");
  }, 500);

  setTimeout(function () {
    $$("#email").removeClass("inicial");
    $$("#email").addClass("animate__animated");
    $$("#email").addClass("animate__fadeInLeftBig");
  }, 600);

  setTimeout(function () {
    $$("#contraseña").removeClass("inicial");
    $$("#contraseña").addClass("animate__animated");
    $$("#contraseña").addClass("animate__fadeInLeftBig");
  }, 700);

  setTimeout(function () {
    $$("#boton").removeClass("inicial");
    $$("#boton").addClass("animate__animated");
    $$("#boton").addClass("animate__fadeInUp");
  }, 1500);

  setTimeout(function () {
    $$("#boton2").removeClass("inicial");
    $$("#boton2").addClass("animate__animated");
    $$("#boton2").addClass("animate__fadeInUp");
  }, 1600);

  $$("#colapso").addClass("toy");
  $$("#colapso").addClass("toy");
});

$$(document).on("page:init", '.page[data-name="registrolocal"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#localButton").on("click", fnLocalRegistro);
});

$$("#rayitas").on("click", fnCambio);

var redirigir = 1;
var segurocolapso = 0;
var nombreCliente;
var db = firebase.firestore();
var cUsuarios = db.collection("Usuarios");
var seguroInicio = 0;

function fnLogin() {
  var emailDelUser = $$("#lEmail").val();
  var passDelUser = $$("#lPass").val();

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

  if (nombreUser.length <= 2) {
    $$("#rName").addClass("rojazo");
    $$("#entradanombre").addClass("rojo");
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
            let targetURL = "/index/";
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
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.error(errorCode);
        console.error(errorMessage);

        if (errorCode == "auth/email-already-in-use") {
          $$("#entradaemail").addClass("rojo");
          $$("#rEmail").addClass("rojazo");
        }

        if (errorCode == "auth/invalid-email") {
          $$("#entradaemail").addClass("rojo");
          $$("#rEmail").addClass("rojazo");
        }

        if (errorCode == "auth/weak-password") {
          $$("#entradacontraseña").addClass("rojo");
          $$("#rPass").addClass("rojazo");
        }
      });
  }
}

function fnLocalRegistro() {
  var nombre = $$("#localName").val();
  var ubicacion = $$("#localUbi").val();
  var sucursal = $$("#localSucursal").val();
  var observacion = $$("#localObservaciones").val();
  var documento;

  if (seguroInicio == 1) {
    documento = db
      .collection("Locales")
      .doc(nombreCliente + "-" + nombre)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("El local ya existe");
        } else {
          db.collection("Locales")
            .doc(nombreCliente + "-" + nombre)
            .set({
              emailDelUser: nombreCliente,
              nombre: nombre,
              ubicacion: ubicacion,
              sucursal: sucursal,
              observacion: observacion,
            })

            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } else {
    console.log("Necesita estar logueado!!!!");
  }
}

function fnCambio() {
  if (segurocolapso == 0) {
    $$("#colapso").removeClass("inicial");
    $$("#colapso").removeClass("notoy");
    $$("#colapso").addClass("toy");
    segurocolapso = 1;
  } else {
    $$("#colapso").addClass("notoy");
    $$("#colapso").removeClass("toy");
    segurocolapso = 0;
  }
}
