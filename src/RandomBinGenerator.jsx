import React, { useState } from 'react';

const RandomBinGenerator = () => {
    const [binNumber, setBinNumber] = useState('');
    const [binDetails, setBinDetails] = useState({
        Status: '',
        Scheme: '',
        Type: '',
        Issuer: '',
        CardTier: '',
        Country: { Name: '', A3: '' },
        Luhn: false,
        Copyright: 'Rabbi Sudo'
    });

    const generateRandomBin = () => {
        const firstDigitOptions = [5];
        const firstDigit = firstDigitOptions[Math.floor(Math.random() * firstDigitOptions.length)];
        const randomDigits = [firstDigit];
    
        for (let i = 0; i < 5; i++) {
            randomDigits.push(Math.floor(Math.random() * 10));
        }
    
        return randomDigits.join('');
    };

    const fetchBinDetails = (randomBin) => {
        fetch(`https://binserver.vercel.app/bin/${randomBin}`)
            .then(response => response.json())
            .then(data => setBinDetails(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleGenerateBin = () => {
        const randomBin = generateRandomBin();
        setBinNumber(randomBin);
        fetchBinDetails(randomBin);
    };

    return (
        <div className="container">
            <h3>Random Bank Identification Number Generator and Details</h3>
            <button onClick={handleGenerateBin}>Generate Bin</button>
            <div id="apiResponse">
                <p><strong>Bin Details:</strong> {binNumber}</p>
                <p><strong>Status:</strong> <span>{binDetails.Status}</span></p>
                <p><strong>Scheme:</strong> <span>{binDetails.Scheme}</span></p>
                <p><strong>Type:</strong> <span>{binDetails.Type}</span></p>
                <p><strong>Issuer:</strong> <span>{binDetails.Issuer}</span></p>
                <p><strong>Card Tier:</strong> <span>{binDetails.CardTier}</span></p>
                <p><strong>Country:</strong> <span>{binDetails.Country ? `${binDetails.Country.Name} (${binDetails.Country.A3})` : ''}</span></p>
                <p><strong>Luhn:</strong> <span>{binDetails.Luhn ? 'Yes' : 'No'}</span></p>
                <p><strong>Copyright:</strong> <span>{binDetails.Copyright}</span></p>
                <p className="copyright">
                    <a href="https://itrabbi.com/" target="_blank" rel="noopener noreferrer">Rabbi Hassan</a>. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default RandomBinGenerator;
