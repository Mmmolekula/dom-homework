export function replaceSpecialCharacters(text) {
    return text
      .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
      .replaceAll("END_QUOTE%", "</div>")
      .replaceAll("<", "<")
      .replaceAll(">", ">");
  }