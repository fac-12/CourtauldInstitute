export const renderLinksAndLineBreaks = input =>
  input
    .split(/\n/g)
    .map(p => {
      if (p) {
        return `<p style="margin: 0.5rem 0;">${p
          .split(" ")
          .map(word => {
            if (/http/.test(word)) {
              let prependPunctuation = "";
              let appendPunctuation = "";
              while (/[^h]/.test(word.slice(0, 1))) {
                prependPunctuation = word.slice(0, 1);
                word = word.slice(1);
              }
              while (/[\.,?!)\]}-]/.test(word.slice(-1))) {
                appendPunctuation += word.slice(-1);
                word = word.slice(0, word.length - 1);
              }
              return `${prependPunctuation}<a href=${word}>${word}</a>${appendPunctuation}`;
            }
            return word;
          })
          .join(" ")}</p>`;
      }
      return "";
    })
    .join("");

export const removeHTMLtags = input => {
  let noTags = input
    .split('<p style="margin: 0.5rem 0;">')
    .join("")
    .split("</p>")
    .join("\n");
  while (noTags.indexOf("<a href=") >= 0) {
    const startCut = noTags.indexOf("<a href=");
    const endCut = noTags.indexOf(">");
    noTags =
      noTags.slice(0, startCut) +
      noTags
        .slice(endCut + 1)
        .split("</a>")
        .join("");
  }
  return noTags;
};
