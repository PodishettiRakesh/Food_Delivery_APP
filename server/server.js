const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res)=>{
    res.send("server running succesfully");
})

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));