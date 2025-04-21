import Auth0Provider from "next-auth/providers/auth0";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID || (() => { 
        throw new Error("env variable AUTH0_CLIENT_ID is not defined"); 
      })(),
      clientSecret: process.env.AUTH0_CLIENT_SECRET || (() => { 
        throw new Error("env variable AUTH0_CLIENT_SECRET is not defined"); 
      })(),
      issuer: process.env.AUTH0_ISSUER || (() => { 
        throw new Error("env variable AUTH0_ISSUER is not defined"); 
      })(),
    }),
  ],
  secret: process.env.AUTH_SECRET || (() => { 
    throw new Error(`env variable AUTH_SECRET is not defined, use the command "openssl rand -base64 32" to generate one`); 
  })(),
};

export default authOptions;
