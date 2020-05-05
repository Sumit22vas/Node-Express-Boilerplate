const express = require('express'); // Bring Express Package In

const app = express(); // Intinalize App


const PORT = 5000 || process.env.PORT; // declare PORT variable

// Make our App to listen to PORT number
app.listen(PORT,()=>console.log(`Server is running at PORT : ${PORT}`));