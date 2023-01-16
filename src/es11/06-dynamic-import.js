const b = document.getElementById('b');

b.addEventListener('click',async function() {
    const m = await import('./moduleM'); //Llama al módulo hasta que el usuario haga click
    console.log(m);
    m.h();
} );