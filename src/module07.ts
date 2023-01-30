import dotenv from 'dotenv';
// npm install @types/dotenv

const result = dotenv.config({
    path: '.env',
});
if (result.error) {
    throw result.error;
}
console.log(process.env.DB_HOST);
