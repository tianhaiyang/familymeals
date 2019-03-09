import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import Login from '../components/Login'
import Register from '../components/Register'
import About from '../components/about/About';
import Contact from '../components/about/Contact';
import Delivery from '../components/about/Delivery';
import History from '../components/about/History';
import OrderingGuide from '../components/about/OrderingGuide';


export const routes = [{
    path: '/',
    components: {
      default: Home,
      "orderingGuide": OrderingGuide,
      "delivery": Delivery,
      "history" : History
    }
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/about',
    component: About,
    redirect: '/contact',
    children: [
      {
        path: '/contact',
        name: "contactLink",
        component: Contact
      },
      {
        path: '/delivery',
        name: "deliveryLink",
        component: Delivery
      },
      {
        path: '/history',
        name: "historyLink",
        component: History
      },
      {
        path: '/orderingGuide',
        name: "orderingGuideLink",
        component: OrderingGuide
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
