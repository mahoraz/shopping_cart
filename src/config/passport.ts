import type { Express } from "express";
import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import prisma from "./prisma";
import { comparePassword } from "../services/passwordCompare";

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export const configure = (app: Express) => {
  app.use(passport.initialize());
  app.use(passport.session({
    secret: "a private key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
  }));

  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
      (username, password, done) => {
        return prisma.user
          .findUnique({ where: { username } })
          .then(async (user) => {
            if (!user)
              return done(undefined, false, {
                message: `User ${username} not found.`,
              });

            const isMatch = await comparePassword(password, user.password);
            if (isMatch) return done(undefined, user);
            return done(undefined, false, {
              message: "Invalid username or password",
            });
          })
          .catch((err) => done(err));
      }
    )
  );

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      (jwtPayload, cb) => {
        return prisma.user
          .findUnique({ where: { id: jwtPayload.id } })
          .then((user) => {
            if (!user) throw new Error("Not found the user");
            return cb(null, user);
          })
          .catch((err) => {
            return cb(err);
          });
      }
    )
  );
};

export default configure;