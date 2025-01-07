const getSystemColorScheme=()=> {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDarkMode ? 'dark' : 'light';
}
const  textInputHandler = (e, form, setForm)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
        })  

    console.log(e.target)

}

const handleShare = (e, platform) => {
  e.preventDefault();
  const shareUrl = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("Check out this amazing post!");
  let shareLink = "";
  
  switch (platform) {
    case "facebook":
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
      break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`;
        break;
        case "linkedin":
          shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
      default:
        break;
    }
    
    window.open(shareLink, "_blank");
  };
  
  
  const formSubmitHandler = (e) => {
      e.preventDefault(); // Prevents the default form submission behavior
      console.log("Form submitted!");
  };
export { textInputHandler, formSubmitHandler, handleShare, getSystemColorScheme };
