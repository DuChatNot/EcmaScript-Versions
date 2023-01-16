const b = document.querySelector('#b');

b.addEventListener('click',async function() {
    const m = await import('./moduleM'); //Lama al módulo hasta que el usuario haga click
    console.log(m);
    m.h();
} );