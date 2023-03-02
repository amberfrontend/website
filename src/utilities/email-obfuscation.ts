export const emailObfuscator = (encodedEmail: string, linkText: string) => {
    const key =
        "1DtzZ8TGBuhRjJMKWI4gkUF2qidfOyPmSN7X30Vpso6xvErLnwQCbalA95HcYe";
    const shift = encodedEmail.length;

    let link = "";
    let letter;

    for (var i = 0; i < encodedEmail.length; i++) {
        if (!key) return;

        if (key.indexOf(encodedEmail.charAt(i)) === -1) {
            letter = encodedEmail.charAt(i);
            link += letter;
        } else {
            letter =
                (key.indexOf(encodedEmail.charAt(i)) - shift + key.length) %
                key.length;

            link += key.charAt(letter);
        }
    }

    return `<a href="mailto:${link}>${linkText}</a>`;
};
