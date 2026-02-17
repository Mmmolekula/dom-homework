export const sanitizeHtml = (value) => {
    return value
      .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
      .replaceAll("END_QUOTE%", "</div>")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  };
  