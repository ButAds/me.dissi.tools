'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

  onInit() {
    this.log('MyApp is running...');
    let convertImage = new Homey.FlowCardAction('encode_image_from_base64');
    convertImage
      .register()
      .registerRunListener((args, state) => {
        this.log('Got image: ' + args.droptoken);
        return Promise.resolve(true);
      })

    let imageDecoded = new Homey.FlowCardTrigger('image_decoded');
    imageDecoded
      .register()
      .registerRunListener((args, state) => {
        return Promise.resolve(true);
      })
  }
}


module.exports = MyApp;