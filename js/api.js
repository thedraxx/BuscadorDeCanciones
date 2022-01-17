import * as UI from "./interfaz.js";

export class API{
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI()
    {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;


        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado =>{

                if (resultado.lyrics) 
                {
                    const {  lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Here are the results of: ${this.cancion} from ${this.artista} `;
                }
                else
                {
                    UI.divMensajes.textContent = "The song does not exist";
                    UI.divMensajes.classList.add('error');
                    setTimeout(() => {
                        UI.divMensajes.textContent = "";
                        UI.divMensajes.classList.remove("error");
                    }, 3000);
                }
                
               
            })
    }
}


export default API;