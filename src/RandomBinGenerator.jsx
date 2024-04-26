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
        const randomDigits = [5]; // First digit is always 5

        for (let i = 0; i < 5; i++) {
            randomDigits.push(Math.floor(Math.random() * 10)); // Generate random digits 0-9
        }

        return randomDigits.join(''); // Join digits into a string
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
            <img style={{ height: "30px" }} src="https://visitcount.itsvg.in/api?id=randombingenerator&label=Total%20Vistor&color=12&pretty=true" />
            <h3>Random Bank identification numbers Genrator and Details</h3>
            <button onClick={handleGenerateBin}>Generate Bin</button>
            <div id="apiResponse">
                <p><strong>Bin Details: {binNumber} </strong></p>
                <p><strong>Status:</strong> <span>{binDetails.Status}</span></p>
                <p><strong>Scheme:</strong> <span>{binDetails.Scheme}</span></p>
                <p><strong>Type:</strong> <span>{binDetails.Type}</span></p>
                <p><strong>Issuer:</strong> <span>{binDetails.Issuer}</span></p>
                <p><strong>CardTier:</strong> <span>{binDetails.CardTier}</span></p>
                <p><strong>Country:</strong> <span>{binDetails.Country ? `${binDetails.Country.Name} (${binDetails.Country.A3})` : ''}</span></p>
                <p><strong>Luhn:</strong> <span>{binDetails.Luhn ? 'Yes' : 'No'}</span></p>
                <p><strong>Copyright:</strong> <span>{binDetails.Copyright}</span></p>
                <p className='copyright'> <a href="https://me.itrabbi.com/" target='_blank'>Rabbi Hassan</a>. All rights reserved</p>
            </div>
        </div>
    );
};

export default RandomBinGenerator;
