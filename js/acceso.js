
const CODIGOS = {
    "BACOAACEJ01": "estudiantes/estudiante-01.html", 
    "BACOAAMBS02": "estudiantes/estudiante-02.html", 
    "BACOABVSM03": "estudiantes/estudiante-03.html", 
    "BACOABJJA04": "estudiantes/estudiante-04.html", 
    "BACOABPKD05": "estudiantes/estudiante-05.html", 
    "BACOACCJJ06": "estudiantes/estudiante-06.html", 
    "BACOADAJB07": "estudiantes/estudiante-07.html", 
    "BACOADCPA08": "estudiantes/estudiante-08.html", 
    "BACOADRCA09": "estudiantes/estudiante-09.html", 
    "BACOADCKM10": "estudiantes/estudiante-10.html", 
    "BACOAGCCJ11": "estudiantes/estudiante-11.html", 
    "BACOAGGEA12": "estudiantes/estudiante-12.html", 
    "BACOAHAJA13": "estudiantes/estudiante-13.html", 
    "BACOAJPMG14": "estudiantes/estudiante-14.html", 
    "BACOALXHE15": "estudiantes/estudiante-15.html", 
    "BACOAMDDA16": "estudiantes/estudiante-16.html", 
    "BACOANAJA17": "estudiantes/estudiante-17.html", 
    "BACOARYER18": "estudiantes/estudiante-18.html", 
    "BACOASHJE19": "estudiantes/estudiante-19.html", 
    "BACOAVSYE20": "estudiantes/estudiante-20.html", 
    "BACOBADJA01": "estudiantes/estudiante-21.html", 
    "BACOBAMMA02": "estudiantes/estudiante-22.html", 
    "BACOBBAR03": "estudiantes/estudiante-23.html", 
    "BACOBCMML04": "estudiantes/estudiante-24.html", 
    "BACOBCAJD05": "estudiantes/estudiante-25.html", 
    "BACOBDGCA06": "estudiantes/estudiante-26.html", 
    "BACOBDLBE07": "estudiantes/estudiante-27.html", 
    "BACOBGFSF08": "estudiantes/estudiante-28.html", 
    "BACOBGGMA09": "estudiantes/estudiante-29.html", 
    "BACOBHHCS10": "estudiantes/estudiante-30.html", 
    "BACOBJLXA11": "estudiantes/estudiante-31.html", 
    "BACOBLCJB12": "estudiantes/estudiante-32.html", 
    "BACOBLREE13": "estudiantes/estudiante-33.html", 
    "BACOBMADA14": "estudiantes/estudiante-34.html", 
    "BACOBMLLM15": "estudiantes/estudiante-35.html", 
    "BACOBMCAR16": "estudiantes/estudiante-36.html", 
    "BACOBMSEI17": "estudiantes/estudiante-37.html", 
    "BACOBOPDE18": "estudiantes/estudiante-38.html", 
    "BACOBPCWA19": "estudiantes/estudiante-39.html", 
    "BACOBREPA20": "estudiantes/estudiante-40.html" 
};

const formulario = document.querySelector("#form-acceso");
const campoCodigo = document.querySelector("#codigo");
const mensajeError = document.querySelector("#error");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const codigoIngresado = campoCodigo.value.trim().toUpperCase();
    const paginaDestino = CODIGOS[codigoIngresado];

    if (paginaDestino) {
        window.location.href = paginaDestino;
    } else {
        mensajeError.textContent = "Código no encontrado. Revisa el código que recibiste.";
    }
});
