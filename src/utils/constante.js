import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Facebook';
import InstaIcon from '@mui/icons-material/Instagram';
import TweeIcon from '@mui/icons-material/Twitter';
import YoutubIcon from '@mui/icons-material/YouTube';
import PaintIcon from '@mui/icons-material/Create';
import BrushIcon from '@mui/icons-material/Brush';
import DesignIcon from '@mui/icons-material/DesignServices';






export const navbarList=[
    {
        name:'Home',
        path:'#header'
    },
    {
        name:'About',
        path:'#about'
    },
    {
        name:'Services',
        path:'#services'
    },
    {
        name:'Works',
        path:'#works'
    },
  /*   {
        name:'Blog',
        path:'#blog'
    }, */
    {
        name:'Contact',
        path:'#contact'
    },
]
export const services=[
    {
        imagePath:'images/nashpic/portrait8.png',
        title:'Pen Portrait',
        serviceDetail:'web ui/ux designer am a great web developper web ui/ux designer am a great web developper web ui/ux designer am a great web developper',
        icon:<PaintIcon/>
    },
    {
        imagePath:'images/nashpic/portrait2.png',
        title:'Painting Portrait',
        serviceDetail:'web ui/ux designer am a great web developper web ui/ux designer am a great web developper web ui/ux designer am a great web developper',
        icon:<BrushIcon/>
    },
    {
        imagePath:'images/nashpic/portrait3.png',
        title:'Pencil Portrait',
        serviceDetail:'web ui/ux designer am a great web developper web ui/ux designer am a great web developper web ui/ux designer am a great web developper',
        icon:<DesignIcon/>
    },
];
export const userDetail =[
    {
        icon:<LocationIcon/>,
        detail:'Agoè-sorade'
    },
    {
        icon:<PhoneIcon/>,
        detail:'+228 98905062'
    },
    {
        icon:<EmailIcon/>,
        detail:'nashabui@gmail.com'
    }
]
export const socialMediaLink=[
    {
        link:'',
        icon:<FaceIcon/>
    },
    {
        link:'',
        icon:<InstaIcon/>
    },
    {
        link:'',
        icon:<TweeIcon/>
    },
    {
        link:'',
        icon:<YoutubIcon/>
    },
]

