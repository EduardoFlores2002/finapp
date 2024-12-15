function handleClick(sectionId) {
    // Cambiar el URL a otra página o parte específica de la misma
    if (sectionId === "sabias-que") {
      window.location.href = "";
    } else if (sectionId === "planes") {
      window.location.href = "#planes";
    } else if (sectionId === "Documentos") {
      window.location.href = "archivos/actaconstitutiva.pdf";
    } else if (sectionId === "Contacto") {
      window.location.href = "https://www.whatsapp.com/?lang=es_LA";
    }else if (sectionId === "Nosotros") {
    window.location.href = "Nosotros.html";
  }else if (sectionId === "catalogo") {
    window.location.href = "catalogo.html";
  }
  }
  