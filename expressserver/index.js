import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    /* Pass your questions in here */
    message: "type your message",
    name:"url"
  }])
  .then((answers) => {
    const url=answers.url;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("'qr_image.png"));
 
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });