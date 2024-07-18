import express, { urlencoded } from 'express';
import cors from 'cors'
import { RegisterRoute,loginRoute,updateRoute,searchRoute,saveAndUpdateRoute,productSaveRoute,displayProductsRoute,productsUpdateRoute,deleteProductRoute,findStoreRoute,registerStoreRoute,retrieveStoreRoute
         ,getProductsRoute,placeOrderRoute,searchStoreRoute,obtainProductsRoute,productByNameRoute
 } from './routes/webroutes.js';
import dbconnection from './utils/db.connection.js';
import cloudinaryConfig from './utils/cloudinary.config.js';
import corsConfig from './utils/cors.config.js';
import router from './routes/webroutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(urlencoded({extended: true}))
app.use(cors(corsConfig()))
dbconnection();
cloudinaryConfig();
//using middleware to control routes

app.use('/',router)

app.use('/api/users',RegisterRoute)
app.use('/api/users',loginRoute)
app.use('/api/update-users', updateRoute)
app.use('/api/search-user', searchRoute)
app.use('/api/update-pass',saveAndUpdateRoute)
app.use('/api/product-section',productSaveRoute)
app.use('/api/display-products' ,displayProductsRoute)
app.use('/api/modify-product',productsUpdateRoute)
app.use('/api/delete-product',deleteProductRoute)
app.use('/api/search',findStoreRoute)
app.use('/api/register-store',registerStoreRoute)
app.use('/api/retrieve-store' , retrieveStoreRoute)
app.use('/api/get-products',getProductsRoute)
app.use('/api/place-order',placeOrderRoute)
app.use('/api/search-store',searchStoreRoute)
app.use('/api/store-data',obtainProductsRoute)
app.use('/api/product-data',productByNameRoute)

app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`);
});

