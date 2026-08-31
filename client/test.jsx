const formidable = require('formidable');
const fs = require("fs");
const _ = require('lodash');
const User = require('../models/users');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandler');//
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');


exports.signup = (req, res) => {

    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err.message
            });
        }

        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin = (req, res) => {
    // find the user based on email
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with this email does not exist Please signup.'
            });
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password do not match'
            });
        }
        // generate a signed token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {expireIn : '30d'});
        // persist the token as 't' in cookie with expiry date
        res.cookie('t', token);
        // return response with user and token to frontend client
        const { _id, name, email, role, activestatus, productlimit } = user;
        return res.json({ token, user: { _id, name, email, role, activestatus, productlimit } });
    });
};

exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
};


exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'auth',
});


exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 1) {
        return res.status(403).json({
            error: 'Admin resourse! Access denied'
        });
    }
    next();
};





exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

exports.shuser = (req, res) => {

    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    return res.json(req.profile);
};


exports.userByName = (req, res, next, name) => {
    User.find({ name }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

exports.showUserByName = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};


// _id name activestatus role email


exports.getAllUsers = (req, res) => {

    User.find().select('-photo -hashed_password -solt -about').sort([["_id", "desc"]]).exec((err, users) => {
        if (err) {
            res.status(400).json({ err: errorHandler });
        }
        return res.json(users);
    });

}




exports.updatePassword = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { email, vercode } = req.body;

    User.findOne({ email: email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'Email not found'
            });
        }


        if (vercode) {

            user.verficationcode = vercode;

        };


        user.save((err, updatedUser) => {
            if (err) {

                return res.status(400).json({
                    error: 'User update failed'
                });
            }


            const emailData = {
                to: `${updatedUser.email}`,
                from: 'noreply@adam-estore.com',
                subject: `Password Updated`,
                html: `
                            <h5>Dear Client :  </h5>
                           
                            <p>Your Verfication Code is : ${updatedUser.verficationcode}</p>
                            <a href="https://adam-estore.com/reset-password" >Click this link to reset your password, just copy and paste the verification code then create a new password.</a>
                        `
            };

            sgMail.send(emailData);

            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;


            res.json(updatedUser);
        });
    });
};





exports.resetpass = (req, res) => {

    const { temppassword, password } = req.body;
    User.findOne({ temppassword: temppassword }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "Wrong reset password code " })
        } else {

            user.password = password;
            user.temppassword = 0;
            user.save((err, userUpdate) => {
                if (err) {
                    return res.status(400).json({
                        err: errorHandler
                    })
                }
                res.json(userUpdate);

            });
        };
    });
};






exports.newpayment = (req, res) => {

    let paymentdata = [];
    const id = req.profile._id;
    const { payeremail, createtime, transactionid, paidAmount, activestatus, paymentDate } = req.body;

    paymentdata.push({
        create_time: createtime,
        transaction_id: transactionid,
        payere_mail: payeremail,
        paid_amount: paidAmount,

    });
    User.findOne({ _id: id }, (err, user) => {
        if (err) {
            res.status(400).json({ err: "user not found" });
        }
        user.activestatus = activestatus;
        user.paymentDate = paymentDate;
        user.paymentdata = [...user.paymentdata, paymentdata];
        user.save((error, userpay) => {
            if (error) {
                res.status(401).json({ error: "updated faild" });
            }
            res.json(userpay);
        });
    });

};







exports.expireUser = (req, res) => {


    const id = req.profile._id;
    const { activestatus, newpayment } = req.body;

    User.findOne({ _id: id }, (err, user) => {
        if (err) {
            res.status(400).json({ err: "user not found" });
        }
        user.activestatus = activestatus;
        user.paymentDate = newpayment;

        user.save((error, userpay) => {
            if (error) {
                res.status(401).json({ error: "updated faild" });
            }
            res.json(userpay);
        });
    });

};


exports.setActiveStatus = (req, res) => {
    const id = req.profile._id;
    const { activestatus } = req.body;

    User.findOne({ _id: id }, (err, user) => {
        if (err) {
            res.status(400).json({ err: "user not found" });
        }
        user.activestatus = activestatus;

        user.save((error, userpay) => {
            if (error) {
                res.status(401).json({ error: "updated faild" });
            }
            res.json(userpay);
        });
    });

};




exports.editProfile = (req, res) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }

        let user = req.profile;
        user = _.extend(user, fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image should be less than 1mb in size"
                });
            }
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
        }

        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });

}


exports.photo = (req, res, next) => {
    if (req.profile.photo.data) {
        res.set("Content-Type", req.profile.photo.contentType);
        return res.send(req.profile.photo.data);
    }
    next();
};

exports.userModeON = (req, res) => {

    User.update({ _id: req.profile._id }, { "$set": { "busy": 1 } })
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
}

exports.userModeOFF = (req, res) => {

    User.update({ _id: req.profile._id }, { "$set": { "busy": 0 } })
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
}







exports.deleteUser = (req, res) => {

    User.deleteOne({ _id: req.profile._id }).exec((err, result) => {
        if (err) {
            return res.status(400).json({
                error: "User cant be deleted"
            })
        }
        res.json({ message: "User deleted successfully" });
    });



};
