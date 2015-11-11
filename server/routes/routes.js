'use strict';

var api = require('./lib/api'),
    index = require('./lib'),
    users = require('./lib/users'),
    session = require('./lib/session'),
    middleware = require('./middleware'),
    nodemailer = require('nodemailer'),
    sgTransport = require('nodemailer-sendgrid-transport');

var transporter = nodemailer.createTransport(sgTransport({
    service: 'SendGrid',
    auth: {
        api_user: 'digitalz',
        api_key: '00789321dz'
    }
}));


module.exports = function(app) {
    
// Nodemailer
    app.post('/postEmail', function(req, res){
        var mailOptions = {
            from: req.body.name + req.body.email,
            to: 'untempspoursoi26@live.fr',
            subject: "Contact de " + req.body.name,
            text: 'Nom : ' + req.body.name + "Email : " + req.body.email + "Société : " + req.body.entreprise + "Téléphone : " + req.body.phone + "Message : " + req.body.message,
            html: `<b style='color: #006600'>Contact</b>
                   <p>Nom: ${req.body.name}</p>
                   <p>Société: ${req.body.entreprise}</p>
                   <p>Téléphone: ${req.body.phone}</p>
                   <p>Email: ${req.body.email}</p>
                   <p>Message: ${req.body.message}</p>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Message sent: ' + info.response);
                res.send(200);
            }
        });
    });

// API Routing
  app.route('/api/v1/todos')
    .get(api.findAllTodos)
    .post(api.addTodo)

  app.route('/api/v1/todos/:id')
    .get(api.findById)
    .delete(api.deleteTodo)

  app.route('/api/v1/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/v1/users/me')
    .get(users.me);
  app.route('/api/v1/users/:id')
    .get(users.show);

  app.route('/api/v1/session')
    .post(session.login)
    .delete(session.logout);

// All undefined api routes should return a 404
  app.route('/api/v1/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};