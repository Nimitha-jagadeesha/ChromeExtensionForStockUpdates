fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=JPM&interval=5min&apikey=L1YMGQ2TVW2QLHH4')
    .then(data => data.json())
    .then(htmlData =>{
        const data = htmlData['Time Series (5min)'][htmlData['Meta Data']['3. Last Refreshed']];
        const open = data['1. open']
        const high = data['2. high'] 
        const low = data['3. low']
        const openElement = document.getElementById("open");
        openElement.innerHTML = open;
        const highElement = document.getElementById("high");
        highElement.innerHTML = high;
        const lowElement = document.getElementById("low");
        lowElement.innerHTML = low;
    })

    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&apikey=FIKW3LZYGQK97C9K')
    .then(data => data.json())
    .then(htmlData =>{
        const data = htmlData['Time Series (5min)'][htmlData['Meta Data']['3. Last Refreshed']];
        const open = data['1. open']
        const high = data['2. high'] 
        const low = data['3. low']
        const openElement = document.getElementById("amzopen");
        openElement.innerHTML = open;
        const highElement = document.getElementById("amzhigh");
        highElement.innerHTML = high;
        const lowElement = document.getElementById("amzlow");
        lowElement.innerHTML = low;
    })


    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=SAP&interval=5min&apikey=FIKW3LZYGQK97C9K')
    .then(data => data.json())
    .then(htmlData =>{
        const data = htmlData['Time Series (5min)'][htmlData['Meta Data']['3. Last Refreshed']];
        const open = data['1. open']
        const high = data['2. high'] 
        const low = data['3. low']
        const openElement = document.getElementById("sapopen");
        openElement.innerHTML = open;
        const highElement = document.getElementById("saphigh");
        highElement.innerHTML = high;
        const lowElement = document.getElementById("saplow");
        lowElement.innerHTML = low;
    })



 
