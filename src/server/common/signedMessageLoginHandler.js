import * as Signing from 'ethereumjs-util'
import settings from "../../source/settings/application.json";


const getAddressFromKey = (key) => {
    // Pull the public key from the signed message.
    let messageBuffer = new Buffer(settings.public.login_key, "hex");
    let keyBuffer = new Buffer(key, "hex");

    let { v, r, s } = Signing.ecsign(messageBuffer, keyBuffer);

    const signaturePublicKey = Signing.ecrecover(
      new Buffer(settings.public.login_key, "hex"),
      v,
      new Buffer(r, "hex"),
      new Buffer(s, "hex")
    );
  
     const trimmedAddress =Signing.publicToAddress(signaturePublicKey).toString('hex').toLowerCase()	
     return trimmedAddress
  };


  const getAddressFromBuffer = ({v, r, s}) => {
    // Pull the public key from the signed message.
    const signaturePublicKey = Signing.ecrecover(
      new Buffer(settings.public.login_key, "hex"),
      v,
      new Buffer(r, "hex"),
      new Buffer(s, "hex")
    );
  
     const trimmedAddress =Signing.publicToAddress(signaturePublicKey).toString('hex').toLowerCase()	
     return trimmedAddress
  };