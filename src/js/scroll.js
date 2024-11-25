$(document).ready(function(){
    /*------------------------------SERVICIOS--------------------------------------*/
    $(".video_vig").waypoint(
        function() {
            $(".video_vig").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".control_acceso").waypoint(
        function() {
            $(".control_acceso").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".iot_auto").waypoint(
        function() {
            $(".iot_auto").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".deteccion_inc").waypoint(
        function() {
            $(".deteccion_inc").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".cableado_estr").waypoint(
        function() {
            $(".cableado_estr").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".distr_audio").waypoint(
        function() {
            $(".distr_audio").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".data_center").waypoint(
        function() {
            $(".data_center").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".diseno_consultoria").waypoint(
        function() {
            $(".diseno_consultoria").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".titulo_clientes").waypoint(
        function() {
            $(".titulo_clientes").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    // Itera desde el vertical 1 hasta el vertical 3
    for (let i = 1; i <= 3; i++) {
        $(`.vertical${i}`).waypoint(
            function() {
                $(`.vertical${i}`).addClass("animate__animated animate__fadeInUp");
            },
            { offset: "80%" }
        );
    }

    /*------------------------------CLIENTES--------------------------------------*/
    // Itera desde el logo 1 hasta el logo 32
    for (let i = 1; i <= 32; i++) {
        $(`.logo${i}`).waypoint(
            function() {
                $(`.logo${i}`).addClass("animate__animated animate__fadeInUp");
            },
            { offset: "80%" }
        );
    }


    $(".titulo_proveedores").waypoint(
        function() {
            $(".titulo_proveedores").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    /*------------------------------FORMULARIO--------------------------------------*/
    $(".titulo_form").waypoint(
        function() {
            $(".titulo_form").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".form1").waypoint(
        function() {
            $(".form1").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    /*------------------------------LAYOUT CABLEADO--------------------------------------*/
    $(".video_layout").waypoint(
        function() {
            $(".video_layout").addClass("animate__animated animate__zoomIn")
        }, 
        {offset: "80%"}
    );

    $(".subtitulo_layout").waypoint(
        function() {
            $(".subtitulo_layout").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    $(".descripcion_layout").waypoint(
        function() {
            $(".descripcion_layout").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    /*------------------------------LAYOUT ABOUT--------------------------------------*/
    $(".titulo_vision").waypoint(
        function() {
            $(".titulo_vision").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    $(".subtitulo_vision").waypoint(
        function() {
            $(".subtitulo_vision").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    $(".img_vision").waypoint(
        function() {
            $(".img_vision").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );
    
    $(".titulo_equipo").waypoint(
        function() {
            $(".titulo_equipo").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    $(".subtitulo_equipo").waypoint(
        function() {
            $(".subtitulo_equipo").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    // Itera desde el logo 1 hasta el logo 32
    for (let i = 1; i <= 8; i++) {
        $(`.equipo_${i}`).waypoint(
            function() {
                $(`.equipo_${i}`).addClass("animate__animated animate__fadeInUp");
            },
            { offset: "80%" }
        );
    }

    // Itera desde el logo 1 hasta el logo 32
    for (let i = 1; i <= 5; i++) {
        $(`.acronimo_${i}`).waypoint(
            function() {
                $(`.acronimo_${i}`).addClass("animate__animated animate__fadeInUp");
            },
            { offset: "80%" }
        );
    }

    // Autoplay del video
    // Itera desde el logo 1 hasta el logo 32
    for (let i = 1; i <= 6; i++) {
        $(`[data-modal-target="default-modal${i}"]`).click(function() {
            var video = $(`#default-modal${i}`).find('video')[0]; // Encuentra el elemento de video dentro del modal
            $(`#default-modal${i}`).removeClass('hidden'); // Muestra el modal
            video.play(); // Reproduce el video automáticamente
        });
    }

    // Stop del video
    // Itera desde el logo 1 hasta el logo 32
    for (let i = 1; i <= 6; i++) {
        $(`#default-modal${i}`).click(function(e) {
            if ($(e.target).is(`#default-modal${i}`)) {
                var video = $(`#default-modal${i}`).find('video')[0]; // Encuentra el elemento de video
                video.pause(); // Pausa el video
                video.currentTime = 0; // Vuelve al inicio del video
                $(`#default-modal${i}`).addClass('hidden'); // Oculta el modal
            }
        });
    }
    

})