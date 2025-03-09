$(document).ready(function () {
    let canciones = [
        "../../multimedia/music/cancion1.mp3",
        "../../multimedia/music/cancion2.mp3",
    ];

    let audio = $("#audio")[0];
    let playButton = $(".play-icon");
    let progressBar = $("#progress");
    let volumeBar = $("#volume");
    let currentSongIndex = 0;

    $(".gifSong2").hide();
    function cargarCancion(index) {
        $("#audio").attr("src", canciones[index]);
        audio.pause();
        $(".play-icon").removeClass("fa-pause").addClass("fa-play");

        let songName = "Bring me the horizon - SVLT";
        switch (index) {
            case 0:
                $(".gifSong2").hide();
                $(".gifSong1").fadeIn();
                songName = "Bring me the horizon - SVLT";
                break;
            case 1:
                $(".gifSong1").hide();
                $(".gifSong2").fadeIn();
                songName = "Cynthoni - Yandere";
                break;
        }

        $(".song-info h3").text(songName);
        //Reiniciar el tiempo y el progreso de la canción
        audio.currentTime = 0.1;
        progressBar.val(0.1);

        //IMPORTANTE PARA QUE LA CANCIÓN HAYA CARGADO CORRECTAMENTE Y SE PUEDA IMPRIMIR LA DURACIÓN
        audio.load();
        audio.onloadedmetadata = function () {
            let duration = audio.duration;
            if (!isNaN(duration)) {
                let minutes = Math.floor(duration / 60);
                let seconds = Math.floor(duration % 60);
                $("#duration").text(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
            }
        };
    }

    playButton.click(function () {
        if (audio.paused) {
            audio.play();
            $(this).removeClass("fa-play").addClass("fa-pause");
        } else {
            audio.pause();
            $(this).removeClass("fa-pause").addClass("fa-play");
        }
    });

    audio.ontimeupdate = function () {
        let currentTime = audio.currentTime;
        let duration = audio.duration;

        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        $("#current-time").text(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);

        if (!isNaN(duration)) {
            minutes = Math.floor(duration / 60);
            seconds = Math.floor(duration % 60);
            $("#duration").text(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
        }

        let progress = (currentTime / duration) * 100;
        progressBar.val(progress);
    };

    progressBar.on("input", function () {
        audio.currentTime = (audio.duration * $(this).val()) / 100;
    });

    volumeBar.on("input", function () {
        audio.volume = $(this).val() / 100;
    });

    $(".fa-backward").click(function () {
        currentSongIndex = (currentSongIndex - 1 + canciones.length) % canciones.length;
        cargarCancion(currentSongIndex);
    });

    $(".fa-forward").click(function () {
        currentSongIndex = (currentSongIndex + 1) % canciones.length;
        cargarCancion(currentSongIndex);
    });

    cargarCancion(currentSongIndex);


    //CAMBIAR LOGO
    $(document).ready(function () {
        $(".optionMenu1, .optionMenu2, .optionMenu3, .optionMenu4").click(function (e) {
            e.preventDefault();


            $(".iconNav").attr("src", "../../multimedia/images/corazonRosa.png");
            $(".optionMenu1, .optionMenu2, .optionMenu3, .optionMenu4").css("font-weight", "normal");


            $(this).find(".iconNav").attr("src", "../../multimedia/images/corazonAzul1.png");
            $(this).css("font-weight", "bold");
        });
    });


    $(document).ready(function () {
 
        $("#shopWindow").hide();
        $("#albumsWindow").hide();
        $("#socialWindow").hide();

        // Al hacer clic en "Home"
        $(".optionMenu1").click(function () {
            $("#homeWindow").fadeIn();
            $("#shopWindow").hide();
            $("#albumsWindow").hide();
            $("#socialWindow").hide();
        });

        // Al hacer clic en "Shop"
        $(".optionMenu2").click(function () {
            $("#shopWindow").fadeIn()
            $("#homeWindow").hide();
            $("#albumsWindow").hide();
            $("#socialWindow").hide();
        });

        // Al hacer clic en "Albums"
        $(".optionMenu3").click(function () {
            $("#albumsWindow").fadeIn();
            $("#homeWindow").hide();
            $("#shopWindow").hide();
            $("#socialWindow").hide();
        });

        // Al hacer clic en "Social Networks"
        $(".optionMenu4").click(function () {
            $("#socialWindow").fadeIn();
            $("#homeWindow").hide();
            $("#shopWindow").hide();
            $("#albumsWindow").hide();
        });
    });


    //OCULTAR ALBUMS
    $(document).ready(function () {
 
        $("#2022").hide();
        $("#2025").hide();
 

        // Al hacer clic en "2022"
        $(".2022").click(function () {
            $("#2020").hide();
            $("#2025").hide();
            $("#2022").fadeIn()
        });

        // Al hacer clic en "2020"
        $(".2020").click(function () {
            $("#2022").hide();
            $("#2025").hide();
            $("#2020").fadeIn()
        });

        // Al hacer clic en "2025"
        $(".2025").click(function () {
            $("#2022").hide();
            $("#2020").hide();
            $("#2025").fadeIn()
        });

    });

 
    
    
    
    

});
