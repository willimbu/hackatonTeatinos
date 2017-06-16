// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     apiKey: "AIzaSyCYsOuX18loHd8aBc0n2bUuS_AEGtamoqk",
    authDomain: "hackathonteatinos.firebaseapp.com",
    databaseURL: "https://hackathonteatinos.firebaseio.com",
    projectId: "hackathonteatinos",
    storageBucket: "hackathonteatinos.appspot.com",
    messagingSenderId: "253834040090"
  }
};

