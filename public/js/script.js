document.getElementById('btnBuscar').addEventListener('click', () => {
      const toastElement = document.getElementById('liveToast');
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    });
