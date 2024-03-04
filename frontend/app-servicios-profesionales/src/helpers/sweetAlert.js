import Swal from 'sweetalert2';



export const swalExitoso = (text) => {
    setTimeout(() => { // Modal de registro exitoso
        return Swal.fire({
            text,
            width: 450,
            icon:'success',
            confirmButtonColor: '#1D4ED8CC',
        })
    }, 250);
}



export const SwalError = (text) => {
    setTimeout(() => { // Modal de error
        return Swal.fire({
            text,
            width: 450,
            icon:'error',
            confirmButtonColor: '#b61d22',
        })
    }, 250);
}
