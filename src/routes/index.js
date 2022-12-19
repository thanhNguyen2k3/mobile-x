import Home from '~/pages/Home';
import Electronic from '~/pages/Electronic';

// Public routes : không cần đăng nhập vẫn vào được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/electronic', component: Electronic },
];

// Public routes : phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
