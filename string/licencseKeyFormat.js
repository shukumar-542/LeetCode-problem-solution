var licenseKeyFormatting = function (s, k) {

    const key = s.split("-").join('').toUpperCase()

    let newLicenseKey = ""

    if (key.length % k === 0) {
        for (let i = 0; i < key.length; i++) {

            if (i % k === 0 && i !== 0) {
                newLicenseKey += "-"
            }
            newLicenseKey += key[i]

        }

    } else {
        const firstGroupLen = key.length % k;
        newLicenseKey = key.slice(0, firstGroupLen);
        for (let i = firstGroupLen; i < key.length; i++) {
            if ((i - firstGroupLen) % k === 0) {
                newLicenseKey += "-";
            }
            newLicenseKey += key[i];
        }


    }

    return newLicenseKey

};

licenseKeyFormatting("5F3Z-2e-9-wuja", 6)