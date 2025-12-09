
const errorHandler = (err, req, res, next)=>{
console.log(err);

const statusCd = err.statusCode || 500;
const msg = err.message || 'somthing wont wrong';
res.status(statusCd).json({ msg });


}

export class CustomError extends Error{
    constructor(statusCode, message){
        super(message);
        this.name = 'customError';
        this.statusCode = statusCode;
        
    }
};

export default errorHandler;