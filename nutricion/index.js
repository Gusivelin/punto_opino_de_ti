function analizarRespuesta() {
    const respuesta = document.getElementById("respuesta").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    const btnReset = document.getElementById("btn-reset");
  
    const palabrasSano = [
      "salud", "saludable", "fuerte", "energía", "nutricion", "activo", "bienestar", "resistencia", "sano",
      "vitalidad", "equilibrio", "feliz", "funcional", "movilidad", "hábitos", "descanso",
      "fuerza", "hidratado", "cuidado","energía", "nutrición", "hábitos",
      "SALUD", "SALUDABLE", "FUERTE", "ENERGÍA", "NUTRICION", "ACTIVO", "BIENESTAR", "RESISTENCIA", "SANO",
      "VITALIDAD", "EQUILIBRIO", "FELIZ", "FUNCIONAL", "MOVILIDAD", "HÁBITOS", "DESCANSO",
      "FUERZA", "HIDRATADO", "CUIDADO", "NUTRICIÓN", "HÁBITOS","Salud", "Saludable", "Fuerte", "Energía", "Nutricion", 
      "Activo", "Bienestar", "Resistencia", "Sano","Vitalidad", "Equilibrio", "Feliz", "Funcional", "Movilidad", "Hábitos", 
      "Descanso","Fuerza", "Hidratado", "Cuidado", "Nutrición"
    ];
  
    const palabrasIdealizado = [
      "perfecto", "delgado", "sin grasa", "desnutricion", "90-60-90", "musculoso", "flaco", "modelo",
      "esbelto", "tonificado", "marcado", "abdomen plano", "cintura pequeña",
      "piernas largas", "belleza", "simétrico", "ideal", "atractivo","desnutrición",
      "simétrico", "atractivo","PERFECTO", "DELGADO", "SIN GRASA", "DESNUTRICION", "90-60-90", "MUSCULOSO",
      "FLACO", "MODELO","ESBELTO", "TONIFICADO", "MARCARDO", "ABDOMEN PLANO", "CINTURA PEQUEÑA",
      "PIERNAS LARGAS","BELLEZA", "SIMÉTRICO", "IDEAL", "ATRÁCTIVO", "DESNUTRICIÓN",
      "Perfecto", "Delgado", "Sin grasa", "Desnutricion", "Musculoso", "Flaco", "Modelo",
      "Esbelto", "Tonificado", "Marcado", "Abdomen plano", "Cintura pequeña",
      "Piernas largas", "Belleza", "Simétrico", "Ideal", "Atractivo", "Desnutrición"
    ];
  
    let esSano = palabrasSano.some(palabra => respuesta.includes(palabra.toLowerCase()));
    let esIdealizado = palabrasIdealizado.some(palabra => respuesta.includes(palabra.toLowerCase()));
  
    let mensaje = "";
    let consejos = "";
  
    if (esSano && !esIdealizado) {
      mensaje = `🍏 <strong>Lo que imaginas es un cuerpo sano.</strong><br>Un cuerpo sano es aquel que se siente bien, tiene energía, se mueve con libertad y está nutrido adecuadamente, sin importar su forma exterior.`;
      consejos = `
        <br><br><strong>Consejos:</strong>
        <ul>
          <li>💧 Prioriza la hidratación y el descanso.</li>
          <li>🥗 Escucha a tu cuerpo y aliméntalo con lo que necesita.</li>
          <li>🏃‍♀️ La actividad física constante es más importante que su intensidad.</li>
        </ul>`;
    } else if (esIdealizado && !esSano) {
      mensaje = `🎭 <strong>Lo que imaginas es un cuerpo idealizado.</strong><br>Es una imagen influenciada por medios, redes sociales o estereotipos, que muchas veces no representan la salud real ni la diversidad natural de los cuerpos.`;
      consejos = `
        <br><br><strong>Consejos:</strong>
        <ul>
          <li>🧠 Recuerda que los estándares de belleza cambian con el tiempo.</li>
          <li>📵 Cuestiona lo que ves en redes sociales: muchos cuerpos están editados.</li>
          <li>❤️ La salud mental también forma parte de un cuerpo saludable.</li>
        </ul>`;
    } else if (esSano && esIdealizado) {
      mensaje = `⚖️ <strong>Tu idea mezcla salud con ideales estéticos.</strong><br>Está bien aspirar a sentirse bien, pero recuerda que la salud no siempre se ve como los estándares de belleza convencionales.`;
      consejos = `
        <br><br><strong>Consejos:</strong>
        <ul>
          <li>🔍 Reflexiona sobre lo que realmente valoras en tu bienestar.</li>
          <li>👁️‍🗨️ Trata de ver más allá del físico cuando piensas en salud.</li>
          <li>🧩 A veces buscamos equilibrio: lo importante es que sea realista y sano.</li>
        </ul>`;
    } else {
      mensaje = `🤔 <strong>No podemos determinar con claridad.</strong><br>Intenta describir un poco más cómo es ese "cuerpo perfecto" para ti.`;
      consejos = `
        <br><br><strong>Consejos:</strong>
        <ul>
          <li>🗣️ Intenta usar palabras que describan cómo se siente ese cuerpo, no solo cómo se ve.</li>
          <li>🔁 Puedes volver a intentar y explorar nuevas ideas.</li>
        </ul>`;
    }
  
    resultado.innerHTML = mensaje + consejos;
    resultado.classList.add("visible");
    btnReset.style.display = "inline-block";
  }
  
  function reiniciar() {
    document.getElementById("respuesta").value = "";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.classList.remove("visible");
    document.getElementById("btn-reset").style.display = "none";
  }
  