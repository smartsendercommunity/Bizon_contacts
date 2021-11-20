<script>
  function getUrlParam(param) {
    if (param === null || typeof param === "undefined") return;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get(param);
    }
    //utm_term = getUrlParam("utm_term"); //указать отдельной строкой для каждой ютм-метки
    phone = localStorage.getItem('lastUserPhone');
    email = localStorage.getItem('lastUserEmail');
    name = localStorage.getItem('lastUserName');
    function myCustomFire() {
      window.SPM.fire('bizon', {// Здесь в одинарных кавычках указано название своего события в Smart Pixel
        email: email,
        phone: phone,
        //utm_term: utm_term Также указать для передачи ютм-меток
      });
    }
</script>


<script>
  // Здесь должен быть код Вашего Smart Pixel
</script>


<script>
  setTimeout(myCustomFire, 4000); // Здесь запуск события через 4 сек, после входа в комнату (задержка нужна для завершения инициализации Smart Pixel
</script>
