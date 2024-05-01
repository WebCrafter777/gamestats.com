export const sanitizeYoutubeLink = (link: string): string | null => {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)[^#\n\?\s]+$/;

  const match = link.match(youtubeRegex);
  
  if (match) {
    return link;
  } else {
    return null;
  }
};


export const sanitizeEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|biz|info|name|museum|us|ca|uk|co\.uk|io|me|xyz|tech|club|live|email|pro|tv|aero|asia|berlin|blog|cloud|digital|global|group|info|london|nyc|one|online|shop|site|space|store|website|work|zone|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)$/i;
  
  const isValidEmail = emailRegex.test(email);

  if (isValidEmail) {
      return email;
  } else {
      return null;
  }
};

export const sanitizeImageURL = (url: string): string | null => {
  const imageExtensionsRegex = /\.(png|jpe?g|gif|webp)$/i;
  
  const isValidImageURL = imageExtensionsRegex.test(url);

  if (isValidImageURL) {
      return url;
  } else {
      return null;
  }
};
