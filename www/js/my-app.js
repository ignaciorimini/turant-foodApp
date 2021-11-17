
// If we need to use custom DOM library, let's save it to $$ variable:
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
  ]
  // ... other parameters
});

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
})

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);

})

$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#rButton").on('click', fnRegistro);

})

$$(document).on('page:init', '.page[data-name="login"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#lButton").on('click', fnLogin);
})

$$(document).on('page:init', '.page[data-name="registrolocal"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  $$("#localButton").on('click', fnLocalRegistro);

})

$$(document).on('page:init', '.page[data-name="locales"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);

  db.collection("Locales").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        locales.push(doc.data().nombre);

      });
    })
    .then(() => {
      var i = 0;
      var a = "";
      console.log(locales);
      for (i = 0; i < locales.length; i++) {
        a += `<div class="campo-locales cards-locales">
              <img src="img/logo-mcdonalds.png">
              <div class="texto-locales">
                  <h4 id="localNombre" class="cards-local-nombre">`+ locales[i] + `</h4>
                  <p id="local-puntuacion"> <i class="f7-icons">star_fill</i> 5.0
                      Mesas disponibles</p>
              </div>
          </div>
          `;

      }
      $$(".block").html(a);
      a = null;
      i = 0;
      for (i = locales.length; i > 0; i--) {
        locales.pop();
      }
      console.log(locales);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });


});


var nombreCliente;
var localname = $$("#localName").val();
var db = firebase.firestore();
var cUsuarios = db.collection("Usuarios");
var seguroInicio;
var locales = [];

function fnLogin() {
  var emailDelUser = $$("#lEmail").val();
  var passDelUser = $$("#lPass").val();

  firebase.auth().signInWithEmailAndPassword(emailDelUser, passDelUser)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Bienvenid@!!! " + emailDelUser);

      var idUsuarios = emailDelUser;

      var docRef = cUsuarios.doc(idUsuarios);
      nombreCliente = idUsuarios;
      seguroInicio = 1;


      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());

          console.log(doc.data().nombre);
          console.log(doc.data().rol);


          docRef = db.collection("Locales").doc(nombreCliente + "-" + localname);
          console.log(nombreCliente + "-" + localname);
          docRef.get().then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              mainView.router.navigate('/index-local/');
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              mainView.router.navigate('/registrolocal/');
            }
          }).catch((error) => {
            console.log("Error getting document:", error);
          });




        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
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

  firebase.auth().createUserWithEmailAndPassword(emailDelUser, passDelUser)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Bienvenid@!!! " + emailDelUser);
      // ...
      // mainView.router.navigate('/siguientePantallaDeUsuarioOK/');

      var idUsuarios = emailDelUser;

      nombre = $$("#rName").val();

      datos = {
        nombre: nombre,
        rol: "usuario"
      }

      cUsuarios.doc(idUsuarios).set(datos);
      mainView.router.navigate('/login/');

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);

      if (errorCode == "auth/email-already-in-use") {
        console.error("el mail ya esta usado");
      }


    });
}

function fnLocalRegistro() {
  var ubicacion = $$("#localUbi").val();
  var sucursal = $$("#localSucursal").val();
  var observacion = $$("#localObservaciones").val();
  var documento;

  if (seguroInicio == 1) {
    documento = db.collection("Locales").doc(nombreCliente + "-" + localname).get()
      .then((doc) => {
        if (doc.exists) {
          console.log("El local ya existe");
        } else {
          db.collection("Locales").doc(nombreCliente + "-" + localname).set({

            emailDelUser: nombreCliente,
            nombre: localname,
            ubicacion: ubicacion,
            sucursal: sucursal,
            observacion: observacion
          })

            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }

        mainView.router.navigate('/index-local/');
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } else {
    console.log("Necesita estar logueado!!!!");
  }

}
