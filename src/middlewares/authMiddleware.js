import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next){
    const token = req.cookies.auth;

    if (!token){
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach authenticated user to request
        req.user = decodedToken;
        req.isAuthenticated = true;
        
        // Add to handlebars context
        res.locals.isAuthenticated = true;
        res.locals.user = decodedToken;
        
        // Valid user
        next();
    } catch (err) {
        // Invalid user
        res.clearCookie("auth");

        res.redirect("/login");
    }
}

export function isAuth(req, res, next) {
    if (!req.isAuthenticated) {
        return res.redirect("/login");
    }

    next();
}

export function isGuest(req, res, next) {
    if (req.isAuthenticated) {
        return res.redirect("/");
    }

    next();
}