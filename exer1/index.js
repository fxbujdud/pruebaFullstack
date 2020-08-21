const count = () => {
   // Si count no existe en sessionStorage
   if(!sessionStorage.getItem('count')) {
       sessionStorage.setItem('count', 0); // Asignamos 0 como valor
   } else {
       const count = JSON.parse(sessionStorage.getItem('count')); // Si existe
       sessionStorage.setItem('count', count + 1); // Se toma y aumenta el valor
   }

   return sessionStorage.getItem('count'); // Regresamos el valor en sessionStorage
};
