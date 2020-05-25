export const NAV_BAR_THEME_DARK = 'dark';
export const NAV_BAR_THEME_LIGHT = 'light';
export const NAV_BAR_DEFAULT_LINK = 'DEFAULT LINK';
const HOME = 'Home';
export const SignUp = 'Sign Up';
export const SignIn = 'Sign In';
export const Logout = 'Log Out';
const LIST_PAGE = 'Star Wars';

export const NAV_LINKS = [
    {
        title: HOME,
        route: '/',
        shouldDisplayBeforeLogin: true
    },
    {
        title: LIST_PAGE,
        route:'/starwars',
        shouldDisplayBeforeLogin: true
    },
    {
        title: SignUp,
        route: '/signup',
        shouldDisplayBeforeLogin: true
    },
    {
        title: SignIn,
        route:'/signin',
        shouldDisplayBeforeLogin: true
    },
    {
        title: Logout,
        route:'/logout',
        shouldDisplayBeforeLogin: false
    },
]