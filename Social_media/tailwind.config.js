const withMT=require("@material-tailwind/react/utils/withMT");
module.exports=withMT({
  content:["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    extend:{},
    fontFamily:{
      Merriweather_Sans:['Merriweather_Sans','sans-serif']

    }
  },
  plugins:[]
  
});
