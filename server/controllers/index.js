let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

//create the user model instance
let userModel = require("../models/user");
let User = userModel.User; //alias

module.exports.displayHomepage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displaytemplatespage = (req, res, next) => {
  res.render("template", {
    title: "Templates",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displaypricingpage = (req, res, next) => {
  res.render("index", {
    title: "Pricing",
    displayName: req.user ? req.user.displayName : "",
  });
};

// module.exports.displaysurveyListpage = (req, res, next) => {
//   res.render("index", {
//     title: "SurveyList",
//     displayName: req.user ? req.user.displayName : "",
//   });
// };

// module.exports.displaycontactpage = (req, res, next) => {
//   res.render("index", {
//     title: "Contact Me",
//     displayName: req.user ? req.user.displayName : "",
//   });
// };

module.exports.displayLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

// link to surveylist page 
module.exports.processLoginPageToSurveyList = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/surveylist/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/surveylist");
    });
  })(req, res, next);
};


// link to surveylist1 page 
module.exports.processLoginPageToSurveyList1 = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/surveylist1/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/surveylist1");
    });
  })(req, res, next);
};


// link to surveylist2 page 
module.exports.processLoginPageToSurveyList2 = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/surveylist2/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/surveylist2");
    });
  })(req, res, next);
};


// link to surveylist3 page 
module.exports.processLoginPageToSurveyList3 = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/surveylist3/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/surveylist3");
    });
  })(req, res, next);
};

// link to template 1 page
module.exports.processLoginPageToTemp1 = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/template1/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/template1");
    });
  })(req, res, next);
};

// link to template 2 page
module.exports.processLoginPageToTemp2 = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/template2/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/template2");
    });
  })(req, res, next);
};

// link to template 3 page
module.exports.processLoginPageToTemp3 = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/template3/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/template3");
    });
  })(req, res, next);
};

// link to template 4 page
module.exports.processLoginPageToTemp4 = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/template4/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/template4");
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  // check if the user is not already logged in
  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      // if no error exists, then registration is successful

      // redirect the user and authenticate them

      return passport.authenticate("local")(req, res, () => {
        res.redirect("/");
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
