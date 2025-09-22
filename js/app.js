
var app = new Framework7({
  root: '#app',
  name: 'Vita al Dente',
  id: 'com.vitaalDente.app',
  panel: {
    swipe: 'left', // permite abrir panel lateral con swipe
  },
  routes: [
    { path: '/home/', url: 'index.html' },
    { path: '/menu/', url: 'menu.html' },
    { path: '/carrito/', url: 'carrito.html' },
    { path: '/perfil/', url: 'perfil.html' },
    { path: '/nosotros/', url: 'nosotros.html' }
  ]
});

// Selector de vistas
var mainView = app.views.create('.view-main');


$$('#btnLogin').on('click', function () {
  var username = $$('#form-login [name="username"]').val();
  var password = $$('#form-login [name="password"]').val();

  if (username === "admin" && password === "1234") {
    app.dialog.alert('Bienvenido ' + username, 'Acceso exitoso');
    app.loginScreen.close('#modal-login');
  } else {
    app.dialog.alert('Credenciales incorrectas', 'Error');
  }
});


var carrito = [];

function actualizarCarrito() {
  if (carrito.length === 0) {
    app.dialog.alert('Tu carrito está vacío.');
  } else {
    let lista = carrito.map(item => `<li>${item}</li>`).join('');
    app.dialog.alert('<ul>' + lista + '</ul>', 'Tu Carrito');
  }
}

// Evento de añadir producto
$$('.add-to-cart').on('click', function () {
  let producto = $$(this).data('producto');
  carrito.push(producto);
  app.toast.create({
    text: producto + ' añadido al carrito',
    closeTimeout: 2000,
  }).open();
});


$$('.nav-link').on('click', function () {
  let destino = $$(this).data('destino');
  mainView.router.navigate(destino);
});
